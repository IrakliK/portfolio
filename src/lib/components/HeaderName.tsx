import Image from "next/image";

function HeaderName() {
  return (
    <div className="flex flex-col items-center gap-8">
      <Image
        src="/avatar.webp"
        alt="avatar"
        width={250}
        height={250}
        priority
        quality={100}
        className="rounded-full shadow-lg drop-shadow-lg"
      />
      <div className="flex flex-col items-center gap-4 text-gray-600">
        <h1 className="text-4xl font-bold">Irakli Khizanishvili</h1>
        <span className="uppercase font-semibold text-xs">
          Software Engineer
        </span>
      </div>
    </div>
  );
}

export default HeaderName;
