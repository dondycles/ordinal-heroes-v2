import { motion, AnimatePresence } from "framer-motion";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { useEffect, useState } from "react";
export default function ({
  menuState,
  closeMenu,
}: {
  menuState: boolean;
  closeMenu: () => void;
}) {
  const [animateOptions, setAnimateOptions] = useState(false);
  let options = [
    "CONNECT WALLET",
    "HOME",
    "ABOUT",
    "HEROEZ UNIVERSITY",
    "QUEST SYSTEM",
    "LIGHT NOVEL",
    "STUDIO Z",
    "COLLECTION",
    "UPDATES",
    "TEAM",
  ];

  useEffect(() => {
    if (menuState) {
      setTimeout(() => {
        setAnimateOptions(true);
      }, 300);
    } else setAnimateOptions(false);
  }, [menuState]);

  return (
    <div
      onClick={() => closeMenu()}
      className={`fixed top-0 left-0 w-screen h-screen  z-50 duration-500 flex justify-end  ${
        !menuState
          ? "pointer-events-none backdrop-blur-0 backdrop-brightness-100"
          : " backdrop-blur-[1px] backdrop-brightness-50"
      }`}
    >
      <AnimatePresence>
        {menuState && (
          <motion.div
            layout
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 16,
            }}
            onClick={(e) => e.stopPropagation()}
            className=" w-full sm:w-2/3 h-full bg-primary/75 px-6 pb-6 flex flex-col gap-6 border-secondary border-2 sm:rounded-l-box"
          >
            <motion.div
              layout
              className="w-full max-h-24 h-screen py-6 "
            ></motion.div>
            <motion.ul layout className="flex flex-col ">
              <AnimatePresence>
                {animateOptions && (
                  <>
                    {options.map((option, i) => {
                      return (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: (0.1 + i) / 10 }}
                          className={`btn btn-ghost hover:btn-secondary hover:text-primary  ${
                            option === "CONNECT WALLET" && "btn-disabled"
                          }`}
                        >
                          {option.toUpperCase()}
                        </motion.li>
                      );
                    })}
                  </>
                )}
              </AnimatePresence>
            </motion.ul>
            <motion.footer
              layout
              className=" text-4xl flex flex-col gap-4 justify-center items-center mt-auto mb-0"
            >
              <div className="flex gap-4 rounded-box bg-accent text-primary p-6 w-full items-center justify-center">
                <BsDiscord />
                <BsTwitter />
              </div>
              <p className="text-xs mb-0 mt-auto">HeroeZ 2023</p>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
