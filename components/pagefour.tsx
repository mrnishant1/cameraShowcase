import Image from "next/image";
import React from "react";

const Pagefour = () => {
  return (
    <div className="pagefour overflow-hidden h-screen w-screen">
      <div className="h-full w-full flex justify-center items-center relative pt-20 pb-10">
       
 
        <div className="floating-photo photo-size absolute top-[5%] left-[10%] transform -rotate-15 z-5">
          <Image
            height={50}
            width={200}
            src="/photo1.jpg"
            alt="Vintage TV Scene"
            className="w-[100%] h-auto block"
          />
        </div>
        <div className="floating-photo photo-size absolute top-[5%] right-[10%] transform rotate-45 z-5">
          <Image
            height={100}
            width={200}
            src="/photo2.jpg"
            alt="Vintage TV Scene"
            className="w-[100%] h-auto block"
          />
        </div>

        

        <div className="floating-photo photo-size absolute bottom-[10%] left-[10%] transform -rotate-30 z-5">
          <Image
            height={100}
            width={300}
            src="/photo3.jpg"
            alt="Vintage Car"
            className="w-[100%] h-auto block"
          />
        </div>

       
      </div>
    </div>
  );
};

export default Pagefour;
