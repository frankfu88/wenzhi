"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // 確保 Client Side 渲染

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // **滾動處理**
  const handleNavClick = (id: string) => {
    if (!isClient) return;

    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <header className="bg-white text-gray-900 py-4 fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-lg font-bold">東南動物醫院</Link>

        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>☰</button>

        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <button onClick={() => handleNavClick("about")} className="hover:text-gray-600">關於我們</button>
          <button onClick={() => handleNavClick("director")} className="hover:text-gray-600">院長資訊</button>

          {/* 🔹 只負責滾動的主治項目 */}
          <button onClick={() => handleNavClick("services")} className="hover:text-gray-600">
            主治項目
          </button>

          <Link href="/pricing" className="hover:text-gray-600">價格一覽</Link>
          <button onClick={() => handleNavClick("contact")} className="hover:text-gray-600">聯絡方式</button>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-gray-100 text-gray-900 py-4 space-y-3 text-center">
          <button onClick={() => handleNavClick("about")} className="block hover:bg-gray-200 py-2">關於我們</button>
          <button onClick={() => handleNavClick("director")} className="block hover:bg-gray-200 py-2">院長資訊</button>
          <button onClick={() => handleNavClick("services")} className="block hover:bg-gray-200 py-2">主治項目</button>
          <Link href="/pricing" className="block hover:bg-gray-200 py-2">價格一覽</Link>
          <button onClick={() => handleNavClick("contact")} className="block hover:bg-gray-200 py-2">聯絡方式</button>
        </nav>
      )}
    </header>
  );
}
