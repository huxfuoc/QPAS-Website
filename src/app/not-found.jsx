import { business } from "../site-data.mjs";

export const metadata = {
  title: `Không tìm thấy trang | ${business.brandName}`,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="noi-dung">
      <div className="container">
        <h1>Không tìm thấy trang</h1>
        <p>Đường dẫn này chưa có nội dung.</p>
        <p><a href="/">Về trang chủ</a> · <a href="/lien-he/">Liên hệ</a></p>
      </div>
    </main>
  );
}
