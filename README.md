# Website Kế toán Quỳnh Phát

Website nhiều trang dùng Next.js App Router. Cả 14 trang được dựng sẵn thành HTML khi build và có thể deploy trực tiếp lên Vercel. Giao diện đã chỉnh được giữ lại bằng CSS, ảnh, class và markup hiện có.

## Chạy tại máy

Yêu cầu Node.js 20.9 trở lên.

```sh
npm run build
npm run dev
npm run content-report
```

Mở địa chỉ localhost mà lệnh dev in ra. Khi build hoàn tất, chạy `npm run start` để xem bản production. Route, điều hướng và hồ sơ thương hiệu nằm trong `src/site-data.mjs`; copy các trang nằm trong `src/site-content.mjs`; `npm run content-report` xuất nội dung vào `reports/Nội dung kế toán Quỳnh Phát.md`.

Các trang dùng route bắt được trong `src/app/[[...slug]]/page.jsx`; HTML section, header và footer được chuyển nguyên trạng từ bộ dựng cũ sang `src/lib/site-renderer.mjs`. Metadata trang được tạo từ cùng dữ liệu để giữ title, description, canonical, robots và Open Graph đồng bộ.

`npm run build:legacy` và `npm run preview:legacy` vẫn giữ bộ dựng HTML cũ để tạo bản so sánh trong `dist/` khi cần.

## Cấu hình domain và index

Sao chép `.env.example` thành `.env`, điền domain HTTPS đã xác nhận. Build hiện giữ `noindex` vì các trang vẫn ở trạng thái `draft`. Sau khi doanh nghiệp duyệt copy và xác nhận các dữ kiện vận hành, đổi `contentStatus` của trang thành `ready`; chỉ khi mọi trang đều sẵn sàng và `PUBLIC_ALLOW_INDEXING=true`, build mới tạo canonical, JSON-LD, sitemap URL và cho phép crawl.

```dotenv
PUBLIC_SITE_URL=https://ten-mien-chinh-thuc.vn
PUBLIC_ALLOW_INDEXING=false
```

Build sẽ cố ý bỏ qua domain mẫu `example.com` và hậu tố `.invalid`. Trước khi public, xác nhận nội dung, địa chỉ/khu vực phục vụ, thông tin liên hệ và chính sách bảo mật với doanh nghiệp.

## Cấu trúc source

- `src/site-data.mjs`: hồ sơ pháp nhân đã xác nhận, điều hướng và danh sách route.
- `src/site-content.mjs`: title, mô tả SEO, intro, section, FAQ và liên kết nguồn cho 14 trang.
- `src/app/[[...slug]]/page.jsx`: tạo route và metadata SEO cho 14 trang.
- `src/lib/site-renderer.mjs`: giữ markup header, footer, section của giao diện hiện tại.
- `public/structure.css` và `public/assets/`: stylesheet cùng ảnh/logo đang dùng.
- `scripts/build.mjs` và `scripts/serve.mjs`: bộ dựng và preview HTML cũ để đối chiếu khi cần.
- `scripts/export-content-report.mjs`: xuất bản thảo copy và checklist để rà soát.
- `next.config.mjs`: cấu hình Next.js cho route và build.
- `SITE_STRUCTURE.md`: sitemap và checklist trước khi ra mắt.
