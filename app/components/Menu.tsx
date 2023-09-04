import { motion, AnimatePresence } from "framer-motion";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
export default function ({
  menuState,
  closeMenu,
  navigateTo,
}: {
  menuState: boolean;
  closeMenu: () => void;
  navigateTo: (pathname: string) => void;
}) {
  const [animateOptions, setAnimateOptions] = useState(false);
  const route = useRouter();
  const pathname = usePathname();
  let options = [
    { title: "CONNECT WALLET", href: "/connectwallet" },
    { title: "HOME", href: "/" },
    { title: "ABOUT", href: "/about" },
    { title: "HEROEZ UNIVERSITY", href: "/heroez-university" },
    { title: "QUEST SYSTEM", href: "/quest-system" },
    { title: "LIGHT NOVEL", href: "/light-novel" },
    { title: "STUDIO Z", href: "/studio-z" },
    { title: "COLLECTION", href: "/collection" },
    { title: "UPDATES", href: "/updates" },
    { title: "TEAM", href: "/team" },
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
      className={`fixed top-0 left-0 w-screen h-[100dvh]  z-50 duration-500 flex justify-end  ${
        !menuState
          ? "pointer-events-none backdrop-blur-0 backdrop-brightness-100"
          : " backdrop-blur-[1px] backdrop-brightness-50"
      }`}
    >
      <AnimatePresence>
        {menuState && (
          <motion.div
            layout
            initial={{ x: "50%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "10%", opacity: 0 }}
            transition={{
              duration: 0.3,
              type: "spring",
              damping: 10,
            }}
            onClick={(e) => e.stopPropagation()}
            className=" w-full  sm:w-2/3 h-full bg-primary/[95%] px-6 pb-6 flex flex-col "
          >
            <motion.div
              layout
              className="w-full max-h-24 h-full py-6 "
            ></motion.div>
            <motion.ul layout className="flex flex-col gap-1">
              <AnimatePresence>
                {animateOptions && (
                  <>
                    {options.map((option, i) => {
                      return (
                        <motion.li
                          key={i}
                          onClick={() => {
                            navigateTo(option.href);
                            closeMenu();
                            // setTimeout(() => {
                            //   route.push(option.href);
                            // }, 3000);
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: (0.1 + i) / 10 }}
                          className={`btn  active:bg-secondary  border-none hover:bg-secondary hover:text-primary  ${
                            option.title === "CONNECT WALLET" && "btn-disabled"
                          } ${
                            option.href.toLowerCase() ===
                            pathname!.toLowerCase()
                              ? " pointer-events-none bg-secondary text-primary "
                              : "bg-transparent"
                          }`}
                        >
                          {option.title.toUpperCase()}
                        </motion.li>
                      );
                    })}
                  </>
                )}
              </AnimatePresence>
            </motion.ul>
            <motion.footer
              layout
              className=" text-2xl flex flex-col gap-4 justify-center items-center mt-auto mb-0"
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
