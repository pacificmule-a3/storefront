'use client'
import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { EffectFade, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { useAppSelector } from "../state/store"

type Item = { id: number; img: string; }

const items: Item[] = [
  {id: 1, img: '/img/hero/main.webp' },
  {id: 2, img: '/img/slider/1.webp' },
  {id: 3, img: '/img/slider/2.webp' },
  {id: 4, img: '/img/slider/4.webp' },
  {id: 5, img: '/img/slider/5.webp' },
  {id: 6, img: '/img/slider/1.webp' },
  {id: 7, img: '/img/slider/2.webp' }
]

export default () => {
  const {slide} = useAppSelector(state => state.slide),
        [slideIndex, setSlideIndex] = useState(slide),
        swiper = useSwiper()

  useEffect(() => {
    setSlideIndex(slide)
    if(slide) swiper.slideTo(slide)
    console.log(555, slideIndex)
  }, [slide])

  return (
    <Swiper className="swiper-wrapper"
      spaceBetween={1}
      slidesPerView={1}
      effect="fade"
      initialSlide={slide}
    >
            <div className="swiper-wrapper">
              {
                items.map(item => <SwiperSlide key={item.id} className="swiper-slide hero-item">
                            <div className="hero-item__img">
                                <Image unoptimized={true} alt="" width={0} height={0} src={item.img} />
                            </div>
                </SwiperSlide>)
              }
            </div>

    </Swiper>
  )
}
