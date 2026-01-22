import React from "react";
import Image from "next/image"
import {useState} from 'react'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react'
import { Scrollbar, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { setSlideState } from "../state/slideSlice"
import { useAppDispatch } from "../state/store"

type Item = { id: number; title: String; text: string; isActive: Boolean; }

const SlideUpdater = () => {
  const dispatch = useAppDispatch()
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      freeMode={false}
      watchSlidesProgress
      loop
      autoplay
      coverflowEffect={{slideShadows: false, rotate: 30}}
      onClick={(swiper) => {
          const {clickedSlide, clickedIndex, realIndex} = swiper
          swiper.slideTo(clickedIndex, 1000)
          dispatch(setSlideState(clickedIndex))
        }
      }
    >
      
            <SwiperSlide key={1} className="swiper-slide hero-nav__item">
                          <div>
                              <p className="hero-nav__title">Bed Rack</p>
                              <p className="text text--base hero-nav__text">for accommodation and transportation of things and equipment</p>
                          </div>
            </SwiperSlide>
            <SwiperSlide key={2} className="swiper-slide hero-nav__item">
                          <div>
                              <p className="hero-nav__title">Bull Bar</p>
                              <p className="text text--base hero-nav__text">to protect the front of the car</p>
                          </div>
            </SwiperSlide>
            <SwiperSlide key={3} className="swiper-slide hero-nav__item">
                          <div>
                              <p className="hero-nav__title">Running Board</p>
                              <p className="text text--base hero-nav__text">for the convenience of landing</p>
                          </div>
            </SwiperSlide>
            <SwiperSlide key={4} className="swiper-slide hero-nav__item">
                          <div>
                              <p className="hero-nav__title">Made in USA</p>
                              <p className="text text--base hero-nav__text">for the convenience of landing</p>
                          </div>
            </SwiperSlide>
            <SwiperSlide key={5} className="swiper-slide hero-nav__item">
                          <div>
                              <p className="hero-nav__title">Made in USA</p>
                              <p className="text text--base hero-nav__text">for the convenience of landing</p>
                          </div>
            </SwiperSlide>
            <SwiperSlide key={6} className="swiper-slide hero-nav__item">
                          <div>
                              <p className="hero-nav__title">Made in USA</p>
                              <p className="text text--base hero-nav__text">for the convenience of landing</p>
                          </div>
            </SwiperSlide>


    </Swiper>
  )
}

export default SlideUpdater
