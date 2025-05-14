"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <section
      id="home"
      className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] mt-[64px]" // ✅ 避免被 Navbar 擋住
    >
      <Image
        src="/banner.jpg"          // ✅ 無論裝置都使用同一張圖
        alt="獸醫診所"
        layout="fill"
        objectFit="contain"         // ✅ 圖片等比例填滿不變形
        className="w-full h-full"
      />
    </section>
  );
}