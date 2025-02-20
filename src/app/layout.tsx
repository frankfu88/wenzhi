import Navbar from "./Navbar"; // ✅ 正確導入 Navbar (大寫)
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
        <Navbar /> {/* ✅ 直接使用獨立的 Navbar */}

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
