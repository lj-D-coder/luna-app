import React from "react";
import "./css/styles.css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { PlayIcon } from "@heroicons/react/24/outline";

interface Testimony {
  videoUrl: string;
  thumbnail: string;
}

const testimonyVideo = ({ testimony }: { testimony: Testimony }) => {
  return (
    <>
      <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
        <a className="gallery-item" data-src={testimony.videoUrl}>
          <div className="relative">
            <img className="img-responsive" alt="" src={testimony.thumbnail} />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white rounded-full" />
          </div>
        </a>
      </LightGallery>
    </>
  );
};

export default testimonyVideo;
