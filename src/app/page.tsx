import Footer from "@/lib/components/Footer";
import HeaderName from "@/lib/components/HeaderName";
import ResourceLink from "@/lib/components/ResourceLink";

export default function Home() {
  return (
    <div className="flex flex-col h-screen text-white">
      <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 h-full flex flex-col">
        <div className="flex flex-col flex-1 items-center justify-center gap-6">
          <HeaderName />
          <ResourceLink />
        </div>
        <Footer />
      </div>
    </div>
  );
}
