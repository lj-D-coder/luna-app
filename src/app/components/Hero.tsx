"use client";
import "hero-slider/dist/index.css";
import HeroSlider, { ButtonsNav, MenuNav, Overlay, Slide } from "hero-slider";
import Wrapper from "./Wrapper";
import Title from "./Title";

const bogliasco = "https://d222mnpmkyzhbp.cloudfront.net/prod/assets/static/home/hero-v1.webp";
const casWash =
  "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%203431w";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default function Hero() {
  return (
    <>
      <div className="hidden md:flex">
        <HeroSlider
          height="100vh"
          className="top-0 h-full w-full"
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 100,
            slidingDelay: 100,
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
          accessibility={
            {shouldDisplayButtons:false}
          }
        >
          <Overlay>
            <Wrapper>
              <Title></Title>
            </Wrapper>
          </Overlay>

          <Slide
            label="Giau Pass - Italy"
            background={{
              backgroundImageSrc: giauPass,
            }}
          />

          <Slide
            label="Home cleaning - Dust Free"
            background={{
              backgroundImageSrc: bogliasco,
            }}
          />

          <Slide
            label="Car Wash - Service "
            background={{
              backgroundImageSrc: casWash,
            }}
          />

          <Slide
            label="Crater Rock, OR - United States"
            background={{
              backgroundImageSrc: craterRock,
            }}
          />
          {/* <MenuNav /> */}
          {/* <ButtonsNav/> */}
        </HeroSlider>
      </div>
    </>
  );
}
