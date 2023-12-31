"use client";
import { MotionValue, motion } from "framer-motion";
import Image from "next/image";
import VideoComponent from "./VideoComponent";
// import ReactPlayer from "react-player";

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    // <motion.div
    //   style={{ y }}
    //   className="var-position w-1/4 h-full relative flex flex-col gap-[2vw] min-w-[250px]"
    // >
    //   {images.map((image, index) => {
    //     return (
    //       <div
    //         key={index}
    //         className="w-full h-full relative rounded-[1vw] overflow-hidden"
    //       >
    //         <Image
    //           src={image}
    //           alt="text-pic"
    //           fill
    //           className="object-cover"
    //           quality={100}
    //         />
    //       </div>
    //     );
    //   })}
    // </motion.div>
    <motion.div
      style={{ y }}
      // var-position
      className="sm-var-position md:var-position h-full relative flex flex-col gap-[2vw] min-w-[200px] md:min-w-[250px]"
    >
      {images.map((image, index) => {
        return (
          <div
            key={index}
            // hover:scale-105 transition-all duration-150 hover:border-8 hover:border-white/20
            className="bg-white/10 w-full relative rounded-[1vw] overflow-hidden duration-150 "
          >
            {!!image && <VideoComponent s3Url={image} />}
          </div>
        );
      })}
    </motion.div>
  );
};
export default Column;
