// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Banner() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] mt-[64px]" // ✅ 避免被 Navbar 擋住
//     >
//       <Image
//         src={isMobile ? "/mobile-banner.jpg" : "/banner.jpg"} // ✅ 手機版用 mobile-banner.jpg
//         alt="獸醫診所"
//         layout="fill"
//         objectFit="cover" // ✅ 讓圖片填滿但不變形
//         className="w-full h-full"
//       />
//     </section>
//   );
// }

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
        objectFit="cover"         // ✅ 圖片等比例填滿不變形
        className="w-full h-full"
      />
    </section>
  );
}
