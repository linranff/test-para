// "use client";
import { Divider, Button, ColumnContainer } from "@/components";
import Link from "next/link";
// import { useEffect, useState } from "react";
import Test from "@/components/Test";

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

  return (
    <main>
      <div className="h-screen w-full p-6 bg-slate-50 flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl font-bold text-slate-950">morph</h1>
        <p className="text-lg font-medium text-slate-700">Morph Studio</p>
        <Divider />
        {/* <Button /> */}
        <p className="text-sm mt-6 text-slate-400"></p>
      </div>
      {/* <ColumnContainer /> */}

      <div className="bg-slate-950 h-[70vh] md:h-[175vh] relative flex gap-[2vw] p-[2vw] overflow-hidden">
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
      </div>

      <div className="h-screen w-full p-6 bg-slate-50 flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl font-bold text-slate-950">morph</h1>
        <p className="text-lg font-medium text-slate-700">Morph Studio</p>
        <Divider />
        {/* <Button /> */}
        <p className="text-sm mt-6 text-slate-400"></p>
      </div>
      {/* <div className="h-screen w-full p-6 bg-slate-50 ">
        <Link href="https://unsplash.com/" className="underline text-slate-950">
          Images from Unsplash ↗
        </Link>
      </div> */}
    </main>
  );
}
