"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  FaPhone,
  FaMapMarkerAlt,
  FaPaw
} from "react-icons/fa";

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
            文志動物醫院成立於2000年，座落於雲林斗六市，是一所深耕在地、用心守護毛孩健康的專業動物醫療機構。我們相信，每一隻寵物不只是動物，更是家庭的一份子，值得被細心對待與溫柔照護。
            <br /><br />
            本院致力於打造一個以「同理與安心」為核心理念的就診空間，從診療動線到環境設計、從掛號流程到診療溝通，都以減少寵物與飼主的焦慮為目標。我們深知，只有放下戒心的毛孩，才能接受最有效的治療。
            <br /><br />
            我們的獸醫團隊由多位經驗豐富、專業且充滿愛心的獸醫師組成，擅長犬貓內外科、皮膚科、疫苗接種、晶片植入、超音波檢查、外科手術與緊急救護等服務，亦提供中西整合療法、腫瘤照護與老年寵物管理。院長吳定峰醫師對皮膚病特別有深入研究，並致力於為台灣濕熱氣候下的毛孩找出最合適的照護方法。
            <br /><br />
            我們相信，醫療不只是技術的堆疊，而是關於信任、理解與陪伴。我們珍惜每一次與毛孩和飼主互動的機會，耐心聆聽、細心解說，讓每一位來訪的家庭都能感受到被理解與被尊重的溫度。
            <br /><br />
            在文志動物醫院，我們與您一同守護的不只是健康，更是一段毛孩生命中安心、溫暖且珍貴的旅程。
          </p>
        </div>


        {/* 🔹 我們的優勢 */}
        <div className="bg-white shadow-xl rounded-xl p-8 mt-12">
          <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
            <FaPaw className="text-yellow-500" /> 我們的優勢
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            {[
              { title: "隔離病房", description: "提供安全的隔離環境，有效防止傳染病擴散。" },
              { title: "犬貓重症ICU病房", description: "專業監護設備，24 小時照護危重動物。" },              
              { title: "諾亞高壓氧保養", description: "透過高壓氧艙提升細胞含氧量，加速術後癒合、改善炎症與慢性疼痛。" },
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
        <div className="w-full md:w-2/5">
          <Image
            src="/director.png"
            alt="院長 吳定峰"
            width={400}
            height={400}
            className="rounded-xl border-4 border-yellow-500 shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-4xl font-bold text-[#5A4032] flex items-center gap-2">
            <FaPaw className="text-yellow-500" /> 院長資訊
          </h2>
          <p>
            吳定峰醫師為文志動物醫院的創辦人與現任院長，自創立以來即秉持「醫療應是理解與陪伴的延伸」之理念，致力於提供同理、細膩且專業的動物醫療服務。他畢業於國立中興大學獸醫系，具備紮實的學術背景與多年臨床經驗。
          </p>
          <p className="mt-3">
            吳醫師專精於皮膚疾病診治，對於台灣潮濕氣候對犬貓皮膚所造成的影響有深入研究，常見如搔癢、掉毛、濕疹、黴菌感染等問題，皆能提供全面評估與治療。他主張從生活習慣、環境改善與免疫調理等多面向切入，為毛孩找出最適合的護膚方案。
          </p>
          <p className="mt-3">
            除了皮膚科之外，吳醫師亦擅長老年寵物照護、慢性病管理、腫瘤追蹤與中西整合療法，並長期參與台灣動物醫院聯盟與地方飼主衛教推廣活動，推動毛孩健康觀念普及化。
          </p>
          <p className="mt-3">
            吳定峰醫師深信，每一次醫療不只是診斷與治療，而是一段與毛孩及家人攜手走過的信任旅程。他的溫和風格與細膩溝通，深受飼主肯定與信賴，是雲林地區備受推崇的獸醫師之一。
          </p>
        </div>
      </section>

      {/* 🔹 主治項目 */}
      <section id="services" className="max-w-6xl mx-auto py-16 px-6 text-center bg-[#9D8575] text-white shadow-xl rounded-xl">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 主治項目
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
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
              地址：640雲林縣斗六市文化路344號
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-green-500" />
              電話：05-5322735
            </p>
            {/* <p className="flex items-center gap-1 whitespace-nowrap">
              <span>LINE線上諮詢：</span>
              <a
                href="https://line.me/R/ti/p/@315jaayn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900 transition"
              >
                @315jaayn
              </a>
            </p> */}
          </div>

          {/* 門診時間 */}
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-12">
            <div className="flex-1 text-lg">
              <h3 className="text-2xl font-bold text-[#5A4032] mb-2">門診時間</h3>
              <ul className="leading-relaxed">
                <li>星期一：09:00–11:30, 14:00–17:30, 19:00–20:00</li>
                <li>星期二：09:00–11:30, 14:00–17:30, 19:00–20:00</li>
                <li>星期三：09:00–11:30, 14:00–17:30</li>
                <li>星期四：09:00–11:30, 14:00–17:30, 19:00–20:00</li>
                <li>星期五：09:00–11:30, 14:00–17:30, 19:00–20:00</li>
                <li>星期六：09:00–11:30</li>
                <li>星期日：休息</li>
              </ul>
            </div>
          </div>

        </div>

        {/* 🔹 Google 地圖嵌入 */}
        <div className="w-full flex justify-center mt-8">
          <iframe
            title="Google Maps - 文志動物醫院"
            className="w-full max-w-[1100px] h-[450px] rounded-lg shadow-lg border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.9988501870257!2d120.5536541!3d23.711735099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ec84857585965%3A0x6a01e80d4f02a25a!2z5paH5b-X5YuV54mp6Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1747574308680!5m2!1szh-TW!2stw"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
