import Image from "next/image";

function HeaderName() {
  return (
    <div className="flex flex-col items-center">
      <Image src="/avatar.jpg" alt="avatar" width={350} height={350} />
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Irakli Khizanishvili</h1>
        <span className="uppercase font-semibold text-xs">
          Software Engineer
        </span>
      </div>
    </div>
  );
}

export default HeaderName;
