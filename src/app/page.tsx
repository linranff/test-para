"use client";
import { Divider, Button, ColumnContainer } from "@/components";
import Link from "next/link";
import { useEffect, useState } from "react";
import Test from "@/components/Test";
import ShowcaseDown from "@/components/ShowcaseDown";
import { useRef } from "react";

const images = [
  "/images/1.mp4",
  "/images/2.mp4",
  "/images/3.mp4",
  "/images/4.mp4",
  "/images/5.mp4",
  "/images/6.mp4",
  "/images/7.mp4",
  "/images/8.mp4",
  "/images/9.mp4",
  "/images/10.mp4",
  "/images/11.mp4",
  "/images/12.mp4",
];

export default function Home() {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   if (document.readyState === "complete") {
  //     setIsLoaded(true);
  //   } else {
  //     window.onload = () => {
  //       setIsLoaded(true);
  //     };
  //   }
  // }, []);

  // if (!isLoaded) {
  //   // 如果CSS和JS还没有加载完毕，就返回null
  //   return (
  //     <div
  //       style={{
  //         position: "fixed",
  //         top: 0,
  //         left: 0,
  //         width: "100vw",
  //         height: "100vh",
  //         backgroundColor: "#161616",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       {/* <h1
  //         style={{
  //           color: "#fff",
  //           fontSize: "3rem",
  //           animation: "spin 1s infinite, colorchange 2s infinite",
  //         }}
  //       >
  //         Morph is Loading...
  //       </h1> */}

  //       <div className="ring border-none">
  //         <h1 className="  md:text-[2rem] text-transparent bg-clip-text bg-gradient-to-l from-[#7062f2] to-[#cb58a3]">
  //           Morph is Loading...
  //         </h1>
  //       </div>
  //     </div>
  //   );
  // }

  const targetRef = useRef<HTMLDivElement>(null);

  const smoothScrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main>
      <div className="h-screen scroll-smooth w-full p-6 bg-slate-50 flex flex-col items-center justify-center gap-6">
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={smoothScrollToTarget}
        >
          <h1 className="text-5xl font-bold mb-8">Showcase</h1>
          <a href="#targetSection">
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              ></path>
            </svg>
          </a>
        </div>

        <h1 className="text-5xl font-bold text-slate-950">Morph Studio</h1>
        <p className="text-lg font-medium text-slate-700">Morph Studio</p>
        <Divider />
        {/* <Button /> */}
        <p className="text-sm mt-6 text-slate-400"></p>

        <Link
          className="flex flex-row text-xl justify-center items-center gap-2 border-2 border-[#7062f2] rounded-lg px-5 py-3 text-[#fff] hover:bg-[#7062f2] hover:text-white transition-all duration-300 ease-in-out bg-[#4952ca]/80 "
          href="https://discord.gg/hjd9JvXTU5"
          target="_blank"
        >
          {/* <BsDiscord className="text-3xl" /> */}
          <div className="min-w-[150px] text-center">Join our Discord</div>
        </Link>
      </div>
      <p ref={targetRef}></p>
      <ColumnContainer />

      {/* <div className="bg-slate-950 h-[70vh] md:h-[175vh] relative flex gap-[2vw] p-[2vw] overflow-hidden">
        <Test
          y={1}
          images={[images[0], images[1], images[2], images[5], images[11]]}
        />
        <Test
          y={2}
          images={[images[3], images[4], images[5], images[9], images[4]]}
        />

        <Test
          y={3}
          images={[images[6], images[7], images[8], images[2], images[3]]}
        />

        <Test
          y={4}
          images={[images[9], images[10], images[11], images[8], images[7]]}
        />
        {/* <Test y={1} images={[images[0], images[1], images[2]]} />
        <Test y={2} images={[images[3], images[4], images[5]]} />
        <Test y={3} images={[images[6], images[7], images[8]]} />

        <Test y={4} images={[images[9], images[10], images[11]]} /> 
      </div> */}

      <div className="h-screen w-full p-6 bg-slate-50 flex flex-col items-center justify-center gap-6">
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={smoothScrollToTarget}
        >
          <h1 className="text-5xl font-bold mb-8">Showcase</h1>
          <a className="transform rotate-180">
            <svg
              className="w-6 h-6 animate-bounce "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              ></path>
            </svg>
          </a>
        </div>
        <h1 className="text-5xl font-bold text-slate-950">Morph Studio</h1>
        <p className="text-lg font-medium text-slate-700">Morph Studio</p>
        <Divider />
        {/* <Button /> */}
        <p className="text-sm mt-6 text-slate-400"></p>
        <Link
          className="flex flex-row text-xl justify-center items-center gap-2 border-2 border-[#7062f2] rounded-lg px-5 py-3 text-[#fff] hover:bg-[#7062f2] hover:text-white transition-all duration-300 ease-in-out bg-[#4952ca]/80 "
          href="https://discord.gg/hjd9JvXTU5"
          target="_blank"
        >
          {/* <BsDiscord className="text-3xl" /> */}
          <div className="min-w-[150px] text-center">Join our Discord</div>
        </Link>
      </div>
    </main>
  );
}
