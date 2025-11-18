import React from "react";

const Pagefour = () => {
  return (
    <div className="pagefour overflow-hidden h-screen w-screen">
      <div className="h-full w-full flex justify-center items-center relative pt-20 pb-10">
       

        <div className="floating-photo photo-size absolute top-[5%] left-[10%] transform -rotate-15 z-5">
          <img
            src="photo1.jpg"
            alt="Vintage TV Scene"
            className="w-[50%] h-auto block"
          />
        </div>

        <div className="floating-photo photo-size absolute top-[15%] right-[-5%] transform -rotate-15 z-5">
          <img
            src="photo2.jpg"
            alt="Old Documents"
            className="w-[50%] h-auto block"
          />
        </div>

        <div className="floating-photo photo-size absolute bottom-[10%] left-[10%] transform -rotate-30 z-5">
          <img
            src="photo3.jpg"
            alt="Vintage Car"
            className="w-[50%] h-auto block"
          />
        </div>

        {/* <div className="floating-photo photo-size absolute bottom-[5%] right-[5%] transform -rotate-5 z-5">
          <img
            src="photo4.jpg"
            alt="Old Photo"
            className="w-[50%] h-auto block"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Pagefour;
