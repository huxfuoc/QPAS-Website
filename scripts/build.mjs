import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { business, navigation, pages } from "../src/site-data.mjs";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = resolve(projectRoot, "dist");
const env = await readBuildEnv();
const siteUrl = normalizeSiteUrl(process.env.PUBLIC_SITE_URL ?? env.PUBLIC_SITE_URL ?? "");
const indexingRequested = (process.env.PUBLIC_ALLOW_INDEXING ?? env.PUBLIC_ALLOW_INDEXING) === "true";
const contentReady = pages.every((page) => page.contentStatus === "ready");
const allowIndexing = Boolean(indexingRequested && siteUrl && contentReady);
const pageByPath = new Map(pages.map((page) => [page.path, page]));

if (indexingRequested && !allowIndexing) {
  const reasons = [
    !siteUrl && "PUBLIC_SITE_URL chưa được cấu hình thành domain thật",
    !contentReady && "vẫn còn trang ở trạng thái draft",
  ].filter(Boolean);
  console.warn(`Chưa bật index: ${reasons.join("; ")}. Các trang sẽ giữ noindex.`);
}

if (outputDir !== resolve(projectRoot, "dist") || !outputDir.startsWith(`${projectRoot}${sep}`)) {
  throw new Error("Refusing to write outside the project dist directory.");
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const page of pages) {
  const relativePath = page.path === "/" ? "index.html" : join(page.path.slice(1), "index.html");
  const filePath = join(outputDir, relativePath);
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, renderPage(page), "utf8");
}

await writeFile(join(outputDir, "robots.txt"), renderRobots(), "utf8");
await writeFile(join(outputDir, "sitemap.xml"), renderSitemap(), "utf8");
await writeFile(join(outputDir, "404.html"), renderNotFound(), "utf8");
await copyPublicFiles();

console.log(`Generated ${pages.length} static pages in dist/. Indexing: ${allowIndexing ? "enabled" : "disabled"}.`);

function renderPage(page) {
  const isHome = page.path === "/";
  const canonical = allowIndexing ? absoluteUrl(page.path) : "";
  const seoTitle = page.seoTitle.toLowerCase().includes("quỳnh phát") || page.seoTitle.toLowerCase().includes("qpas")
    ? page.seoTitle
    : `${page.seoTitle} | ${business.brandName}`;
  const title = escapeHtml(seoTitle);
  const description = escapeHtml(page.description);
  const crumbs = renderBreadcrumbs(page);
  const pageSections = page.sections
    .map((section, idx) => renderSection(section, idx, isHome))
    .join("");
  const contactDetails = page.path === "/lien-he/" ? renderContactDetails() : "";
  const structuredData = canonical ? renderStructuredData(canonical) : "";
  const pageLinks = "";

  const headerContent = isHome 
    ? `
      <section class="hero-section hero-full-bg">
        <div class="hero-bg-image">
          <div class="hero-bg-fade"></div>
        </div>
        <div class="container hero-inner relative z-10">
          <div class="hero-content">
            <h1 class="hero-title">
              Nâng tầm doanh nghiệp với dịch vụ <span class="text-gradient">Kế Toán & Thuế</span>
            </h1>
            <p class="hero-desc">
              ${escapeHtml(page.intro ?? "Đồng hành cùng sự phát triển bền vững của doanh nghiệp thông qua các giải pháp tối ưu, an toàn và bảo mật tuyệt đối.")}
            </p>
            <div class="hero-actions">
              <a href="/lien-he/" class="btn btn-primary btn-glow btn-lg">Nhận tư vấn ngay <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
              <a href="/dich-vu/" class="btn btn-outline-glass btn-lg">Khám phá dịch vụ</a>
            </div>
          </div>
        </div>
      </section>
    `
    : `
      <header class="page-heading">
        <div class="container-site">
          <h1>${escapeHtml(page.title)}</h1>
          <p>${escapeHtml(page.intro ?? "")}</p>
        </div>
      </header>
    `;

  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="robots" content="${allowIndexing ? "index,follow" : "noindex,nofollow"}">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${escapeHtml(business.brandName)}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    ${canonical ? `<link rel="canonical" href="${escapeHtml(canonical)}">\n    <meta property="og:url" content="${escapeHtml(canonical)}">` : ""}
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/structure.css?v=${Date.now()}">
    ${structuredData}
  </head>
  <body>
    ${renderHeader(page.path)}
    <main id="noi-dung">
      ${isHome ? "" : crumbs}
      <article>
        ${headerContent}
        <div class="${isHome ? '' : 'container'}">
          ${contactDetails}
        </div>
        ${pageSections}
      </article>
    </main>
    ${renderFooter(page.path)}
  </body>
</html>
`;
}

function renderSection(section, index, isHome) {
  if (isHome) {
    if (index === 0) {
      return `
        <section class="home-section services-section">
          <div class="container">
            <div class="services-header text-center">
              <p class="section-eyebrow">Dịch vụ của chúng tôi</p>
              <h2 class="section-title">${escapeHtml(section.heading)}</h2>
              <p class="section-desc mx-auto">Kế toán Quỳnh Phát cung cấp các dịch vụ kế toán, thuế và hỗ trợ hồ sơ doanh nghiệp phù hợp với nhu cầu thực tế, đồng hành cùng doanh nghiệp trong suốt quá trình hoạt động.</p>
            </div>
            <div class="service-cards-grid">
              ${section.links.map(link => {
                const details = {
                  "/dich-vu/ke-toan-tron-goi/": { desc: "Giải pháp quản lý sổ sách, chứng từ và báo cáo định kỳ trọn gói, giúp tối ưu chi phí vận hành.", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>' },
                  "/dich-vu/bao-cao-thue/": { desc: "Thực hiện các nghiệp vụ kê khai, báo cáo thuế chính xác, đúng hạn theo quy định pháp luật.", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"/><polyline points="14 2 14 8 20 8"/><path d="M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29"/><path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z"/></svg>' },
                  "/dich-vu/bao-cao-tai-chinh/": { desc: "Lập báo cáo tài chính minh bạch, rõ ràng, phản ánh đúng bức tranh kinh doanh cuối năm.", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect width="4" height="7" x="7" y="10" rx="1"/><rect width="4" height="12" x="15" y="5" rx="1"/></svg>' },
                  "/dich-vu/quyet-toan-thue/": { desc: "Hỗ trợ chuẩn bị hồ sơ, số liệu và đại diện giải trình với cơ quan thuế chuyên nghiệp.", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>' },
                  "/hoa-don-dien-tu/": { desc: "Khởi tạo, phát hành và quản lý hóa đơn điện tử an toàn, tuân thủ đúng nghị định pháp luật.", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M14 8H8"/><path d="M16 12H8"/><path d="M13 16H8"/></svg>' },
                  "/dich-vu-giay-phep-kinh-doanh/": { desc: "Dịch vụ tư vấn xin cấp, thay đổi giấy phép đăng ký kinh doanh nhanh chóng, trọn gói.", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>' }
                };
                const detail = details[link.path] || { desc: "Dịch vụ chuyên nghiệp, tận tâm và uy tín.", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>' };
                return `
                <div class="service-card-item">
                  <div class="service-card-icon-wrapper">
                    ${detail.icon}
                  </div>
                  <h3 class="service-card-title">${escapeHtml(link.label)}</h3>
                  <p class="service-card-desc">${escapeHtml(detail.desc)}</p>
                  <a href="${escapeHtml(link.path)}" class="service-link-modern">
                    Tìm hiểu thêm <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                </div>
              `}).join('')}
            </div>
          </div>
        </section>
      `;
    }
    if (index === 1) {
      const customSteps = [
        {
          title: "Tiếp nhận thông tin",
          desc: "Lắng nghe, thấu hiểu nhu cầu thực tế của doanh nghiệp để tư vấn các giải pháp kế toán - thuế tối ưu và an toàn nhất.",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>'
        },
        {
          title: "Rà soát & Đánh giá",
          desc: "Chuyên viên tiến hành kiểm tra kỹ lưỡng hồ sơ, chứng từ và số liệu hiện tại, đảm bảo tuân thủ chặt chẽ theo quy định pháp luật hiện hành.",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>'
        },
        {
          title: "Tiến hành xử lý",
          desc: "Thực hiện các nghiệp vụ kế toán chuyên sâu một cách chuẩn hóa, minh bạch. Luôn cập nhật tiến độ liên tục để khách hàng dễ dàng theo dõi.",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 Z"></path></svg>'
        },
        {
          title: "Bàn giao & Lưu trữ",
          desc: "Hoàn trả đầy đủ hồ sơ, báo cáo hoàn chỉnh. Đảm bảo 100% khách hàng hài lòng về chất lượng dịch vụ mà Quỳnh Phát mang lại.",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M3 15h6"></path><path d="M6 12l3 3-3 3"></path></svg>'
        }
      ];

      return `
        <section class="home-section process-section bg-mist">
          <div class="container relative z-10">
            <div class="process-header text-center mb-12">
              <p class="section-eyebrow">Quy trình làm việc</p>
              <h2 class="section-title">${escapeHtml(section.heading)}</h2>
              <p class="section-desc mx-auto">Quy trình được chuẩn hoá từng bước rõ ràng, giúp doanh nghiệp an tâm theo dõi tiến độ và đánh giá hiệu quả công việc.</p>
            </div>
            
            <div class="process-card-list">
              ${customSteps.map((step, i) => `
                <div class="process-card-item">
                  <div class="process-card-left">
                    <div class="process-card-num">0${i+1}</div>
                    <div class="process-card-icon">
                      ${step.icon}
                    </div>
                  </div>
                  <div class="process-card-content">
                    <h3 class="process-card-title">${escapeHtml(step.title)}</h3>
                    <p class="process-card-desc">${escapeHtml(step.desc)}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    }
    if (index === 2) {
      return `
        <section class="home-section company-section">
          <div class="container company-inner">
            <div class="company-image">
              <div class="company-image-placeholder">Kế toán Quỳnh Phát</div>
            </div>
            <div class="company-info">
              <p class="section-eyebrow">Về chúng tôi</p>
              <h2 class="section-title">${escapeHtml(section.heading)}</h2>
              <div class="company-card">
                ${section.items.map(item => `<div class="company-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> <span>${escapeHtml(item)}</span></div>`).join('')}
              </div>
            </div>
          </div>
        </section>
      `;
    }
    if (index === 3) {
      return `
        <section class="home-section faq-section bg-mist">
          <div class="container faq-inner">
            <div class="faq-header">
              <div class="faq-title-group">
                <p class="section-eyebrow">Câu hỏi thường gặp</p>
                <h2 class="section-title">${escapeHtml(section.heading)}</h2>
              </div>
              <p class="faq-desc">Một số câu hỏi phổ biến được tổng hợp để giúp doanh nghiệp hiểu rõ hơn về dịch vụ của Kế toán Quỳnh Phát.</p>
            </div>
            <div class="faq-list">
              ${section.faqs.map(faq => `
                <details class="faq-item">
                  <summary><span class="faq-icon">?</span> <span class="faq-q">${escapeHtml(faq.question)}</span> <svg class="faq-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></summary>
                  <div class="faq-answer"><p>${escapeHtml(faq.answer)}</p></div>
                </details>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    }
    if (index === 4) {
      return `
        <section class="home-section cta-section">
          <div class="container cta-grid">
            <div class="cta-card cta-green">
              <p class="section-eyebrow">Kiến thức hữu ích</p>
              <h3>Kiến thức kế toán và thuế</h3>
              <p>Cập nhật các bài viết về kế toán, thuế và quy định pháp luật liên quan, được rà soát theo thời gian và dựa trên nguồn văn bản chính thức.</p>
              <a href="/kien-thuc/" class="btn btn-primary btn-sm">Xem bài viết &rarr;</a>
            </div>
            <div class="cta-card cta-blue">
              <p class="section-eyebrow">Liên hệ ngay</p>
              <h3>Liên hệ Quỳnh Phát</h3>
              <p>Doanh nghiệp có nhu cầu tư vấn, vui lòng gửi thông tin để được hỗ trợ nhanh chóng.</p>
              <a href="/lien-he/" class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22 11 13 2 9 22 2z"></path></svg> Gửi yêu cầu tư vấn &rarr;</a>
              <div class="cta-blue-list">
                <p>Thông tin nên gửi bao gồm:</p>
                <ul>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Tên doanh nghiệp</li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Nhu cầu dịch vụ</li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Tình trạng chứng từ hiện tại</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      `;
    }
  }

  // Fallback for inner pages
  const paragraphs = (section.paragraphs ?? []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n");
  const list = section.items?.length
    ? `<ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
    : "";
  const steps = section.steps?.length
    ? `<ol>${section.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`
    : "";
  const faqs = section.faqs?.length
    ? `<div class="faq-list">${section.faqs.map((faq) => `<article><h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p></article>`).join("\n")}</div>`
    : "";
  const links = section.links?.length
    ? `<ul>${section.links.map((link) => `<li><a href="${escapeHtml(link.path)}">${escapeHtml(link.label)}</a></li>`).join("")}</ul>`
    : "";
  const sources = section.sources?.length
    ? `<div class="reference-sources"><h3>Nguồn tham khảo</h3><ul>${section.sources.map((source) => `<li><a href="${escapeHtml(source.url)}">${escapeHtml(source.label)}</a>${source.note ? ` — ${escapeHtml(source.note)}` : ""}</li>`).join("")}</ul></div>`
    : "";
  
  return `
      <section id="muc-${index + 1}" class="page-section">
        <div class="container">
          <h2 class="section-title">${escapeHtml(section.heading)}</h2>
          <div class="section-content">
            ${paragraphs}${list}${steps}${faqs}${links}${sources}
          </div>
        </div>
      </section>`;
}


function renderHeader(currentPath) {
  const chevronDown = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
  const btnIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`;
  const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;

  const items = navigation.map((item) => {
    const isCurrent = currentPath === item.path;
    const currentAttr = isCurrent ? ' aria-current="page"' : "";
    if (!item.children?.length) {
      return `<li><a href="${item.path}" class="nav-link"${currentAttr}>${escapeHtml(item.label)}</a></li>`;
    }
    const hasCurrentChild = item.children.some(c => currentPath === c.path || currentPath.startsWith(c.path));
    const dataCurrent = hasCurrentChild ? ' data-current="true"' : "";
    const children = `<ul class="dropdown">\n${item.children.map((child) => `<li><a href="${child.path}" class="dropdown-link">${escapeHtml(child.label)}</a></li>`).join("\n")}\n</ul>`;
    return `<li class="has-dropdown"><a href="${item.path}" class="nav-link"${dataCurrent}>${escapeHtml(item.label)} ${chevronDown}</a>${children}</li>`;
  }).join("\n");

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="/" class="site-logo" aria-label="Trang chủ">
          <img src="/assets/logo.webp" alt="Logo Kế toán Quỳnh Phát" class="logo-image">
        </a>
        <nav aria-label="Điều hướng chính" class="main-nav">
          <ul>${items}</ul>
        </nav>
        <div class="header-actions">
          <a href="/lien-he/" class="btn btn-primary btn-sm">${btnIcon} Nhận tư vấn</a>
          <button class="mobile-menu-btn" aria-label="Mở menu" onclick="document.querySelector('.main-nav').classList.toggle('is-open')">
            ${menuIcon}
          </button>
        </div>
      </div>
    </header>`;
}

function renderFooter(currentPath) {
  const phoneIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
  const mailIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
  const pinIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

  return `
    <footer class="site-footer mt-auto">
      <div class="container footer-grid">
        <div class="footer-brand-col">
          <a href="/" class="site-logo footer-logo">
            <img src="/assets/logo.webp" alt="Logo Kế toán Quỳnh Phát" class="logo-image">
          </a>
          <p class="footer-about">Đồng hành cùng doanh nghiệp trong công tác kế toán, thuế và hồ sơ vận hành.</p>
        </div>
        
        <div class="footer-nav-col">
          <p class="footer-heading">Liên kết nhanh</p>
          <ul>
            <li><a href="/gioi-thieu/">Giới thiệu</a></li>
            <li><a href="/dich-vu/">Dịch vụ</a></li>
            <li><a href="/hoa-don-dien-tu/">Hóa đơn điện tử</a></li>
            <li><a href="/kien-thuc/">Kiến thức</a></li>
            <li><a href="/lien-he/">Liên hệ</a></li>
          </ul>
        </div>

        <div class="footer-nav-col">
          <p class="footer-heading">Thông tin liên hệ</p>
          <ul>
            <li class="contact-item"><span class="icon">${phoneIcon}</span> ${escapeHtml(business.phoneDisplay)}</li>
            <li class="contact-item"><span class="icon">${mailIcon}</span> ${escapeHtml(business.email)}</li>
            <li class="contact-item"><span class="icon">${pinIcon}</span> ${escapeHtml(business.registeredAddress)}</li>
          </ul>
        </div>
        
        <div class="footer-nav-col">
          <p class="footer-heading">Chính sách</p>
          <ul>
            <li><a href="/chinh-sach-bao-mat/">Chính sách bảo vệ dữ liệu cá nhân</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <p>© ${new Date().getFullYear()} Kế toán Quỳnh Phát. Tất cả quyền được bảo lưu.</p>
          <p>Thiết kế với <span class="text-red">♥</span> sự phát triển bền vững của doanh nghiệp Việt.</p>
        </div>
      </div>
    </footer>`;
}

function renderBreadcrumbs(page) {
  if (page.path === "/") return "";
  const segments = page.path.split("/").filter(Boolean);
  const items = [{ label: "Trang chủ", path: "/" }];
  let path = "";
  for (const segment of segments.slice(0, -1)) {
    path += `/${segment}/`;
    const parentPage = pageByPath.get(path);
    if (parentPage) items.push({ label: parentPage.title, path });
  }
  items.push({ label: page.title, path: page.path });
  return `<div class="container-site"><nav class="breadcrumbs" aria-label="Đường dẫn"><ol>${items.map((item, index) => {
    const isCurrent = index === items.length - 1;
    return `<li>${isCurrent ? `<span aria-current="page">${escapeHtml(item.label)}</span>` : `<a href="${item.path}">${escapeHtml(item.label)}</a>`}</li>`;
  }).join("")}</ol></nav></div>`;
}

function renderHomeServiceLinks() {
  const servicePaths = [
    "/dich-vu/",
    "/dich-vu/ke-toan-tron-goi/",
    "/dich-vu/bao-cao-thue/",
    "/dich-vu/bao-cao-tai-chinh/",
    "/dich-vu/quyet-toan-thue/",
    "/hoa-don-dien-tu/",
    "/dich-vu-giay-phep-kinh-doanh/",
  ];
  return `<nav class="home-services" aria-label="Các trang dịch vụ"><ul>${servicePaths.map((path) => {
    const page = pageByPath.get(path);
    return `<li><a href="${path}">${escapeHtml(page.title)}</a></li>`;
  }).join("")}</ul></nav>`;
}

function renderContactDetails() {
  return `<section aria-labelledby="thong-tin-lien-he">
    <h2 id="thong-tin-lien-he">Thông tin liên hệ</h2>
    <ul>
      <li>Điện thoại: <a href="tel:${business.phoneHref}">${escapeHtml(business.phoneDisplay)}</a></li>
      <li>Email: <a href="mailto:${escapeHtml(business.email)}">${escapeHtml(business.email)}</a></li>
      <li>Hình thức làm việc: Ưu tiên trực tuyến; gặp trực tiếp theo lịch hẹn.</li>
      <li>Mã số doanh nghiệp: ${escapeHtml(business.enterpriseCode)}</li>
    </ul>
  </section>`;
}

function renderStructuredData(canonical) {
  const origin = new URL(canonical).origin;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${origin}/#organization`,
        name: business.brandName,
        legalName: business.legalName,
        url: origin,
        email: business.email,
        telephone: business.phoneHref,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: business.phoneHref,
          email: business.email,
          availableLanguage: "Vietnamese",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: business.brandName,
        inLanguage: business.language,
        publisher: { "@id": `${origin}/#organization` },
      },
    ],
  };
  return `<script type="application/ld+json">${JSON.stringify(graph).replaceAll("<", "\\u003c")}</script>`;
}

function renderRobots() {
  if (!allowIndexing) return "User-agent: *\nDisallow: /\n";
  return `User-agent: *\nAllow: /\nSitemap: ${new URL("/sitemap.xml", siteUrl).href}\n`;
}

function renderSitemap() {
  const entries = allowIndexing
    ? pages.map((page) => `  <url><loc>${escapeXml(absoluteUrl(page.path))}</loc></url>`).join("\n")
    : "";
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

function renderNotFound() {
  return `<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Không tìm thấy trang | ${escapeHtml(business.brandName)}</title><link rel="stylesheet" href="/assets/structure.css"></head><body><main><h1>Không tìm thấy trang</h1><p>Đường dẫn này chưa có nội dung.</p><p><a href="/">Về trang chủ</a> · <a href="/lien-he/">Liên hệ</a></p></main></body></html>`;
}

function absoluteUrl(path) {
  return siteUrl ? new URL(path, siteUrl).href : "";
}

function normalizeSiteUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname.endsWith(".invalid") || url.hostname === "example.com") return "";
    return url.origin;
  } catch {
    return "";
  }
}

async function readBuildEnv() {
  try {
    const contents = await readFile(join(projectRoot, ".env"), "utf8");
    const values = {};
    for (const line of contents.split(/\r?\n/)) {
      const match = line.match(/^\s*(PUBLIC_SITE_URL|PUBLIC_ALLOW_INDEXING)\s*=\s*(.*?)\s*$/);
      if (match) values[match[1]] = match[2].replace(/^(['"])(.*)\1$/, "$2");
    }
    return values;
  } catch (error) {
    if (error.code === "ENOENT") return {};
    throw error;
  }
}

async function copyPublicFiles() {
  const publicDir = join(projectRoot, "public");
  await mkdir(join(outputDir, "assets"), { recursive: true });
  await writeFile(join(outputDir, "favicon.svg"), await readFile(join(publicDir, "favicon.svg")));
  await writeFile(join(outputDir, "assets", "structure.css"), await readFile(join(publicDir, "structure.css")));
  await writeFile(join(outputDir, "assets", "logo.webp"), await readFile(join(publicDir, "logo.webp")));
  await writeFile(join(outputDir, "assets", "hero-bg.webp"), await readFile(join(publicDir, "hero-bg.webp")));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
  })[character]);
}
