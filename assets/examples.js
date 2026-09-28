const workedExamples = [
 {
  "context": "Quan sát giờ cao điểm tại bãi xe trường: hàng xe kéo dài khoảng 7:15–7:45, chưa có số đo thời gian chờ. Có đề xuất lắp camera AI nhưng chưa phỏng vấn bảo vệ hay sinh viên.",
  "ai": "AI có thể nói: “Nguyên nhân là kiểm thẻ thủ công quá chậm; lắp camera nhận diện biển số sẽ giải quyết.”",
  "critique": "Câu trả lời biến giả thuyết thành kết luận và đưa giải pháp trước khi đo. Hãy hỏi: bao nhiêu xe đến mỗi phút, mỗi làn xử lý bao lâu, có bao nhiêu người bị ảnh hưởng?",
  "revision": "Problem statement mẫu: Trong khung 7:15–7:45, một số người đi vào bãi xe gặp hàng chờ tại cổng; nhóm cần xác định mức độ, vị trí và nguyên nhân chính trước khi chọn biện pháp."
 },
 {
  "context": "Problem statement ART1: hàng chờ tại cổng giờ cao điểm, chưa rõ vai trò của lưu lượng xe và thời gian kiểm thẻ. Phạm vi: hai cổng của trường vào buổi sáng; không xem xét bãi xe ngoài trường.",
  "ai": "AI tạo ba nhánh: “bảo vệ chậm”, “quét thẻ chậm”, “cổng xử lý chậm”.",
  "critique": "Ba nhánh cùng mô tả tốc độ xử lý nên vi phạm MECE. Tách nhu cầu đến cổng, năng lực cổng và di chuyển sau cổng. Gắn cách đo ở từng lá.",
  "revision": "Issue tree mẫu: (1) nhu cầu: số xe/phút theo giờ; (2) năng lực cổng: thời gian quét thẻ và số làn; (3) di chuyển: thời gian từ cổng tới chỗ đỗ. Scope in/out giữ nguyên."
 },
 {
  "context": "Câu hỏi ưu tiên: thời gian chờ tăng do lưu lượng đến hay do thao tác tại cổng? Nguồn hiện có: Problem Bank mô tả bối cảnh, chưa có log thực địa.",
  "ai": "AI gợi ý một bài nghiên cứu có tiêu đề hấp dẫn và khẳng định giảm 43% thời gian chờ, nhưng không cung cấp DOI hay đường dẫn kiểm chứng.",
  "critique": "Không trích số 43%. Mở bài gốc, tìm DOI/tác giả/phương pháp. Nếu không thấy, đánh dấu “không xác minh” và tìm nguồn khác; bổ sung đo thời gian tại cổng.",
  "revision": "Evidence Log mẫu: Quan sát tại cổng A (chưa thu thập) | nhóm cần bấm giờ | dữ liệu trực tiếp | chưa có kết quả. Problem Bank | mô tả bối cảnh | có thể dẫn nguồn | không phải số đo tại trường."
 },
 {
  "context": "Ba dữ kiện giả định để tập tổng hợp: log cho thấy số xe vào tăng lúc 7:20; quan sát cho thấy hàng dài; phỏng vấn bảo vệ nói thiết bị quét đôi lúc chậm. Chưa có phép đo độ trễ máy quét.",
  "ai": "AI kết luận: “Nút thắt chính chắc chắn là máy quét thẻ lỗi.”",
  "critique": "Nguồn phỏng vấn và quan sát chưa định lượng tác động của máy quét; hai yếu tố tăng lưu lượng và độ trễ có thể cùng xảy ra. Ghi mâu thuẫn và đề xuất đo riêng.",
  "revision": "Insight mẫu: hàng chờ tăng cùng thời điểm lưu lượng tăng; chưa đủ dữ liệu để phân biệt ảnh hưởng của nhu cầu đến và thời gian phục vụ. Cơ hội: đo hai yếu tố độc lập trước khi thí điểm."
 },
 {
  "context": "Insight: lưu lượng đến tăng giờ cao điểm; thời gian kiểm thẻ chưa được đo đủ. Ràng buộc: không thay cơ sở hạ tầng trong học kỳ này.",
  "ai": "AI đề xuất năm ý tưởng gồm camera ở cổng A, camera ở cổng B, camera có app, camera có dashboard và camera có cloud.",
  "critique": "Đây là năm biến thể của một công nghệ. Hãy yêu cầu các cơ chế can thiệp khác nhau, kiểm tra ràng buộc về quyền riêng tư và tính khả thi.",
  "revision": "Năm hướng mẫu: phân luồng xe, điều chỉnh giờ đến, tối ưu quy trình quét thẻ, bố trí nhân sự theo tải dự báo, hiển thị mức đông theo thời gian. Chọn 1–2 concept để khảo sát tiếp."
 },
 {
  "context": "Phương án A: phân luồng thủ công; B: tối ưu quét thẻ; C: thêm làn. Tiêu chí chốt trước: tác động 40%, khả thi 30%, chi phí 20%, riêng tư 10%.",
  "ai": "AI chấm A=5, B=5, C=5 mọi tiêu chí và tuyên bố B tốt nhất.",
  "critique": "Điểm vô căn cứ và không phân biệt phương án. Yêu cầu nguồn/giả định cho từng ô, thử thay trọng số, nêu rõ ai duyệt thí điểm.",
  "revision": "Matrix minh họa: A (4,4,4,5)=4,1; B (4,3,3,4)=3,4; C (5,1,1,5)=3,0. Các điểm chỉ minh họa, phải thay bằng dữ liệu của nhóm. Lựa chọn A cần phê duyệt của bộ phận vận hành."
 },
 {
  "context": "Audience: ban quản lý trường. Mục tiêu: xin phép thí điểm phân luồng tại một cổng trong hai tuần. ART1–ART6 có dữ liệu quan sát và các giả định còn mở.",
  "ai": "AI viết: “Giải pháp đảm bảo giảm 50% ùn tắc, chi phí bằng 0 và đáp ứng mọi quy định.”",
  "critique": "Không có kết quả thí điểm hay dự toán xác nhận các claim đó. Chuyển lời hứa thành giả thuyết kiểm chứng; nêu nguồn và yêu cầu quyết định rõ.",
  "revision": "Brief mẫu: Problem: hàng chờ giờ cao điểm. Evidence: quan sát có thời gian và nguồn. Insight: chưa tách ảnh hưởng lưu lượng và năng lực. Solution: thí điểm phân luồng. Impact: đo thời gian chờ trước/sau, chưa cam kết phần trăm."
 },
 {
  "context": "ART1 ghi phạm vi một cổng; ART3 thu dữ liệu hai cổng; ART7 lại viết tác động toàn trường. Danh mục nguồn có hai cách ghi tên cùng một báo cáo.",
  "ai": "AI nhận xét portfolio nhất quán và đề nghị chỉ thiết kế lại trang bìa.",
  "critique": "AI bỏ sót thay đổi phạm vi và trùng nguồn. Tạo bảng claim–artifact–nguồn, đối chiếu mục tiêu và số liệu giữa bản đầu với bản cuối.",
  "revision": "Bản sửa mẫu: giải thích mở phạm vi từ một sang hai cổng ở ART3; ART7 giới hạn tác động ở hai cổng; gộp trích dẫn trùng và ghi phiên bản dữ liệu được dùng."
 },
 {
  "context": "Nhóm có 6 slide: vấn đề, issue tree và evidence, insight, so sánh phương án, workflow, giới hạn và AI Declaration. Có 5 phút trình bày.",
  "ai": "AI viết kịch bản kéo dài 12 phút và chỉ tập trung mô tả tính năng camera.",
  "critique": "Cắt theo thời lượng, ưu tiên hành trình ra quyết định. Chuẩn bị trả lời vì sao loại camera và nguồn nào hỗ trợ lựa chọn thí điểm.",
  "revision": "Lịch trình mẫu: 45 giây vấn đề; 70 giây framing/evidence; 60 giây insight/phương án; 70 giây workflow; 55 giây impact/giới hạn; 40 giây AI use. Q&A dẫn lại artifact và nguồn."
 },
 {
  "context": "Ban đầu nhóm định lắp camera. Sau quan sát, nhóm phát hiện chưa đo thời gian quét thẻ và chuyển sang thí điểm phân luồng.",
  "ai": "AI viết reflection: “Chúng em học được nhiều điều và AI rất hữu ích.”",
  "critique": "Quá chung chung. Ghi một lỗi cụ thể của AI, nguồn giúp nhận ra sai sót, quyết định nhóm đã sửa, và thước đo cho lần thử nghiệm kế tiếp.",
  "revision": "Reflection mẫu: “AI khiến chúng tôi ưu tiên camera quá sớm. Khi đối chiếu ART3 với quan sát tại cổng, chúng tôi thấy chưa có số đo để quy lỗi cho kiểm thẻ. Lần sau sẽ chốt câu hỏi đo và nguồn trước khi hỏi AI về giải pháp.”"
 }
];
