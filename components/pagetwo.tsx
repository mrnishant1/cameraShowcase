// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Pagetwo = () => {
  // gsap.registerPlugin(ScrollTrigger);
  // useGSAP(()=>{

  // },[])
  return (
    <>
      <div className="pagetwo flex justify-between h-screen pl-[70px] pr-10 gap-x-10 relative">
        <div className="col-span-1 pr-5 z-10 w-[30%]">
          <div className="text-lg font-normal mb-2">limited version</div>
          <h2 className="font-headline font-black uppercase leading-[0.9] mb-5 text-[6vw] lg:text-5xl">
            INTAX
            <br />
            FUJIFILM
          </h2>
          <p className="text-sm leading-relaxed mb-8">
            Cameras have evolved significantly since their inception,
            transforming from bulky devices to sleek, portable gadgets. Today,
            digital cameras offer high-resolution images and advanced features
            that cater to both amateur and professional photographers. With the
            rise of smartphone cameras, capturing stunning photos has never been
            easier, allowing everyone to document their lives in vivid detail.
          </p>
          <a
            href="#"
            className="bg-text-dark text-bg-cream py-3 px-6 font-bold text-sm leading-none bg-black text-white"
          >
            BUY NOW
          </a>
        </div>


        <div className="col-span-1 flex flex-col  gap-6 z-10 pl-5 right-0">
          <div className="pt-4 border-t border-text-dark">
            <small className="text-xs">RES</small>
            <div className="text-[4vw] font-black leading-tight">55%</div>
            <div className="text-xs mt-1 leading-snug">
              Cameras have evolved significantly since inception, transform from
              bulky devices.
            </div>
          </div>

          <div className="pt-4 border-t-[15px] border-brown-accent">
            <small className="text-xs">RES</small>
            <div className="text-[4vw] font-black leading-tight">34%</div>
            <div className="text-xs mt-1 leading-snug">
              Cameras have evolved significantly since inception, transform from
              bulky devices.
            </div>
          </div>

          <div className="pt-4 border-t-[15px] border-brown-accent">
            <small className="text-xs">RES</small>
            <div className="text-[4vw] font-black leading-tight">12%</div>
            <div className="text-xs mt-1 leading-snug">
              Cameras have evolved significantly since inception, transform from
              bulky devices.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagetwo;
