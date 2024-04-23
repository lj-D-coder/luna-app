"use client";
import "hero-slider/dist/index.css";
import HeroSlider, { ButtonsNav, MenuNav, Overlay, Slide } from "hero-slider";
import Wrapper from "./Wrapper";
import Title from "./Title";
import { useEffect, useState } from "react";



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
      setHeight(window.innerWidth >= 768 ? "70vh" : "30vh");
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      <div className="flex">
        <HeroSlider
          height={height}
          className="top-0 h-full w-full"
          style={{
            borderRadius: "10px",
          }}
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 100,
            slidingDelay: 10,
            onSliding: (nextSlide: number) => console.debug("onSliding(nextSlide): ", nextSlide),
          }}
          settings={{
            debug: {
              verbose: true,
              info: true,
              debug: true,
              warnings: true,
              errors: true,
            },
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