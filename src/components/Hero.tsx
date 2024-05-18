"use client";
import "hero-slider/dist/index.css";
import HeroSlider, { ButtonsNav, MenuNav, Overlay, Slide } from "hero-slider";
import Wrapper from "./Wrapper";
import Title from "./Title";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";




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

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerWidth >= 768 ? "60vh" : "30vh");
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);



  const boxRef = useRef<HTMLDivElement | null>(null);

useLayoutEffect(() => {
  const box = boxRef.current;

  if (box) {
    // Define your event handlers as separate functions
    const handleMouseOver = () => {
      timeline.pause(); // Pause the timeline
      gsap.to(box, {
        scaleX: 1.05, // Change this to the scale you want in the x direction
        scaleY: 1.05, // Change this to the scale you want in the y direction
        duration: 0.5,
        ease: "power1.inOut",
      });
    };

    const handleMouseOut = () => {
      timeline.resume(); // Resume the timeline
      gsap.to(box, {
        scaleX: 1, // Change this to the scale you want in the x direction
        scaleY: 1, // Change this to the scale you want in the y direction
        duration: 0.5,
        ease: "Ease In Out",
      });
    };

    // Add a hover effect to move the box a little bit
    box.addEventListener("mouseover", handleMouseOver);
    box.addEventListener("mouseout", handleMouseOut);

    // Create a timeline for the animations
    const timeline = gsap.timeline({
      repeat: -1, // Loop the animation indefinitely
      repeatDelay: 5, // Delay between each loop
    });

    timeline
      .set(box, {
        x: window.innerWidth,
        scale: 0.3,
      })
      .to(box, {
        x: 0,
        scale: 1,
        duration: 3,
        ease: "power1.inOut",
      })
      .to(box, {
        opacity: 0, // Fade out the box
        duration: 2,
        ease: "linear",
      });
    
  

    return () => {
      // Cleanup when component unmounts
      box.removeEventListener("mouseover", handleMouseOver);
      box.removeEventListener("mouseout", handleMouseOut);
      timeline.kill(); // Stop the timeline
    };
  }
}, []);

  return (
    <>
      <div ref={boxRef} className="box flex">
        <HeroSlider
          height={height}
          className="top-0 h-full w-full"
          style={{
            borderRadius: "10px",
          }}
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 200,
          }}
          accessibility={{ shouldDisplayButtons: false }}
        >
          <Overlay>
            <Wrapper>
              <Title></Title>
            </Wrapper>
          </Overlay>

          {sliderData.map((banner, index) => (
            <div key={index}>
              <Slide
                label="Giau Pass - Italy"
                background={{
                  backgroundImageSrc: banner.sliderUrl,
                }}
              />
            </div>
          ))}
          {/* <MenuNav /> */}
          {/* <ButtonsNav /> */}
        </HeroSlider>
      </div>
    </>
  );
};

export default Hero;