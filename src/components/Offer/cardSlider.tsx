import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { NextButton, PrevButton } from "../ui/EmblaCarousel/EmblaCarouselArrowButtons";
import OfferCard from "./offerCard";

type SlideType = {
  id: number;
  title: string;
  url: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000, stopOnMouseEnter: true }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((offerData) => (
              <div className="embla__slide" key={offerData.id}>
                <OfferCard offerData={offerData} />
              </div>
            ))}
          </div>
        </div>

        <PrevButton className="embla__button prevButton" onClick={scrollPrev} />
        <NextButton className="embla__button nextButton" onClick={scrollNext} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
