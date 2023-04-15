import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-100 flex flex-col flex-1 items-center justify-center gap-3">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 text-center">
          🚧 Website Under Construction 🚧
        </h1>
        <div className="flex gap-3">
          <Link href="https://github.com/IrakliK">
            <BsGithub size={50} color="#A0A0A0" />
          </Link>
          <Link href="https://www.linkedin.com/in/iraklikhizanishvili">
            <BsLinkedin size={50} color="#A0A0A0" />
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
