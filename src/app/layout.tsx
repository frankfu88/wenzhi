import Navbar from "./Navbar"; // ✅ 引入 Navbar
import Banner from "./Banner"; // ✅ 引入 Banner
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>東南動物醫院</title>
      </head>
      <body className="bg-white text-gray-900">
        <Navbar /> {/* ✅ Navbar (漢堡選單) */}
        <Banner /> {/* ✅ 加入 Banner，確保手機版適應 */}

        {/* 🔹 主要內容 */}
        <main className="pt-[100px] px-4">{children}</main>

        {/* 🔹 頁尾 */}
        <footer className="bg-blue-100 text-center py-6 mt-12 text-gray-700">
          <p>© {new Date().getFullYear()} 東南動物醫院 - 守護毛孩的健康</p>
        </footer>
      </body>
    </html>
  );
}
