import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export default function Curtain({
  isNavigating,
  navigate,
}: {
  isNavigating: boolean;
  navigate: () => void;
}) {
  return (
    <div className=" fixed top-0 left-0 w-screen h-screen z-[51] pointer-events-none">
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "0%", opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, type: "spring", damping: 12 }}
            onAnimationComplete={() => {
              setTimeout(() => {
                navigate();
              }, 1000);
            }}
            className=" w-full  h-full bg-[#bceaff]    px-6 pb-6 flex flex-col gap-4 items-center justify-center"
          >
            <motion.img src="/logo256.png" alt="HeroeZ" />
            <motion.span className="loading loading-infinity loading-xl text-primary" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
