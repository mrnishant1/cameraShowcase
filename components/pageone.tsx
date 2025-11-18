"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

const Pageone = () => {
  const cameraRef = useRef(null);
  const textRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    // Init Lenis
    const l = new Lenis({
      // your lenis options here
    });
    lenis.current = l;

    // Tell ScrollTrigger to update on Lenis scroll
    l.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Hook Lenis into GSAP ticker
    const updateLenis = (time:any) => {
      l.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      gsap.ticker.remove(updateLenis);
      l.destroy();
    };
  }, []);

  useGSAP(() => {
    if (!cameraRef.current || !textRef.current) return;
    const tl = gsap.timeline();

    tl.fromTo(cameraRef.current, { scale: 0.9 }, { scale: 0.8, duration: 1 })
      .fromTo(
        cameraRef.current,
        {
          scale: 0.8,
          rotate: 0,
        },
        {
          scale: 1,
          rotate: 20,
          duration: 3.5,
          ease: "back.out(1.7)",
        }
      )
      .fromTo(
        ".zoomAnimation",
        {
          scale: 0,
          opacity: 0,
        },
        {
          delay: 0.3,
          opacity: 1,
          scale: 1,
          duration: 3.5,
          ease: "power4.out",
        },
        "<"
      )
      .fromTo(
        ".header",
        {
          y: -100,
        },
        {
          y: 0,
          duration: 2.5,
          ease: "power4.out",
        },
        "<"
      )
      .fromTo(
        ".leftBar",
        {
          x: -100,
          scale: 1,
        },
        {
          x: 0,
          duration: 2.5,
          ease: "power4.out",
        },
        "<"
      );
    gsap.to(cameraRef.current, {
      rotate: 90,
      y: "+=75vh",
      filter: "drop-shadow(50px -50px 8px rgba(0, 0, 0, 0.7))",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom-=100 top",
        scrub: true,
        markers: false,
      },
      immediateRender: false,
    });
    const tl2 = gsap.timeline();
    tl2
      .fromTo(
        cameraRef.current,
        { scale: 1 },
        {
          scale: 0.7,
          rotate: 70,
          y: "+=100vh",
          filter: "drop-shadow(50px -50px 8px rgba(0, 0, 0, 0.7))",
          scrollTrigger: {
            trigger: ".pagetwo",
            start: "top-=50 top",
            end: "bottom-=100 top",
            scrub: true,
            markers: false,
          },
          immediateRender: false,
        }
      )
      .fromTo(
        ".retroSection",
        {
          y: 300,
          scale: 0.9,
        },
        {
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: ".pagetwo",
            start: "top+=50% top",
            end: "bottom top",
            scrub: true,
            markers: false,
          },
        },
        "<"
      )
      .fromTo(
        ".retro",
        {
          y: 100,
          translateY: -100,
        },
        {
          y: 0,
          left: 0,
          scale: 0.9,
          translateY: 100,
          translateX: 0,
          scrollTrigger: {
            trigger: ".pagetwo",
            start: "top top",
            end: "bottom top",
            scrub: true,
            markers: false,
          },
        },
        "<"
      );

    const tl3 = gsap.timeline();
    tl3
      .to(cameraRef.current, {
        y: "+=130vh",
        rotate: 0,
        scale: 1.2,
        ease: "cubic-bezier(1,-0.01,0,1)",
        filter: "drop-shadow(50px 50px 10px rgba(0, 0, 0, 0.7))",
        scrollTrigger: {
          trigger: ".pagethree",
          start: "top top",
          end: "bottom+=200 top",
          scrub: true,
          markers: false,
        },
        immediateRender: false,
      })
      .fromTo(
        ".floating-photo",
        {
          scale: 0.8,
          y: 200,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: ".pagethree",
            start: "top+=500 top",
            end: "bottom top",
            scrub: true,
            markers: false,
          },
        }
      )
      .to(cameraRef.current, {
        y: "+=85vh",
        x: "+=50",
        scale: 0.6,
        filter: "drop-shadow(25px 25px 20px rgba(0, 0, 0, 0.7))",
        ease: "cubic-bezier(1,-0.01,0,1)",
        scrollTrigger: {
          trigger: ".pagefour",
          start: "top+=100 top",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
        immediateRender: false,
      });
  }, []);
  return (
    <>
      <div className="hero flex items-center">
        <div className="leftBar fixed h-[95%] flex justify-center w-[100px] ">
          <div className="flex flex-col gap-3.5">
            <div className="scale-[1.5] relative right-1/2">☰</div>
            <br />
            <svg
              className="w-6 h-6 scale-[1.2] relative right-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <div className="h-full right-0 w-0.5 bg-black"></div>
        </div>
        <div className="h-screen w-full relative pl-[70px]">
          <header className="header relative top-7 pr-10 flex justify-between items-start z-40">
            <div className="flex flex-col items-center">
              <span className="font-bold text-xl leading-none">FUJIFILM</span>
              <span className="text-xs tracking-widest mt-1 font-medium">
                SINCE 1934
              </span>
            </div>
            <a
              href="#"
              className="  py-2 px-4 font-bold text-sm leading-none bg-black"
              style={{ color: "white" }}
            >
              BUY NOW
            </a>
          </header>
          <img
            ref={cameraRef}
            src="camera.png"
            alt="Fujifilm Retro Camera"
            className="absolute w-[45vw] transform  z-20 left-[25%] top-[15%] "
            style={{
              filter: "drop-shadow(50px 50px 8px rgba(0, 0, 0, 0.7))",
            }}
          />

          <div className="h-full w-full flex justify-center items-center relative pt-20 pb-10">
            <h1
              ref={textRef}
              className="zoomAnimation font-headline font-black uppercase leading-[0.8] text-brown-distressed absolute left-5 z-10 whitespace-nowrap text-[16vw]"
            >
              UNLIMITED
              <br />
              RELEASE
            </h1>

            {/* <img
              src="mini-camera.png"
              alt="Mini Camera"
              className="zoomAnimation absolute w-[10vw] top-[20%] right-[15%] transform rotate-5 z-21"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pageone;
