"use client";

import { FaPaw } from "react-icons/fa";

export default function InternalMedicine() {
  return (
    <main className="bg-[#E6D6CC] text-gray-900 min-h-screen py-20 px-6">
      <section className="max-w-6xl mx-auto text-center">
        {/* 🔹 標題 */}
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2 text-[#5A4032] mb-8">
          <FaPaw className="text-yellow-500" /> 內科
        </h1>

        {/* 🔹 診療類別卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              title: "胰臟炎",
              description: "常見於犬貓，可能導致休克或多重器官衰竭。",
              details: [
                { label: "主要症狀", value: "嘔吐、腹痛、腹瀉、食慾不振、脫水" },
                { label: "診斷方法", value: "血液檢查、胰臟特異性酵素測試、超音波" },
                { label: "治療方式", value: "靜脈輸液、止痛、低脂飲食、抗炎藥物" },
                { label: "預防措施", value: "避免高脂飲食、控制體重、定期健康檢查" }
              ]
            },
            {
              title: "腎臟病",
              description: "高齡犬貓常見，可能導致脫水與代謝異常。",
              details: [
                { label: "主要症狀", value: "多渴多尿、食慾下降、體重減輕、嘔吐" },
                { label: "診斷方法", value: "血液檢查、尿液分析、腎臟超音波" },
                { label: "治療方式", value: "低磷飲食、補充水分、磷結合劑、藥物控制" },
                { label: "預防措施", value: "提供充足飲水、避免高鹽飲食、定期腎臟健康檢查" }
              ]
            },
            {
              title: "腫瘤診療",
              description: "犬貓可能罹患良性或惡性腫瘤，需及早發現。",
              details: [
                { label: "主要症狀", value: "異常腫塊、食慾不振、體重減輕、咳嗽" },
                { label: "診斷方法", value: "細針抽吸、組織活檢、X 光、超音波" },
                { label: "治療方式", value: "外科切除、化學治療、放射治療、標靶治療" },
                { label: "預防措施", value: "定期體檢、監測身體異常變化、健康飲食" }
              ]
            },
            {
              title: "心臟病",
              description: "犬貓常見的心血管疾病，如瓣膜退化或心肌病變。",
              details: [
                { label: "主要症狀", value: "喘息、咳嗽、運動耐受力下降、昏厥" },
                { label: "診斷方法", value: "心臟聽診、X 光、心電圖、心臟超音波" },
                { label: "治療方式", value: "血管擴張劑、利尿劑、強心劑" },
                { label: "預防措施", value: "維持理想體重、定期心臟檢查、控制血壓" }
              ]
            },
            {
              title: "內分泌疾病",
              description: "內分泌失衡影響全身代謝，需早期發現與管理。",
              details: [
                { label: "主要症狀", value: "多飲多尿、體重變化、毛髮稀疏、腹部膨大" },
                { label: "診斷方法", value: "血糖監測、內分泌檢測、甲狀腺功能測試" },
                { label: "治療方式", value: "胰島素注射、賀爾蒙療法、藥物控制" },
                { label: "預防措施", value: "規律飲食、控制體重、定期內分泌檢查" }
              ]
            }
          ].map((category, index) => (
            <div key={index} className="bg-[#9D8575] text-white p-8 rounded-xl shadow-lg text-left">
              <h4 className="text-3xl font-bold flex items-center gap-2 border-b-4 pb-2">
                <FaPaw className="text-yellow-500" /> {category.title}
              </h4>
              <p className="mt-3 text-lg">{category.description}</p>
              <div className="mt-4 space-y-2">
                {category.details.map((detail, idx) => (
                  <p key={idx} className="text-lg">
                    <strong>{detail.label}：</strong> {detail.value}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
