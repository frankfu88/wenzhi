import { FaPaw } from "react-icons/fa";

export default function Pricing() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 價格一覽
        </h2>

      {/* 使用 Grid 讓價格區塊排列均勻 */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-8">
        
        {/* 一般門診收費 */}
        <section className="bg-[#E6D6CC] text-gray-900 p-6 rounded-lg shadow-md flex flex-col">
          <h2 className="text-2xl font-bold">一般門診收費</h2>
          <ul className="mt-4 space-y-3 text-lg">
            <li>📌 掛號費：<b>50 元</b></li>
            <li>📌 診察費：<b>100 元</b></li>
          </ul>
        </section>

        {/* 檢驗費用 */}
        <section className="bg-[#9D8575] text-white p-6 rounded-lg shadow-md flex flex-col">
          <h2 className="text-2xl font-bold">檢驗費用</h2>
          <ul className="mt-4 space-y-3 text-lg">
            <li>📌 <b>一般血檢：</b> 1500 元<br /><span className="text-sm">(含血液學、生化 10 項)</span></li>
            <li>📌 <b>進階血檢：</b> 2650 元<br /><span className="text-sm">(含血液學、電解質生化 15 項)</span></li>
            <li>📌 <b>體檢 X 光檢查：</b> 600 元 / 張</li>
            <li>📌 <b>超音波檢查：</b> 800 元起</li>
          </ul>
        </section>

        {/* 復健物理治療 */}
        <section className="bg-[#C4A484] text-white p-6 rounded-lg shadow-md flex flex-col">
          <h2 className="text-2xl font-bold">復健物理治療</h2>
          <ul className="mt-4 space-y-3 text-lg">
            <li>📌 <b>諾亞寵物高壓氧：</b> 1500 元，買五送一</li>
            <li>📌 <b>四級雷射：</b> 600 元，買五送一</li>
          </ul>
        </section>

        {/* 麻醉費用表格 - 讓其佔據整排 (col-span-2) */}
<section className="bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col col-span-2">
  <h2 className="text-2xl font-bold">麻醉費用</h2>

  {/* 麻醉等級費用表格 */}
  <table className="w-full border-collapse mt-4 text-lg">
    <thead>
      <tr className="bg-[#4A3B31] text-white">
        <th className="border border-gray-300 px-6 py-4">麻醉等級</th>
        <th className="border border-gray-300 px-6 py-4">ASA1</th>
        <th className="border border-gray-300 px-6 py-4">ASA2</th>
        <th className="border border-gray-300 px-6 py-4">ASA3</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-[#C4A484] text-white">
        <td className="border border-gray-300 px-6 py-4 font-bold">&lt;10kg</td>
        <td className="border border-gray-300 px-6 py-4 bg-[#EAE5E1] text-gray-800">2,000 元 / 小時</td>
        <td className="border border-gray-300 px-6 py-4 bg-[#EAE5E1] text-gray-800">2,500 元 / 小時</td>
        <td className="border border-gray-300 px-6 py-4 bg-[#EAE5E1] text-gray-800">3,000 元 / 小時</td>
      </tr>
      <tr className="bg-[#C4A484] text-white">
        <td className="border border-gray-300 px-6 py-4 font-bold">10-20kg</td>
        <td className="border border-gray-300 px-6 py-4 bg-[#EAE5E1] text-gray-800">2,500 元 / 小時</td>
        <td className="border border-gray-300 px-6 py-4 bg-[#EAE5E1] text-gray-800">3,000 元 / 小時</td>
        <td className="border border-gray-300 px-6 py-4 bg-[#EAE5E1] text-gray-800">3,500 元 / 小時</td>
      </tr>
      <tr className="bg-[#C4A484] text-white">
        <td className="border border-gray-300 px-6 py-4 font-bold">20-30kg</td>
        <td className="border border-gray-300 px-6 py-4 bg-[#EAE5E1] text-gray-800">3,000 元 / 小時</td>
        <td className="border border-gray-300 px-6 py-4 bg-[#EAE5E1] text-gray-800">3,500 元 / 小時</td>
        <td className="border border-gray-300 px-6 py-4 bg-[#EAE5E1] text-gray-800">4,000 元 / 小時</td>
      </tr>
    </tbody>
  </table>

  {/* 麻醉分級表格 */}
  <h3 className="text-2xl font-bold mt-8">麻醉分級</h3>
  <table className="w-full border-collapse mt-4 text-lg">
    <thead>
      <tr className="bg-[#4A3B31] text-white">
        <th className="border border-gray-300 px-6 py-4 w-1/6">等級</th>
        <th className="border border-gray-300 px-6 py-4">說明</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-[#EAE5E1] text-gray-900">
        <td className="border border-gray-300 px-6 py-4 font-bold">ASA1</td>
        <td className="border border-gray-300 px-6 py-4">健康毛小孩且無任何疾病，例如單純來做結紮手術的健康年輕毛小孩。</td>
      </tr>
      <tr className="bg-[#F5F5F5] text-gray-900">
        <td className="border border-gray-300 px-6 py-4 font-bold">ASA2</td>
        <td className="border border-gray-300 px-6 py-4">毛小孩有輕微的系統性疾病，但不影響其功能，例如受到良好控制的糖尿病，輕度但不須吃藥治療的心臟瓣膜功能退化。</td>
      </tr>
      <tr className="bg-[#EAE5E1] text-gray-900">
        <td className="border border-gray-300 px-6 py-4 font-bold">ASA3</td>
        <td className="border border-gray-300 px-6 py-4">毛小孩有中等程度的系統性疾病，且正常功能受影響，例如不受控制的糖尿病，長期吃藥控制的心臟病。</td>
      </tr>
      <tr className="bg-[#F5F5F5] text-gray-900">
        <td className="border border-gray-300 px-6 py-4 font-bold">ASA4</td>
        <td className="border border-gray-300 px-6 py-4">毛小孩有嚴重程度的系統性疾病，且威脅到生命，例如嚴重脫水加貧血，敗血症，嚴重腎衰竭，心衰竭。</td>
      </tr>
      <tr className="bg-[#EAE5E1] text-gray-900">
        <td className="border border-gray-300 px-6 py-4 font-bold">ASA5</td>
        <td className="border border-gray-300 px-6 py-4">毛小孩瀕臨死亡，若不做手術可能 24 小時內有生命危險，可能會嚴重威脅到生命或身體其他器官功能，例如子宮蓄膿，車禍導致膀胱破裂、膽囊粘液囊腫破裂……等。</td>
      </tr>
    </tbody>
  </table>
</section>

      </div>
    </main>
  );
}
