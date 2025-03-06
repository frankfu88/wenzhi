import { FaPaw } from "react-icons/fa";

export default function Pricing() {
  return (
    <main className="max-w-5xl sm:max-w-full mx-auto py-20 px-4 md:px-6">
      <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
        <FaPaw className="text-yellow-500" /> 價格一覽
      </h2>

      {/* 📌 使用 Grid 調整不同裝置的顯示方式 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        
        {/* 一般門診收費 */}
        <section className="bg-[#E6D6CC] text-gray-900 p-6 md:p-8 rounded-lg shadow-md flex flex-col">
          <h2 className="text-2xl font-bold">一般門診收費</h2>
          <ul className="mt-4 gap-3 flex flex-col text-lg">
            <li>📌 掛號費：<b>50 元</b></li>
            <li>📌 診察費：<b>100 元</b></li>
          </ul>
        </section>

        {/* 檢驗費用 */}
        <section className="bg-[#9D8575] text-white p-6 md:p-8 rounded-lg shadow-md flex flex-col">
          <h2 className="text-2xl font-bold">檢驗費用</h2>
          <ul className="mt-4 gap-3 flex flex-col text-lg">
            <li>📌 <b>一般血檢：</b> 1500 元 <br /><span className="text-sm">(含血液學、生化 10 項)</span></li>
            <li>📌 <b>進階血檢：</b> 2650 元 <br /><span className="text-sm">(含血液學、電解質生化 15 項)</span></li>
            <li>📌 <b>體檢 X 光檢查：</b> 600 元 / 張</li>
            <li>📌 <b>超音波檢查：</b> 800 元起</li>
          </ul>
        </section>

        {/* 復健物理治療 */}
        <section className="bg-[#C4A484] text-white p-6 md:p-8 rounded-lg shadow-md flex flex-col">
          <h2 className="text-2xl font-bold">復健物理治療</h2>
          <ul className="mt-4 gap-3 flex flex-col text-lg">
            <li>📌 <b>諾亞寵物高壓氧：</b> 1500 元，買五送一</li>
            <li>📌 <b>四級雷射：</b> 600 元，買五送一</li>
          </ul>
        </section>

        {/* 📌 麻醉費用表格 */}
        <section className="bg-white text-gray-900 p-6 md:p-8 rounded-lg shadow-md flex flex-col col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold">麻醉費用</h2>

          {/* 📌 可水平滾動的表格，適應小螢幕 */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mt-4 text-sm md:text-lg">
              <thead>
                <tr className="bg-[#4A3B31] text-white">
                  <th className="border border-gray-300 px-4 md:px-6 py-3">麻醉等級</th>
                  <th className="border border-gray-300 px-4 md:px-6 py-3">ASA1</th>
                  <th className="border border-gray-300 px-4 md:px-6 py-3">ASA2</th>
                  <th className="border border-gray-300 px-4 md:px-6 py-3">ASA3</th>
                </tr>
              </thead>
              <tbody>
                {[["<10kg", 2000, 2500, 3000], ["10-20kg", 2500, 3000, 3500], ["20-30kg", 3000, 3500, 4000]].map(
                  ([weight, asa1, asa2, asa3], index) => (
                    <tr key={index} className="bg-[#C4A484] text-white">
                      <td className="border border-gray-300 px-4 md:px-6 py-3 font-bold">{weight}</td>
                      <td className="border border-gray-300 px-4 md:px-6 py-3 bg-[#EAE5E1] text-gray-800">{asa1} 元 / 小時</td>
                      <td className="border border-gray-300 px-4 md:px-6 py-3 bg-[#EAE5E1] text-gray-800">{asa2} 元 / 小時</td>
                      <td className="border border-gray-300 px-4 md:px-6 py-3 bg-[#EAE5E1] text-gray-800">{asa3} 元 / 小時</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          {/* 📌 麻醉分級表格 */}
          <h3 className="text-2xl font-bold mt-8">麻醉分級</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mt-4 text-sm md:text-lg">
              <thead>
                <tr className="bg-[#4A3B31] text-white">
                  <th className="border border-gray-300 px-4 md:px-6 py-3 w-1/6">等級</th>
                  <th className="border border-gray-300 px-4 md:px-6 py-3">說明</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ASA1", "健康毛小孩且無任何疾病，例如單純來做結紮手術的健康年輕毛小孩。"],
                  ["ASA2", "毛小孩有輕微的系統性疾病，但不影響其功能，例如受到良好控制的糖尿病。"],
                  ["ASA3", "毛小孩有中等程度的系統性疾病，且正常功能受影響，例如長期吃藥控制的心臟病。"],
                  ["ASA4", "毛小孩有嚴重程度的系統性疾病，且威脅到生命，例如嚴重脫水加貧血、敗血症。"],
                  ["ASA5", "毛小孩瀕臨死亡，若不做手術可能 24 小時內有生命危險，例如子宮蓄膿、膀胱破裂。"]
                ].map(([level, description], index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-[#EAE5E1] text-gray-900" : "bg-[#F5F5F5] text-gray-900"}>
                    <td className="border border-gray-300 px-4 md:px-6 py-3 font-bold">{level}</td>
                    <td className="border border-gray-300 px-4 md:px-6 py-3">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
