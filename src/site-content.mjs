const sources = {
  taxManagement: {
    label: "Luật Quản lý thuế 108/2025/QH15",
    url: "https://vanban.chinhphu.vn/?docid=216541&orggroupid=1&pageid=27160",
    note: "Có hiệu lực từ 01/07/2026; Điều 6 và Điều 37.",
  },
  accountingLaw: {
    label: "Luật Kế toán 88/2015/QH13",
    url: "https://vanban.chinhphu.vn/default.aspx?docid=183198&pageid=27160",
    note: "Luật Kế toán; cần đọc cùng các sửa đổi đang có hiệu lực.",
  },
  accountingCertificate: {
    label: "CSDL văn bản Bộ Tài chính — Luật Kế toán",
    url: "https://vbpl.vn/botaichinh/Pages/vbpq-toanvan.aspx?ItemID=95924",
  },
  accountingTransition: {
    label: "Nghị quyết 66.18/2026/NQ-CP",
    url: "https://vanban.chinhphu.vn/?classid=1&docid=218181&orggroupid=2&pageid=27160",
    note: "Giai đoạn áp dụng theo nguồn rà soát đến 04/10/2026.",
  },
  accountingGuidance: {
    label: "Hướng dẫn Bộ Tài chính về Nghị quyết 66.17 và 66.18",
    url: "https://www.mof.gov.vn/bo-tai-chinh/thong-bao-chi-dao-dieu-hanh/bo-tai-chinh-thong-bao-ve-viec-huong-dan-viec-to-chuc-trien-khai-thi-hanh-nghi-quyet-so-66172026nq-cp-va-nghi-quyet-so-66182026nq-cp-cua-chinh-phu-lien-quan-den-dich-vu-ke-toan",
  },
  financialStatements: {
    label: "Thông tư 99/2025/TT-BTC",
    url: "https://congbao.chinhphu.vn/van-ban/thong-tu-so-99-2025-tt-btc-46529/59655.htm",
    note: "Áp dụng cho năm tài chính bắt đầu từ hoặc sau 01/01/2026.",
  },
  financialYear: {
    label: "Giải đáp của Bộ Tài chính về năm tài chính và Thông tư 99",
    url: "https://portal.mof.gov.vn/hoidapcstc/home/cthoidap/159102",
  },
  smesAccounting: {
    label: "Thông tư 133/2016/TT-BTC",
    url: "https://congbao.chinhphu.vn/van-ban/thong-tu-so-133-2016-tt-btc-21048/15522.htm",
  },
  eInvoiceDecree: {
    label: "Nghị định 254/2026/NĐ-CP",
    url: "https://vanban.chinhphu.vn/?docid=218689&pageid=27160",
    note: "Khung hóa đơn điện tử mới có hiệu lực từ 01/07/2026.",
  },
  eInvoiceCircular: {
    label: "Thông tư 91/2026/TT-BTC",
    url: "https://vanban.chinhphu.vn/?docid=219006&pageid=27160",
    note: "Có hiệu lực từ 01/07/2026.",
  },
  businessLaw: {
    label: "Luật 76/2025/QH15",
    url: "https://vanban.chinhphu.vn/?classid=1&docid=214562&pageid=27160",
  },
  businessRegistration: {
    label: "Nghị định 168/2025/NĐ-CP về đăng ký doanh nghiệp",
    url: "https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-dinh-168-2025-nd-cp-ve-dang-ky-doanh-nghiep-119250702175708554.htm",
  },
  businessRegistrationGuide: {
    label: "Cổng thông tin quốc gia về đăng ký doanh nghiệp",
    url: "https://dangkykinhdoanh.gov.vn/vn/Pages/Noidunghuongdan.aspx?htID=23",
  },
  businessChangeGuide: {
    label: "Hướng dẫn đăng ký thay đổi doanh nghiệp",
    url: "https://dangkykinhdoanh.gov.vn/vn/Pages/Noidunghuongdan.aspx?htID=19",
  },
  decree296: {
    label: "Nghị định 296/2026/NĐ-CP",
    url: "https://chinhphu.vn/?classid=1&docid=218986&orggroupid=2&pageid=27160",
    note: "Sửa đổi quy định đăng ký doanh nghiệp, có hiệu lực từ 23/07/2026.",
  },
  personalDataLaw: {
    label: "Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15",
    url: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2025/7/91qh.signed.pdf",
    note: "Có hiệu lực từ 01/01/2026.",
  },
  personalDataDecree: {
    label: "Nghị định 356/2025/NĐ-CP",
    url: "https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160",
    note: "Có hiệu lực từ 01/01/2026.",
  },
};

export const siteContent = {
  "/": {
    title: "Kế toán chuyên nghiệp, đồng hành cùng doanh nghiệp",
    seoTitle: "Dịch vụ kế toán và thuế trực tuyến | Quỳnh Phát",
    description: "Kế toán trọn gói, kê khai thuế, báo cáo tài chính, quyết toán thuế và hóa đơn điện tử. Quỳnh Phát đồng hành trực tuyến cùng doanh nghiệp.",
    intro: "Kế toán Quỳnh Phát đồng hành cùng doanh nghiệp trong công tác kế toán, thuế và hồ sơ vận hành. Với phương thức phối hợp trực tuyến linh hoạt, doanh nghiệp thuận tiện trao đổi chứng từ, theo dõi đầu việc và nhận hỗ trợ theo nhu cầu thực tế.",
    sections: [
      {
        heading: "Giải pháp kế toán toàn diện cho doanh nghiệp",
        items: [
          "Kế toán trọn gói: tổ chức chứng từ, theo dõi sổ sách và phối hợp các công việc kế toán định kỳ theo tình hình doanh nghiệp.",
          "Báo cáo thuế và quyết toán thuế: chuẩn bị hồ sơ theo kỳ, rà soát dữ liệu và hỗ trợ doanh nghiệp hoàn thiện nghĩa vụ kê khai.",
          "Báo cáo tài chính: tổng hợp số liệu, đối chiếu các khoản mục và lập báo cáo theo chế độ kế toán áp dụng.",
          "Hóa đơn điện tử: hỗ trợ quy trình sử dụng, phát hành, lưu trữ và xử lý tình huống phát sinh.",
          "Thủ tục doanh nghiệp: hỗ trợ hồ sơ thành lập, thay đổi thông tin đăng ký và các đầu việc liên quan.",
        ],
        links: [
          { label: "Kế toán trọn gói", path: "/dich-vu/ke-toan-tron-goi/" },
          { label: "Báo cáo thuế", path: "/dich-vu/bao-cao-thue/" },
          { label: "Báo cáo tài chính", path: "/dich-vu/bao-cao-tai-chinh/" },
          { label: "Quyết toán thuế", path: "/dich-vu/quyet-toan-thue/" },
          { label: "Hóa đơn điện tử", path: "/hoa-don-dien-tu/" },
          { label: "Thủ tục doanh nghiệp", path: "/dich-vu-giay-phep-kinh-doanh/" },
        ],
      },
      {
        heading: "Quy trình phối hợp trực tuyến",
        steps: [
          "Tiếp nhận thông tin về doanh nghiệp và nhu cầu cần hỗ trợ.",
          "Rà soát hồ sơ, dữ liệu và kỳ kế toán liên quan.",
          "Thống nhất phạm vi, đầu ra, trách nhiệm phối hợp, chi phí và tiến độ.",
          "Triển khai công việc, cập nhật tình trạng và bàn giao theo thỏa thuận.",
        ],
        paragraphs: ["Hãy nêu thông tin cần thiết để trao đổi ban đầu. Chưa cần gửi mật khẩu, mã xác thực hoặc toàn bộ hồ sơ nhạy cảm qua email thông thường."],
      },
      {
        heading: "Thông tin pháp nhân",
        items: [
          "Công ty TNHH Dịch vụ Kế toán Quỳnh Phát",
          "Tên tiếng Anh: QUYNH PHAT ACCOUNTING SERVICES COMPANY LIMITED",
          "Tên viết tắt: QPAS CO., LTD",
          "Loại hình: Công ty trách nhiệm hữu hạn một thành viên",
          "Mã số doanh nghiệp: 0319725610",
        ],
        paragraphs: ["Thông tin trên là dữ liệu đăng ký pháp nhân. Phạm vi từng công việc, người phụ trách và đầu ra được trao đổi riêng theo nhu cầu và thỏa thuận."],
      },
      {
        heading: "Giải đáp nhanh",
        faqs: [
          { question: "Quỳnh Phát hỗ trợ những dịch vụ nào?", answer: "Quỳnh Phát cung cấp các dịch vụ kế toán, thuế, báo cáo tài chính, hóa đơn điện tử và hồ sơ doanh nghiệp. Phạm vi cụ thể được thiết kế theo hoạt động và nhu cầu của từng đơn vị." },
          { question: "Thuê dịch vụ có chuyển hết trách nhiệm thuế không?", answer: "Không. Người nộp thuế vẫn có trách nhiệm riêng theo quy định. Luật Quản lý thuế 108/2025/QH15 có hiệu lực từ 01/07/2026 quy định nguyên tắc người nộp thuế tự xác định nghĩa vụ, kê khai và nộp thuế." },
          { question: "Quỳnh Phát có làm việc trực tuyến không?", answer: "Có. Quỳnh Phát ưu tiên phối hợp trực tuyến; trường hợp cần gặp trực tiếp sẽ được sắp xếp theo lịch hẹn." },
        ],
        sources: [sources.taxManagement],
      },
      {
        heading: "Kiến thức và liên hệ",
        paragraphs: ["Chuyên mục kiến thức cung cấp thông tin có ngày rà soát và nguồn chính thức. Quy định về thuế, hóa đơn và thủ tục doanh nghiệp có thể thay đổi; mỗi bài cần nêu phạm vi áp dụng."],
        links: [
          { label: "Kiến thức kế toán và thuế", path: "/kien-thuc/" },
          { label: "Liên hệ Quỳnh Phát", path: "/lien-he/" },
        ],
      },
    ],
  },
  "/gioi-thieu/": {
    title: "Đồng hành kế toán tận tâm, phối hợp linh hoạt",
    seoTitle: "Giới thiệu Kế toán Quỳnh Phát | QPAS",
    description: "Tìm hiểu định hướng làm việc trực tuyến và các dịch vụ kế toán, thuế, hóa đơn điện tử của Công ty TNHH Dịch vụ Kế toán Quỳnh Phát.",
    intro: "Quỳnh Phát cung cấp giải pháp kế toán và hỗ trợ hồ sơ doanh nghiệp theo hướng rõ ràng, linh hoạt và thuận tiện. Chúng tôi tập trung tìm hiểu nhu cầu thực tế, làm rõ từng đầu việc và phối hợp trực tuyến để doanh nghiệp chủ động trong quá trình triển khai.",
    sections: [
      {
        heading: "Giải pháp dành cho doanh nghiệp",
        paragraphs: ["Từ công tác kế toán định kỳ đến việc chuẩn bị hồ sơ theo từng kỳ, Quỳnh Phát hỗ trợ doanh nghiệp sắp xếp chứng từ, theo dõi số liệu và phối hợp các đầu việc kế toán – thuế."],
        links: [
          { label: "Dịch vụ kế toán và thuế", path: "/dich-vu/" },
          { label: "Hóa đơn điện tử", path: "/hoa-don-dien-tu/" },
          { label: "Thủ tục doanh nghiệp", path: "/dich-vu-giay-phep-kinh-doanh/" },
        ],
      },
      {
        heading: "Phong cách làm việc",
        paragraphs: ["Quỳnh Phát đề cao sự rõ ràng trong hồ sơ, chủ động trong trao đổi và linh hoạt trong cách phối hợp. Quy trình trực tuyến giúp doanh nghiệp thuận tiện gửi nhận thông tin, theo dõi phần việc và trao đổi với một đầu mối xuyên suốt."],
      },
      {
        heading: "Thông tin pháp nhân",
        items: [
          "Tên pháp lý: Công ty TNHH Dịch vụ Kế toán Quỳnh Phát",
          "Tên tiếng Anh: QUYNH PHAT ACCOUNTING SERVICES COMPANY LIMITED",
          "Tên viết tắt: QPAS CO., LTD",
          "Loại hình: Công ty trách nhiệm hữu hạn một thành viên",
          "Mã số doanh nghiệp: 0319725610",
        ],
      },
      {
        heading: "Cùng doanh nghiệp hướng đến vận hành hiệu quả",
        paragraphs: ["Quỳnh Phát sẵn sàng đồng hành trong các công việc kế toán thường xuyên hoặc hỗ trợ theo từng nhu cầu phát sinh, với cách phối hợp trực tuyến thuận tiện."],
        links: [{ label: "Liên hệ", path: "/lien-he/" }],
      },
    ],
  },
  "/dich-vu/": {
    title: "Dịch vụ kế toán và thuế cho doanh nghiệp",
    seoTitle: "Dịch vụ kế toán, thuế doanh nghiệp | Quỳnh Phát",
    description: "Kế toán trọn gói, báo cáo thuế, báo cáo tài chính, quyết toán thuế và hóa đơn điện tử theo nhu cầu doanh nghiệp.",
    intro: "Quỳnh Phát đồng hành cùng doanh nghiệp trong các công việc kế toán – thuế thường xuyên và theo kỳ. Từ tổ chức chứng từ đến chuẩn bị báo cáo, từng hạng mục được lựa chọn theo quy mô hồ sơ, hoạt động và mục tiêu quản lý của doanh nghiệp.",
    sections: [
      {
        heading: "Các nhóm dịch vụ kế toán",
        items: [
          "Kế toán trọn gói: tổ chức chứng từ, theo dõi sổ sách và phối hợp các công việc kế toán định kỳ.",
          "Báo cáo thuế: chuẩn bị hồ sơ theo kỳ, rà soát dữ liệu và hỗ trợ doanh nghiệp hoàn thiện nghĩa vụ kê khai.",
          "Báo cáo tài chính: tổng hợp số liệu, đối chiếu các khoản mục và lập báo cáo theo chế độ áp dụng.",
          "Quyết toán thuế: rà soát hồ sơ, đối chiếu dữ liệu và chuẩn bị tài liệu cho kỳ quyết toán.",
        ],
        links: [
          { label: "Kế toán trọn gói", path: "/dich-vu/ke-toan-tron-goi/" },
          { label: "Báo cáo thuế", path: "/dich-vu/bao-cao-thue/" },
          { label: "Báo cáo tài chính", path: "/dich-vu/bao-cao-tai-chinh/" },
          { label: "Quyết toán thuế", path: "/dich-vu/quyet-toan-thue/" },
        ],
      },
      {
        heading: "Quy trình phối hợp trực tuyến",
        steps: [
          "Tìm hiểu hoạt động và nhu cầu của doanh nghiệp.",
          "Rà soát hồ sơ, kỳ kế toán và các dữ liệu cần thiết.",
          "Thống nhất phạm vi, đầu ra, chi phí và tiến độ thực hiện.",
          "Phối hợp xử lý công việc, cập nhật tình trạng và bàn giao theo thỏa thuận.",
        ],
        paragraphs: ["Quỳnh Phát ưu tiên hình thức trực tuyến để doanh nghiệp thuận tiện gửi nhận hồ sơ và theo dõi công việc từ xa."],
      },
      {
        heading: "Câu hỏi thường gặp",
        faqs: [
          { question: "Thuê dịch vụ có chuyển trách nhiệm thuế sang bên cung cấp không?", answer: "Không. Người nộp thuế vẫn có trách nhiệm theo luật. Luật 108/2025/QH15 có hiệu lực 01/07/2026 nêu nguyên tắc tự xác định nghĩa vụ, kê khai, nộp thuế và cung cấp thông tin chính xác." },
          { question: "Báo cáo thuế có đồng nghĩa với dịch vụ làm thủ tục thuế?", answer: "Không. Dịch vụ kế toán và dịch vụ làm thủ tục về thuế có phạm vi pháp lý riêng. Người ký, việc nộp hồ sơ và ủy quyền cần được xác định trước khi nhận việc." },
          { question: "Có thể nhận báo giá ngay không?", answer: "Phí được xác định sau khi làm rõ kỳ, tình trạng sổ sách, khối lượng hồ sơ và phần việc cần thực hiện." },
        ],
        sources: [sources.taxManagement],
      },
      {
        heading: "Liên hệ",
        paragraphs: ["Hãy nêu kỳ cần hỗ trợ, tình trạng hồ sơ và câu hỏi cụ thể để bắt đầu trao đổi."],
        links: [{ label: "Gửi yêu cầu tư vấn", path: "/lien-he/" }],
      },
    ],
  },
  "/dich-vu/ke-toan-tron-goi/": {
    title: "Kế toán trọn gói đồng hành cùng doanh nghiệp",
    seoTitle: "Dịch vụ kế toán trọn gói cho doanh nghiệp | Quỳnh Phát",
    description: "Thuê ngoài công tác kế toán định kỳ, tổ chức chứng từ, theo dõi sổ sách và chuẩn bị báo cáo theo nhu cầu doanh nghiệp.",
    intro: "Dịch vụ kế toán trọn gói giúp doanh nghiệp phối hợp các đầu việc kế toán thường xuyên với một đầu mối chuyên trách. Quỳnh Phát xây dựng phương án dựa trên hoạt động, số lượng chứng từ, kỳ báo cáo và cách thức doanh nghiệp đang vận hành.",
    sections: [
      {
        heading: "Công việc kế toán được phối hợp trọn gói",
        paragraphs: ["Tùy theo phương án, dịch vụ có thể bao gồm tiếp nhận và phân loại chứng từ, ghi nhận nghiệp vụ, đối chiếu số liệu, theo dõi công nợ, chuẩn bị báo cáo và phối hợp các đầu việc thuế định kỳ. Hạng mục cụ thể được trình bày rõ để doanh nghiệp chủ động theo dõi."],
        items: [
          "Tổ chức quy trình tiếp nhận và lưu trữ chứng từ.",
          "Ghi nhận nghiệp vụ, theo dõi sổ sách và các khoản công nợ.",
          "Tổng hợp số liệu, chuẩn bị báo cáo kế toán theo kỳ.",
          "Kết nối công tác kế toán với kê khai thuế và báo cáo tài chính theo phạm vi dịch vụ.",
        ],
      },
      {
        heading: "Phù hợp với doanh nghiệp cần một đầu mối kế toán",
        items: [
          "Doanh nghiệp mới cần xây dựng nền tảng hồ sơ kế toán.",
          "Đơn vị muốn thuê ngoài các đầu việc kế toán định kỳ.",
          "Doanh nghiệp muốn hệ thống lại chứng từ, sổ sách và dữ liệu.",
          "Chủ doanh nghiệp cần thông tin kế toán thuận tiện để theo dõi hoạt động.",
        ],
        paragraphs: ["Tài liệu cụ thể và kênh gửi được thống nhất sau khi làm rõ nhu cầu. Không gửi mật khẩu hoặc mã xác thực."],
      },
      {
        heading: "Quy trình làm việc trực tuyến",
        steps: [
          "Tìm hiểu mô hình hoạt động và nhu cầu kế toán.",
          "Thiết lập danh mục hồ sơ và lịch phối hợp phù hợp.",
          "Thống nhất đầu việc, đầu ra, chi phí và tiến độ.",
          "Cập nhật công việc định kỳ và bàn giao báo cáo theo thỏa thuận.",
        ],
      },
      {
        heading: "Câu hỏi thường gặp",
        faqs: [
          { question: "Gói kế toán có thể kết hợp kê khai thuế và báo cáo tài chính không?", answer: "Có. Các hạng mục được kết hợp theo kỳ, tình hình hoạt động và nhu cầu quản lý của doanh nghiệp." },
          { question: "Quỳnh Phát hỗ trợ khi chứng từ chưa được sắp xếp không?", answer: "Có. Quỳnh Phát cùng doanh nghiệp rà soát hồ sơ hiện có, sắp xếp phần cần bổ sung và thống nhất cách xử lý." },
          { question: "Doanh nghiệp theo dõi công việc bằng cách nào?", answer: "Đầu mối và kênh trao đổi trực tuyến được thống nhất khi bắt đầu phối hợp; các hạng mục và tiến độ được cập nhật theo thỏa thuận." },
        ],
        links: [
          { label: "Báo cáo thuế", path: "/dich-vu/bao-cao-thue/" },
          { label: "Báo cáo tài chính", path: "/dich-vu/bao-cao-tai-chinh/" },
          { label: "Quyết toán thuế", path: "/dich-vu/quyet-toan-thue/" },
          { label: "Liên hệ", path: "/lien-he/" },
        ],
      },
    ],
  },
  "/dich-vu/bao-cao-thue/": {
    title: "Kê khai và báo cáo thuế đúng kỳ, rõ hồ sơ",
    seoTitle: "Dịch vụ kê khai và báo cáo thuế | Quỳnh Phát",
    description: "Hỗ trợ chuẩn bị hồ sơ kê khai và báo cáo thuế định kỳ theo loại hình hoạt động, kỳ kê khai và dữ liệu doanh nghiệp.",
    intro: "Quỳnh Phát hỗ trợ doanh nghiệp tổng hợp thông tin, chuẩn bị hồ sơ và phối hợp các đầu việc thuế theo kỳ. Quy trình trao đổi rõ ràng giúp doanh nghiệp chủ động chuẩn bị chứng từ và theo dõi công việc cần hoàn tất.",
    sections: [
      {
        heading: "Hồ sơ thuế được chuẩn bị bài bản",
        items: [
          "Tổng hợp chứng từ và dữ liệu phục vụ kê khai theo kỳ.",
          "Chuẩn bị tờ khai, báo cáo thuế theo hoạt động doanh nghiệp.",
          "Đối chiếu số liệu kê khai với hồ sơ kế toán liên quan.",
          "Theo dõi đầu việc, thời hạn và tài liệu cần bổ sung.",
        ],
        paragraphs: ["Danh mục hồ sơ được xây dựng theo loại hình, giao dịch và kỳ kê khai để nội dung báo cáo phản ánh đúng thông tin doanh nghiệp cung cấp."],
      },
      {
        heading: "Các bước phối hợp",
        steps: [
          "Làm rõ kỳ, loại thuế, mục tiêu và hồ sơ hiện có.",
          "Xác định phạm vi, đầu ra và trách nhiệm của mỗi bên.",
          "Rà soát tài liệu đã thống nhất và trao đổi nội dung cần xác nhận.",
          "Hoàn thiện phần việc theo hợp đồng; xác định riêng việc ký, nộp hoặc đại diện.",
        ],
      },
      {
        heading: "Rõ trách nhiệm, chủ động từng kỳ",
        paragraphs: ["Quỳnh Phát phối hợp trên cơ sở hồ sơ và thông tin doanh nghiệp cung cấp. Người ký, người nộp và phạm vi ủy quyền được thống nhất theo quy định hiện hành để doanh nghiệp nắm rõ trách nhiệm trong từng bước."],
        sources: [sources.taxManagement],
      },
      {
        heading: "Câu hỏi thường gặp",
        faqs: [
          { question: "Quỳnh Phát hỗ trợ báo cáo thuế định kỳ không?", answer: "Có. Dịch vụ được bố trí theo kỳ kê khai và tình hình hoạt động của doanh nghiệp." },
          { question: "Tôi có thể nhờ rà soát hồ sơ các kỳ trước không?", answer: "Có. Quỳnh Phát có thể rà soát dữ liệu, tờ khai và chứng từ hiện có để tổng hợp các nội dung cần lưu ý." },
          { question: "Doanh nghiệp cần chuẩn bị gì?", answer: "Bạn có thể bắt đầu với thông tin hoạt động, kỳ cần hỗ trợ và các hồ sơ đã lập. Danh mục chứng từ cụ thể sẽ được hướng dẫn theo trường hợp." },
        ],
        links: [
          { label: "Kế toán trọn gói", path: "/dich-vu/ke-toan-tron-goi/" },
          { label: "Báo cáo tài chính", path: "/dich-vu/bao-cao-tai-chinh/" },
          { label: "Quyết toán thuế", path: "/dich-vu/quyet-toan-thue/" },
          { label: "Liên hệ", path: "/lien-he/" },
        ],
      },
    ],
  },
  "/dich-vu/bao-cao-tai-chinh/": {
    title: "Lập báo cáo tài chính minh bạch, nhất quán",
    seoTitle: "Dịch vụ lập báo cáo tài chính | Quỳnh Phát",
    description: "Hỗ trợ tổng hợp số liệu và lập báo cáo tài chính theo kỳ, chế độ kế toán và tình trạng hồ sơ doanh nghiệp.",
    intro: "Báo cáo tài chính giúp doanh nghiệp nhìn lại tình hình tài sản, nguồn vốn và kết quả hoạt động trong kỳ. Quỳnh Phát phối hợp tổng hợp dữ liệu, đối chiếu các khoản mục và chuẩn bị báo cáo theo chế độ kế toán áp dụng.",
    sections: [
      {
        heading: "Rà soát số liệu và hồ sơ kế toán",
        items: [
          "Tập hợp dữ liệu sổ sách và chứng từ trong kỳ.",
          "Đối chiếu tiền, công nợ, doanh thu, chi phí và các khoản mục trọng yếu.",
          "Rà soát sự thống nhất giữa báo cáo và hồ sơ kế toán.",
          "Trao đổi các khoản mục cần doanh nghiệp xác nhận hoặc bổ sung.",
        ],
        paragraphs: ["Danh mục tài liệu được hướng dẫn theo mô hình hoạt động, kỳ báo cáo và tình trạng số liệu của từng doanh nghiệp."],
      },
      {
        heading: "Báo cáo theo đúng chế độ kế toán",
        paragraphs: ["Việc lập báo cáo căn cứ vào kỳ tài chính, loại hình doanh nghiệp và chế độ kế toán đang áp dụng. Thông tư 99/2025/TT-BTC áp dụng cho năm tài chính bắt đầu từ hoặc sau ngày 01/01/2026; doanh nghiệp nhỏ và vừa cần xác định chế độ phù hợp. Báo cáo được kiểm tra, ký theo quy định hiện hành."],
        sources: [sources.accountingLaw],
      },
      {
        heading: "Quy trình phối hợp",
        steps: [
          "Thống nhất kỳ báo cáo, chế độ kế toán và danh mục dữ liệu cần thiết.",
          "Tiếp nhận, tổng hợp và đối chiếu số liệu theo từng khoản mục.",
          "Trao đổi các thông tin cần xác nhận trước khi hoàn thiện.",
          "Bàn giao bộ báo cáo và các nội dung liên quan theo thỏa thuận.",
        ],
        sources: [sources.financialStatements, sources.financialYear, sources.smesAccounting],
      },
      {
        heading: "Câu hỏi thường gặp",
        faqs: [
          { question: "Doanh nghiệp cần chuẩn bị những hồ sơ nào?", answer: "Thông thường gồm sổ sách, chứng từ, sao kê ngân hàng, hóa đơn, bảng lương và dữ liệu tài sản. Danh mục cụ thể được hướng dẫn theo tình hình doanh nghiệp." },
          { question: "Có thể lập báo cáo tài chính từ xa không?", answer: "Có. Quỳnh Phát ưu tiên tiếp nhận và phối hợp hồ sơ trực tuyến, cập nhật các nội dung cần xác nhận trong quá trình thực hiện." },
          { question: "Lập báo cáo tài chính có bao gồm kiểm toán không?", answer: "Lập báo cáo tài chính và kiểm toán độc lập là hai công việc khác nhau. Trường hợp thuộc diện kiểm toán cần thực hiện với đơn vị có đủ tư cách theo quy định." },
        ],
        sources: [sources.accountingLaw],
        links: [
          { label: "Báo cáo thuế", path: "/dich-vu/bao-cao-thue/" },
          { label: "Kế toán trọn gói", path: "/dich-vu/ke-toan-tron-goi/" },
          { label: "Quyết toán thuế", path: "/dich-vu/quyet-toan-thue/" },
          { label: "Liên hệ", path: "/lien-he/" },
        ],
      },
    ],
  },
  "/dich-vu/quyet-toan-thue/": {
    title: "Quyết toán thuế được chuẩn bị từ dữ liệu rõ ràng",
    seoTitle: "Dịch vụ quyết toán thuế doanh nghiệp | Quỳnh Phát",
    description: "Hỗ trợ rà soát số liệu, chứng từ và chuẩn bị hồ sơ quyết toán thuế theo tình hình doanh nghiệp.",
    intro: "Kỳ quyết toán là thời điểm tổng hợp dữ liệu và đối chiếu hồ sơ của cả kỳ. Quỳnh Phát hỗ trợ doanh nghiệp rà soát thông tin, chuẩn bị tài liệu và làm rõ các khoản mục cần xác nhận trước khi hoàn thiện hồ sơ.",
    sections: [
      {
        heading: "Rà soát toàn diện hồ sơ quyết toán",
        items: [
          "Rà soát tờ khai và dữ liệu kế toán liên quan.",
          "Đối chiếu doanh thu, chi phí, hóa đơn và chứng từ phát sinh.",
          "Tổng hợp hồ sơ và thông tin phục vụ kỳ quyết toán.",
          "Trao đổi các khoản mục cần bổ sung, điều chỉnh hoặc giải trình.",
        ],
        paragraphs: ["Danh mục được xây dựng theo loại thuế, kỳ, hoạt động và tình trạng hồ sơ trước đó để doanh nghiệp có kế hoạch chuẩn bị chủ động."],
      },
      {
        heading: "Quy trình làm việc rõ ràng",
        steps: [
          "Tiếp nhận nhu cầu, kỳ quyết toán và tình hình hoạt động.",
          "Rà soát hồ sơ hiện có và hướng dẫn danh mục cần bổ sung.",
          "Đối chiếu số liệu, trao đổi các nội dung cần xác nhận.",
          "Hoàn thiện phần việc và bàn giao kết quả theo thỏa thuận.",
        ],
      },
      {
        heading: "Phối hợp thông tin đầy đủ",
        paragraphs: ["Doanh nghiệp và Quỳnh Phát cùng phối hợp trên cơ sở thông tin, chứng từ và phạm vi công việc đã thống nhất. Các nội dung về ký, nộp hoặc đại diện được thực hiện theo quy định áp dụng."],
        sources: [sources.taxManagement],
      },
      {
        heading: "Câu hỏi thường gặp",
        faqs: [
          { question: "Có thể bắt đầu khi hồ sơ còn thiếu không?", answer: "Có thể rà soát trên tài liệu hiện có, xác định phần cần bổ sung và thống nhất phương án xử lý." },
          { question: "Quỳnh Phát có hỗ trợ đối chiếu các kỳ trước không?", answer: "Có. Phạm vi rà soát được xác định theo số kỳ, loại hồ sơ và dữ liệu doanh nghiệp cung cấp." },
          { question: "Doanh nghiệp nhận được kết quả gì?", answer: "Đầu ra được thống nhất trước khi thực hiện, thường gồm bộ hồ sơ theo phạm vi dịch vụ và danh sách các nội dung cần lưu ý." },
        ],
        links: [
          { label: "Báo cáo thuế", path: "/dich-vu/bao-cao-thue/" },
          { label: "Báo cáo tài chính", path: "/dich-vu/bao-cao-tai-chinh/" },
          { label: "Liên hệ", path: "/lien-he/" },
        ],
      },
    ],
  },
  "/hoa-don-dien-tu/": {
    title: "Hóa đơn điện tử thuận tiện trong từng giao dịch",
    seoTitle: "Hỗ trợ hóa đơn điện tử cho doanh nghiệp | Quỳnh Phát",
    description: "Hỗ trợ quy trình hóa đơn điện tử, rà soát thông tin và xử lý tình huống theo quy định hiện hành.",
    intro: "Hóa đơn điện tử là một phần quan trọng trong quy trình bán hàng và quản lý hồ sơ kế toán. Quỳnh Phát hỗ trợ doanh nghiệp nắm rõ các bước sử dụng, tổ chức thông tin hóa đơn và xử lý tình huống phát sinh theo hồ sơ cụ thể.",
    sections: [
      {
        heading: "Hỗ trợ doanh nghiệp trong quy trình hóa đơn",
        items: [
          "Rà soát thông tin và nhu cầu sử dụng hóa đơn điện tử.",
          "Trao đổi quy trình lập, phát hành và lưu trữ hóa đơn.",
          "Hướng dẫn chuẩn bị dữ liệu và phối hợp với nhà cung cấp giải pháp.",
          "Hỗ trợ xem xét hóa đơn sai sót và hướng xử lý theo trường hợp.",
          "Kết nối dữ liệu hóa đơn với công tác kế toán và kê khai thuế.",
        ],
      },
      {
        heading: "Cập nhật quy định hiện hành",
        paragraphs: ["Khung quy định về hóa đơn điện tử hiện gồm Luật Quản lý thuế 108/2025/QH15, Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC, có hiệu lực từ ngày 01/07/2026. Thời điểm lập, đối tượng áp dụng và cách xử lý cần xem xét theo từng giao dịch."],
        sources: [sources.taxManagement, sources.eInvoiceDecree, sources.eInvoiceCircular],
      },
      {
        heading: "Phối hợp xử lý nhanh chóng",
        items: [
          "Loại giao dịch và tình trạng sử dụng hóa đơn hiện tại.",
          "Thời điểm phát sinh và nội dung cần hỗ trợ.",
          "Thông tin về giải pháp hóa đơn đang sử dụng.",
          "Các thao tác hoặc hướng xử lý đã thực hiện, nếu có.",
        ],
        paragraphs: ["Không gửi thông tin đăng nhập hoặc mã xác thực. Tài liệu chi tiết và phương thức trao đổi được thống nhất trước khi gửi."],
      },
      {
        heading: "Câu hỏi thường gặp",
        faqs: [
          { question: "Quỳnh Phát có hỗ trợ doanh nghiệp mới sử dụng hóa đơn điện tử không?", answer: "Có. Quỳnh Phát hỗ trợ rà soát quy trình, thông tin cần chuẩn bị và cách phối hợp với nhà cung cấp giải pháp." },
          { question: "Hóa đơn sai được xử lý như thế nào?", answer: "Cách xử lý phụ thuộc nội dung sai, trạng thái hóa đơn và giao dịch. Quỳnh Phát sẽ cùng doanh nghiệp rà soát hồ sơ và hướng dẫn phương án phù hợp." },
          { question: "Quỳnh Phát có cung cấp phần mềm hóa đơn không?", answer: "Quỳnh Phát hỗ trợ nghiệp vụ và quy trình sử dụng; phần mềm được cung cấp bởi đơn vị giải pháp hóa đơn điện tử." },
        ],
        links: [
          { label: "Báo cáo thuế", path: "/dich-vu/bao-cao-thue/" },
          { label: "Kế toán trọn gói", path: "/dich-vu/ke-toan-tron-goi/" },
          { label: "Liên hệ", path: "/lien-he/" },
        ],
      },
    ],
  },
  "/dich-vu-giay-phep-kinh-doanh/": {
    title: "Thủ tục doanh nghiệp gọn gàng, đúng hồ sơ",
    seoTitle: "Dịch vụ đăng ký và thay đổi doanh nghiệp | Quỳnh Phát",
    description: "Hỗ trợ chuẩn bị hồ sơ thành lập doanh nghiệp, thay đổi đăng ký kinh doanh và phối hợp các thủ tục liên quan.",
    intro: "Từ bước bắt đầu kinh doanh đến khi cần cập nhật thông tin đăng ký, hồ sơ doanh nghiệp cần được chuẩn bị đầy đủ và thống nhất. Quỳnh Phát hỗ trợ rà soát nhu cầu, sắp xếp thông tin và phối hợp thủ tục theo từng loại hình.",
    sections: [
      {
        heading: "Hỗ trợ thành lập doanh nghiệp",
        paragraphs: ["Trao đổi về loại hình, tên, ngành nghề, vốn, người đại diện và thông tin đăng ký dự kiến. Quỳnh Phát hỗ trợ chuẩn bị hồ sơ theo loại hình doanh nghiệp và quy định tại thời điểm thực hiện."],
        links: [{ label: "Thông tin thành lập doanh nghiệp", path: "/dich-vu-giay-phep-kinh-doanh/thanh-lap-doanh-nghiep/" }],
      },
      {
        heading: "Hỗ trợ thay đổi thông tin đăng ký",
        paragraphs: ["Khi doanh nghiệp thay đổi tên, địa chỉ, người đại diện, vốn hoặc thành viên, Quỳnh Phát rà soát nội dung và phối hợp chuẩn bị hồ sơ, đồng thời trao đổi các thủ tục liên quan."],
        links: [{ label: "Thông tin thay đổi đăng ký", path: "/dich-vu-giay-phep-kinh-doanh/thay-doi-giay-phep/" }],
      },
      {
        heading: "Quy trình xử lý hồ sơ",
        steps: [
          "Tiếp nhận thông tin và mục tiêu thành lập hoặc thay đổi.",
          "Rà soát dữ liệu, giấy tờ và thành phần hồ sơ theo trường hợp.",
          "Thống nhất người ký, cách nộp, tiến độ và phạm vi hỗ trợ.",
          "Theo dõi phản hồi, phối hợp bổ sung và bàn giao kết quả.",
        ],
        paragraphs: ["Quy định về đăng ký doanh nghiệp được cập nhật tại Luật Doanh nghiệp sửa đổi, Nghị định 168/2025/NĐ-CP và Nghị định 296/2026/NĐ-CP. Biểu mẫu, tài khoản và yêu cầu được kiểm tra theo thủ tục tại thời điểm nộp."],
        sources: [sources.businessLaw, sources.businessRegistration, sources.decree296, sources.businessRegistrationGuide],
      },
      {
        heading: "Câu hỏi thường gặp",
        faqs: [
          { question: "Quỳnh Phát hỗ trợ những thủ tục nào?", answer: "Quỳnh Phát hỗ trợ hồ sơ thành lập mới, thay đổi thông tin đăng ký và các công việc liên quan đến quá trình vận hành doanh nghiệp." },
          { question: "Đăng ký doanh nghiệp có thay giấy phép chuyên ngành không?", answer: "Không. Điều kiện kinh doanh của ngành nghề có điều kiện được xác định theo quy định chuyên ngành." },
          { question: "Có thể thực hiện thủ tục trực tuyến không?", answer: "Có. Quỳnh Phát ưu tiên phối hợp trực tuyến; phương thức ký và nộp hồ sơ được xác định theo thủ tục áp dụng." },
        ],
        links: [{ label: "Liên hệ về thủ tục", path: "/lien-he/" }],
      },
    ],
  },
  "/dich-vu-giay-phep-kinh-doanh/thanh-lap-doanh-nghiep/": {
    title: "Thành lập doanh nghiệp thuận lợi từ bước chuẩn bị",
    seoTitle: "Dịch vụ thành lập doanh nghiệp | Kế toán Quỳnh Phát",
    description: "Hỗ trợ rà soát thông tin, chuẩn bị hồ sơ và phối hợp thủ tục thành lập doanh nghiệp theo loại hình.",
    intro: "Bắt đầu doanh nghiệp mới thường đi cùng nhiều thông tin và giấy tờ cần chuẩn bị. Quỳnh Phát hỗ trợ sắp xếp dữ liệu đăng ký, rà soát thành phần hồ sơ và hướng dẫn các bước tiếp theo để bạn khởi sự thuận lợi.",
    sections: [
      {
        heading: "Thông tin cần chuẩn bị",
        items: [
          "Loại hình dự kiến và tên doanh nghiệp.",
          "Địa chỉ trụ sở, ngành nghề và vốn dự kiến.",
          "Thông tin người thành lập/chủ sở hữu và người đại diện.",
          "Các bước cần hỗ trợ: rà soát, chuẩn bị hồ sơ, nộp và theo dõi kết quả.",
        ],
        paragraphs: ["Không gửi công khai bản chụp giấy tờ tùy thân hoặc thông tin riêng tư. Thành phần hồ sơ chính thức được xác định theo loại hình và tình huống."],
      },
      {
        heading: "Quy trình đồng hành",
        steps: [
          "Tư vấn các thông tin cần xác định theo loại hình dự kiến.",
          "Rà soát và hoàn thiện dữ liệu trên hồ sơ.",
          "Thống nhất phương án ký, nộp và theo dõi kết quả.",
          "Phối hợp xử lý yêu cầu bổ sung và bàn giao tài liệu.",
        ],
        paragraphs: ["Người thành lập chịu trách nhiệm về tính chính xác của thông tin kê khai. Việc thực hiện từng bước cần được xác định rõ trong hợp đồng hoặc ủy quyền."],
      },
      {
        heading: "Thời gian xử lý",
        paragraphs: ["Cổng đăng ký doanh nghiệp nêu thời hạn xem xét hồ sơ thành lập hợp lệ là 03 ngày làm việc kể từ khi nhận hồ sơ. Đây là thời hạn xử lý của cơ quan, không phải cam kết hoàn tất toàn bộ dịch vụ; thời gian chuẩn bị hoặc sửa hồ sơ được tính riêng."],
        sources: [sources.businessRegistrationGuide, sources.businessRegistration],
      },
      {
        heading: "Câu hỏi thường gặp",
        faqs: [
          { question: "Quỳnh Phát có thể hỗ trợ doanh nghiệp sau khi thành lập không?", answer: "Có. Quỳnh Phát hỗ trợ doanh nghiệp tổ chức hồ sơ kế toán ban đầu, hóa đơn, thuế và các đầu việc vận hành liên quan." },
          { question: "Hồ sơ có thể nộp trực tuyến không?", answer: "Cổng quốc gia có hướng dẫn phương thức trực tuyến; tài khoản đăng nhập và quy trình cần kiểm tra theo quy định cập nhật tại thời điểm nộp." },
          { question: "Có thể làm hồ sơ trực tuyến không?", answer: "Có. Quỳnh Phát ưu tiên phối hợp trực tuyến và hướng dẫn riêng các bước ký, nộp theo thủ tục áp dụng." },
        ],
        sources: [sources.decree296],
        links: [
          { label: "Thay đổi đăng ký doanh nghiệp", path: "/dich-vu-giay-phep-kinh-doanh/thay-doi-giay-phep/" },
          { label: "Liên hệ", path: "/lien-he/" },
        ],
      },
    ],
  },
  "/dich-vu-giay-phep-kinh-doanh/thay-doi-giay-phep/": {
    title: "Thay đổi đăng ký doanh nghiệp chủ động, thuận tiện",
    seoTitle: "Dịch vụ thay đổi đăng ký doanh nghiệp | Quỳnh Phát",
    description: "Hỗ trợ rà soát nội dung thay đổi, chuẩn bị hồ sơ và phối hợp thủ tục cập nhật đăng ký doanh nghiệp.",
    intro: "Khi hoạt động phát triển, doanh nghiệp có thể cần cập nhật thông tin pháp lý để phù hợp với tình hình mới. Quỳnh Phát hỗ trợ rà soát nội dung thay đổi, sắp xếp giấy tờ và phối hợp quy trình thực hiện.",
    sections: [
      {
        heading: "Các thông tin thường cần cập nhật",
        items: [
          "Tên doanh nghiệp hoặc địa chỉ trụ sở.",
          "Người đại diện theo pháp luật.",
          "Vốn, thành viên hoặc cổ đông.",
          "Thông tin khác thuộc diện đăng ký hoặc thông báo theo quy định.",
        ],
        paragraphs: ["Mỗi nội dung thay đổi có thành phần hồ sơ và yêu cầu riêng. Quỳnh Phát cùng doanh nghiệp xác định các bước cần thực hiện theo tình huống cụ thể."],
      },
      {
        heading: "Quy trình xử lý hồ sơ",
        steps: [
          "Tiếp nhận thông tin hiện tại và nội dung dự kiến cập nhật.",
          "Rà soát yêu cầu hồ sơ và các thủ tục liên quan.",
          "Thống nhất người ký, phương thức nộp và kế hoạch xử lý.",
          "Theo dõi phản hồi, hỗ trợ bổ sung và bàn giao kết quả.",
        ],
        paragraphs: ["Thông tin về người ký, giấy tờ cần thiết và thủ tục phát sinh sẽ được hướng dẫn theo nội dung doanh nghiệp muốn thay đổi."],
        sources: [sources.businessRegistration, sources.businessChangeGuide],
      },
      {
        heading: "Lưu ý khi thay đổi địa chỉ",
        paragraphs: ["Thay đổi địa chỉ trụ sở có thể kéo theo công việc với cơ quan thuế hoặc thủ tục tại địa bàn mới. Quỳnh Phát sẽ trao đổi các đầu việc liên quan dựa trên thông tin hiện tại và địa chỉ dự kiến của doanh nghiệp."],
        sources: [sources.businessRegistration],
      },
      {
        heading: "Câu hỏi thường gặp",
        faqs: [
          { question: "Có thể thay đổi nhiều thông tin cùng lúc không?", answer: "Có thể xem xét kết hợp các nội dung theo tình trạng hồ sơ và quy định. Quỳnh Phát sẽ rà soát phương án phù hợp." },
          { question: "Đổi địa chỉ có cần làm thủ tục thuế không?", answer: "Tùy việc thay đổi có ảnh hưởng cơ quan thuế quản lý hay không. Quỳnh Phát sẽ trao đổi các đầu việc liên quan khi rà soát hồ sơ." },
          { question: "Quỳnh Phát có theo dõi hồ sơ đến khi có kết quả không?", answer: "Phạm vi tư vấn, chuẩn bị, nộp và theo dõi được trình bày trong phương án dịch vụ." },
        ],
        links: [
          { label: "Thành lập doanh nghiệp", path: "/dich-vu-giay-phep-kinh-doanh/thanh-lap-doanh-nghiep/" },
          { label: "Liên hệ", path: "/lien-he/" },
        ],
      },
    ],
  },
  "/kien-thuc/": {
    title: "Kiến thức kế toán, thuế và thủ tục doanh nghiệp",
    seoTitle: "Kiến thức kế toán và thuế | Quỳnh Phát",
    description: "Thông tin kế toán, thuế, hóa đơn điện tử và đăng ký doanh nghiệp có nguồn chính thức, nêu rõ ngày rà soát.",
    intro: "Chuyên mục cung cấp thông tin nền để người đọc biết nội dung nào cần kiểm tra và tìm nguồn chính thức. Quy định phụ thuộc đối tượng, kỳ và hồ sơ cụ thể; nội dung được rà soát ngày 04/10/2026.",
    sections: [
      {
        heading: "Điều kiện dịch vụ kế toán trong giai đoạn chuyển tiếp",
        paragraphs: ["Nghị quyết 66.18/2026/NQ-CP có hiệu lực từ 01/07/2026 đến hết 28/02/2027 và quy định tạm thời về một số thủ tục, điều kiện kinh doanh dịch vụ kế toán. Phạm vi áp dụng cần đối chiếu văn bản và hướng dẫn hiện hành cho từng hoạt động; cần rà soát lại khi cơ chế chuyển tiếp kết thúc hoặc khi có văn bản mới."],
        sources: [sources.accountingTransition, sources.accountingGuidance],
      },
      {
        heading: "Người nộp thuế vẫn có trách nhiệm riêng",
        paragraphs: ["Luật Quản lý thuế 108/2025/QH15 có hiệu lực từ 01/07/2026. Nguyên tắc luật nêu là người nộp thuế tự xác định nghĩa vụ, kê khai và nộp thuế, đồng thời cung cấp thông tin, tài liệu chính xác. Hợp đồng hỗ trợ cần làm rõ đầu việc, người ký và phạm vi ủy quyền; thuê dịch vụ không đồng nghĩa chuyển toàn bộ trách nhiệm."],
        sources: [sources.taxManagement],
      },
      {
        heading: "Hóa đơn điện tử cần xét theo giao dịch",
        paragraphs: ["Theo mốc rà soát 04/10/2026, Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC có hiệu lực từ 01/07/2026. Thời điểm lập, trường hợp áp dụng và cách xử lý sai sót cần tra theo từng giao dịch và điều khoản cụ thể, không có một hướng xử lý chung cho mọi trường hợp."],
        sources: [sources.eInvoiceDecree, sources.eInvoiceCircular],
      },
      {
        heading: "Thủ tục đăng ký doanh nghiệp",
        paragraphs: ["Hồ sơ thành lập hoặc thay đổi phụ thuộc loại hình và nội dung đăng ký. Cổng đăng ký doanh nghiệp hướng dẫn cách nộp và thành phần hồ sơ; biểu mẫu, tài khoản và yêu cầu cần kiểm tra lại trước thời điểm nộp."],
        sources: [sources.businessRegistrationGuide, sources.decree296],
      },
      {
        heading: "Trao đổi theo hồ sơ cụ thể",
        paragraphs: ["Bài viết mang tính thông tin chung, không thay thế việc rà soát trường hợp cụ thể. Khi văn bản thay đổi, nội dung và ngày cập nhật cần được sửa trước khi tiếp tục hiển thị."],
        links: [
          { label: "Dịch vụ kế toán và thuế", path: "/dich-vu/" },
          { label: "Thủ tục doanh nghiệp", path: "/dich-vu-giay-phep-kinh-doanh/" },
          { label: "Liên hệ", path: "/lien-he/" },
        ],
      },
    ],
  },
  "/lien-he/": {
    title: "Kết nối với Kế toán Quỳnh Phát",
    seoTitle: "Liên hệ Kế toán Quỳnh Phát | Tư vấn trực tuyến",
    description: "Liên hệ Quỳnh Phát qua điện thoại hoặc email để trao đổi dịch vụ kế toán, thuế và hồ sơ doanh nghiệp.",
    intro: "Quỳnh Phát sẵn sàng lắng nghe nhu cầu và cùng doanh nghiệp xác định hạng mục hỗ trợ phù hợp. Hãy liên hệ trực tuyến để bắt đầu trao đổi nhanh chóng, thuận tiện.",
    sections: [
      {
        heading: "Phương thức làm việc linh hoạt",
        paragraphs: ["Quỳnh Phát ưu tiên hình thức trực tuyến để doanh nghiệp thuận tiện trao đổi và phối hợp hồ sơ. Trường hợp cần gặp trực tiếp, lịch hẹn và địa điểm phù hợp sẽ được trao đổi riêng."],
      },
      {
        heading: "Để được hỗ trợ nhanh hơn",
        items: [
          "Tên doanh nghiệp và lĩnh vực hoạt động.",
          "Nhu cầu đang quan tâm: kế toán định kỳ, thuế, báo cáo hoặc hóa đơn.",
          "Kỳ cần xử lý và tình trạng hồ sơ hiện có.",
          "Thời điểm mong muốn bắt đầu phối hợp.",
        ],
        paragraphs: ["Vui lòng không gửi mật khẩu, mã OTP hoặc dữ liệu đăng nhập qua email. Danh mục hồ sơ chi tiết sẽ được hướng dẫn theo nhu cầu của bạn."],
      },
      {
        heading: "Dịch vụ kế toán và hồ sơ doanh nghiệp",
        links: [
          { label: "Dịch vụ kế toán và thuế", path: "/dich-vu/" },
          { label: "Thủ tục doanh nghiệp", path: "/dich-vu-giay-phep-kinh-doanh/" },
          { label: "Chính sách bảo vệ dữ liệu cá nhân", path: "/chinh-sach-bao-mat/" },
        ],
      },
    ],
  },
  "/chinh-sach-bao-mat/": {
    title: "Chính sách bảo vệ dữ liệu cá nhân",
    seoTitle: "Chính sách bảo vệ dữ liệu cá nhân | Quỳnh Phát",
    description: "Thông tin về dữ liệu bạn chủ động gửi qua kênh liên hệ và cách trao đổi về quyền dữ liệu cá nhân.",
    intro: "Quỳnh Phát tôn trọng quyền riêng tư và hướng đến việc sử dụng thông tin đúng mục đích khi trao đổi với khách hàng. Chính sách này mô tả cách tiếp nhận thông tin qua các kênh liên hệ và được rà soát tương ứng với cấu hình website thực tế.",
    sections: [
      {
        heading: "Thông tin bạn chủ động cung cấp",
        paragraphs: ["Khi gọi điện hoặc gửi email, bạn có thể cung cấp tên, thông tin liên hệ, thông tin doanh nghiệp và nội dung yêu cầu. Quỳnh Phát sử dụng những thông tin này để tiếp nhận, phản hồi và phối hợp công việc liên quan đến yêu cầu của bạn."],
      },
      {
        heading: "Mục đích và phạm vi sử dụng",
        paragraphs: ["Thông tin được sử dụng trong phạm vi mục đích đã trao đổi như tư vấn dịch vụ, chuẩn bị phương án phối hợp hoặc thực hiện công việc theo thỏa thuận. Quỳnh Phát chỉ yêu cầu thông tin cần thiết cho từng bước và trao đổi trước khi cần thêm hồ sơ."],
      },
      {
        heading: "Lưu trữ và chia sẻ thông tin",
        paragraphs: ["Hồ sơ được quản lý theo yêu cầu công việc và thời hạn lưu trữ áp dụng. Thông tin chỉ được chia sẻ khi cần thiết cho việc thực hiện dịch vụ, theo yêu cầu hợp pháp của cơ quan có thẩm quyền hoặc căn cứ phù hợp khác theo quy định."],
      },
      {
        heading: "Quyền của chủ thể dữ liệu",
        paragraphs: ["Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 và Nghị định 356/2025/NĐ-CP có hiệu lực từ 01/01/2026. Bạn có thể liên hệ để trao đổi về việc biết, xem, sửa hoặc thực hiện các quyền khác đối với dữ liệu theo phạm vi và điều kiện luật định."],
        sources: [sources.personalDataLaw, sources.personalDataDecree],
      },
      {
        heading: "Cập nhật chính sách",
        paragraphs: ["Nội dung sẽ được rà soát khi website bổ sung biểu mẫu, công cụ phân tích, cookie hoặc nhà cung cấp mới. Thông tin về dữ liệu kỹ thuật và các bên xử lý sẽ được cập nhật theo cấu hình thực tế trước khi website chính thức vận hành."],
      },
    ],
  },
};

