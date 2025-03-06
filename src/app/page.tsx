"use client";

import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaw } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); // ✅ 用於導航到獨立頁面
  
  return (
    <main className="bg-[#E6D6CC] text-gray-900">
      {/* 🔹 關於我們 */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 關於我們
        </h2>
        <div className="bg-white shadow-xl rounded-xl p-8 mt-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            因為對動物的熱愛，我們踏入動物醫療的世界，轉眼間已走過多年時光。
            懷抱著「讓每位來到醫院的毛小孩都能安心接受最適切的醫療照護，如同回家一般」的初衷，我們一步步創立了東南動物醫院。
            <br />
            <br />
            我們深信，醫療並非絕對的對與錯，而是透過細心觀察、理性判斷與專業討論，不斷精進診療方式，為毛孩提供更完善的照護。
            <br />
            <br />
            東南動物醫院，與您一同守護毛孩的每一天 ❤️。
          </p>
        </div>
      </section>

      {/* 🔹 院長資訊 */}
      <section id="director" className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/director.jpg"
            alt="院長 劉彥杰"
            width={600}
            height={600}
            className="rounded-xl border-4 border-yellow-500 shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-3xl font-bold text-[#5A4032] flex items-center gap-2">
            <FaPaw className="text-yellow-500" /> 院長資訊
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            劉彥杰院長擁有 35 年以上動物醫療經驗，堪稱獸醫界百科全書。
            <br />
            溫暖又熱心的院長率領所有東南專業醫師群來為大家服務，毛孩們健康是我們最大的心願！🐶🐱
          </p>
        </div>
      </section>

      {/* 🔹 主治項目 */}
      <section id="services" className="max-w-6xl mx-auto py-16 px-6 text-center bg-[#9D8575] text-white shadow-xl rounded-xl">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 主治項目
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* 🔹 內科診療 - 可點擊導向 `/internal` */}
          <div
            onClick={() => router.push("/internal")} 
            className="bg-[#E6D6CC] shadow-md rounded-xl p-6 text-lg flex items-center gap-2 cursor-pointer hover:bg-[#d5c3b8] transition"
          >
            <FaPaw className="text-yellow-500 text-2xl" /> 內科
          </div>

          {/* 🔹 外科 - 可點擊導向 `/surgery` */}
          <div
            onClick={() => router.push("/surgery")} 
            className="bg-[#E6D6CC] shadow-md rounded-xl p-6 text-lg flex items-center gap-2 cursor-pointer hover:bg-[#d5c3b8] transition"
          >
            <FaPaw className="text-yellow-500 text-2xl" /> 外科
          </div>
          
          {/* 🔹 健康檢查與疫苗接種 - 可點擊導向 `/vaccination` */}
          <div
            onClick={() => router.push("/vaccination")} 
            className="bg-[#E6D6CC] shadow-md rounded-xl p-6 text-lg flex items-center gap-2 cursor-pointer hover:bg-[#d5c3b8] transition"
          >
            <FaPaw className="text-yellow-500 text-2xl" /> 健康檢查與疫苗接種
          </div>

          {/* 🔹 諾亞寵物高壓氧 - 可點擊導向 `/oxygen` */}
          <div
            onClick={() => router.push("/oxygen")} 
            className="bg-[#E6D6CC] shadow-md rounded-xl p-6 text-lg flex items-center gap-2 cursor-pointer hover:bg-[#d5c3b8] transition"
          >
            <FaPaw className="text-yellow-500 text-2xl" /> 諾亞寵物高壓氧
          </div>
        </div>
      </section>
          

      {/* 🔹 聯絡方式 */}
      <section id="contact" className="max-w-6xl mx-auto py-16 px-6 text-center bg-white shadow-xl rounded-xl">
        <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 聯絡方式
        </h2>
        <div className="bg-[#E6D6CC] shadow-lg rounded-xl p-8 mt-6">
          <p className="text-lg flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            地址：台中市北屯區崇德路二段30號
          </p>
          <p className="text-lg flex items-center justify-center gap-2 mt-2">
            <FaPhone className="text-green-500" />
            電話：04-2296-0753
          </p>
          <p className="text-lg flex items-center justify-center gap-2 mt-2">
            <FaEnvelope className="text-red-500" />
            信箱：ufat0305@gmail.com
          </p>
        </div>

        {/* 🔹 Google 地圖嵌入 (最佳化) */}
        <div className="mt-8 w-full flex justify-center">
          <iframe
            title="Google Maps - 台中市北屯區崇德路二段30號"
            className="w-full max-w-[1100px] h-[300px] rounded-lg shadow-lg"
            src="https://www.google.com/maps?q=台中市北屯區崇德路二段30號&output=embed&hl=zh-TW"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
