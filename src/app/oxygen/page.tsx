"use client";

import { FaPaw } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function NoahOxygen() {
  const router = useRouter();
  return (
    <main className="bg-[#E6D6CC] text-gray-900 py-20 px-6">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2 text-center">
          <FaPaw className="text-yellow-500" /> 諾亞寵物高壓氧
        </h1>
        
        {/* 🔹 初生動物高壓氧艙的作用 */}
        <div className="bg-white shadow-lg rounded-3xl p-8 mt-8">
          <h2 className="text-3xl font-bold text-center">初生動物高壓氧艙的作用</h2>
          <p className="text-lg text-center text-gray-700 mt-2">
            高壓氧艙技術在初生動物的健康管理中發揮關鍵作用，能夠提升存活率並促進成長發育。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[{
              title: "提升母體受孕率",
              description: "懷孕前進行高壓氧及光療調理，每日一次（60 分鐘），可增強母體健康，提高受孕機率。"
            }, {
              title: "改善胚胎發育",
              description: "懷孕期間每天吸氧及光療 60 分鐘，有助於胎兒健康發展，增強母體與胎兒免疫力。"
            }, {
              title: "降低幼獸天折率",
              description: "初生動物出生後 10-15 天內每日吸氧 60 分鐘，2 週後每 3 天一次，可增強成長與免疫力，顯著減少幼獸天折率。"
            }, {
              title: "促進產後恢復",
              description: "母體產後持續吸氧及光療 7 天，加速傷口癒合並促進身體恢復，減少修護期與藥物需求。"
            }].map((feature, index) => (
              <div key={index} className="bg-[#F5F1ED] shadow-md rounded-xl p-6 text-lg">
                <h3 className="text-xl font-bold text-green-700">{feature.title}</h3>
                <p className="mt-2 text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* 🔹 特點介紹 */}
        <div className="bg-white shadow-lg rounded-3xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-center">特點介紹</h2>
          <p className="text-lg text-center text-gray-700 mt-2">
            高壓氧艙搭載多層設計與先進光療技術，提升動物健康與治療效果。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {["提升存活率", "多層抽屜式設計", "高效氧艙", "雙進壓閘", "紫外線滅菌", "光療系統", "恆溫空調"].map((feature, index) => (
              <div key={index} className="bg-[#F5F1ED] shadow-md rounded-xl p-6 text-lg text-center">
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 光療技術原理 */}
        <div className="bg-white shadow-lg rounded-3xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-center">光療技術原理</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-bold text-red-600">紅光 & 近紅外光理療</h3>
              <ul className="list-disc pl-5 mt-2 text-lg">
                <li>紅光（630-700nm）：促進膠原蛋白生成，幫助皮膚修復與抗老化。</li>
                <li>近紅外光（700-1100nm）：深入肌肉層，加速傷口癒合，減少發炎與疼痛。</li>
                <li>提高 ATP（細胞能量），促進代謝與組織修復。</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600">藍光的益處</h3>
              <ul className="list-disc pl-5 mt-2 text-lg">
                <li>調節褪黑激素，提升專注力與改善睡眠。</li>
                <li>減少藍光暴露，幫助改善睡眠品質。</li>
                <li>抑制痤瘡細菌生長，減少粉刺與青春痘。</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* 🔹 光療技術比較 */}
        <div className="bg-white shadow-lg rounded-3xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-center">光療技術比較</h2>
          <table className="w-full border-collapse mt-6 text-lg">
            <thead>
              <tr className="bg-gradient-to-r from-red-500 to-blue-500 text-white">
                <th className="p-4">技術</th>
                <th className="p-4">主要波長</th>
                <th className="p-4">主要功效</th>
              </tr>
            </thead>
            <tbody>
              {[{
                tech: "紅光",
                wave: "630-700 nm",
                effect: "促進膠原蛋白，改善皮膚 & 傷口癒合"
              }, {
                tech: "近紅外光",
                wave: "700-1100 nm",
                effect: "深入肌肉層，促進組織修復與消炎"
              }, {
                tech: "藍光",
                wave: "450-495 nm",
                effect: "調節生物鐘，幫助睡眠，減少痤瘡細菌"
              }].map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 text-center">{row.tech}</td>
                  <td className="p-4 text-center">{row.wave}</td>
                  <td className="p-4 text-center">{row.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 🔹 聯繫區塊 */}
        <div className="mt-12 bg-[#5A4032] text-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold">您的寵物有上述症狀嗎？</h2>
          <p className="mt-2 text-lg">有任何問題請聯繫東南動物醫院，由專家來為您的寶貝提供治療！</p>
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