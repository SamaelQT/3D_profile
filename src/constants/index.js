import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Nhà phát triển React.js",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Tháng 3 năm 2020 - Tháng 4 năm 2021",
        points: [
            "Phát triển và duy trì các ứng dụng web bằng React.js và các công nghệ liên quan khác.",
            "Cộng tác với các nhóm đa chức năng bao gồm nhà thiết kế, quản lý sản phẩm và các nhà phát triển khác để tạo ra các sản phẩm chất lượng cao.",
            "Triển khai thiết kế đáp ứng và đảm bảo khả năng tương thích giữa nhiều trình duyệt.",
            "Tham gia đánh giá mã và cung cấp phản hồi mang tính xây dựng cho các nhà phát triển khác.",
        ],
    },
    {
        title: "Nhà phát triển React",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Tháng 1 năm 2021 - Tháng 2 năm 2022",
        points: [
            "Phát triển và duy trì các ứng dụng web bằng React.js và các công nghệ liên quan khác.",
            "Cộng tác với các nhóm đa chức năng bao gồm nhà thiết kế, quản lý sản phẩm và các nhà phát triển khác để tạo ra các sản phẩm chất lượng cao.",
            "Triển khai thiết kế đáp ứng và đảm bảo khả năng tương thích giữa nhiều trình duyệt.",
            "Tham gia đánh giá mã và cung cấp phản hồi mang tính xây dựng cho các nhà phát triển khác.",
        ],
    },
    {
        title: "Nhà phát triển web",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Tháng 1 năm 2022 - Tháng 1 năm 2023",
        points: [
            "Phát triển và duy trì các ứng dụng web bằng React.js và các công nghệ liên quan khác.",
            "Cộng tác với các nhóm đa chức năng bao gồm nhà thiết kế, quản lý sản phẩm và các nhà phát triển khác để tạo ra các sản phẩm chất lượng cao.",
            "Triển khai thiết kế đáp ứng và đảm bảo khả năng tương thích giữa nhiều trình duyệt.",
            "Tham gia đánh giá mã và cung cấp phản hồi mang tính xây dựng cho các nhà phát triển khác.",
        ],
    },
    {
        title: "Lập trình viên full stack",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "01/2023 - Hiện tại",
        points: [
            "Phát triển và duy trì các ứng dụng web bằng React.js và các công nghệ liên quan khác.",
            "Cộng tác với các nhóm đa chức năng bao gồm nhà thiết kế, quản lý sản phẩm và các nhà phát triển khác để tạo ra các sản phẩm chất lượng cao.",
            "Triển khai thiết kế đáp ứng và đảm bảo khả năng tương thích giữa nhiều trình duyệt.",
            "Tham gia đánh giá mã và cung cấp phản hồi mang tính xây dựng cho các nhà phát triển khác.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SamaelQT',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/quang-h%E1%BB%93-h%E1%BB%AFu-866a81308/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Phát triển ứng dụng web theo dõi và thông báo cho người dùng về sự thay đổi giá của các sản phẩm trên Amazon, giúp người dùng tìm được những ưu đãi tốt nhất.',
        link: 'https://github.com/SamaelQT',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Đã tạo bản sao đầy đủ của nền tảng thảo luận phổ biến "Chủ đề", cho phép người dùng đăng và tham gia vào các cuộc hội thoại theo chuỗi.',
        link: 'https://github.com/SamaelQT',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Thiết kế và xây dựng ứng dụng di động giúp tìm kiếm, so sánh các loại xe trên thị trường, đơn giản hóa quy trình mua xe.',
        link: 'https://github.com/SamaelQT',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Xây dựng bản sao hoàn chỉnh của Instagram, cho phép người dùng chia sẻ ảnh và kết nối với bạn bè trong môi trường mạng xã hội quen thuộc.',
        link: 'https://github.com/SamaelQT',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Phát triển ứng dụng web đăng tin bất động sản, hỗ trợ tìm kiếm bất động sản và kết nối người mua với người bán.',
        link: 'https://github.com/SamaelQT',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'Ứng dụng tận dụng AI để tự động tạo các bản tóm tắt ngắn gọn và giàu thông tin từ nội dung văn bản hoặc blog dài.',
        link: 'https://github.com/SamaelQT',
    }
];