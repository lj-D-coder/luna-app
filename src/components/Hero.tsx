"use client";
import "hero-slider/dist/index.css";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export type Hero = {
  _id: string;
  sliderUrl: string;
  sliderOrder: number;
  serviceId: string;
};

interface HeroProp {
  sliderData: Hero[];
}

const Hero: React.FC<HeroProp> = ({ sliderData }) => {
  const [height, setHeight] = useState<string>("30vh");
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerWidth >= 768 ? "65vh" : "30vh");
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useLayoutEffect(() => {
    const box = boxRef.current;

    if (box) {
      let currentIndex = 0;
      const images = box.querySelectorAll("img");

      // Initialize all images to be hidden and offscreen to the right
      gsap.set(images, { opacity: 0, x: window.innerWidth });

      const showImage = (index: number) => {
        gsap.to(images[index], {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power1.inOut",
        });
      };

      const hideImage = (index: number) => {
        gsap.to(images[index], {
          opacity: 0,
          x: -window.innerWidth,
          duration: 1,
          ease: "power1.inOut",
        });
      };

      const handleMouseOver = () => {
        timeline.pause();
        gsap.to(box, {
          scaleX: 1.05,
          scaleY: 1.05,
          duration: 0.5,
          ease: "power1.inOut",
        });
      };

      const handleMouseOut = () => {
        timeline.resume();
        gsap.to(box, {
          scaleX: 1,
          scaleY: 1,
          duration: 0.5,
          ease: "power1.inOut",
        });
      };

      box.addEventListener("mouseover", handleMouseOver);
      box.addEventListener("mouseout", handleMouseOut);

      const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
        delay: 5,
        onComplete: () => {
          hideImage(currentIndex);
          currentIndex = (currentIndex + 1) % images.length;
          showImage(currentIndex);
        },
      });

      // Initial call to show the first image
      showImage(currentIndex);

      // Schedule hiding and showing of images in the timeline
      timeline.to({}, {
        delay: 4, // Show image for 4 seconds before starting the next transition
        onComplete: () => {
          hideImage(currentIndex);
          currentIndex = (currentIndex + 1) % images.length;
          showImage(currentIndex);
        },
      });

      return () => {
        box.removeEventListener("mouseover", handleMouseOver);
        box.removeEventListener("mouseout", handleMouseOut);
        timeline.kill();
      };
    }
  }, [sliderData]);

  return (
    <div ref={boxRef} className="box relative overflow-hidden" style={{ height }}>
      {sliderData.map((banner, index) => (
        <Image
          key={index}
          src={banner.sliderUrl}
          width={1920}
          height={1080}
          alt="Slides"
          className="w-full h-full object-cover absolute top-0 left-0"
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default Hero;
