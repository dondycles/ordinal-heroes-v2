import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import logohighres from "@/public/logohighres.webp";
export default function Curtain({
  isNavigating,
  navigate,
}: {
  isNavigating: boolean;
  navigate: () => void;
}) {
  const randomColors = [
    { bg: "bg-[#bceaff]", text: "text-neutral" },
    { bg: "bg-accent", text: "text-primary" },
  ];
  const randomNumber = Math.floor(Math.random() * 2);
  return (
    <div className=" fixed top-0 left-0 w-screen h-screen z-[51] pointer-events-none">
      <AnimatePresence initial={false}>
        {isNavigating && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "0%", opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, type: "spring", damping: 14 }}
            onAnimationComplete={() => {
              setTimeout(() => {
                navigate();
              }, 1000);
            }}
            className={` w-full  h-full  px-6 pb-6 flex flex-col gap-4 items-center justify-center ${randomColors[randomNumber].bg}`}
          >
            <Image
              priority
              quality={100}
              className="max-w-[300px] w-full"
              src={logohighres}
              alt="HeroeZ"
            />

            <span
              className={`loading loading-infinity loading-lg ${randomColors[randomNumber].text}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
