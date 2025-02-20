"use client"; // ✅ 這是 Client Component

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // ✅ 手機版：小於 768px
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section id="home" className="relative w-full max-h-[600px]">
      <Image
        src={isMobile ? "/mobile-banner.jpg" : "/banner.jpg"} // ✅ 手機版用 mobile-banner
        alt="獸醫診所"
        layout="fill"
        objectFit="contain" // ✅ 避免裁切
        className="w-full h-full"
      />
    </section>
  );
}
