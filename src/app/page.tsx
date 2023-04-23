import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function Home() {
  return (
    <div className="flex flex-col h-screen text-white">
      <div className="bg-[#1D1C4E] flex flex-col flex-1 items-center justify-center gap-6">
        <div className="flex flex-col items-center">
          <Image src="/avatar.jpg" alt="avatar" width={350} height={350} />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold">Irakli Khizanishvili</h1>
            <span className="uppercase font-semibold text-xs">
              Software Engineer
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Link
            href="https://github.com/IrakliK"
            className="flex flex-col justify-center items-center gap-4"
          >
            <div className="flex font-bold">GITHUB</div>
            <BsGithub size={50} className="text-white hover:text-gray-400" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/iraklikhizanishvili"
            className="flex flex-col justify-center items-center gap-4"
          >
            <div className="flex font-bold">LINKEDIN</div>
            <BsLinkedin size={50} className="text-white hover:text-gray-400" />
          </Link>
          <Link
            href="https://resume.io/r/8U06dz4yt"
            className="flex flex-col justify-center items-center gap-4"
          >
            <div className="flex font-bold">RESUME</div>
            <SlEnvolopeLetter
              size={50}
              className="text-white hover:text-gray-400"
            />
          </Link>
        </div>
      </div>
      <div className="bg-[#1D1C4E] text-center py-2 text-xs">
        <p>
          &copy; {new Date().getFullYear()} Irakli Khizanishvili. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
