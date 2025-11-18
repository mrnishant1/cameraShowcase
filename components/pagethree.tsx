import React from "react";

const Pagethree = () => {
  return (
    <>
      <div className="pagethree overflow-hidden w-[90%] left-[100px] top-[-100px] pr-[100px] bg-bg-cream min-h-screen border-brown-accent p-0 relative text-text-dark">
        <h1
          className="retro relative left-0 font-headline scale-y-[1.6] font-black uppercase leading-[0.8] text-brown-distressed
            top-[25%] z-10 whitespace-nowrap text-[15vw]"
          style={{ transformOrigin: "left center" }}
        >
          RETROSCOPE
        </h1>

        <div className="retroSection flex flex-row justify-between relative pl-10">
          <div className="relative top-24 w-[25vw] h-[25vw]  bg-video-bg z-15 shadow-lg">
            <img
              src="photo4.jpg"
              alt="Vintage Footage"
              className="w-full h-full object-cover opacity-80"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl opacity-90">
              &#9654;
            </span>
            <div className="relative text-black z-15">
              Watch the actual footage recorded on{" "}
              <strong className="font-bold">Intax</strong>.
            </div>
          </div>

          <div className="relative top-24 right-10 w-[30vw] text-sm leading-relaxed z-15">
            <p className="mb-4 font-bold">
              Cameras have evolved significantly since their inception,
              transforming from bulky devices to sleek, portable gadgets. Today,
              digital cameras offer high-resolution images and advanced features
              that cater to both amateur and professional photographers. With
              the rise of smartphone cameras, capturing stunning photos has
              never been easier, allowing everyone to document their lives in
              vivid detail.
            </p>

            <h3 className="font-bold uppercase mt-4 mb-1 text-4xl">DESIGN</h3>
            <p className="mb-4">
              Cameras have evolved significantly since their inception,
              transforming from bulky devices to sleek, portable gadgets. Today,
              digital cameras offer high-resolution images and advanced features
              that cater to both amateur and professional photographers.
            </p>

            <p>
              A cater to both amateur and professional photographers. With the
              rise of smartphone cameras, capturing stunning photos has never
              been easier, allowing everyone to document their lives in vivid
              detail.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagethree;
