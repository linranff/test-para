"use client";
import { useEffect, useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Column } from "@/components";
import useDimension from "@/hooks/useDimension";

// Array of image URLs
// const images2 = [
//   "/images/1.jpg",
//   "/images/2.jpg",
//   "/images/3.jpg",
//   "/images/4.jpg",
//   "/images/5.jpg",
//   "/images/6.jpg",
//   "/images/7.jpg",
//   "/images/8.jpg",
//   "/images/9.jpg",
//   "/images/10.jpg",
//   "/images/11.jpg",
//   "/images/12.jpg",
// ];

const images = [
  "https://d1p14e7crsfwok.cloudfront.net/1.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/2.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/3.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/4.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/5.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/6.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/7.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/8.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/9.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/10.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/11.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/12.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/13.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/14.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/15.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/16.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/17.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/18.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/19.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/20.mp4",
  "https://d1p14e7crsfwok.cloudfront.net/21.mp4",
];

// const images = [
//   "/images/1.mp4",
//   "/images/2.mp4",
//   "/images/3.mp4",
//   "/images/4.mp4",
//   "/images/5.mp4",
//   "/images/6.mp4",
//   "/images/7.mp4",
//   "/images/8.mp4",
//   "/images/9.mp4",
//   "/images/10.mp4",
//   "/images/11.mp4",
//   "/images/12.mp4",
// ];

const ColumnContainer: React.FC = () => {
  // Create a reference for the columnContainer element
  const columnContainer = useRef(null);
  // Get the height value property from the dimension state
  const { height } = useDimension();
  // Get scrollYProgress using the useScroll hook on the columnContainer element
  const { scrollYProgress } = useScroll({
    target: columnContainer,
    //Start tracking at the bottom of the window and top of the columnContainer and stop tracking at the top of the window and bottom of the columnContainer
    offset: ["start end", "end start"],
  });

  // Calculate transformations based on scrollYProgress and height
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.8]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.8]);

  useEffect(() => {
    const lenis = new Lenis();

    // Define a recursive animation function using requestAnimationFrame
    function raf(time: any) {
      lenis.raf(time); // Update the Lenis instance with the current time
      requestAnimationFrame(raf); // Request the next animation frame
    }

    requestAnimationFrame(raf); // Start the animation loop by calling requestAnimationFrame with raf
  }, []);

  return (
    // <div
    //   ref={columnContainer}
    //   className="bg-slate-950 h-[175vh] relative flex gap-[2vw] p-[2vw] overflow-hidden"
    // >
    //   <Column
    //     y={y}
    //     images={[images[0], images[1], images[2], images[6], images[6]]}
    //   />
    //   <Column
    //     y={y2}
    //     images={[images[3], images[4], images[5], images[6], images[6]]}
    //   />
    //   <Column
    //     y={y3}
    //     images={[images[6], images[7], images[8], images[6], images[6]]}
    //   />
    //   <Column
    //     y={y4}
    //     images={[images[9], images[10], images[11], images[6], images[6]]}
    //   />
    // </div>
    <div
      ref={columnContainer}
      className="bg-slate-950 h-[122vh] md:h-[275vh] relative flex flex-wrap md:flex-nowrap gap-[2vw] p-[2vw] overflow-hidden"
    >
      <div className="flex ">
        <Column
          y={y}
          images={[
            images[15],
            images[1],
            images[8],
            images[16],
            images[11],
            images[6],
            images[18],
            images[14],
          ]}
        />
      </div>
      <div className="flex">
        <Column
          y={y2}
          images={[
            // images[13],
            images[4],
            images[19],
            images[9],
            images[4],
            images[17],
            images[5],
            images[18],
          ]}
        />
      </div>
      <div className="hidden md:block ">
        <Column
          y={y3}
          images={[
            images[16],
            images[6],
            images[12],
            images[2],
            images[13],
            images[18],
            images[11],
            images[16],
          ]}
        />
      </div>
      <div className="hidden md:block">
        <Column
          y={y4}
          images={[
            // images[9],
            images[17],
            images[11],
            images[5],
            images[7],
            images[20],
            images[2],
            images[11],
          ]}
        />
      </div>
    </div>
  );
};
export default ColumnContainer;
