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
        
        {/* 🔹 高壓氧治療 HBOT */}
        <div className="bg-white shadow-lg rounded-3xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-center">高壓氧治療 HBOT</h2>
          <p className="text-lg text-center text-gray-700 mt-2">
            藉由壓力和氧氣，提高血漿及組織含氧濃度並增強血中白血球殺菌和自癒能力，以達到治療目的。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { category: "皮膚傷口", conditions: ["深層組織感染", "久不癒合的傷口修復", "燒燙傷 褥瘡 術後修復", "移植 皮瓣縫合後輔助癒合", "術後恢復"] },
              { category: "心血管", conditions: ["心血管保養", "中風", "低血壓", "腦栓塞", "血管炎淋巴管炎"] },
              { category: "神經系統", conditions: ["腦/脊神經損傷", "大腦缺血", "壓迫性脊髓病", "四肢癱瘓", "周邊神經損傷", "創傷性腦損傷", "腦炎 腦膜炎"] },
              { category: "口腔", conditions: ["牙髓發炎", "牙週病", "口炎"] },
              { category: "腸胃道", conditions: ["腸臟炎", "胃潰瘍", "腹膜炎", "黃疸", "再灌流症候群"] },
              { category: "肌肉骨骼", conditions: ["骨折修復", "肌腱炎肌炎韌帶炎", "軟組織損傷", "骨頭感染", "脊椎盤疾病", "脊椎創傷"] },
              { category: "傳染感染性疾病", conditions: ["顱內 腹腔腫瘤", "體髓炎", "敗血症", "內毒血症", "膿皮症"] },
              { category: "老年疾病", conditions: ["老年症候群", "退化性疾病"] },
              { category: "癌症", conditions: ["放射性治療後組織壞死等"] }
            ].map((item, index) => (
              <div key={index} className="bg-[#F5F1ED] shadow-md rounded-xl p-6 text-lg">
                <h3 className="text-xl font-bold text-[#9D8575]">{item.category}</h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                  {item.conditions.map((condition, idx) => (
                    <li key={idx}>{condition}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* 🔹 禁忌症與相對禁忌症 */}
        <div className="bg-[#9D8575] text-white shadow-lg rounded-3xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-center">禁忌症與注意事項</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-bold text-yellow-300">🚫 絕對禁忌症</h3>
              <ul className="list-disc pl-5 mt-2 text-lg">
                <li>氣胸（可能導致肺部破裂，危及生命）</li>
                <li>未受控的氣道疾病（如嚴重哮喘、肺氣腫）</li>
                <li>肺部感染（如嚴重肺炎，可能加重感染）</li>
                <li>未受控的癲癇或神經疾病（可能誘發癲癇發作）</li>
                <li>嚴重心臟疾病（如充血性心衰竭）</li>
                <li>近眼部手術（可能影響眼內壓，影響恢復）</li>
                <li>耳部損傷或耳咽管異常（壓力變化可能導致疼痛或聽力損傷）</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-400">⚠️ 相對禁忌症</h3>
              <ul className="list-disc pl-5 mt-2 text-lg">
                <li>未受控的糖尿病（需監測血糖變化）</li>
                <li>幽閉恐懼症（可能無法適應高壓氧環境）</li>
                <li>懷孕（需與獸醫師討論後評估使用）</li>
                <li>發燒（未受控的高體溫需先治療後使用）</li>
                <li>高血壓（需監測血壓穩定後再進行）</li>
              </ul>
            </div>
          </div>
        </div>

        
        
        {/* 🔹 特點介紹 */}
        <div className="bg-white shadow-lg rounded-3xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-center">特點介紹</h2>
          <p className="text-lg text-center text-gray-700 mt-2">
            高壓氧艙搭載多層設計與先進光療技術，提升動物健康與治療效果。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {["多層抽屜式設計", "高效氧艙", "雙進壓閘", "紫外線滅菌", "光療系統", "恆溫空調"].map((feature, index) => (
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
          <p className="mt-2 text-lg">有任何問題請聯繫我們，由專家來為您的寶貝提供治療！</p>
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