"use client";

import { FaPaw } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Surgery() {
  const router = useRouter();
  return (
    <main className="bg-[#E6D6CC] text-gray-900 min-h-screen">
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        {/* 標題 */}
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2 text-[#5A4032]">
          <FaPaw className="text-yellow-500" /> 外科手術
        </h1>

        {/* 手術分類卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { title: "消化系統手術", items: ["異物移除（腸胃切開手術）", "胃扭轉擴張手術", "腸套疊整復手術", "胃固定術", "各類餵食管放置"] },
            { title: "膽道與肝膽系統手術", items: ["膽囊切除", "膽結石移除"] },
            { title: "泌尿系統手術", items: ["膀胱結石移除", "導尿管放置", "微創膀胱內視鏡取石"] },
            { title: "生殖系統手術", items: ["絕育手術（犬貓結紮）", "子宮蓄膿手術", "殘留卵巢摘除手術", "產科手術", "內視鏡卵巢/子宮摘除"] },
            { title: "創傷與傷口處理", items: ["一般創傷處理", "嚴重感染引流", "手術後傷口整形修復"] },
            { title: "眼科手術", items: ["眼部手術與疾病治療"] },
            { title: "牙科手術", items: ["全口腔 X 光", "拔牙", "洗牙與牙周治療", "口鼻/口臉瘻管修補"] },
            { title: "疝氣修補", items: ["橫膈疝氣", "鼠蹊疝氣", "臍疝氣", "會陰疝氣"] },
            { title: "腫瘤外科", items: ["腫瘤切除與活檢", "乳腺腫瘤、皮膚腫瘤、腹腔內臟腫瘤", "睪丸腫瘤、圍肛腫瘤、口腔腫瘤", "腫瘤術後病理分析"] },
            { title: "骨科手術", items: ["截肢", "骨折修復", "十字韌帶斷裂修復", "膝蓋骨異位矯正", "股骨頭切除"] },
            { title: "微創手術", items: ["關節鏡手術", "鼻腔內視鏡", "腹腔鏡手術", "內視鏡卵巢/卵巢子宮摘除", "微創預防性胃固定術"] },
            { title: "其他外科手術", items: ["耳血腫處理", "耳部息肉移除", "全耳道摘除", "唾液腺摘除", "淋巴結摘除"] }
          ].map((category, index) => (
            <div key={index} className="bg-[#9D8575] text-white p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold flex items-center gap-2">
                <FaPaw className="text-yellow-500" /> {category.title}
              </h4>
              <ul className="mt-4 space-y-2 text-lg text-left">
                {category.items.map((item, idx) => (
                  <li key={idx} className="border-b border-white/30 pb-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 🔹 聯繫區塊 */}
        <div className="mt-12 bg-[#5A4032] text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold">您的寵物有上述症狀嗎？</h2>
          <p className="mt-2 text-lg">您的寵物有上述症狀嗎？立即聯繫我們，由專家來為您的寶貝提供治療！</p>
          <button
            onClick={() => router.push("/#contact")}
            className="mt-4 bg-yellow-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-yellow-600 transition"
          >
            聯絡我們
          </button>
        </div>

      </section>
    </main>
  );
}
