"use client";
import "hero-slider/dist/index.css";
import HeroSlider, { ButtonsNav, MenuNav, Overlay, Slide } from "hero-slider";
import Wrapper from "./Wrapper";
import Title from "./Title";
import { carwashimg, carserviceimg, accleaningimg, homecleaningimg, sofacleaningimg, phonerepairimg } from '../assets/images/index'

// const bogliasco = "https://d222mnpmkyzhbp.cloudfront.net/prod/assets/static/home/hero-v1.webp";
// const casWash =
//   "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%203431w";
// const craterRock = "https://i.imgur.com/8DYumaY.jpg";
// const giauPass = "https://i.imgur.com/8IuucQZ.jpg";


const bannerImages = [
  {
    title: "Top rated professionals",
    description: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!",
    url: carwashimg
  },
  {
    title: "Same-day availability",
    description: "Book in less than 60 seconds, and even select same-day slots.",
    url: carserviceimg
  },
  {
    title: "value for money services",
    description: "Our professionals are equipped with the best tools and our services .",
    url: accleaningimg
  },
  {
    title: "value for money services",
    description: "Our professionals are equipped with the best tools and our services .",
    url: homecleaningimg
  },
  {
    title: "value for money services",
    description: "Our professionals are equipped with the best tools and our services .",
    url: sofacleaningimg
  },
  {
    title: "value for money services",
    description: "Our professionals are equipped with the best tools and our services .",
    url: phonerepairimg
  },
];

export default function Hero() {
  return (
    <>
      <div className="flex">
        <HeroSlider
          height="30vh"
          className="top-0 h-full w-full"
          style={{
            borderRadius: "10px"
          }}
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
            { shouldDisplayButtons: false }
          }
        >
          <Overlay>
            <Wrapper>
              <Title></Title>
            </Wrapper>
          </Overlay>

          {bannerImages.map((banner, index) => (
            <div key={index}>
              <Slide
                label="Giau Pass - Italy"
                background={{
                  backgroundImageSrc: banner.url.src
                }}
              />
            </div>
          ))}
          {/* <MenuNav /> */}
          <ButtonsNav/>
        </HeroSlider>
      </div>
    </>
  );
}
