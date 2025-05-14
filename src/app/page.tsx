"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaPaw,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
// import { useRouter } from "next/navigation";

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
    label: "中西整合醫學",
    treatments: ["電針、雷射、中草藥、整合式療法"]
  },
  {
    label: "內分泌科",
    treatments: [
      "糖尿病",
      "甲狀腺低下/亢進",
      "庫興氏症",
      "愛迪生氏症",
      "X毛症等內分泌相關疾病診治"
    ]
  },
  {
    label: "牙科",
    treatments: [
      "牙周治療",
      "洗牙",
      "拔牙",
      "3D全口腔電腦斷層檢查",
      "牙科X光檢查"
    ]
  },
  {
    label: "腫瘤內科",
    treatments: [
      "細胞學診斷與美國臨床病理專科獸醫師朱珮華醫師合作",
      "病理診斷與中興大學動物疾病管制中心病理切片室合作"
    ]
  },
  {
    label: "耳鼻喉內視鏡檢查",
    treatments: [
      "耳道內視鏡：耳道內視鏡檢查採樣，中耳引流灌洗清創",
      "鼻腔內視鏡：鼻腔檢查採樣，鼻腔灌洗清創，後鼻孔狹窄氣球擴張術",
      "喉頭氣管內視鏡：氣管支氣管盥洗採樣培養，氣管塌陷檢查"
    ]
  },
  {
    label: "白內障特別門診",
    treatments: [
      "全眼球評估",
      "白內障超音波乳化術",
      "人工水晶體裝置"
    ]
  },
  {
    label: "運動傷害與關節疾病特別門診",
    treatments: [
      "完全預約制",
      "每週二上午10:00~12:00",
      "肩關節發育異常/肘關節發育異常/髖關節發育異常/OCD/UAP",
      "各式關節鏡手術/關節先天異常矯正手術",
      "前十字韌帶斷裂治療: PRP注射/幹細胞注射/TTA手術/TPLO手術",
      "PGR人工滑車溝手術"
    ]
  },
  {
    label: "水腦微創手術特別門診",
    treatments: [
      "完全預約制",
      "每週五上午 10:00~12:00",
      "門診評估病況 ",
      "安排施行微創第三腦室開創術",
    ]
  },
  {
    label: "微創脊椎手術特別門診",
    treatments: [
      "完全預約制",
      "每週三上午10:00~12:00門=診評估病況",
      {
        label: "安排施行：",
        subitems: [
          "單孔微創內視鏡脊椎手術",
          "雙孔微創內視鏡脊椎手術",
          "超音波引導神經根注射治療"
        ]
      }
    ]
  },
  {
    label: "胃癌腸癌特別門診",
    treatments: [
      "完全預約制",
      "每週五上午 10:00~12:00",
      "微創手術治療",
      "門診評估病況",
      "安排施行微創手術"
    ]
  },
  {
    label: "肺癌腸癌特別門診",
    treatments: [
      "完全預約制",
      "每週五上午 10:00~12:00",
      "微創手術治療",
      "門診評估病況",
      "胸腔鏡、腫瘤分期與摘除"
    ]
  },
  {
    label: "電漿滅菌及轉診服務",
    treatments: [
      <span className="text-red-600" key="link">
        請聯繫LINE@
        <a
          href="https://lin.ee/MtJUAS6"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1"
        >
          https://lin.ee/MtJUAS6
        </a>
      </span>
    ]
  },
  
  {
    label: "健康檢查",
    treatments: [
      {
        type: "paragraph",
        content: `毛寶獸齡不如人類綿長，健康檢查對於確保毛寶的良好健康狀態以及預防潛在的健康風險非常重要。`
      },
      {
        type: "paragraph",
        content: `建議每年定期檢查，持續關心毛寶的體重和營養狀態，有助於預防肥胖或營養不良等問題。合理的體重和營養是維護健康的重要方式。`
      },
      {
        type: "paragraph",
        content: `另一方面，健康檢查有助於預防常見疾病，提早發現並早治療，採取適當的治療和管理措施。`
      }
    ]
  },
  
  {
    label: "預防針",
    treatments: ["幼貓、幼犬、成貓、成犬疫苗接種"]
  },
  {
    label: "視訊看診",
    treatments: [
      {
        type: "paragraph",
        content: "視訊看診費用為30分鐘/$500，支付方式可使用 LINE PAY或匯款，需事先付款。"
      },
      {
        label: "服務對象：",
        subitems: [
          "高齡動物的飼主：通常是8歲以上的貓狗",
          "不便出行的飼主：例如交通不便、行動不便的家庭。",
          "關注動物福利的飼主：希望減少動物因往返診所的壓力。"
        ]
      }
    ]
  },
  {
    label: "出診服務",
    treatments: [
      {
        type: "paragraph",
        content: "預約前需事先與醫師視訊了解初步狀況，"
      },
      {
        type: "paragraph",
        content: "視訊看診費用為30分鐘/$500，支付方式可使用 LINE PAY 或匯款，需事先付款。"
      },
      {
        type: "paragraph",
        content: "出診範圍僅限台中市，到府來回車資費用由患者支付。"
      },
      {
        type: "paragraph",
        content: "到府看診費用為每30分鐘/$1000，線上預約需預付訂金 $2000。"
      }
    ]
  },
  {
    label: "諾亞高壓氧保養",
    treatments: [
      {
        type: "paragraph",
        content: "本院高壓氧設備升級了喔～已經開始為毛小孩服務！"
      },
      {
        type: "paragraph",
        content: "⭐ 高壓氧保養：藉由壓力和氧氣，提高血漿及組織含氧濃度並增強血中血球殺菌和自癒能力，以達到保養目的。"
      },
      {
        type: "paragraph",
        content: "🔴 可用於皮膚傷口修復、心血管、神經系統損傷、口腔、腸胃道、肌肉骨骼、傳染感染性疾病、老年疾病、癌症"
      },
      {
        type: "paragraph",
        content: "👉 以上適應症需獸醫師診斷"
      }
    ]
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
        <div className="w-full md:w-1/2">
          <Image
            src="/director.jpg"
            alt="院長 羅致宇"
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
      <section className="max-w-6xl mx-auto py-16 px-6 text-center bg-[#9D8575] text-white shadow-xl rounded-xl">
      <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
        <FaPaw className="text-yellow-500" /> 主治項目
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-left">
        {servicesDetailed.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-[#E6D6CC] text-gray-800 rounded-xl shadow-md p-6 transition-all duration-300"
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

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 mt-4" : "max-h-0"
              }`}
            >
              <ul className="list-disc list-inside space-y-1 text-base text-gray-700">
              {service.treatments.map((treatment, i) => {
  if (typeof treatment === "string" || React.isValidElement(treatment)) {
    return <li key={i}>{treatment}</li>;
  } else if (
    typeof treatment === "object" &&
    "label" in treatment &&
    Array.isArray(treatment.subitems)
  ) {
    return (
      <li key={i}>
        {treatment.label}
        <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
          {treatment.subitems.map((sub, j) => (
            <li key={j}>{sub}</li>
          ))}
        </ul>
      </li>
    );
  } else if (
    typeof treatment === "object" &&
    "type" in treatment &&
    treatment.type === "paragraph" &&
    "content" in treatment
  ) {
    return (
      <li key={i} className="list-none">
        <p className="text-gray-700 leading-relaxed">{treatment.content}</p>
      </li>
    );
  } else {
    return null;
  }
})}

              </ul>
            </div>
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

          {/* 門診時間 */}
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
      </section>
    </main>
  );
}
