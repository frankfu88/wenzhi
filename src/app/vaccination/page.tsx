"use client";

import { FaPaw } from "react-icons/fa";

export default function Vaccination() {
  return (
    <main className="bg-[#9D8575] text-white py-20 px-6">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2 text-center">
          <FaPaw className="text-yellow-500" /> 健康檢查與疫苗接種
        </h1>

        {/* 🔹 主要區塊 */}
        <div className="bg-[#E6D6CC] text-[#3B302A] shadow-lg rounded-3xl p-8 mt-8">
          <h2 className="text-3xl font-bold text-center">健康檢查</h2>
          <p className="text-lg text-center mt-2">
            我們提供完整的健康檢查服務，確保您的毛孩身體狀況良好，包括血液檢查、影像學診斷（X 光、超音波）及心臟評估等。
          </p>

          {/* 🔹 疫苗接種 */}
          <h2 className="text-3xl font-bold text-center mt-8">疫苗接種</h2>
          <p className="text-lg text-center mt-2">
            為確保毛孩免受傳染病侵害，請按照建議時間表為犬貓接種疫苗。
          </p>

          {/* 🔹 疫苗接種表格 */}
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse border border-gray-600 text-lg">
              <thead>
                <tr className="bg-[#9D8575] text-white">
                  <th className="border border-gray-600 p-3">犬</th>
                  <th className="border border-gray-600 p-3">貓</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 p-3">八合一預防針</td>
                  <td className="border border-gray-600 p-3">無佐劑三合一預防針</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3">十合一預防針</td>
                  <td className="border border-gray-600 p-3">無佐劑四合一預防針</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3">狂犬病疫苗</td>
                  <td className="border border-gray-600 p-3">
                    無佐劑五合一預防針 <br />（來電詢問）
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3">心絲蟲疫苗</td>
                  <td className="border border-gray-600 p-3">無佐劑狂犬病疫苗</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3">萊姆病疫苗</td>
                  <td className="border border-gray-600 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
