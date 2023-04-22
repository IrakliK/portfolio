import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-100 flex flex-col flex-1 items-center justify-center gap-3">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 text-center">
          🚧 Website Under Construction 🚧
        </h1>
        <div className="flex gap-3 text-gray-800">
          <Link
            href="https://github.com/IrakliK"
            className="flex flex-col justify-center items-center gap-4"
          >
            <div className="flex font-bold">GITHUB</div>
            <BsGithub size={50} color="#A0A0A0" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/iraklikhizanishvili"
            className="flex flex-col justify-center items-center gap-4"
          >
            <div className="flex font-bold">LINKEDIN</div>
            <BsLinkedin size={50} color="#A0A0A0" />
          </Link>
          <Link
            href="https://resume.io/r/8U06dz4yt"
            className="flex flex-col justify-center items-center gap-4"
          >
            <div className="flex font-bold">RESUME</div>
            <SlEnvolopeLetter size={50} color="#A0A0A0" />
          </Link>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-300 text-center py-2 text-xs">
        <p>
          &copy; {new Date().getFullYear()} Irakli Khizanishvili. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
