const lessonDetails = [
 {
  "concepts": [
   [
    "AI là đối tác tư duy",
    "AI có thể gợi câu hỏi, sắp xếp thông tin và đưa ra giả thuyết; câu trả lời của AI không tự trở thành dữ kiện. Nhóm phải giữ quyền xác nhận phạm vi, kiểm chứng nguồn và chịu trách nhiệm cho vấn đề đã chọn."
   ],
   [
    "Vấn đề, triệu chứng và giải pháp",
    "“Bãi xe ùn vào giờ cao điểm” là triệu chứng quan sát được. “Lắp camera AI” là giải pháp đề xuất. Vấn đề cần xác minh có thể là thời gian xử lý tại cổng vượt năng lực phục vụ vào giờ cao điểm; phải đo thời gian và phỏng vấn người liên quan trước khi kết luận nguyên nhân."
   ],
   [
    "Problem statement",
    "Mô tả ai chịu ảnh hưởng, đang gặp khó khăn gì, trong bối cảnh nào, có chỉ dấu nào và hệ quả ra sao. Tránh nhét công nghệ hoặc giải pháp vào câu vấn đề."
   ]
  ],
  "example": "Smart Campus Parking: sinh viên mất nhiều thời gian vào cổng lúc 7:15–7:45. Đây mới là quan sát cần xác minh. Các giả thuyết gồm kiểm tra thẻ lâu, làn xe giao cắt hoặc số lượng xe đến đồng thời. Trước khi chọn giải pháp, cần đếm lượt xe và đo thời gian chờ tại từng điểm.",
  "process": [
   "Đọc 2–3 bài toán ứng viên; chọn một flagship và ghi mã, bối cảnh, lý do phù hợp nhóm.",
   "Liệt kê người liên quan: sinh viên, bảo vệ, bộ phận vận hành; viết nhu cầu và thông tin cần hỏi từng bên.",
   "Lập bảng ba cột: điều quan sát được, nguyên nhân giả định, bằng chứng cần tìm. Chỉ ghi nguyên nhân dưới dạng giả thuyết.",
   "Nhờ AI nêu ba cách diễn đạt vấn đề khác nhau và câu hỏi làm rõ. Loại ít nhất hai cách diễn đạt, ghi lý do.",
   "Viết problem statement cuối cùng, nêu những dữ kiện đã có và những điểm chưa biết."
  ],
  "prompt": "Bạn là đối tác phản biện, không tự chọn giải pháp. Đây là bối cảnh: [mô tả]. Hãy tách quan sát, giả thuyết nguyên nhân và giải pháp đang bị ngầm giả định; đề xuất 8 câu hỏi cho stakeholder. Đánh dấu điều nào chưa có bằng chứng. Không tự tạo số liệu.",
  "checks": [
   "Có mã flagship và lý do chọn.",
   "Phân biệt rõ triệu chứng, nguyên nhân giả thuyết và giải pháp.",
   "Nêu người liên quan, bằng chứng cần thu thập và câu vấn đề không chứa giải pháp.",
   "Đối chiếu và loại hai cách framing khác với lý do."
  ],
  "fields": [
   "Flagship ID và bối cảnh",
   "Stakeholder và nhu cầu",
   "Triệu chứng quan sát",
   "Giả thuyết nguyên nhân / dữ liệu còn thiếu",
   "Hai cách định nghĩa đã loại và lý do",
   "Problem statement cuối cùng"
  ]
 },
 {
  "concepts": [
   [
    "Issue tree",
    "Phân rã câu hỏi chính thành các nhánh phụ có thể kiểm chứng. Cấp 1 mô tả các khía cạnh lớn; cấp 2 biến mỗi nhánh thành câu hỏi cụ thể, có dữ liệu có thể thu thập."
   ],
   [
    "MECE",
    "Các nhánh cùng cấp không trùng nội dung (Mutually Exclusive) và bao phủ các phần quan trọng của câu hỏi (Collectively Exhaustive). MECE là công cụ kiểm tra, không bảo đảm cây đã đúng với thực địa."
   ],
   [
    "Phạm vi và giả định",
    "Scope in/out xác định điều nhóm sẽ và sẽ không khảo sát; constraints là giới hạn nguồn lực hoặc quyền truy cập; assumptions là điều tạm cho là đúng để tiếp tục và cần được kiểm chứng."
   ]
  ],
  "example": "Vấn đề “thời gian vào bãi xe dài” có thể phân rã thành (1) lượng xe đến theo phút, (2) năng lực xử lý từng cổng, (3) thời gian di chuyển trong bãi. “Bảo vệ chậm” chồng lấn với nhánh (2), nên thay bằng câu hỏi đo thời gian thao tác kiểm thẻ và phân loại xe.",
  "process": [
   "Đưa ART1 vào đầu worksheet, không đổi câu vấn đề khi chưa giải thích lý do.",
   "Viết mục tiêu đo được và phạm vi: địa điểm, nhóm người dùng, khung giờ, điều loại khỏi nghiên cứu.",
   "Vẽ issue tree tối thiểu hai tầng; dưới mỗi nhánh lá nêu dữ liệu sẽ dùng để trả lời.",
   "Hỏi AI chỉ ra nhánh trùng, nhánh thiếu, câu hỏi đang lẫn giải pháp; tự sửa và ghi ít nhất ba phiên bản.",
   "Cho nhóm khác kiểm tra MECE, gắn điểm chưa chắc chắn và câu hỏi cần xác minh tiếp."
  ],
  "prompt": "Từ problem statement sau: [dán ART1], hãy tạo issue tree hai tầng dưới dạng câu hỏi. Sau đó tự phản biện: nhánh nào chồng lấn, nhánh nào thiếu, nhánh nào không thể kiểm chứng? Chỉ đề xuất chỉnh sửa; không thay đổi phạm vi mà tôi đã ghi: [scope].",
  "checks": [
   "Issue tree có ít nhất hai tầng và từng lá gắn dữ liệu cần tìm.",
   "Có scope in/out, constraints và assumptions.",
   "Có ít nhất ba vòng chỉnh sửa kèm lý do.",
   "Kiểm tra trùng lấn và phần còn thiếu, không nhận cây AI nguyên văn."
  ],
  "fields": [
   "Problem statement và mục tiêu",
   "Scope in / Scope out",
   "Constraints / assumptions",
   "Issue tree cấp 1 và cấp 2",
   "MECE check: trùng lấn, phần thiếu",
   "Revision 1 → 2 → 3 và lý do"
  ]
 },
 {
  "concepts": [
   [
    "Bằng chứng trước giải pháp",
    "Mỗi nhánh issue tree cần dữ liệu trả lời. Dùng từ khóa bao gồm từ đồng nghĩa tiếng Việt, tiếng Anh và khái niệm đo lường; ghi truy vấn để người khác có thể lặp lại."
   ],
   [
    "Đánh giá nguồn",
    "Kiểm tra tác giả, tổ chức, thời điểm, phương pháp thu thập, cỡ mẫu và mức liên quan. Nguồn AI gợi ý chỉ hợp lệ sau khi mở đường dẫn và xác nhận trích dẫn thực sự tồn tại."
   ],
   [
    "Bảng evidence log",
    "Một hàng gồm claim, nguồn, ngày, loại nguồn, phương pháp, mức tin cậy, nhánh issue tree, điều nguồn hỗ trợ và giới hạn. Dữ liệu bối cảnh trong Problem Bank không thay thế nghiên cứu thực địa."
   ]
  ],
  "example": "Với bãi xe, dùng ba loại nguồn: số lượt xe do bãi ghi nhận, quan sát và bấm giờ tại cổng, tài liệu nghiên cứu về hàng đợi. Bài blog quảng bá thiết bị có thể là góc nhìn thị trường nhưng không chứng minh hiệu quả tại trường.",
  "process": [
   "Chọn 3–5 câu hỏi ưu tiên từ issue tree; viết từ khóa và truy vấn cho từng câu hỏi.",
   "Tìm ít nhất tám nguồn thuộc tối thiểu ba loại, trong đó có Problem Bank. Ghi URL hoặc đường dẫn nhận diện rõ nguồn.",
   "Mở từng nguồn để xác nhận tác giả, ngày, nội dung gốc; đánh dấu trích dẫn do AI gợi ý nhưng không tìm thấy.",
   "Ghi Evidence Log và chọn 5–8 bằng chứng có liên quan nhất; ghi bằng chứng còn thiếu.",
   "Không dùng số liệu do AI tạo nếu chưa truy được tài liệu hoặc phép đo."
  ],
  "prompt": "Tôi cần kiểm chứng các câu hỏi sau [dán issue tree]. Hãy đề xuất từ khóa Việt/Anh, loại nguồn nên tìm và tiêu chí đánh giá. Nếu gợi ý tài liệu cụ thể, nêu rõ đây chỉ là ứng viên cần tôi mở và xác minh; không viết trích dẫn hay số liệu khi chưa kiểm tra.",
  "checks": [
   "Ít nhất tám nguồn thuộc ba loại, có Problem Bank.",
   "Mọi nguồn do AI đề xuất đã được mở và xác minh.",
   "Có Evidence Log với claim, nguồn, độ tin cậy và giới hạn.",
   "Nêu lỗ hổng dữ liệu thay vì lấp bằng suy đoán."
  ],
  "fields": [
   "Câu hỏi và chiến lược tìm kiếm",
   "Từ khóa / truy vấn đã dùng",
   "Evidence Log: claim | nguồn | ngày | loại | độ tin cậy | giới hạn",
   "5–8 bằng chứng mạnh nhất",
   "Nguồn AI gợi ý đã xác minh / bị loại",
   "Khoảng trống dữ liệu"
  ]
 },
 {
  "concepts": [
   [
    "Synthesis khác tóm tắt",
    "Tóm tắt kể lại từng nguồn. Tổng hợp đặt các nguồn cạnh nhau để tìm điểm đồng thuận, bất đồng, nguyên nhân khác biệt và hàm ý đối với vấn đề."
   ],
   [
    "Synthesis matrix",
    "Hàng là claim hoặc nhánh vấn đề; cột là nguồn, kết luận, điều kiện nghiên cứu, độ tin cậy, mâu thuẫn và hệ quả. Không cộng gộp những con số khác đơn vị đo."
   ],
   [
    "Insight và opportunity",
    "Insight diễn giải điều được nhiều bằng chứng hỗ trợ cùng giới hạn. Opportunity là khoảng trống có thể can thiệp; cần gắn với insight, không bắt đầu bằng tên sản phẩm."
   ]
  ],
  "example": "Quan sát cho thấy hàng chờ tăng lúc 7:20, log cho thấy số lượt xe đến tăng, nhưng phỏng vấn bảo vệ nêu lỗi quét thẻ ở một làn. Hai bằng chứng cùng giải thích tắc nghẽn nhưng không đủ để khẳng định nguyên nhân chính. Insight nên ghi “có ít nhất hai nút thắt cần đo tách biệt”.",
  "process": [
   "Lấy ít nhất tám nguồn đã xác minh từ ART3 đưa vào ma trận.",
   "Gom các phát hiện theo câu hỏi, đánh dấu đồng thuận và ít nhất hai mâu thuẫn hoặc kết quả không khớp.",
   "Với mỗi mâu thuẫn, kiểm tra thời điểm, mẫu, đơn vị đo, bối cảnh và chất lượng nguồn.",
   "Viết 3–5 insight; mỗi insight có nguồn đỡ, mức chắc chắn và giới hạn.",
   "Nêu 2–3 cơ hội can thiệp, trong đó ít nhất một cơ hội có bằng chứng rõ."
  ],
  "prompt": "Đây là các trích đoạn nguồn đã xác minh [dán nội dung và mã nguồn]. Hãy lập ma trận claim–source; chỉ ra đồng thuận và ít nhất hai mâu thuẫn, nêu giả thuyết giải thích chứ không tự kết luận. Gắn mã nguồn vào từng insight; chỗ thiếu nguồn hãy ghi “chưa đủ bằng chứng”.",
  "checks": [
   "Ma trận có ít nhất tám nguồn truy vết được.",
   "Phân tích ít nhất hai mâu thuẫn.",
   "Insight có bằng chứng, mức chắc chắn và giới hạn.",
   "Có ít nhất một cơ hội can thiệp dựa trên bằng chứng."
  ],
  "fields": [
   "Evidence Synthesis Matrix: claim | nguồn | hỗ trợ / phản bác | giới hạn",
   "Điểm đồng thuận",
   "Hai mâu thuẫn và cách giải thích",
   "3–5 insight có dẫn nguồn",
   "2–3 cơ hội và căn cứ",
   "Điểm đã kiểm chứng lại với nguồn gốc"
  ]
 },
 {
  "concepts": [
   [
    "Phân kỳ rồi hội tụ",
    "Ở buổi này ưu tiên tạo nhiều cách tiếp cận khác nhau trước khi đánh giá. Đừng biến năm biến thể của cùng một ứng dụng thành năm phương án."
   ],
   [
    "Devil’s Advocate",
    "Yêu cầu AI lập luận mạnh nhất chống lại một phương án: giả định nào yếu, tình huống nào làm thất bại, ai bị ảnh hưởng, dữ liệu nào còn thiếu. Phản biện AI cũng cần được kiểm tra."
   ],
   [
    "Trade-off",
    "Mọi phương án trao đổi giữa hiệu quả, chi phí, tốc độ, công bằng và riêng tư. Chỉ chọn 1–2 concept để mang sang Session 6; chưa kết luận phương án thắng."
   ]
  ],
  "example": "Bãi xe: (1) phân luồng thủ công theo khung giờ, (2) điều chỉnh lịch học, (3) cải tiến quy trình quét thẻ, (4) dự báo tải để bố trí nhân sự, (5) đặt thông báo giờ cao điểm. Năm hướng này tác động vào các nút thắt khác nhau; camera nhận diện biển số chỉ là một biến thể kỹ thuật của hướng kiểm thẻ.",
  "process": [
   "Chọn 2–3 insight có nguồn từ ART4; nêu rõ insight nào mỗi phương án muốn xử lý.",
   "Sinh ít nhất năm phương án thực sự khác nhau, mô tả cơ chế, người dùng và điều kiện áp dụng.",
   "Nhờ AI đóng vai Devil’s Advocate cho mỗi phương án; kiểm chứng phản biện bằng dữ liệu hoặc ý kiến stakeholder.",
   "Lập bảng giả định, rủi ro, trade-off; gạch bỏ ý tưởng không hợp phạm vi và giải thích.",
   "Chọn 1–2 concept để khảo sát sâu hơn, chưa lập decision matrix cuối."
  ],
  "prompt": "Dựa trên các insight có dẫn nguồn [dán], hãy đề xuất năm hướng can thiệp khác cơ chế, không chỉ thay tên công nghệ. Với từng hướng, đóng vai người phản đối để nêu hai giả định có thể sai, một rủi ro và dữ liệu cần kiểm chứng. Không xếp hạng cuối cùng.",
  "checks": [
   "Có tối thiểu năm phương án khác bản chất.",
   "Có phản biện AI và phản hồi của con người.",
   "Mỗi concept dẫn đến insight / bằng chứng.",
   "Chọn 1–2 concept có lý do nhưng chưa tuyên bố phương án tối ưu."
  ],
  "fields": [
   "Insight đầu vào và mã nguồn",
   "Ít nhất năm candidate solutions",
   "Giả định và trade-off từng phương án",
   "AI critique và phản biện của nhóm",
   "Concept 1–2 mang sang buổi 6"
  ]
 },
 {
  "concepts": [
   [
    "Tiêu chí phải có trước điểm",
    "Chọn tiêu chí theo mục tiêu và ràng buộc trước khi chấm: tác động, khả thi, chi phí, thời gian, quyền riêng tư. Nếu đặt tiêu chí sau khi biết phương án ưa thích, kết quả dễ bị thiên lệch."
   ],
   [
    "Decision matrix",
    "Gán trọng số tổng 100%, điểm từng phương án theo cùng thang đo, nhân trọng số rồi cộng. Ví dụ trọng số 40/30/20/10 và điểm 4/3/2/5 cho kết quả 3,3/5. Điểm chỉ hỗ trợ thảo luận; cần kiểm tra độ nhạy khi đổi trọng số."
   ],
   [
    "Human checkpoint",
    "Chỉ rõ giai đoạn nào con người duyệt dữ liệu, kiểm tra kết quả, xử lý ngoại lệ và quyết định tiếp tục. Mô hình AI hoặc điểm số không tự quyết thay người có trách nhiệm."
   ]
  ],
  "example": "Bãi xe: so sánh thay quy trình thủ công, thêm làn và tối ưu quét thẻ. Nếu không có quyền sửa cơ sở hạ tầng, “thêm làn” kém khả thi. Nhóm ghi điểm dựa trên dữ liệu đo, ý kiến vận hành và giới hạn ngân sách; nêu rõ khi nào đổi lựa chọn.",
  "process": [
   "Viết ít nhất ba phương án vào matrix; nếu buổi 5 chỉ chọn 1–2 concept, bổ sung một phương án đối chứng khả thi.",
   "Chốt tiêu chí, trọng số và quy tắc cho điểm trước khi chấm; ghi nguồn hoặc lập luận cho mỗi điểm.",
   "Tính điểm có trọng số, thử thay đổi một trọng số quan trọng để xem lựa chọn có bền vững không.",
   "Thiết kế workflow giải pháp gồm đầu vào, xử lý, đầu ra, điểm con người xác minh và xử lý lỗi.",
   "Ghi lựa chọn cuối cùng cùng trade-off, rủi ro, giả định và lý do từ chối lựa chọn khác."
  ],
  "prompt": "Dựa vào ba phương án [dán] và ràng buộc [dán], hãy đề xuất tiêu chí đánh giá có định nghĩa đo lường. Tôi sẽ chốt trọng số trước. Sau khi tôi cung cấp trọng số và nguồn chứng cứ, hãy phản biện điểm số, kiểm tra độ nhạy và chỉ ra điểm quyết định cần con người phê duyệt.",
  "checks": [
   "Ít nhất ba phương án và tiêu chí định nghĩa trước.",
   "Trọng số tổng 100%, điểm có căn cứ; có thử độ nhạy.",
   "Workflow có human checkpoint, luồng lỗi và trách nhiệm rõ.",
   "Lựa chọn được biện minh bằng trade-off, không chỉ bằng tổng điểm."
  ],
  "fields": [
   "Phương án và mục tiêu đánh giá",
   "Tiêu chí, định nghĩa, trọng số",
   "Decision Matrix: phương án × điểm × nguồn căn cứ",
   "Độ nhạy và trade-off",
   "Workflow và human checkpoints",
   "Quyết định của nhóm và lập luận"
  ]
 },
 {
  "concepts": [
   [
    "Viết cho đúng người đọc",
    "Xác định ai quyết định và họ cần làm gì: nhà trường cần chi phí, tác động và rủi ro; nhóm kỹ thuật cần dữ liệu, workflow và điểm kiểm soát. Cùng một giải pháp nhưng thông điệp khác."
   ],
   [
    "Mạch brief năm phần",
    "Problem → Evidence → Insight → Solution → Impact. Nêu luận điểm trước, nối claim đến nguồn và kết thúc bằng việc cần quyết định hoặc thử nghiệm."
   ],
   [
    "AI hỗ trợ biên tập",
    "AI có thể rà cấu trúc và độ rõ nhưng thường thêm những tác động chưa được đo. Ghi mọi thay đổi có ý nghĩa do người viết chấp nhận hoặc bác bỏ."
   ]
  ],
  "example": "Bản dành cho ban quản lý bãi xe mở bằng thời gian chờ và ảnh hưởng giờ học; nêu kế hoạch thí điểm một cổng, chi phí dự kiến và người phê duyệt. Phụ lục cho đội kỹ thuật giải thích log sự kiện và bước kiểm tra thủ công.",
  "process": [
   "Chọn audience, mục tiêu giao tiếp và một thông điệp chính.",
   "Viết dàn ý năm phần, dùng ART1–ART6 và dẫn nguồn đến ít nhất tám tài liệu đã xác minh.",
   "Nhờ AI góp ý cấu trúc, tính nhất quán và đoạn thiếu căn cứ; không yêu cầu tự bịa tác động.",
   "Sửa bản nháp theo phản hồi đồng môn và kiểm tra thủ công từng claim, số liệu, trích dẫn.",
   "Ghi AI revision log: AI gợi ý gì, nhóm chấp nhận gì, sửa gì, vì sao."
  ],
  "prompt": "Đây là brief của tôi cho [audience]. Mục tiêu là [quyết định cần nhận]. Hãy đánh giá theo mạch Problem–Evidence–Insight–Solution–Impact, đánh dấu mọi claim thiếu nguồn và câu quá mơ hồ. Đề nghị sửa câu chữ nhưng không tự thêm số liệu, nguồn hay lợi ích chưa kiểm chứng.",
  "checks": [
   "Brief có đủ năm phần và thông điệp phù hợp audience.",
   "Ít nhất tám nguồn tham khảo truy vết được.",
   "Có đề nghị hành động/ra quyết định và giới hạn của giải pháp.",
   "AI revision log cho thấy người học giữ quyền biên tập cuối."
  ],
  "fields": [
   "Audience / Purpose / Key message",
   "Problem và phạm vi",
   "Evidence và tài liệu tham khảo (≥8)",
   "Insight và lập luận",
   "Solution, workflow, human checkpoint",
   "Impact kỳ vọng, giới hạn, next step",
   "AI revision log / human revision"
  ]
 },
 {
  "concepts": [
   [
    "Portfolio là câu chuyện",
    "Không chỉ gom file. Dẫn người đọc qua vấn đề → bằng chứng → suy luận → lựa chọn → truyền đạt, để thấy nhóm đã đổi ý khi có dữ liệu mới."
   ],
   [
    "Traceability",
    "Một quyết định tốt phải truy ngược đến tiêu chí, insight, claim và nguồn. Dùng mã ART và mã nguồn thống nhất; nếu ART7 khác ART1 thì phải ghi lý do cập nhật."
   ],
   [
    "Kiểm tra nhất quán",
    "So sánh flagship ID, scope, tên stakeholder, số liệu, định nghĩa chỉ số và trích dẫn xuyên ART1–ART7. AI có thể liệt kê sai khác, nhóm phải tự xác nhận."
   ]
  ],
  "example": "Nếu ART1 nghiên cứu “giảm thời gian chờ”, nhưng ART7 hứa “giảm 50% ùn tắc toàn trường”, cần tìm phép đo hậu kiểm và xác định phạm vi. Không có phép đo thì đổi sang mục tiêu thí điểm có thể kiểm chứng.",
  "process": [
   "Tạo mục lục và trang tóm tắt hành trình học.",
   "Sắp xếp năm phần: giới thiệu/index; problem; evidence; solution/reasoning; communication, kèm phụ lục log và declaration.",
   "Lập bảng claim → ART → nguồn; rà từng trích dẫn và mọi con số lặp lại.",
   "Nhờ AI liệt kê mâu thuẫn, lỗ hổng và nội dung chưa đủ nguồn; tự xác nhận và ghi lịch sử sửa.",
   "Nhờ bạn học đọc thử, ghi nhận phản hồi và khóa bản milestone trước showcase."
  ],
  "prompt": "Hãy rà bảy artifact sau [dán các tóm tắt], lập bảng những claim, số liệu, phạm vi và tên stakeholder không nhất quán. Chỉ dựa trên văn bản tôi cung cấp; nêu vị trí ART nào cần tôi kiểm tra và không tự sửa dữ liệu.",
  "checks": [
   "Có index, learning journey và năm phần rõ ràng.",
   "ART1–ART7 hiện diện và mọi claim quan trọng truy vết được.",
   "Có kiểm tra nhất quán và ghi nhận chỉnh sửa của con người.",
   "AI log và declaration đầy đủ trước Workshop 5."
  ],
  "fields": [
   "Mục lục và learning journey",
   "Năm phần portfolio và liên kết ART1–ART7",
   "Traceability: claim | artifact | nguồn",
   "Consistency check và lỗi đã sửa",
   "Peer review / AI review / human revision",
   "Checklist AI logs và declaration"
  ]
 },
 {
  "concepts": [
   [
    "Showcase là bảo vệ hành trình",
    "Trình diễn điều nhóm đã học, kể cả kết luận bị thay đổi bởi bằng chứng. Demo chỉ trình bày sản phẩm cuối mà thiếu problem, framing và evidence chưa thể hiện năng lực của khóa."
   ],
   [
    "Mạch 5–6 slide",
    "Problem; Evidence; Insights; Solution; Impact; Responsible AI. Có thể gộp phần để vừa thời gian nhưng phải chỉ được issue tree, reasoning, workflow, brief và reflection khi hỏi đáp."
   ],
   [
    "Q&A dựa trên chứng cứ",
    "Với mỗi claim, chuẩn bị mã nguồn và giới hạn. Nếu không có bằng chứng, nói rõ chưa xác định và cách kiểm tra trong tương lai."
   ]
  ],
  "example": "Nhóm bãi xe trình bày quan sát tắc cổng, issue tree, số liệu đo, hai phương án đã loại, workflow phương án thử nghiệm và vai trò bảo vệ khi hệ thống lỗi. Câu hỏi “vì sao không nhận diện biển số?” được trả lời bằng ràng buộc quyền riêng tư và khả thi, không dựa vào sở thích.",
  "process": [
   "Đóng băng portfolio milestone và chuẩn bị slide ngắn theo mạch sáu phần.",
   "Viết một câu thông điệp cho mỗi slide, dùng sơ đồ hoặc số liệu có mã nguồn.",
   "Luyện trình bày đúng thời lượng; phân vai ai nói, ai mở nguồn và ai ghi phản hồi.",
   "Trình bày, trả lời Q&A và ghi chính xác điểm chưa bảo vệ được.",
   "Nộp Demo Package: slide, tóm tắt, danh mục nguồn, log câu hỏi và kế hoạch sửa."
  ],
  "prompt": "Đóng vai người phản biện cho showcase của tôi. Dựa trên outline và nguồn tôi cung cấp [dán], hỏi lần lượt 6 câu về cách xác định vấn đề, độ tin cậy bằng chứng, phương án bị loại, trade-off, human checkpoint và giới hạn. Đừng trả lời hộ; sau mỗi câu chờ tôi trả lời rồi mới góp ý.",
  "checks": [
   "Slide kể toàn bộ hành trình, không chỉ giải pháp cuối.",
   "Claim quan trọng có nguồn và giới hạn.",
   "Có Q&A log và phản hồi cần sửa.",
   "Demo Package chứa slide và portfolio liên quan."
  ],
  "fields": [
   "Outline slide 1–6",
   "Thời lượng và phân vai",
   "Nguồn cho claim chính",
   "Q&A: câu hỏi | trả lời | bằng chứng | điểm cần sửa",
   "Liên kết portfolio và slide",
   "Kế hoạch sửa sau phản biện"
  ]
 },
 {
  "concepts": [
   [
    "Phản tư có bằng chứng",
    "Reflection không phải “AI hữu ích”. Nêu thời điểm AI giúp mở rộng suy nghĩ, một lỗi cụ thể, cách bạn phát hiện và sửa, cùng thay đổi phương pháp nếu làm lại."
   ],
   [
    "Bảo vệ quyết định",
    "Câu hỏi cuối tập trung vào lý do chọn giải pháp dưới ràng buộc. Nêu yếu tố nào khiến bạn sẵn sàng đổi quyết định khi có dữ liệu mới."
   ],
   [
    "Tiếp nối dự án",
    "Portfolio kết thúc bằng giả thuyết cần thử nghiệm, dữ liệu cần lấy, người duyệt và thước đo thành công. Đây là cầu nối sang RBL, capstone hoặc thực hành nghề nghiệp."
   ]
  ],
  "example": "Ban đầu nhóm tin rằng thêm camera sẽ giải quyết ùn xe; quan sát lại chỉ ra đỉnh lưu lượng và thao tác quét thẻ. Reflection tốt mô tả AI từng củng cố giả định camera như thế nào, nhóm kiểm tra bằng số liệu gì và điều chỉnh hướng thử nghiệm ra sao.",
  "process": [
   "Rà phản hồi showcase và chỉnh slide/portfolio ở các claim có thể sửa kịp.",
   "Hoàn tất demo vòng hai hoặc bảo vệ bổ sung theo phân công.",
   "Viết reflection 300–500 từ trả lời bốn câu: AI giúp nhiều nhất ở đâu; AI sai ở đâu; học được gì; làm lại sẽ đổi gì.",
   "Đề xuất bước thử nghiệm tiếp theo, chỉ số thành công, nguồn dữ liệu và người chịu trách nhiệm.",
   "Nộp ART10 cùng bản portfolio cuối và AI Declaration."
  ],
  "prompt": "Hãy làm người phỏng vấn phản tư: hỏi tôi về một sai lầm cụ thể khi dùng AI, bằng chứng phát hiện lỗi và thay đổi của tôi. Sau khi tôi trả lời, chỉ ra chỗ còn chung chung và hỏi tiếp; không viết hộ bài reflection.",
  "checks": [
   "Reflection 300–500 từ có tình huống và bằng chứng cụ thể.",
   "Nêu được AI sai ở đâu và người học đã sửa gì.",
   "Có kế hoạch tiếp theo và điều kiện đổi quyết định.",
   "Đủ ART1–ART10, AI Conversation Log và AI Declaration."
  ],
  "fields": [
   "AI giúp nhiều nhất ở đâu (ví dụ cụ thể)",
   "AI sai ở đâu / bằng chứng phát hiện",
   "Tôi đã sửa và học được điều gì",
   "Nếu làm lại, tôi sẽ đổi gì",
   "Bước thử nghiệm kế tiếp và thước đo",
   "Checklist nộp ART1–ART10"
  ]
 }
];
