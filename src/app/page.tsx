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
            東南動物醫院，與您一同守護毛孩的每一天。
          </p>
        </div>

        {/* 🔹 東南動物醫院的優勢 */}
        <div className="bg-white shadow-xl rounded-xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
            <FaPaw className="text-yellow-500" /> 東南動物醫院的優勢
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              { title: "隔離病房", description: "提供安全的隔離環境，有效防止傳染病擴散。" },
              { title: "犬貓重症ICU病房", description: "專業監護設備，24 小時照護危重動物。" },
              { title: "寵物保險指定醫院", description: "支援多種寵物保險，減輕您的醫療負擔。" }
            ].map((advantage, index) => (
              <div key={index} className="bg-[#F5F1ED] shadow-md rounded-xl p-6 text-lg text-center">
                <h3 className="text-xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
                  <FaPaw className="text-yellow-500" /> {advantage.title}
                </h3>
                <p className="mt-2 text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 院長資訊 */}
      <section id="director" className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row items-center gap-8">
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
            溫暖又熱心的院長率領所有東南專業醫師群來為大家服務，毛孩們健康是我們最大的心願！
          </p>
        </div>
      </section>

      {/* 🔹 主治項目 */}
      <section id="services" className="max-w-6xl mx-auto py-16 px-6 text-center bg-[#9D8575] text-white shadow-xl rounded-xl">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 主治項目
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* 🔹 內科 - 可點擊導向 `/internal` */}
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

        {/* 🔹 聯絡資訊 + 門診 & 探視時間 */}
        <div className="bg-[#E6D6CC] shadow-lg rounded-xl p-8 mt-6">
          {/* 地址 & 聯絡資訊 */}
          <div className="text-lg flex flex-col items-center gap-2">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              地址：台中市北屯區崇德路二段30號
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-green-500" />
              電話：04-22960753
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-red-500" />
              信箱：ufat0305@gmail.com
            </p>
            <p className="flex items-center gap-2">
              LINE線上諮詢：@869dqxmv
            </p>
          </div>

          {/* 門診時間 & 探視時間 - 並排顯示 */}
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-12">
            {/* 🔹 門診時間 */}
            <div className="flex-1 text-lg">
              <h3 className="text-2xl font-bold text-[#5A4032] mb-2">門診時間</h3>
              <p>周一到周日</p>
              <ul className="mt-2 space-y-1">
                <li>早上 09:30 - 12:30（最後掛號 12:00）</li>
                <li>下午 14:00 - 17:00（最後掛號 16:30）</li>
                <li>晚上 18:00 - 21:30（最後掛號 21:00）</li>
              </ul>
            </div>

            {/* 🔹 探視時間 */}
            <div className="flex-1 text-lg">
              <h3 className="text-2xl font-bold text-[#5A4032] mb-2">探視時間</h3>
              <p>周一到周日</p>
              <ul className="mt-2 space-y-1">
                <li>15:00 - 16:00</li>
                <li>19:00 - 20:00</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 🔹 Google 地圖嵌入 */}
        <div className="w-full flex justify-center mt-8">
          <iframe
            title="Google Maps - 東南動物醫院"
            className="w-full max-w-[1100px] h-[400px] rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.072584003638!2d120.68288137534898!3d24.169187078387015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917d27e1e8af1%3A0x1dfee24ec4a2365d!2z5p2x5Y2X5YuV54mp6Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1741936559984!5m2!1szh-TW!2stw"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* 🔹 停車資訊 */}
        <div className="mt-12 bg-[#E6D6CC] shadow-lg rounded-xl p-8">
          <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
            <FaPaw className="text-yellow-500" /> 停車資訊
          </h2>
          <p className="text-lg text-center text-gray-700 mt-2">
            附近有多個停車場可供使用，請參考下方地圖。
          </p>

          {/* 🔹 停車場地圖嵌入 */}
          <div className="w-full flex justify-center mt-6">
            <iframe
              title="Google Maps - 附近停車資訊"
              className="w-full max-w-[1100px] h-[400px] rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3640.072584003638!2d120.68288137534898!3d24.169187078387015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5YGc6LuK5aC0!5e0!3m2!1szh-TW!2stw!4v1741941784500!5m2!1szh-TW!2stw"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>



    </main>
  );
}
