"use client";
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
      setHeight(window.innerWidth >= 768 ? "90vh" : "30vh");
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
  
      const nextImage = (index: number) => {
        gsap.to(images[index], {
          opacity: 0,
          x: -window.innerWidth,
          duration: 1,
          ease: "power1.inOut",
          onComplete: () => {
            // Reset image position to the right after it has gone offscreen to the left
            gsap.set(images[index], { x: window.innerWidth });
          },
        });
      };
  
      const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
        delay: 0,
      });
  
      images.forEach((_, i) => {
        const nextIndex = (i + 1) % images.length;
        timeline
          .call(() => showImage(i), [], "+=4") // Show each image for 4 seconds
          .call(() => nextImage(i), [], "+=3.5") // Start hiding the image after 3.5 seconds
          .call(() => showImage(nextIndex), [], "+=0.1"); // Show the next image before the current one is fully hidden
      });
  
      // Initial call to show the first image
      showImage(currentIndex);
  
      return () => {
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
          width={1600}
          height={800}
          alt="Slides"
          className="w-full h-full object-cover absolute top-0 left-0"
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default Hero;
