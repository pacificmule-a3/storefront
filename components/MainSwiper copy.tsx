"use client";
import Image from "next/image"
import React, { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Controller, EffectFade, Autoplay, EffectCoverflow, Navigation, Pagination} from "swiper/modules"
import "swiper/css"

type ThumbsSwiper = { id: number; title: String; text: string; isActive: Boolean; }
type SliderSwiper = { id: number; img: string; }


const SwiperComponent = () => {
  const thumbs: ThumbsSwiper[] = [
    {id: 1, title: 'Bed Rack', text: 'for accommodation and transportation of things and equipment', isActive: false },
    {id: 2, title: 'Bull Bar', text: 'to protect the front of the car', isActive: false },
    {id: 3, title: 'Running Board', text: 'for the convenience of landing', isActive: false },
    {id: 4, title: 'Made in USA', text: 'for the convenience of landing', isActive: false },
  ]
  const slides: SliderSwiper[] = [
    {id: 1, img: '/img/hero/main.webp' },
    {id: 2, img: '/img/slider/1.webp' },
    {id: 3, img: '/img/slider/2.webp' },
    {id: 4, img: '/img/slider/4.webp' },
  ]

  const [slideSwiper, setSlideSwiper] = useState(slides[0])
  const [thumbSwiper, setThumbSwiper] = useState(0)

  useEffect(() => {
    setSlideSwiper(slides[thumbSwiper])
  }, [thumbSwiper])

  return (
        <div className="hero swiperWrapper">
            <div className="hero__wrapper">
                <div className="swiper hero-slider">
                    <Swiper
                        slidesPerView={1}
                        effect="fade"
                        spaceBetween={0}
                    >
                        <div className="swiper-wrapper">
                        <SwiperSlide key={slideSwiper.id} className="swiper-slide hero-item">
                            <div className="hero-item__img">
                                <Image unoptimized={true} alt="" width={0} height={0} src={slideSwiper.img} />
                            </div>
                        </SwiperSlide>
                        </div>
                    </Swiper>
                </div>

                <div className="hero-main">
                    <div className="container">
                        <div className="hero-main__wrapper">
                            <div className="hero-content">
                                <p className="title title--big">
                                    All products are proudly manufactured in the USA
                                </p>
                                <p className="text text--base">
                                    All products are proudly designed, engineered, and manufactured in the USA using
                                    premium materials.
                                </p>
                            </div>



                            <div className="hero-nav">
                                <Swiper
                                    loop
                                    slidesPerView={4}
                                    spaceBetween={1}
                                    freeMode={false}
                                    watchSlidesProgress
                                    autoplay
                                    coverflowEffect={{slideShadows: false, rotate: 30}}
                                    onClick={(swiper) => {
                                            const {clickedSlide, clickedIndex, realIndex} = swiper
                                            console.log(swiper, clickedIndex)
                                            swiper.slideTo(clickedIndex, 1000)
                                            setThumbSwiper(clickedIndex)
                                        }
                                    }
                                >
                                    <div className="swiper-wrapper">
                                      {
                                        thumbs.map(item => <SwiperSlide key={item.id} className="swiper-slide hero-nav__item">
                                                  <div>
                                                      <p className="hero-nav__title">{item.title}</p>
                                                      <p className="text text--base hero-nav__text">{item.text}</p>
                                                  </div>
                                          </SwiperSlide>)
                                      }
                                    </div>
                                </Swiper>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default SwiperComponent