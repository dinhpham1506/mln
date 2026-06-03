# M là ai?

Website truyện tương tác cinematic bằng HTML, CSS và JavaScript thuần.

## Cách chạy

Mở `index.html` trực tiếp trên trình duyệt, hoặc chạy một static server trong thư mục này.

## Cấu trúc chính

- `index.html`: chỉ chứa khung `#app` và link CSS/JS.
- `js/storyData.js`: toàn bộ nội dung truyện, scene, ảnh, text box, font và button.
- `js/ui.js`: render menu, scene, popup, layer ảnh, khung chữ và lựa chọn.
- `js/audio.js`: quản lý nhạc nền, âm click và bật/tắt âm thanh.
- `css/`: style menu, truyện, button và responsive.
- `images/`: ảnh menu, cảnh truyện, ending và UI.
- `texts/`: nội dung phụ cho hướng dẫn, nhóm và ghi chú triết học.

## Sửa nội dung truyện

Chỉnh trực tiếp object trong `js/storyData.js`. Mỗi scene có thể đổi:

- `images`: tối đa 3 layer ảnh.
- `textBox`: vị trí và kiểu khung chữ.
- `textStyle`: font, cỡ chữ, màu và canh lề.
- `buttons`: nút tiếp tục, lựa chọn, chơi lại hoặc về menu.

Các ảnh placeholder có thể thay bằng ảnh thật, miễn giữ đúng đường dẫn hoặc cập nhật lại `src` trong `storyData.js`.
