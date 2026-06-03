const storyData = {
  start: {
    id: "start",
    type: "story",
    title: "Cảnh 1: M lên thành phố",
    mood: "normal",
    images: [
      { src: "images/scenes/01_m_len_thanh_pho.png", type: "background", position: "center", animation: "slowZoom" }
    ],
    speaker: "Dẫn truyện",
    dialogType: "narrator",
    text: "M là sinh viên năm nhất, vừa rời quê lên thành phố học đại học. Trước mắt M là một môi trường mới: đông hơn, nhanh hơn, nhiều cơ hội hơn, nhưng cũng nhiều áp lực hơn.\n\nM nhìn những nhóm sinh viên xung quanh. Ai cũng có vẻ tự tin, hòa nhập và biết mình đang làm gì. Còn M thì vẫn đang loay hoay tìm chỗ đứng.",
    textBox: { position: "bottom", width: "76%", background: "darkBlur" },
    textStyle: { fontFamily: "serif", fontSize: "21px", color: "#ffffff", align: "left", lineHeight: "1.6" },
    buttons: [{ type: "primary", icon: "⏭", label: "Tiếp tục", next: "start_inner" }]
  },

  start_inner: {
    id: "start_inner",
    type: "story",
    title: "Không thuộc về nơi này",
    mood: "lonely",
    images: [
      { src: "images/scenes/01_m_len_thanh_pho.png", type: "background", position: "center", animation: "blurIn" },
      { src: "images/scenes/04_m_noi_tam.png", type: "effect", position: "center", animation: "fadePulse" }
    ],
    speaker: "Nội tâm M",
    dialogType: "inner",
    text: "Không biết mình có hợp với nơi này không...\n\nCon người không sống tách khỏi môi trường. Ngay từ đầu, M đã bắt đầu chịu tác động từ trường học, bạn bè và nhịp sống thành phố.",
    textBox: { position: "center", width: "62%", background: "innerThought" },
    textStyle: { fontFamily: "handwriting", fontSize: "25px", color: "#fff6db", align: "center", lineHeight: "1.55" },
    buttons: [{ type: "primary", icon: "⏭", label: "Tiếp tục", next: "online_image" }]
  },

  online_image: {
    id: "online_image",
    type: "story",
    title: "Cảnh 2: M xem mạng xã hội",
    mood: "social",
    images: [
      { src: "images/scenes/02_m_song_ao.png", type: "background", position: "center", animation: "slowZoom" },
      { src: "images/scenes/02_notifications.png", type: "effect", position: "right", animation: "fadePulse" }
    ],
    speaker: "Dẫn truyện",
    dialogType: "narrator",
    text: "Tối hôm đó, M mở mạng xã hội. Bạn bè đăng ảnh nhập học, tham gia câu lạc bộ, đi chơi cùng nhóm mới. Ai cũng có vẻ năng động và tích cực.\n\nM bắt đầu so sánh bản thân với họ. M chưa làm gì sai, nhưng lại cảm thấy mình đang thua kém.",
    textBox: { position: "left", width: "42%", background: "phoneChat" },
    textStyle: { fontFamily: "serif", fontSize: "20px", color: "#ffffff", align: "left", lineHeight: "1.6" },
    buttons: [{ type: "primary", icon: "⏭", label: "Tiếp tục", next: "online_inner" }]
  },

  online_inner: {
    id: "online_inner",
    type: "story",
    title: "So sánh",
    mood: "pressure",
    images: [
      { src: "images/scenes/02_m_song_ao.png", type: "background", position: "center", animation: "glitch" }
    ],
    speaker: "Nội tâm M",
    dialogType: "inner",
    text: "Ai cũng có vẻ đang sống tốt hơn mình.\n\nMạng xã hội trở thành một quan hệ xã hội mới. Nó tác động đến cách M nhìn chính mình.",
    textBox: { position: "bottom", width: "72%", background: "innerThought" },
    textStyle: { fontFamily: "handwriting", fontSize: "25px", color: "#ffffff", align: "center", lineHeight: "1.5" },
    buttons: [{ type: "primary", icon: "⏭", label: "Tiếp tục", next: "first_post" }]
  },

  first_post: {
    id: "first_post",
    type: "story",
    title: "Cảnh 3: Bài đăng online đầu tiên",
    mood: "bright",
    images: [
      { src: "images/scenes/03_bai_dang_dau_tien.png", type: "background", position: "center", animation: "slowZoom" },
      { src: "images/scenes/02_notifications.png", type: "effect", position: "right", animation: "fadePulse" }
    ],
    speaker: "Bạn bè bình luận",
    dialogType: "character",
    text: "M chụp một tấm ảnh ở sân trường và đăng lên mạng với hình ảnh vui vẻ, tự tin. Bài đăng nhận được nhiều lượt thích và bình luận.\n\n“Nhìn tích cực quá!”\n“Bạn truyền cảm hứng thật đó.”\n\nLần đầu tiên sau khi lên thành phố, M cảm thấy mình được chú ý.",
    textBox: { position: "right", width: "42%", background: "phoneChat" },
    textStyle: { fontFamily: "sans", fontSize: "19px", color: "#ffffff", align: "left", lineHeight: "1.55" },
    buttons: [{ type: "primary", icon: "⏭", label: "Tiếp tục", next: "first_post_inner" }]
  },

  first_post_inner: {
    id: "first_post_inner",
    type: "story",
    title: "Được công nhận",
    mood: "bright",
    images: [
      { src: "images/scenes/03_bai_dang_dau_tien.png", type: "background", position: "center", animation: "blurIn" }
    ],
    speaker: "Nội tâm M",
    dialogType: "inner",
    text: "Hóa ra mọi người thích một M như thế này.\n\nM bắt đầu tạo ra một hình ảnh xã hội của bản thân. Sự công nhận từ người khác làm M thấy mình có giá trị.",
    textBox: { position: "center", width: "60%", background: "innerThought" },
    textStyle: { fontFamily: "handwriting", fontSize: "25px", color: "#fff6db", align: "center", lineHeight: "1.5" },
    buttons: [{ type: "primary", icon: "⏭", label: "Tiếp tục", next: "real_life" }]
  },

  real_life: {
    id: "real_life",
    type: "story",
    title: "Cảnh 4: Đằng sau màn hình",
    mood: "lonely",
    images: [
      { src: "images/scenes/03_m_co_don.png", type: "background", position: "center", animation: "slowZoom" }
    ],
    speaker: "Dẫn truyện",
    dialogType: "narrator",
    text: "Trên mạng, M là một người vui vẻ. Nhưng ngoài đời, M thường ngồi một mình trong phòng, mệt mỏi vì bài tập, nhớ nhà và áp lực.\n\nM định nhắn cho bạn rằng mình không ổn. Nhưng sau một lúc, M xóa dòng tin nhắn đó.",
    textBox: { position: "bottom", width: "72%", background: "darkBlur" },
    textStyle: { fontFamily: "serif", fontSize: "21px", color: "#ffffff", align: "left", lineHeight: "1.6" },
    buttons: [{ type: "primary", icon: "⏭", label: "Tiếp tục", next: "message_delete" }]
  },

  message_delete: {
    id: "message_delete",
    type: "story",
    title: "Gõ rồi xóa",
    mood: "pressure",
    images: [
      { src: "images/scenes/03_m_co_don.png", type: "background", position: "center", animation: "shakeLight" },
      { src: "images/scenes/02_notifications.png", type: "effect", position: "center", animation: "glitch" }
    ],
    speaker: "M gửi tin nhắn",
    dialogType: "system",
    text: "M gõ rồi xóa:\n“Tao thấy mệt quá.”\n\nM gửi đi:\n“Tao ổn.”\n\nTừ đây, M bắt đầu cảm thấy có hai phiên bản: một M trên mạng và một M ngoài đời.",
    textBox: { position: "right", width: "40%", background: "phoneChat" },
    textStyle: { fontFamily: "mono", fontSize: "19px", color: "#d8fff7", align: "left", lineHeight: "1.55" },
    buttons: [{ type: "primary", icon: "⏭", label: "Tiếp tục", next: "inner_question" }]
  },

  inner_question: {
    id: "inner_question",
    type: "story",
    title: "Mình là ai?",
    mood: "pressure",
    images: [
      { src: "images/scenes/04_m_noi_tam.png", type: "background", position: "center", animation: "slowZoom" }
    ],
    speaker: "Nội tâm M",
    dialogType: "inner",
    text: "Mình đang là mình, hay đang diễn một người khác?\n\nM bắt đầu xa lạ với hình ảnh do chính mình tạo ra. Đây là bước đầu dẫn đến cảm giác tha hóa.",
    textBox: { position: "center", width: "66%", background: "innerThought" },
    textStyle: { fontFamily: "handwriting", fontSize: "27px", color: "#ffffff", align: "center", lineHeight: "1.5" },
    buttons: [{ type: "primary", icon: "⏭", label: "Tiếp tục", next: "two_views" }]
  },

  two_views: {
    id: "two_views",
    type: "story",
    title: "Cảnh 5: M đứng trước lựa chọn",
    mood: "pressure",
    images: [
      { src: "images/scenes/05_hai_quan_diem.png", type: "background", position: "center", animation: "slowZoom" },
      { src: "images/scenes/04_m_noi_tam.png", type: "effect", position: "center", animation: "fadePulse" }
    ],
    speaker: "Dẫn truyện",
    dialogType: "narrator",
    text: "Một đêm, M ngồi trước laptop và điện thoại. Một bên là hình ảnh online tích cực. Một bên là cảm giác mệt mỏi thật sự.\n\nMột suy nghĩ nói rằng: muốn sống thật thì phải bỏ qua mọi ánh nhìn của xã hội.\n\nMột suy nghĩ khác nói rằng: con người vốn thay đổi theo xã hội, nên tiếp tục thích nghi cũng là bình thường.",
    textBox: { position: "top", width: "76%", background: "darkBlur" },
    textStyle: { fontFamily: "serif", fontSize: "20px", color: "#ffffff", align: "left", lineHeight: "1.55" },
    buttons: [{ type: "primary", icon: "⏭", label: "Tiếp tục", next: "main_choice" }]
  },

  main_choice: {
    id: "main_choice",
    type: "choice",
    title: "M chọn cách đối diện",
    mood: "pressure",
    images: [
      { src: "images/scenes/06_nga_re.png", type: "background", position: "center", animation: "slowZoom" }
    ],
    speaker: "Nội tâm M",
    dialogType: "inner",
    text: "Nếu mình không còn là phiên bản trên mạng, vậy mình là ai?\n\nM không biết mình nên tiếp tục diễn, rút lui, chia đôi bản thân hay thử sống thật hơn trong những mối quan hệ đáng tin.",
    textBox: { position: "top", width: "75%", background: "innerThought" },
    textStyle: { fontFamily: "handwriting", fontSize: "24px", color: "#ffffff", align: "center", lineHeight: "1.45" },
    buttons: [
      { type: "choice", icon: "🎭", label: "Tiếp tục diễn theo hình tượng online", next: "branch_perform" },
      { type: "danger", icon: "🚪", label: "Cắt đứt các mối quan hệ", next: "branch_delete_social" },
      { type: "choice", icon: "👁", label: "Hiểu vấn đề nhưng chưa dám thay đổi", next: "ending_half_awareness" },
      { type: "choice", icon: "🌓", label: "Tạo tài khoản phụ để sống thật hơn", next: "ending_split_self" },
      { type: "hope", icon: "🌱", label: "Nói thật hơn với người đáng tin", next: "branch_awareness" }
    ]
  },

  branch_perform: {
    id: "branch_perform",
    type: "story",
    title: "Nhánh A: Tiếp tục duy trì hình ảnh tích cực",
    mood: "pressure",
    images: [
      { src: "images/scenes/07_m_tiep_tuc_dien.png", type: "background", position: "center", animation: "slowZoom" },
      { src: "images/scenes/02_notifications.png", type: "effect", position: "right", animation: "fadePulse" }
    ],
    speaker: "Dẫn truyện",
    dialogType: "narrator",
    text: "M đăng bài nhiều hơn, tham gia nhiều hoạt động hơn, cười nhiều hơn trước mặt mọi người.\n\nNhưng càng được khen, M càng sợ để lộ cảm xúc thật. M không dám mệt, không dám buồn, không dám nói mình đang áp lực.",
    textBox: { position: "bottom", width: "72%", background: "darkBlur" },
    textStyle: { fontFamily: "serif", fontSize: "20px", color: "#ffffff", align: "left", lineHeight: "1.6" },
    buttons: [{ type: "primary", icon: "⏭", label: "Tiếp tục", next: "club_choice" }]
  },

  club_choice: {
    id: "club_choice",
    type: "choice",
    title: "Buổi chia sẻ câu lạc bộ",
    mood: "pressure",
    images: [
      { src: "images/scenes/07_m_tiep_tuc_dien.png", type: "background", position: "center", animation: "shakeLight" }
    ],
    speaker: "Nội tâm M",
    dialogType: "inner",
    text: "Câu lạc bộ mời M chia sẻ về chủ đề “Làm sao để luôn tích cực ở đại học?”.\n\nMình còn không biết cách cứu mình, sao có thể nói với người khác?",
    textBox: { position: "center", width: "68%", background: "innerThought" },
    textStyle: { fontFamily: "handwriting", fontSize: "24px", color: "#ffffff", align: "center", lineHeight: "1.5" },
    buttons: [
      { type: "danger", icon: "🎭", label: "Nhận lời và tiếp tục diễn", next: "ending_alienation" },
      { type: "hope", icon: "🌱", label: "Nhận lời nhưng nói thật một phần", next: "ending_partial_freedom" },
      { type: "choice", icon: "🌓", label: "Từ chối vì sợ bị lộ con người thật", next: "avoid_choice" }
    ]
  },

  avoid_choice: {
    id: "avoid_choice",
    type: "choice",
    title: "Không dám diễn, cũng không dám thật",
    mood: "pressure",
    images: [
      { src: "images/scenes/03_m_co_don.png", type: "background", position: "center", animation: "slowZoom" }
    ],
    speaker: "Nội tâm M",
    dialogType: "inner",
    text: "Nếu mọi người biết mình không ổn, họ còn thích mình không?",
    textBox: { position: "center", width: "62%", background: "innerThought" },
    textStyle: { fontFamily: "handwriting", fontSize: "25px", color: "#ffffff", align: "center", lineHeight: "1.5" },
    buttons: [
      { type: "hope", icon: "🌱", label: "Tâm sự với một người bạn đáng tin", next: "ending_partial_freedom" },
      { type: "danger", icon: "🚪", label: "Cắt liên lạc với mọi người", next: "ending_isolation" },
      { type: "choice", icon: "🌓", label: "Tạo tài khoản phụ để đăng cảm xúc thật", next: "ending_split_self" }
    ]
  },

  branch_delete_social: {
    id: "branch_delete_social",
    type: "story",
    title: "Nhánh B: M xóa mạng xã hội",
    mood: "lonely",
    images: [
      { src: "images/scenes/08_xoa_mang_xa_hoi.png", type: "background", position: "center", animation: "blurIn" }
    ],
    speaker: "Dẫn truyện",
    dialogType: "narrator",
    text: "M xóa bớt bài đăng, tắt thông báo và rời khỏi các nhóm chat.\n\nBan đầu, M thấy nhẹ nhõm. Không còn phải đăng bài, không còn phải cười, không còn phải chứng minh mình đang sống tốt.\n\nNhưng vài ngày sau, sự nhẹ nhõm biến thành trống rỗng.",
    textBox: { position: "bottom", width: "72%", background: "darkBlur" },
    textStyle: { fontFamily: "serif", fontSize: "20px", color: "#ffffff", align: "left", lineHeight: "1.6" },
    buttons: [{ type: "primary", icon: "⏭", label: "Tiếp tục", next: "friend_message_choice" }]
  },

  friend_message_choice: {
    id: "friend_message_choice",
    type: "choice",
    title: "Tin nhắn hỏi thăm",
    mood: "lonely",
    images: [
      { src: "images/scenes/09_tin_nhan_hoi_tham.png", type: "background", position: "center", animation: "slowZoom" }
    ],
    speaker: "Bạn học nhắn",
    dialogType: "character",
    text: "Dạo này không thấy bạn đi học nhóm. Bạn ổn không?\n\nM nhìn tin nhắn rất lâu.",
    textBox: { position: "right", width: "40%", background: "phoneChat" },
    textStyle: { fontFamily: "mono", fontSize: "20px", color: "#d8fff7", align: "left", lineHeight: "1.55" },
    buttons: [
      { type: "danger", icon: "🚪", label: "Không trả lời", next: "ending_isolation" },
      { type: "hope", icon: "🌱", label: "Trả lời thật", next: "ending_partial_freedom" },
      { type: "choice", icon: "👁", label: "Trả lời qua loa", next: "half_choice" }
    ]
  },

  half_choice: {
    id: "half_choice",
    type: "choice",
    title: "Không diễn nữa chưa chắc đã sống thật",
    mood: "lonely",
    images: [
      { src: "images/scenes/09_tin_nhan_hoi_tham.png", type: "background", position: "center", animation: "blurIn" }
    ],
    speaker: "Nội tâm M",
    dialogType: "inner",
    text: "M không còn đăng bài tích cực như trước, nhưng cũng không thật sự mở lòng. M nghĩ mình đã sống thật hơn, nhưng thực ra chỉ đang giấu mình theo một cách khác.",
    textBox: { position: "center", width: "68%", background: "innerThought" },
    textStyle: { fontFamily: "handwriting", fontSize: "23px", color: "#ffffff", align: "center", lineHeight: "1.5" },
    buttons: [
      { type: "hope", icon: "🌱", label: "Quay lại học nhóm, không cố diễn", next: "ending_partial_freedom" },
      { type: "danger", icon: "🚪", label: "Tiếp tục sống tách biệt", next: "ending_isolation" },
      { type: "choice", icon: "👁", label: "Chỉ quan sát, không tham gia", next: "ending_half_awareness" }
    ]
  },

  branch_awareness: {
    id: "branch_awareness",
    type: "story",
    title: "Nhánh C: M tự hỏi mình bị điều gì chi phối",
    mood: "reflective",
    images: [
      { src: "images/scenes/10_tu_nhan_thuc.png", type: "background", position: "center", animation: "slowZoom" }
    ],
    speaker: "M viết",
    dialogType: "system",
    text: "Những điều gì đang tạo nên con người mình hiện tại?\n\nGia đình kỳ vọng M mạnh mẽ. Bạn bè nghĩ M năng động. Mạng xã hội thưởng cho M bằng lượt thích. Trường đại học khiến M phải thích nghi. Bản thân M cũng muốn được công nhận.",
    textBox: { position: "left", width: "44%", background: "philosophyBox" },
    textStyle: { fontFamily: "serif", fontSize: "20px", color: "#fff8df", align: "left", lineHeight: "1.58" },
    buttons: [{ type: "primary", icon: "⏭", label: "Tiếp tục", next: "awareness_choice" }]
  },

  awareness_choice: {
    id: "awareness_choice",
    type: "choice",
    title: "Bản chất con người là tổng hòa các quan hệ xã hội",
    mood: "reflective",
    images: [
      { src: "images/scenes/10_tu_nhan_thuc.png", type: "background", position: "center", animation: "blurIn" }
    ],
    speaker: "Nội tâm M",
    dialogType: "inner",
    text: "Muốn hiểu mình, mình phải hiểu những quan hệ đang tạo nên mình.",
    textBox: { position: "center", width: "64%", background: "innerThought" },
    textStyle: { fontFamily: "handwriting", fontSize: "25px", color: "#ffffff", align: "center", lineHeight: "1.5" },
    buttons: [
      { type: "hope", icon: "🌱", label: "Nói chuyện thật với bạn thân", next: "ending_partial_freedom" },
      { type: "hope", icon: "🧭", label: "Gặp cố vấn hoặc thầy cô", next: "ending_partial_freedom" },
      { type: "hope", icon: "📱", label: "Điều chỉnh cách dùng mạng xã hội", next: "ending_partial_freedom" }
    ]
  },

  ending_alienation: {
    id: "ending_alienation",
    type: "ending",
    title: "Kết 1: Tha hóa sâu hơn",
    mood: "ending",
    images: [
      { src: "images/endings/ending_tha_hoa.png", type: "background", position: "center", animation: "glitch" }
    ],
    speaker: "Kết thúc",
    dialogType: "ending",
    text: "M tiếp tục sống theo hình ảnh tích cực mà mọi người mong đợi. M được khen nhiều hơn, được chú ý nhiều hơn, nhưng cũng ngày càng xa lạ với chính mình.\n\nHình ảnh online vốn là sản phẩm do M tạo ra. Nhưng cuối cùng, nó quay lại kiểm soát M.\n\nCâu hỏi mở:\nKhi sản phẩm do con người tạo ra quay lại chi phối con người, đó có phải là tha hóa không?",
    textBox: { position: "center", width: "68%", background: "endingBox" },
    textStyle: { fontFamily: "serif", fontSize: "21px", color: "#ffffff", align: "left", lineHeight: "1.6" },
    buttons: endingButtons()
  },

  ending_isolation: {
    id: "ending_isolation",
    type: "ending",
    title: "Kết 2: Cô lập",
    mood: "ending",
    images: [
      { src: "images/endings/ending_co_lap.png", type: "background", position: "center", animation: "slowZoom" }
    ],
    speaker: "Kết thúc",
    dialogType: "ending",
    text: "M rời khỏi mạng xã hội và tránh xa mọi người. M không còn phải diễn, nhưng cũng không có quan hệ nào đủ thật để chia sẻ, đối thoại và phát triển.\n\nM tưởng sống thật là tách khỏi xã hội. Nhưng con người không thể hiểu và phát triển bản thân nếu hoàn toàn cô lập.\n\nCâu hỏi mở:\nSống thật có phải là rời khỏi mọi quan hệ xã hội không?",
    textBox: { position: "center", width: "68%", background: "endingBox" },
    textStyle: { fontFamily: "serif", fontSize: "21px", color: "#ffffff", align: "left", lineHeight: "1.6" },
    buttons: endingButtons()
  },

  ending_half_awareness: {
    id: "ending_half_awareness",
    type: "ending",
    title: "Kết 3: Nhận thức nửa vời",
    mood: "ending",
    images: [
      { src: "images/endings/ending_nhan_thuc_nua_voi.png", type: "background", position: "center", animation: "blurIn" }
    ],
    speaker: "Kết thúc",
    dialogType: "ending",
    text: "M hiểu rằng mình đang bị áp lực bởi mạng xã hội và kỳ vọng của người khác. Nhưng M không hành động. M vẫn né tránh, vẫn sợ bị đánh giá, vẫn chưa dám xây dựng quan hệ thật hơn.\n\nM có nhận thức, nhưng nhận thức chưa biến thành thay đổi.\n\nCâu hỏi mở:\nChỉ hiểu vấn đề đã đủ chưa, hay con người cần hành động để cải biến hoàn cảnh sống?",
    textBox: { position: "center", width: "68%", background: "endingBox" },
    textStyle: { fontFamily: "serif", fontSize: "21px", color: "#ffffff", align: "left", lineHeight: "1.6" },
    buttons: endingButtons()
  },

  ending_split_self: {
    id: "ending_split_self",
    type: "ending",
    title: "Kết 4: Bản thân bị chia đôi",
    mood: "ending",
    images: [
      { src: "images/endings/ending_chia_doi_ban_than.png", type: "background", position: "center", animation: "glitch" }
    ],
    speaker: "Kết thúc",
    dialogType: "ending",
    text: "M tạo một tài khoản phụ. Ở tài khoản chính, M là người tích cực. Ở tài khoản phụ, M là người mệt mỏi và cô đơn.\n\nM tưởng mình đã có nơi để sống thật. Nhưng thực ra, M chỉ chia mình thành nhiều phiên bản khác nhau.\n\n“Tài khoản nào mới là mình?”",
    textBox: { position: "center", width: "68%", background: "endingBox" },
    textStyle: { fontFamily: "serif", fontSize: "21px", color: "#ffffff", align: "left", lineHeight: "1.6" },
    buttons: endingButtons()
  },

  ending_partial_freedom: {
    id: "ending_partial_freedom",
    type: "ending",
    title: "Kết 5: Giải phóng một phần",
    mood: "hope",
    images: [
      { src: "images/endings/ending_giai_phong_mot_phan.png", type: "background", position: "center", animation: "slowZoom" }
    ],
    speaker: "Kết thúc",
    dialogType: "ending",
    text: "M không biến mất khỏi xã hội. M cũng không tiếp tục diễn theo kỳ vọng xã hội.\n\nM bắt đầu nói thật hơn với người đáng tin, biết từ chối khi quá sức, dùng mạng xã hội có ý thức hơn và chọn những quan hệ giúp mình phát triển thay vì chỉ làm mình kiệt sức.",
    textBox: { position: "center", width: "68%", background: "endingBox" },
    textStyle: { fontFamily: "serif", fontSize: "21px", color: "#ffffff", align: "left", lineHeight: "1.6" },
    buttons: [
      { type: "primary", icon: "⏭", label: "Thông điệp cuối", next: "final_message" },
      { type: "secondary", icon: "↻", label: "Chơi lại", action: "restart" },
      { type: "secondary", icon: "☰", label: "Về menu", action: "menu" }
    ]
  },

  final_message: {
    id: "final_message",
    type: "ending",
    title: "Thông điệp cuối",
    mood: "hope",
    images: [
      { src: "images/endings/ending_giai_phong_mot_phan.png", type: "background", position: "center", animation: "blurIn" }
    ],
    speaker: "Dẫn kết",
    dialogType: "philosophy",
    text: "Qua câu chuyện của M, ta thấy hai quan điểm ban đầu đều có điểm đúng nhưng chưa đầy đủ.\n\nTheo triết học Mác - Lênin, bản chất con người là tổng hòa các quan hệ xã hội. Con người vừa chịu tác động của xã hội, vừa có khả năng nhận thức, lựa chọn và cải biến các quan hệ xã hội của mình.\n\nVì vậy, hướng hợp lý của M không phải là diễn tiếp, cũng không phải là cô lập bản thân. Hướng hợp lý là nhận ra những quan hệ đang chi phối mình, chọn lọc quan hệ lành mạnh hơn, sống thật hơn trong xã hội và từng bước giải phóng bản thân khỏi sự tha hóa.",
    textBox: { position: "center", width: "74%", background: "philosophyBox" },
    textStyle: { fontFamily: "serif", fontSize: "20px", color: "#fff8df", align: "left", lineHeight: "1.62" },
    buttons: endingButtons()
  }
};

function endingButtons() {
  return [
    { type: "secondary", icon: "↻", label: "Chơi lại", action: "restart" },
    { type: "secondary", icon: "☰", label: "Về menu", action: "menu" }
  ];
}
