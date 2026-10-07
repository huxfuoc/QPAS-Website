import { siteContent } from "./site-content.mjs";

export const business = {
  brandName: "Kế toán Quỳnh Phát",
  legalName: "Công ty TNHH Dịch vụ Kế toán Quỳnh Phát",
  englishName: "Quynh Phat Accounting Services Company Limited",
  shortName: "QPAS CO., LTD",
  legalForm: "Công ty trách nhiệm hữu hạn một thành viên",
  enterpriseCode: "0319725610",
  registeredOn: "28/09/2026",
  registeredAddress: "232/29 Ngô Quyền, Phường Diên Hồng, Thành phố Hồ Chí Minh, Việt Nam",
  email: "dichvuketoanquynhphat@gmail.com",
  phoneDisplay: "039 3276052",
  phoneHref: "+84393276052",
  language: "vi-VN",
};

export const navigation = [
  { label: "Trang chủ", path: "/" },
  { label: "Giới thiệu", path: "/gioi-thieu/" },
  {
    label: "Dịch vụ kế toán",
    path: "/dich-vu/",
    children: [
      { label: "Kế toán trọn gói", path: "/dich-vu/ke-toan-tron-goi/" },
      { label: "Báo cáo thuế", path: "/dich-vu/bao-cao-thue/" },
      { label: "Báo cáo tài chính", path: "/dich-vu/bao-cao-tai-chinh/" },
      { label: "Quyết toán thuế", path: "/dich-vu/quyet-toan-thue/" },
    ],
  },
  { label: "Hóa đơn điện tử", path: "/hoa-don-dien-tu/" },
  {
    label: "Giấy phép kinh doanh",
    path: "/dich-vu-giay-phep-kinh-doanh/",
    children: [
      { label: "Thành lập doanh nghiệp", path: "/dich-vu-giay-phep-kinh-doanh/thanh-lap-doanh-nghiep/" },
      { label: "Thay đổi giấy phép", path: "/dich-vu-giay-phep-kinh-doanh/thay-doi-giay-phep/" },
    ],
  },
  { label: "Kiến thức", path: "/kien-thuc/" },
  { label: "Liên hệ", path: "/lien-he/" },
];

const routePaths = [
  "/",
  "/gioi-thieu/",
  "/dich-vu/",
  "/dich-vu/ke-toan-tron-goi/",
  "/dich-vu/bao-cao-thue/",
  "/dich-vu/bao-cao-tai-chinh/",
  "/dich-vu/quyet-toan-thue/",
  "/hoa-don-dien-tu/",
  "/dich-vu-giay-phep-kinh-doanh/",
  "/dich-vu-giay-phep-kinh-doanh/thanh-lap-doanh-nghiep/",
  "/dich-vu-giay-phep-kinh-doanh/thay-doi-giay-phep/",
  "/kien-thuc/",
  "/lien-he/",
  "/chinh-sach-bao-mat/",
];

export const pages = routePaths.map((path) => {
  const content = siteContent[path];
  if (!content) throw new Error(`Missing site content for route: ${path}`);
  if (!content.title || !content.seoTitle || !content.description || !content.intro || !content.sections?.length) {
    throw new Error(`Incomplete site content for route: ${path}`);
  }
  return { path, ...content, contentStatus: "draft" };
});

