"use client"
import React, { Component } from 'react';
import './style.css';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './swipers.css';
import { Navigation } from 'swiper/modules';

export default function Testimony() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
        <a
          className="gallery-item"
          data-src="https://www.youtube.com/watch?v=UIoI9iKGqtE"
          key="4"
        >
          <img
            style={{ maxWidth: '400px' }}
            className="img-responsive"
            alt=""
            src="https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
          />
        </a>
          </LightGallery>
         
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      
    </>
  );
};
