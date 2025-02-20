"use client"; // ✅ 讓這個組件變成 Client Component

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white py-4 fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-lg font-bold">東南動物醫院</h1>

        {/* 🔹 漢堡選單按鈕 (手機版) */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* 🔹 桌面版選單 */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#about" className="hover:text-gray-300">關於我們</a>
          <a href="#director" className="hover:text-gray-300">院長資訊</a>
          <a href="#services" className="hover:text-gray-300">主治項目</a>
          <a href="#contact" className="hover:text-gray-300">聯絡方式</a>
        </nav>
      </div>

      {/* 🔹 漢堡選單 (手機版) */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700 text-white py-4 space-y-3 text-center">
          <a href="#about" className="block hover:bg-blue-500 py-2">關於我們</a>
          <a href="#director" className="block hover:bg-blue-500 py-2">院長資訊</a>
          <a href="#services" className="block hover:bg-blue-500 py-2">主治項目</a>
          <a href="#contact" className="block hover:bg-blue-500 py-2">聯絡方式</a>
        </nav>
      )}
    </header>
  );
}
