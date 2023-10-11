"use client";
import React, { useEffect, useRef } from "react";

interface VideoComponentProps {
  s3Url: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ s3Url }) => {
  const videoRef = useRef<HTMLVideoElement>(null); // Specify the type here

  useEffect(() => {
    // Fetch the video from S3
    fetch(s3Url)
      .then((response) => response.blob())
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        const video = videoRef.current;
        if (video) {
          video.src = objectURL;
          video.load(); // Load the video
        }
        // Optionally, release the object URL later to free resources
        // URL.revokeObjectURL(objectURL);
      })
      .catch((error) => {
        console.error("Error fetching video:", error);
      });
  }, [s3Url]);

  return (
    <video ref={videoRef} preload="auto" autoPlay muted loop>
      Your Browser does not support HTML video.
    </video>
  );
};

export default VideoComponent;
