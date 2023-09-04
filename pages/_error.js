import "@/app/globals.css";
import { Kanit } from "next/font/google";
const inter = Kanit({ subsets: ["latin"], weight: ["200", "400", "900"] });
import logohighres from "@/public/logohighres.webp";
import Image from "next/image";
import Link from "next/link";
import { BsDiscord, BsTwitter } from "react-icons/bs";

export default function Error({ statusCode }) {
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };

  return (
    <div
      className={`p-6 bg-accent w-screen h-screen flex items-center justify-center flex-col text-primary ${inter.className}`}
    >
      {" "}
      <Image className="max-w-[200px]" src={logohighres} alt="HeroeZ" />
      <p className="font-black text-4xl">{statusCode && statusCode}</p>
      <p>An Error Occured!</p>
      <div className="flex flex-col justify-center items-center max-w-[200px] w-full">
        <Link className="btn btn-primary text-accent w-full mt-6" href={"/"}>
          GO Back Home
        </Link>
        <div className="flex mt-6 gap-6 w-full items-center justify-center text-3xl ">
          <Link
            className="btn btn-circle  text-accent"
            href={"https://discord.com/invite/64nt9zk6x7"}
            target="_blank"
          >
            <BsDiscord />
          </Link>
          <Link
            className="btn  btn-circle text-accent"
            href={"https://twitter.com/HEROEZofficial"}
            target="_blank"
          >
            <BsTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
}
