import { business, navigation, pages } from "../site-data.mjs";

const pageByPath = new Map(pages.map((page) => [page.path, page]));

export function renderSiteContent(page) {
  const isHome = page.path === "/";
  if (!isHome) return renderInnerPage(page);

  const crumbs = renderBreadcrumbs(page);
  const pageSections = page.sections.map((section, index) => renderSection(section, index, isHome)).join("");
  const contactDetails = page.path === "/lien-he/" ? renderContactDetails() : "";
  const headerContent = isHome
    ? `
      <section class="hero-section hero-slider-container" id="hero-slider">
        <div class="hero-image-slider">
          <img src="/hero-slider-1.webp" class="hero-slide-img slide-1 active" alt="Hero 1" />
          <img src="/hero-slider-2.webp" class="hero-slide-img slide-2" alt="Hero 2" />
        </div>
        <button class="slider-nav slider-prev" aria-label="Previous">&lsaquo;</button>
        <button class="slider-nav slider-next" aria-label="Next">&rsaquo;</button>
        <div class="slider-dots">
          <button class="slider-dot active" aria-label="Slide 1" data-index="0"></button>
          <button class="slider-dot" aria-label="Slide 2" data-index="1"></button>
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

  return `${renderHeader(page.path)}
    <main id="noi-dung">
      ${isHome ? "" : crumbs}
      <article>
        ${headerContent}
        <div class="${isHome ? "" : "container"}">
          ${contactDetails}
        </div>
        ${pageSections}
      </article>
    </main>
    ${renderFooter(page.path)}`;
}

function renderInnerPage(page) {
  const pageSections = page.sections.map((section, index) => renderSection(section, index, false)).join("");
  const contactDetails = page.path === "/lien-he/" ? renderContactDetails() : "";
  const isContactPage = page.path === "/lien-he/";
  const ctaHref = isContactPage ? `tel:${business.phoneHref}` : "/lien-he/";
  const ctaLabel = isContactPage ? "Gọi Quỳnh Phát" : "Trao đổi về nhu cầu";

  return `${renderHeader(page.path)}
    <main id="noi-dung" class="inner-page-main">
      <div class="inner-page-breadcrumb-band">${renderBreadcrumbs(page)}</div>
      <header class="inner-page-hero">
        <div class="container inner-page-hero-grid">
          <div class="inner-page-hero-copy">
            <p class="editorial-eyebrow">${getPageEyebrow(page.path)}</p>
            <h1 class="inner-page-title">${escapeHtml(page.title)}</h1>
            <p class="inner-page-lead">${escapeHtml(page.intro ?? "")}</p>
            <a class="inner-page-primary-link" href="${escapeHtml(ctaHref)}">
              ${ctaLabel}<span aria-hidden="true">→</span>
            </a>
          </div>
          ${renderInnerPageAside(page)}
        </div>
      </header>
      <article class="inner-page-article">
        ${contactDetails}
        ${pageSections}
      </article>
      ${renderInnerPageCta(page)}
    </main>
    ${renderFooter(page.path)}`;
}

function getPageEyebrow(path) {
  if (path === "/gioi-thieu/") return "Về Quỳnh Phát";
  if (path.startsWith("/dich-vu/")) return "Dịch vụ kế toán";
  if (path === "/hoa-don-dien-tu/") return "Hóa đơn điện tử";
  if (path.startsWith("/dich-vu-giay-phep-kinh-doanh/")) return "Thủ tục doanh nghiệp";
  if (path === "/kien-thuc/") return "Thư viện kiến thức";
  if (path === "/lien-he/") return "Kết nối trực tuyến";
  if (path === "/chinh-sach-bao-mat/") return "Quyền riêng tư";
  return "Kế toán và thuế";
}

function renderInnerPageAside(page) {
  if (page.path === "/lien-he/") {
    return `<aside class="inner-page-aside">
      <p class="inner-page-aside-label">Bắt đầu trao đổi</p>
      <h2>Chia sẻ nhu cầu trước</h2>
      <p>Bạn có thể nêu loại hình doanh nghiệp, kỳ cần xử lý và tình trạng hồ sơ. Danh mục tài liệu cụ thể sẽ được trao đổi sau khi làm rõ phạm vi hỗ trợ.</p>
    </aside>`;
  }
  if (page.path === "/kien-thuc/") {
    return `<aside class="inner-page-aside">
      <p class="inner-page-aside-label">Cách đọc chuyên mục</p>
      <h2>Kiểm tra nguồn và thời điểm áp dụng</h2>
      <p>Quy định có thể phụ thuộc vào kỳ, đối tượng và hồ sơ cụ thể. Hãy xem nguồn tham khảo đi kèm từng nội dung.</p>
      <a href="/lien-he/" class="inner-page-aside-link">Trao đổi theo hồ sơ <span aria-hidden="true">→</span></a>
    </aside>`;
  }
  if (page.path === "/chinh-sach-bao-mat/") {
    return `<aside class="inner-page-aside">
      <p class="inner-page-aside-label">Quyền riêng tư</p>
      <h2>Thông tin được tiếp nhận theo mục đích trao đổi</h2>
      <p>Chỉ gửi thông tin cần thiết để bắt đầu trao đổi. Hồ sơ nhạy cảm nên được thống nhất kênh tiếp nhận trước.</p>
      <a href="/lien-he/" class="inner-page-aside-link">Liên hệ Quỳnh Phát <span aria-hidden="true">→</span></a>
    </aside>`;
  }

  return `<aside class="inner-page-aside">
    <p class="inner-page-aside-label">Phương thức làm việc</p>
    <h2>Ưu tiên phối hợp trực tuyến</h2>
    <p>Phạm vi công việc và hồ sơ cần thiết được trao đổi theo nhu cầu của từng doanh nghiệp.</p>
    <div class="inner-page-aside-contact">
      <span>Điện thoại</span>
      <a href="tel:${escapeHtml(business.phoneHref)}">${escapeHtml(business.phoneDisplay)}</a>
    </div>
  </aside>`;
}

function renderInnerPageCta(page) {
  if (page.path === "/lien-he/" || page.path === "/chinh-sach-bao-mat/") return "";
  return `<section class="inner-page-cta">
    <div class="container inner-page-cta-inner">
      <div>
        <p class="inner-page-cta-eyebrow">Kế toán Quỳnh Phát</p>
        <h2>Cùng làm rõ nhu cầu hỗ trợ</h2>
        <p>Mỗi doanh nghiệp có hoạt động và hồ sơ riêng. Hãy trao đổi để xác định đầu việc và hình thức phối hợp phù hợp.</p>
      </div>
      <div class="inner-page-cta-actions">
        <a href="/lien-he/" class="inner-page-cta-button">Liên hệ tư vấn <span aria-hidden="true">→</span></a>
        <a href="tel:${escapeHtml(business.phoneHref)}" class="inner-page-cta-phone">${escapeHtml(business.phoneDisplay)}</a>
      </div>
    </div>
  </section>`;
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
                    <div class="process-card-num">0${i + 1}</div>
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
          <div class="container">
            <div class="company-inner">
              <div class="company-image-wrapper">
                <img src="/about-us.jpg" alt="Về Kế toán Quỳnh Phát" class="company-image-real">
              </div>
              <div class="company-info">
                <p class="section-eyebrow">Về chúng tôi</p>
                <h2 class="section-title">${escapeHtml(section.heading)}</h2>
                <p class="section-desc">Kế toán Quỳnh Phát tự hào là đối tác đồng hành tin cậy, cung cấp các giải pháp tài chính - kế toán tối ưu giúp doanh nghiệp an tâm phát triển bền vững.</p>
                
                <div class="company-info-list">
                  ${section.items.map(item => `
                    <div class="company-info-item">
                      <div class="company-info-text">${escapeHtml(item)}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }
    if (index === 3) {
      return `
        <section class="home-section knowledge-faq-section bg-mist">
          <div class="container knowledge-faq-grid">
            <div class="faq-column">
              <header class="editorial-heading">
                <p class="editorial-eyebrow">Câu hỏi thường gặp</p>
                <h2 class="editorial-title">${escapeHtml(section.heading)}</h2>
                <p class="editorial-description">Một số thông tin giúp doanh nghiệp hiểu cách Quỳnh Phát phối hợp trong công việc kế toán và thuế.</p>
              </header>
              <div class="editorial-faq-list">
                ${section.faqs.map((faq, index) => `
                  <details class="editorial-faq-item"${index === 0 ? " open" : ""}>
                    <summary>
                      <span class="faq-index">${String(index + 1).padStart(2, "0")}</span>
                      <span class="faq-q">${escapeHtml(faq.question)}</span>
                      <span class="faq-toggle" aria-hidden="true">+</span>
                    </summary>
                    <div class="editorial-faq-answer"><p>${escapeHtml(faq.answer)}</p></div>
                  </details>
                `).join("")}
              </div>
              <a class="editorial-text-link faq-contact-link" href="/lien-he/">
                Bạn cần trao đổi thêm? <span aria-hidden="true">→</span>
              </a>
            </div>

            <article class="knowledge-feature">
              <a class="knowledge-image-link" href="/kien-thuc/" aria-label="Xem chuyên mục kiến thức kế toán và thuế">
                <img src="/assets/accounting-desk.jpg" alt="Máy tính, bút chì và giấy ghi chú trên bàn làm việc" loading="lazy" width="1400" height="933">
              </a>
              <div class="knowledge-feature-body">
                <p class="editorial-eyebrow">Kiến thức hữu ích</p>
                <h3>Kiến thức kế toán và thuế</h3>
                <p class="knowledge-description">Thông tin về kế toán, thuế, hóa đơn điện tử và hồ sơ doanh nghiệp được trình bày rõ ràng, kèm nguồn tham khảo khi phù hợp.</p>
                <p class="knowledge-topics">Kế toán <span>·</span> Thuế <span>·</span> Hóa đơn điện tử</p>
                <a class="editorial-text-link" href="/kien-thuc/">
                  Khám phá chuyên mục <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </div>
        </section>
      `;
    }
    if (index === 4) {
      return `
        <section class="home-section contact-editorial-section">
          <div class="container">
            <div class="contact-editorial-panel">
              <div class="contact-editorial-copy">
                <p class="editorial-eyebrow">Liên hệ ngay</p>
                <h2 class="contact-editorial-title">Cùng trao đổi nhu cầu kế toán của doanh nghiệp</h2>
                <p class="contact-editorial-description">Chia sẻ nhu cầu tổng quát để Quỳnh Phát trao đổi phạm vi công việc, hồ sơ cần thiết và cách phối hợp phù hợp. Ưu tiên hỗ trợ trực tuyến, linh hoạt theo lịch hẹn.</p>

                <ul class="contact-direct-list" aria-label="Kênh liên hệ trực tiếp">
                  <li>
                    <span class="contact-direct-label">Điện thoại</span>
                    <a href="tel:${escapeHtml(business.phoneHref)}">${escapeHtml(business.phoneDisplay)}</a>
                  </li>
                  <li>
                    <span class="contact-direct-label">Email</span>
                    <a href="mailto:${escapeHtml(business.email)}">${escapeHtml(business.email)}</a>
                  </li>
                </ul>

                <a href="/lien-he/" class="contact-editorial-button">
                  Gửi yêu cầu tư vấn
                  <span aria-hidden="true">→</span>
                </a>

                <div class="contact-checklist">
                  <p>Để bắt đầu, bạn có thể chuẩn bị:</p>
                  <ul>
                    <li><span>01</span>Tên doanh nghiệp</li>
                    <li><span>02</span>Nhu cầu dịch vụ</li>
                    <li><span>03</span>Tình trạng chứng từ hiện tại</li>
                  </ul>
                </div>
              </div>

              <figure class="contact-editorial-media">
                <img src="/assets/online-consultation.jpg" alt="Ảnh minh họa người làm việc tại bàn với laptop trong không gian văn phòng" loading="lazy" width="1400" height="933">
                <figcaption><span aria-hidden="true"></span> Phối hợp trực tuyến, linh hoạt theo nhu cầu</figcaption>
              </figure>
            </div>
          </div>
        </section>
      `;
    }
  }

  return renderEditorialSection(section, index);
}

function renderEditorialSection(section, index) {
  const paragraphs = (section.paragraphs ?? []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  const items = section.items?.length
    ? `<ol class="editorial-point-list${section.items.length >= 4 ? " is-grid" : ""}">${section.items.map((item, itemIndex) => `
        <li><span class="editorial-point-index">${String(itemIndex + 1).padStart(2, "0")}</span><p>${escapeHtml(item)}</p></li>
      `).join("")}</ol>`
    : "";
  const steps = section.steps?.length
    ? `<ol class="editorial-step-list">${section.steps.map((step, stepIndex) => `
        <li><span class="editorial-step-index">${String(stepIndex + 1).padStart(2, "0")}</span><p>${escapeHtml(step)}</p></li>
      `).join("")}</ol>`
    : "";
  const faqs = section.faqs?.length
    ? `<div class="editorial-page-faqs">${section.faqs.map((faq, faqIndex) => `
        <details class="editorial-page-faq"${faqIndex === 0 ? " open" : ""}>
          <summary><span>${escapeHtml(faq.question)}</span><span aria-hidden="true">+</span></summary>
          <div><p>${escapeHtml(faq.answer)}</p></div>
        </details>
      `).join("")}</div>`
    : "";
  const links = section.links?.length
    ? `<nav class="editorial-related-links" aria-label="Nội dung liên quan"><ul>${section.links.map((link) => `
        <li><a href="${escapeHtml(link.path)}"><span>${escapeHtml(link.label)}</span><span aria-hidden="true">→</span></a></li>
      `).join("")}</ul></nav>`
    : "";
  const sources = section.sources?.length
    ? `<div class="editorial-source-list"><p class="editorial-source-heading">Nguồn tham khảo</p><ul>${section.sources.map((source) => `
        <li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)}<span aria-hidden="true">↗</span></a>${source.note ? `<p>${escapeHtml(source.note)}</p>` : ""}</li>
      `).join("")}</ul></div>`
    : "";

  const sectionKind = section.steps?.length ? "has-steps" : section.faqs?.length ? "has-faqs" : section.sources?.length ? "has-sources" : "";
  const tone = index % 2 === 1 ? "tone-mist" : "tone-white";
  return `<section id="muc-${index + 1}" class="editorial-page-section ${tone} ${sectionKind}">
    <div class="container editorial-page-section-grid">
      <header class="editorial-page-section-header">
        <p class="editorial-page-section-index">${String(index + 1).padStart(2, "0")} <span>/</span> ${section.faqs?.length ? "GIẢI ĐÁP" : section.sources?.length ? "THAM KHẢO" : section.steps?.length ? "QUY TRÌNH" : "THÔNG TIN"}</p>
        <h2>${escapeHtml(section.heading)}</h2>
      </header>
      <div class="editorial-page-section-content">
        ${paragraphs}${items}${steps}${faqs}${links}${sources}
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

  const phoneIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;

  return `
    <header class="site-header">
      <div class="header-top">
        <div class="container header-top-inner">
          <a href="/" class="site-logo" aria-label="Trang chủ">
            <img src="/assets/logo.png" alt="Logo Kế toán Quỳnh Phát" class="logo-image">
          </a>
          
          <div class="header-slogan">Tận tâm – Uy tín – Chuyên nghiệp – Chuẩn xác – Minh Bạch – Đồng hành cùng doanh nghiệp phát triển</div>
          
          <div class="header-actions">
            <a href="tel:${business.phoneHref}" class="btn btn-primary btn-sm">${phoneIconSvg} ${business.phoneDisplay}</a>
            <button class="mobile-menu-btn" aria-label="Mở menu" onclick="document.querySelector('.main-nav').classList.toggle('is-open')">
              ${menuIcon}
            </button>
          </div>
        </div>
      </div>
      
      <div class="header-bottom">
        <div class="container">
          <nav aria-label="Điều hướng chính" class="main-nav">
            <ul>${items}</ul>
          </nav>
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
            <img src="/assets/logo.png" alt="Logo Kế toán Quỳnh Phát" class="logo-image" width="1254" height="705">
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
  return `<section class="contact-page-details" aria-labelledby="thong-tin-lien-he">
    <div class="container">
      <div class="contact-page-details-heading">
        <p class="editorial-eyebrow">Kết nối trực tiếp</p>
        <h2 id="thong-tin-lien-he">Thông tin liên hệ</h2>
      </div>
      <ul class="contact-page-channel-grid">
        <li><span>Điện thoại</span><a href="tel:${escapeHtml(business.phoneHref)}">${escapeHtml(business.phoneDisplay)}</a></li>
        <li><span>Email</span><a href="mailto:${escapeHtml(business.email)}">${escapeHtml(business.email)}</a></li>
        <li><span>Hình thức làm việc</span><p>Ưu tiên trực tuyến; gặp trực tiếp theo lịch hẹn.</p></li>
        <li><span>Mã số doanh nghiệp</span><p>${escapeHtml(business.enterpriseCode)}</p></li>
      </ul>
    </div>
  </section>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}
