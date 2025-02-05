import Image from "next/image";
import React from "react";


export default function Home() {
  return (
    <div className="items-center min-h-screen">
      watch-store home page



        <Image
            className="dark:invert"
            src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
            alt="Next.js logo"
            width={380}
            height={338}
            priority
        />

    </div>
  );
}
