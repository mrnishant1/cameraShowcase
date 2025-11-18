import Pageone from "../components/pageone";
import Pagetwo from "@/components/pagetwo";
import Pagethree from "@/components/pagethree";
import Pagefour from "@/components/pagefour";
import Pagefive from "@/components/pagefive";
import Pagesix from "@/components/pagesix";

export default function Home() {
  return (
    <>
      {/* Mobile Warning */}
      <div className="block lg:hidden w-full h-screen flex items-center justify-center bg-black text-white text-center p-6">
        <p>This site is not yet optimized for mobile. Please visit on a desktop.</p>
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:block w-full overflow-hidden">
        <Pageone />
        <Pagetwo />
        <Pagethree />
        <Pagefour />
        <Pagefive />
        <Pagesix />
      </div>
    </>
  );
}
