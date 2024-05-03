import React from "react";
import "./css/styles.css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { PlayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface TestimonyPhotoAndVideoData {
  thumbnail: string;
  videoUrl: string;
}
const testimonyVideo = ({ testimonyDataVideoAndThumbNail }: { testimonyDataVideoAndThumbNail: TestimonyPhotoAndVideoData }) => {
  return (
    <>
      <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
        <a className="gallery-item" data-src={testimonyDataVideoAndThumbNail.videoUrl}>
          <div className="relative">
            <Image width={500} height={500} className="img-responsive" alt="" src={testimonyDataVideoAndThumbNail.thumbnail} />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white rounded-full" />
          </div>
        </a>
      </LightGallery>
    </>
  );
};

export default testimonyVideo;
