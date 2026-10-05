# Khung website Quỳnh Phát

## Sitemap đề xuất

```text
/
├── /gioi-thieu/
├── /dich-vu/
│   ├── /dich-vu/ke-toan-tron-goi/
│   ├── /dich-vu/bao-cao-thue/
│   ├── /dich-vu/bao-cao-tai-chinh/
│   └── /dich-vu/quyet-toan-thue/
├── /hoa-don-dien-tu/
├── /dich-vu-giay-phep-kinh-doanh/
│   ├── /dich-vu-giay-phep-kinh-doanh/thanh-lap-doanh-nghiep/
│   └── /dich-vu-giay-phep-kinh-doanh/thay-doi-giay-phep/
├── /kien-thuc/
├── /lien-he/
└── /chinh-sach-bao-mat/
```

## Cấu trúc theo trang

| Trang | Các section chính |
| --- | --- |
| Trang chủ | Giới thiệu ngắn; dịch vụ chính; đối tượng khách hàng; quy trình; năng lực và thông tin pháp lý; câu hỏi thường gặp; bài viết; liên hệ |
| Giới thiệu | Tổng quan doanh nghiệp; dịch vụ và khách hàng; quy trình phối hợp; thông tin pháp lý; liên hệ |
| Dịch vụ kế toán | Tổng quan; danh mục dịch vụ; quy trình tiếp nhận; hồ sơ; câu hỏi thường gặp; tư vấn |
| Trang dịch vụ chi tiết | Phạm vi; đối tượng phù hợp; hồ sơ; quy trình; đầu ra/lưu ý; câu hỏi thường gặp; dịch vụ liên quan |
| Hóa đơn điện tử | Phạm vi hỗ trợ; đối tượng và điều kiện; thông tin cần chuẩn bị; quy trình; câu hỏi; dịch vụ liên quan |
| Giấy phép kinh doanh | Tổng quan; thành lập; thay đổi; hồ sơ và quy trình; câu hỏi; liên hệ |
| Kiến thức | Bài mới; chủ đề; hướng dẫn thủ tục có nguồn/ngày rà soát; lưu ý; liên hệ |
| Liên hệ | Điện thoại/email; phương thức phối hợp trực tuyến; thông tin nên gửi; cách đặt lịch nếu cần gặp trực tiếp |
| Chính sách bảo mật | Dữ liệu thu thập; mục đích và cách xử lý; chia sẻ/bảo vệ; quyền và kênh yêu cầu; hiệu lực/cập nhật |

## Nguyên tắc SEO và kỹ thuật

- Mỗi URL có trang HTML riêng, một H1, title và meta description riêng, breadcrumb và liên kết nội bộ thật; không dùng SPA route hoặc liên kết `/#` giả.
- URL dùng chữ thường, không dấu, có dấu `/` cuối; các trang dịch vụ được nhóm theo chủ đề để mở rộng cụm nội dung.
- Có canonical, Open Graph, JSON-LD `Organization`/`WebSite`, `robots.txt`, `sitemap.xml` và trang 404. Canonical/sitemap chỉ dùng domain được cấu hình.
- Copy cho 14 URL đã được soạn; nội dung dịch vụ vẫn là bản nháp chờ doanh nghiệp xác nhận phạm vi thực tế. Mặc định mọi trang `noindex,nofollow` và `robots.txt` chặn crawl. Bật index chỉ khi domain thật đã cấu hình và tất cả trang đã chuyển sang `contentStatus: "ready"`.
- Không tạo trang bài viết trống. Khi nội dung sẵn sàng, thêm bài thật và metadata/ngày cập nhật riêng.
- Schema dùng `Organization`; nội dung công khai ưu tiên phương thức trực tuyến, không hiển thị địa chỉ đường cụ thể.
- Không đưa dữ liệu cá nhân trong giấy chứng nhận lên trang. Email và điện thoại trên source lấy từ yêu cầu; thông tin liên hệ cần khách hàng duyệt trước khi public.

## Cần xác nhận trước khi ra mắt/index

1. Website giới thiệu Quỳnh Phát ưu tiên làm việc trực tuyến; địa chỉ đường cụ thể và phạm vi phục vụ không hiển thị. Nếu sau này muốn nhận khách tại văn phòng hoặc công bố địa bàn, cập nhật nội dung theo xác nhận của doanh nghiệp.
2. Danh sách dịch vụ thực tế, hồ sơ, quy trình, đầu ra, thời hạn và mức phí.
3. Thông tin chuyên môn/giấy phép/chứng chỉ nào được phép công bố, cùng bằng chứng cho các nhận định về kinh nghiệm hoặc kết quả.
4. Tên miền chính thức; email công khai và điện thoại đã được chủ dự án xác nhận. Email trên giấy đăng ký là kênh làm việc với cơ quan nhà nước; email `dichvuketoanquynhphat@gmail.com` là email làm việc/công khai. Chỉ thêm Zalo hoặc bản đồ nếu doanh nghiệp có kênh chính thức.
5. Nội dung chính sách bảo mật phù hợp với biểu mẫu, analytics và các công cụ sẽ dùng trên site.
