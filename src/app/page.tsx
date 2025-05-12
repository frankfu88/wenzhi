"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaPaw,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const servicesDetailed = [
  {
    label: "眼科門診",
    treatments: [
      "乾眼症治療診斷",
      "角膜潰瘍診斷治療",
      "白內障診斷治療",
      "青光眼診斷治療",
      "角膜穿孔治療",
      "各式眼科手術與療法"
    ]
  },
  {
    label: "心臟科門診",
    treatments: [
      "高階心臟超音波診斷",
      "瓣膜退化性心臟病診斷治療",
      "先天心臟病診斷治療",
      "PDA手術",
      "貓肥厚性心肌病診斷治療",
      "犬擴張性心肌病診斷治療",
      "肺內高壓診斷治療",
      "高血壓診斷治療"
    ]
  },
  {
    label: "內科",
    treatments: [
      "糖尿病、甲狀腺低下/亢進、庫興氏症、愛迪生氏症、X毛症等內分泌相關疾病診治"
    ]
  },
  {
    label: "腫瘤內科",
    treatments: [
      "細胞學診斷、病理切片合作診斷"
    ]
  },
  {
    label: "中西整合醫學",
    treatments: ["電針、雷射、中草藥、整合式療法"]
  },
  {
    label: "健康檢查",
    treatments: ["定期身體狀況評估、疾病早期預防與發現"]
  },
  {
    label: "預防針",
    treatments: ["幼貓、幼犬、成貓、成犬疫苗接種"]
  },
  {
    label: "視訊看診",
    treatments: [
      "30分鐘/$500（LINE Pay 或匯款）",
      "高齡、行動不便或關注動物福利的飼主"
    ]
  },
  {
    label: "高壓氧治療",
    treatments: ["促進癒合、改善慢性疼痛與炎症"]
  }
];

export default function Home() {
  // const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
  return (
    <main className="bg-[#E6D6CC] text-gray-900">
      {/* 🔹 關於我們 */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 關於我們
        </h2>
        <div className="bg-white shadow-xl rounded-xl p-8 mt-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          羅大宇動物醫院位於台中市西區，致力於打造一個結合專業醫療與溫暖關懷的寵物照護空間。
          我們秉持「以毛孩為本」的理念，提供從預防醫學、內外科治療，到中西醫整合療法的全方位服務。
          <br /><br />
          醫療團隊擁有豐富臨床經驗，並引進高壓氧治療、微創手術、影像診斷等先進技術，致力於提升診療品質與毛孩的生活福祉。
          <br /><br />
          除了醫療服務外，我們也關心動物福祉與飼主教育，積極參與流浪動物照護與社區推廣，期望成為每一位飼主在寵物健康旅程中的堅實後盾。
        </p>
        </div>

        {/* 🔹 東南動物醫院的優勢 */}
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
          <h2 className="text-4xl font-bold text-[#5A4032] flex items-center gap-2">
            <FaPaw className="text-yellow-500" /> 院長資訊
          </h2>
          <p>
            羅致宇院長擁有國立中興大學獸醫所臨床組（心臟/眼科）碩士學位，
            並具備多項國際認證，包括美國科羅拉多州立大學小動物微創脊椎手術認證、
            澳洲雪梨大學臨床神經學程結業等。
          </p>
          <p className="mt-3">
            同時擔任台灣獸醫內視鏡微創醫學會理事，專精於微創手術、心臟內外科、
            中獸醫整合療法等領域，致力於結合中西醫療，為毛孩打造最適切的照護方案。
          </p>
        </div>
      </section>

      {/* 🔹 主治項目 */}
      <section
        id="services"
        className="max-w-6xl mx-auto py-16 px-6 text-center bg-[#9D8575] text-white shadow-xl rounded-xl"
      >
        <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 主治項目
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-left">
          {servicesDetailed.map((service, index) => (
            <div
              key={index}
              className="bg-[#E6D6CC] text-gray-800 rounded-xl shadow-md p-6 transition"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FaPaw className="text-yellow-500" /> {service.label}
                </h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-[#5A4032]" />
                ) : (
                  <FaChevronDown className="text-[#5A4032]" />
                )}
              </div>

              {openIndex === index && (
                <ul className="mt-4 list-disc list-inside space-y-1 text-base text-gray-700">
                  {service.treatments.map((treatment, i) => (
                    <li key={i}>{treatment}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
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
              地址：403台中市西區存中街153號
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-green-500" />
              電話：04-23728378
            </p>
            {/* <p className="flex items-center gap-2">
              <FaEnvelope className="text-red-500" />
              信箱：ufat0305@gmail.com
            </p> */}
            <p className="flex items-center gap-1 whitespace-nowrap">
              <span>LINE線上諮詢：</span>
              <a
                href="https://line.me/R/ti/p/@rdk6209c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900 transition"
              >
                @rdk6209c
              </a>
            </p>
          </div>

          {/* 門診時間 & 探視時間 - 並排顯示 */}
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-12">
            {/* 🔹 門診時間 */}
            <div className="flex-1 text-lg">
              <h3 className="text-2xl font-bold text-[#5A4032] mb-2">門診時間</h3>
              <p>周一到周日</p>
              <ul className="mt-2 space-y-1">
                <li>早上 09:30 - 12:00（最後掛診時間為11:30）</li>
                <li>下午 13:00 - 17:00（最後掛診時間為16:30）</li>
                <li>晚上 18:00 - 21:30（最後掛診時間為21:00）</li>
              </ul>
            </div>

            {/* 🔹 探視時間 */}
            {/* <div className="flex-1 text-lg">
              <h3 className="text-2xl font-bold text-[#5A4032] mb-2">探視時間</h3>
              <p>周一到周日</p>
              <ul className="mt-2 space-y-1">
                <li>15:00 - 16:00</li>
                <li>19:00 - 20:00</li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* 🔹 Google 地圖嵌入 */}
        <div className="w-full flex justify-center mt-8">
  <iframe
    title="Google Maps - 羅大宇動物醫院"
    className="w-full max-w-[1100px] h-[450px] rounded-lg shadow-lg border-0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.610259499438!2d120.656937!3d24.141174600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693da485d7e9b5%3A0xfe092f6a6aef934b!2z576F5aSn5a6H5YuV54mp6Yar6Zmi772e5Lit6KW_5pW05ZCI6Yar5a246IiH5b6u5Ym15omL6KGT5Lit5b-D!5e1!3m2!1szh-TW!2stw!4v1747035281086!5m2!1szh-TW!2stw"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>



        {/* 🔹 停車資訊 */}
        {/* <div className="mt-12 bg-[#E6D6CC] shadow-lg rounded-xl p-8"> */}
          {/* <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
            <FaPaw className="text-yellow-500" /> 停車資訊
          </h2>
          <p className="text-lg text-center text-gray-700 mt-2">
            附近有多個停車場可供使用，點擊下方地點即可導航
          </p> */}

          {/* 🔹 停車場列表 */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 text-lg">
            {[
              { name: "崇德北平自動收費停車場", link: "https://www.google.com/maps?q=406台中市北屯區崇德路二段103-106號" },
              { name: "觀自在禪寺停車場", link: "https://www.google.com/maps?q=406台中市北屯區青島路四段28號" },
              { name: "北平路停車場", link: "https://www.google.com/maps?q=406台中市北屯區北平路三段186號" },
              { name: "嘟嘟房停車場 - 台中崇德站", link: "https://www.google.com/maps?q=406台中市北屯區崇德路二段103號" },
              { name: "北屯停車場", link: "https://www.google.com/maps?q=406台中市北屯區河北路二段3號" },
              { name: "uTagGo 河邑河北二站", link: "https://www.google.com/maps?q=406台中市北屯區河北路二段65號" },
              { name: "文昌漢口停車場", link: "https://www.google.com/maps?q=406台中市北屯區漢口路五段15號" },
              { name: "大德室內停車場", link: "https://www.google.com/maps?q=404台中市北屯區青島路四段58之1號" },
              { name: "河北停車場", link: "https://www.google.com/maps?q=406台中市北屯區河北路二段80號" },
            ].map((parking, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:bg-gray-100 transition"
                onClick={() => window.open(parking.link, "_blank")}
              >
                <span className="text-gray-800">{parking.name}</span>
              </div>
            ))}
          </div> */}
        {/* </div> */}


      </section>
    </main>
  );
}
