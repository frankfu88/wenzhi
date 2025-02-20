"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section id="home" className="relative w-full h-[250px] md:h-[400px] lg:h-[500px]">
      <Image
        src={isMobile ? "/mobile-banner.jpg" : "/banner.jpg"} // ✅ 手機用 mobile-banner.jpg，但仍是橫式
        alt="獸醫診所"
        layout="fill"
        objectFit="cover" // ✅ 讓圖片填滿，但不會變形
        className="w-full h-full"
      />
    </section>
  );
}