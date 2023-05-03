import Footer from "@/lib/components/Footer";
import HeaderName from "@/lib/components/HeaderName";
import ResourceLink from "@/lib/components/ResourceLink";

export default function Home() {
  return (
    <div className="flex flex-col h-screen text-white">
      <div className="bg-[#1D1C4E] flex flex-col flex-1 items-center justify-center gap-6">
        <HeaderName />
        <ResourceLink />
      </div>
      <Footer />
    </div>
  );
}
