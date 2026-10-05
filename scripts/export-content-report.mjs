import { writeFile } from "node:fs/promises";
import { pages, business, navigation } from "../src/site-data.mjs";

const lines = [
  "# Nội dung website Kế toán Quỳnh Phát",
  "",
  `Bản này được xuất từ nội dung website trong \`src/site-content.mjs\`. Có copy cho ${pages.length} URL, gồm SEO title, meta description, tiêu đề trang, phần giới thiệu, các section, FAQ và liên kết. Danh mục dịch vụ kế toán – thuế được biên tập theo xác nhận của khách; quy trình, phạm vi từng gói, phí và tiến độ cần được chốt theo vận hành thực tế trước khi public. Chuyên mục kiến thức ghi mốc rà soát pháp lý 04/10/2026. Website hiện để \`noindex\`.`,
  "",
  "## Sitemap",
  "",
  ...navigation.map((item) => `- ${item.label}: ${item.path}`),
  "",
  "## Nội dung theo trang",
  "",
];

for (const page of pages) {
  lines.push(
    `# ${page.title}`,
    "",
    `**URL:** ${page.path}`,
    `**SEO title:** ${page.seoTitle}`,
    `**Meta description:** ${page.description}`,
    `**Trạng thái:** ${page.contentStatus}`,
    "",
    `**Giới thiệu:** ${page.intro}`,
    "",
  );

  for (const section of page.sections) {
    lines.push(`## ${section.heading}`, "");
    for (const paragraph of section.paragraphs ?? []) lines.push(paragraph, "");
    for (const item of section.items ?? []) lines.push(`- ${item}`);
    if (section.items?.length) lines.push("");
    for (const [index, step] of (section.steps ?? []).entries()) lines.push(`${index + 1}. ${step}`);
    if (section.steps?.length) lines.push("");
    for (const faq of section.faqs ?? []) lines.push(`**${faq.question}** ${faq.answer}`, "");
    for (const link of section.links ?? []) lines.push(`- [${link.label}](${link.path})`);
    if (section.links?.length) lines.push("");
    for (const source of section.sources ?? []) {
      const note = source.note ? ` — ${source.note}` : "";
      lines.push(`- Nguồn: [${source.label}](${source.url})${note}`);
    }
    if (section.sources?.length) lines.push("");
  }
}

lines.push(
  "## Thông tin pháp nhân và biên tập",
  "",
  `- Tên pháp lý: ${business.legalName}`,
  `- Tên tiếng Anh: ${business.englishName}`,
  `- Tên viết tắt: ${business.shortName}`,
  `- Loại hình: ${business.legalForm}`,
  `- Mã số doanh nghiệp: ${business.enterpriseCode}`,
  `- Điện thoại được cung cấp trong yêu cầu: ${business.phoneDisplay}`,
  `- Email làm việc và email công khai theo xác nhận: ${business.email}. Email trên giấy đăng ký là kênh doanh nghiệp dùng làm việc với cơ quan nhà nước.`,
  "- Website giới thiệu phương thức làm việc trực tuyến và không hiển thị địa chỉ đường cụ thể hoặc tự xác định phạm vi phục vụ.",
  "- Không đưa thông tin cá nhân của chủ sở hữu/người đại diện trong giấy chứng nhận lên website.",
  "- Không suy địa bàn phục vụ từ website tham khảo; tham khảo chỉ dùng để đối chiếu cấu trúc.",
  "- Không khẳng định kinh nghiệm, chứng chỉ, đại lý thuế, kiểm toán, giá, giờ làm việc, bảo đảm kết quả hoặc chính sách bảo mật cụ thể khi chưa có căn cứ.",
  "- Nội dung kiến thức pháp lý được rà soát tại mốc 04/10/2026; cần kiểm tra lại văn bản hiện hành trước khi public và cập nhật theo thay đổi pháp luật.",
  "",
  "## Checklist trước khi public",
  "",
  "1. Doanh nghiệp duyệt phạm vi từng dịch vụ, đối tượng phù hợp, đầu ra, người ký/nộp, quy trình và trách nhiệm trong từng gói.",
  "2. Xác nhận cách đặt lịch và địa điểm nếu doanh nghiệp có nhận gặp trực tiếp; copy hiện ưu tiên làm việc trực tuyến và không nêu địa chỉ đường cụ thể.",
  "3. Bổ sung bằng chứng trước khi công bố nhân sự, chứng chỉ, điều kiện hành nghề, đại lý thuế, kiểm toán, kinh nghiệm, khách hàng, giá hoặc cam kết kết quả.",
  "4. Rà soát chính sách dữ liệu theo máy chủ, log, cookie, analytics, biểu mẫu, dịch vụ bên thứ ba và kênh thực tế.",
  "5. Xác nhận tên miền HTTPS chính thức, rồi mới cấu hình canonical, sitemap, schema và cho phép lập chỉ mục.",
  "6. Kiểm tra lại nội dung pháp lý ngay trước ngày ra mắt; theo dõi mốc chuyển tiếp về dịch vụ kế toán đến hết 28/02/2027.",
  "",
);

await writeFile(new URL("../reports/Nội dung kế toán Quỳnh Phát.md", import.meta.url), `${lines.join("\n")}\n`, "utf8");
console.log(`Exported ${pages.length} pages to reports/Nội dung kế toán Quỳnh Phát.md`);
