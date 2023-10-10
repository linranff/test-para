"use client";
// import { MotionValue, motion } from "framer-motion";
// import Image from "next/image";
// import ReactPlayer from "react-player";

type ColumnProps = {
  images: string[];
  y: number;
};

const Test: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <div
      //   style={{ y }}
      className=" w-1/4 h-full relative flex flex-col gap-[2vw] min-w-[200px] md:min-w-[250px]"
    >
      {images.map((image, index) => {
        return (
          <div
            key={index}
            // hover:scale-105 transition-all duration-150 hover:border-8 hover:border-white/20
            className="bg-white/10 w-full relative rounded-[1vw] overflow-hidden hover:scale-105 transition-all duration-150 hover:border-8 hover:border-white/20 "
          >
            {!!image && (
              <video preload="auto" autoPlay muted loop>
                <source src={image} type="video/mp4" />
                Your Browser does not support HTML video.
              </video>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Test;
