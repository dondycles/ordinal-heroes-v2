"use client";
import Marquee from "react-fast-marquee";
import { useState } from "react";
export default function AnnouncementBar() {
  const [cycled, setCycled] = useState(false);
  return (
    <div
      className={`fixed bottom-0 left-0 w-screen  duration-300 bg-accent text-primary ${
        cycled && "invisible"
      }`}
    >
      <Marquee
        speed={100}
        loop={2}
        delay={0.5}
        pauseOnClick
        pauseOnHover
        onFinish={() => {
          setCycled(true);
        }}
      >
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          maxime beatae quasi.
        </span>
      </Marquee>
    </div>
  );
}
