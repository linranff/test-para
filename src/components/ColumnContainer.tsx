"use client";
import { useEffect, useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Column } from "@/components";
import useDimension from "@/hooks/useDimension";

// Array of image URLs
const images2 = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
];

// const images = [
//   "https://morph-generated-tag.s3.us-west-2.amazonaws.com/nowatermark_video_hd/-fps+30+%2C+best+quality%2C+extremely+detailed%2C+minima-65327a67a2384b3cbc2f4f931acb1c47.mp4",
//   "https://morph-generated-tag.s3.us-west-2.amazonaws.com/nowatermark_video_hd/-fps+30+%2C+best+quality%2C+extremely+detailed%2C+minima-65327a67a2384b3cbc2f4f931acb1c47.mp4",
//   "https://morph-generated-tag.s3.us-west-2.amazonaws.com/nowatermark_video_hd/-fps+30+%2C+best+quality%2C+extremely+detailed%2C+minima-65327a67a2384b3cbc2f4f931acb1c47.mp4",
//   "https://morph-generated-tag.s3.us-west-2.amazonaws.com/nowatermark_video_hd/-fps+30+%2C+best+quality%2C+extremely+detailed%2C+minima-65327a67a2384b3cbc2f4f931acb1c47.mp4",
//   "https://morph-generated-tag.s3.us-west-2.amazonaws.com/nowatermark_video_hd/-fps+30+%2C+best+quality%2C+extremely+detailed%2C+minima-65327a67a2384b3cbc2f4f931acb1c47.mp4",
//   "https://morph-generated-tag.s3.us-west-2.amazonaws.com/nowatermark_video_hd/-fps+30+%2C+best+quality%2C+extremely+detailed%2C+minima-65327a67a2384b3cbc2f4f931acb1c47.mp4",
//   "https://morph-generated-tag.s3.us-west-2.amazonaws.com/nowatermark_video_hd/-fps+30+%2C+best+quality%2C+extremely+detailed%2C+minima-65327a67a2384b3cbc2f4f931acb1c47.mp4",
//   "https://morph-generated-tag.s3.us-west-2.amazonaws.com/nowatermark_video_hd/-fps+30+%2C+best+quality%2C+extremely+detailed%2C+minima-65327a67a2384b3cbc2f4f931acb1c47.mp4",
//   "https://morph-generated-tag.s3.us-west-2.amazonaws.com/nowatermark_video_hd/-fps+30+%2C+best+quality%2C+extremely+detailed%2C+minima-65327a67a2384b3cbc2f4f931acb1c47.mp4",
//   "https://morph-generated-tag.s3.us-west-2.amazonaws.com/nowatermark_video_hd/-fps+30+%2C+best+quality%2C+extremely+detailed%2C+minima-65327a67a2384b3cbc2f4f931acb1c47.mp4",
//   "https://morph-generated-tag.s3.us-west-2.amazonaws.com/nowatermark_video_hd/-fps+30+%2C+best+quality%2C+extremely+detailed%2C+minima-65327a67a2384b3cbc2f4f931acb1c47.mp4",
//   "https://morph-generated-tag.s3.us-west-2.amazonaws.com/nowatermark_video_hd/-fps+30+%2C+best+quality%2C+extremely+detailed%2C+minima-65327a67a2384b3cbc2f4f931acb1c47.mp4",
// ];

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
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

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
      className="bg-slate-950 h-[70vh] md:h-[175vh] relative flex gap-[2vw] p-[2vw] overflow-hidden"
    >
      <Column
        y={y}
        images={[images[0], images[1], images[2], images[5], images[11]]}
      />
      <Column
        y={y2}
        images={[images[3], images[4], images[5], images[9], images[4]]}
      />

      <Column
        y={y3}
        images={[images[6], images[7], images[8], images[2], images[3]]}
      />

      <Column
        y={y4}
        images={[images[9], images[10], images[11], images[8], images[7]]}
      />
    </div>
  );
};
export default ColumnContainer;
