import "@/styles/globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>東南動物醫院</title>
      </head>
      <body className="bg-white text-gray-900">
        {/* 🔹 導覽列 */}
        <header className="bg-blue-600 text-white py-4 fixed top-0 left-0 w-full z-50 shadow-md">
          <nav className="max-w-6xl mx-auto flex justify-center space-x-8 text-lg font-medium">
            <a href="#about" className="hover:text-gray-300">關於我們</a>
            <a href="#director" className="hover:text-gray-300">院長資訊</a>
            <a href="#services" className="hover:text-gray-300">主治項目</a>
            <a href="#contact" className="hover:text-gray-300">聯絡方式</a>
          </nav>
        </header>

        {/* 🔹 主要內容 */}
        <main className="pt-[80px] px-4">{children}</main>

        {/* 🔹 頁尾 */}
        <footer className="bg-blue-100 text-center py-6 mt-12 text-gray-700">
          <p>© {new Date().getFullYear()} 東南動物醫院 - 守護毛孩的健康</p>
        </footer>
      </body>
    </html>
  );
}
