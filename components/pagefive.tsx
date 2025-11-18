import React from "react";

const Pagefive = () => {
  return (
    <div>
      <div className="pt-24 pl-[70px] relative">
        <div className="text-center mb-12">
          <div className="text-lg font-normal uppercase">other models</div>
          <h2 className="font-headline font-black uppercase leading-[0.9] text-[8vw] lg:text-7xl">
            COLLECTION
          </h2>
        </div>

        <div className="flex justify-between gap-10 text-center w-full ">
          <div className="flex flex-col items-center h-auto basis-1/3 shrink-0">
            <img src="camera-black.png" className="w-[70%] mb-5" style={{filter: "drop-shadow(25px 25px 20px rgba(0, 0, 0, 0.7))"}}/>
            <div className="text-sm font-bold">INSTAX mini Evo</div>
            <div className="text-sm mt-1">$506.00</div>
          </div>

          <div className="flex flex-col items-center h-auto basis-1/3 shrink-0 relative top-[-30px]">
            <div className="w-[90%] h-[150px]"></div>
            <div className="relative bottom-[-105px]">
              <div className="text-sm font-bold">FUJIFILM XF10 brown</div>
            <div className="text-sm mt-1">$546.00</div>
            </div>
          </div>

          <div className="flex flex-col items-center h-auto basis-1/3 shrink-0 relative top-[-30px] right-[60px]" style={{filter: "drop-shadow(25px 25px 20px rgba(0, 0, 0, 0.7))"}}>
            <img src="camera-white.png" className="w-[70%] mb-5 scale-[0.8]" />
            <div className="text-sm font-bold">INSTAX mini Evo</div>
            <div className="text-sm mt-1">$568.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagefive;
