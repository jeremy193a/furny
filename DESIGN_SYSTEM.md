# Furny Asia - Design System & UI Architecture

Tài liệu này ghi lại cách tiếp cận, cấu trúc và các công nghệ đã được sử dụng để xây dựng giao diện cao cấp (premium aesthetic) cho website Furny Asia.

## 1. Core Stack (Công Nghệ Cốt Lõi)

*   **Next.js 15+ (App Router):** Xây dựng cấu trúc trang, tối ưu hóa (routing, SSR/SSG) và render component (mix giữa Server và Client Components).
*   **Tailwind CSS v4:** Quản lý style (utility-first CSS). Phiên bản v4 sử dụng cú pháp `@theme` mới mẻ và cực kỳ linh hoạt thay cho `tailwind.config.js` cũ.
*   **Framer Motion:** Thư viện xử lý hiệu ứng mượt mà (animations) cho UI, đặc biệt là các hiệu ứng scroll-reveal (hiện ra khi cuộn trang) và hover.
*   **Lucide React:** Quản lý toàn bộ SVG Icon thống nhất, nhẹ và dễ tùy chỉnh qua các class Tailwind.
*   **Clsx & Tailwind-merge (`cn` utility):** Cho phép nối các utility class của Tailwind một cách an toàn mà không bị ghi đè không mong muốn (conflict), đặc biệt hữu dụng trong các reusable components như Button.

## 2. Typography (Kiểu Chữ)

Kiểu chữ được quản lý và tự động tối ưu qua gói `next/font/google`:
*   **Heading Font (Tiêu đề):** `Outfit` (sans-serif) - Mang lại cảm giác hiện đại, hình học nhẹ nhàng, tạo độ sang trọng cho xuất khẩu nội thất. Áp dụng qua class `font-heading`.
*   **Body Font (Văn bản thường):** `Inter` (sans-serif) - Tối ưu cho khả năng đọc hiển thị, chuẩn mực trên cả mobile và desktop.

## 3. Color Palette & Theming (Màu Sắc)

Toàn bộ biến CSS (Custom CSS Variables) được thiết lập tại file thư mục gốc `src/app/globals.css`, hỗ trợ sẵn nền tảng Light/Dark Mode sau này. Layout lấy cảm hứng từ thương hiệu đồ gỗ xuất khẩu, cần cảm giác trầm ấm nhưng tối giản.

*   `--background`: `0 0% 98%` (Pearl white - Trắng ngọc trai)
*   `--foreground`: `240 10% 3.9%` (Đen nhạt, dễ đọc hơn đen tuyền)
*   `--primary`: `209 23% 20%` (Forest Slate - Xanh đen vân đá, làm màu chủ đạo tạo độ "trust")
*   `--accent`: `45 40% 50%` (Muted Gold - Vàng trầm đồng cổ điển, tạo điểm nhấn cao cấp)
*   `--secondary`: `210 20% 96%` (Gray sương mù nhẹ nhàng dùng làm màu nền cho khối/card)

Trong Tailwind, chúng được gọi ra thông qua cú pháp tương ứng: `bg-primary`, `text-accent`, `bg-background`, v.v...

## 4. UI Patterns (Các Mẫu Thiết Kế Nổi Bật)

### 4.1. Glassmorphism & Depth
Cảm giác sang trọng được hình thành từ việc sử dụng khéo léo blur và shadow mờ:
*   Được áp dụng tại `Header`: Lớp nền trong suốt với hiệu ứng mờ (`bg-background/80 backdrop-blur-md`).
*   Các thẻ (Card) / Ảnh (Images): Hình ảnh luôn có lớp viền bo tròn (`rounded-2xl`, `rounded-3xl`) và hiệu ứng đổ bóng tĩnh/động mượt (`shadow-xl shadow-black/5`).

### 4.2. Khung Bố Cục (Layout/Grid)
*   **Bento Grid (Projects Page):** Dùng thuộc tính `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` kết hợp với `auto-rows` và `row-span-2`/`col-span-2` để dệt các ảnh có tỷ lệ Dọc (Tall) - Ngang (Wide) lồng ghép mượt mà như phòng triển lãm (Gallery).
*   **Content Sections (Home, About, Expertise):** Sử dụng `container mx-auto px-4 sm:px-6 lg:px-8` duy trì độ rộng an toàn và tự động responsive tốt trên cả điện thoại (Mobile-first). Mọi thẻ bài (bài viết, timeline, values) được bọc trong Grid rõ ràng để thẳng hàng.

### 4.3. Framer Motion Animations (Hiệu ứng)
*   **Variants:** Xây dựng sẵn 2 object hiệu ứng chuẩn là `fadeIn` và `staggerContainer` để tái sử dụng, giúp code không bị rườm rà.
    *   `fadeIn`: Giúp item mờ và trượt lên (`opacity: 0, y: 20` sang `opacity: 1, y: 0`).
    *   `staggerContainer`: Dùng cho khối cha (Parent) để điều khiển thời gian các khối item con (Children) lệch nhau (vd: `staggerChildren: 0.1`) tạo hiệu ứng rơi nhẹ lần lượt đẹp mắt.
*   **Scroll Reveal (Cuộn tới đâu, hiện tới đó):** Kích hoạt bằng thuôc tính `whileInView="visible"` và `viewport={{ once: true }}` của Framer Motion. Hiệu ứng sẽ chạy 1 lần khi User kéo màn hình (scroll) tới section đó.

## 5. File Structure (Cấu trúc Thư Mục Giao Diện)

*   `src/app/globals.css`: Thiết lập toàn cục, định nghĩa token Design System.
*   `src/app/layout.tsx`: Gắn Global font, Header và Footer.
*   `src/lib/utils.ts`: Chứa hàm `cn` thiết yếu.
*   `src/components/layout/header.tsx` & `footer.tsx`: UI nền tảng của trang.
*   `src/app/.../page.tsx`: Giao diện cụ thể cho mỗi module chức năng. Mọi page cần render UI animation đều phải khai báo chỉ thị `"use client";` ở dòng đầu tiên.

## Lời Kết
Hệ thống UI này có khả năng mở rộng (scalable) rất cao, cho phép bạn dễ dàng tinh chỉnh CSS variables trong tương lai nếu có thay đổi trong nhận diện thương hiệu mà không cần sửa chữa hàng loạt file TSX.
