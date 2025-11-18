import Pageone from "../components/pageone";
import Pagetwo from "@/components/pagetwo";
import Pagethree from "@/components/pagethree";
import Pagefour from "@/components/pagefour";
import Pagefive from "@/components/pagefive";
import Pagesix from "@/components/pagesix";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-hidden">
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
