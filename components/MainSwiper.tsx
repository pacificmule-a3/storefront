"use client";
import Image from "next/image"
import React, { useState, useEffect, useRef, useCallback } from "react"
import { Swiper, SwiperSlide, SwiperRef, useSwiper, useSwiperSlide } from "swiper/react"
import SwiperCore from "swiper"
import { Controller, EffectFade, Autoplay, EffectCoverflow, Navigation, Pagination} from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"


type ThumbsSwiper = { id: number; title: String; text: string; isActive: Boolean; }
type SliderSwiper = { id: number; img: string; }


const SwiperComponent = () => {
  const [thumbSwiper, setThumbSwiper] = useState(0)
  const swiperRef = useRef<SwiperRef>(null)

  
  useEffect(() => {
   // const swiperContainer = swiperRef.current as any 
   // const params = { initialSlide: 4 }  
  //  Object.assign(swiperContainer, params) 
   // swiperContainer?.slideTo(thumbSwiper)
    if(swiperRef.current) swiperRef.current?.swiper.slideTo(thumbSwiper)
    console.log(swiperRef.current)
  }, [thumbSwiper])


  return (
        <div className="hero hero-main">
                <div className="hero__swiper">
                    <Swiper
                        loop
                        ref={swiperRef}
                        effect={"coverflow"}
                        speed={800}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 80,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                        autoplay={{
                            delay: 9000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]} 
                    >


                        <SwiperSlide className="swiper-slide hero-item">
                            <div className="hero-content">
                                <p className="title title--big">
                                    All products are proudly manufactured in the USA
                                </p>
                                <p className="text text--base">
                                    All products are proudly designed, engineered, and manufactured in the USA using
                                    premium materials.
                                </p>
                            </div>
                            <div className="hero-item__img">
                                <Image unoptimized={true} alt="" width={0} height={0} src='/img/hero/main.webp' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide hero-item">
                            <div className="hero-item__img">
                                <Image unoptimized={true} alt="" width={0} height={0} src='/img/slider/4.webp' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide hero-item">
                            <div className="hero-item__img">
                                <Image unoptimized={true} alt="" width={0} height={0} src='/img/slider/5.jpg' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide hero-item">
                            <div className="hero-content">
                                <p className="title title--big">
                                    All products are proudly manufactured in the USA
                                </p>
                            </div>
                            <div className="hero-item__img">
                                <Image unoptimized={true} alt="" width={0} height={0} src='/img/slider/6.jpg' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide hero-item">
                            <div className="hero-content">
                                <p className="title title--big">
                                    All products are proudly manufactured in the USA
                                </p>
                            </div>
                            <div className="hero-item__img">
                                <Image unoptimized={true} alt="" width={0} height={0} src='/img/slider/7.jpg' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide hero-item">
                            <div className="hero-content">
                                <p className="title title--big">
                                    All products are proudly manufactured in the USA
                                </p>
                            </div>
                            <div className="hero-item__img">
                                <Image unoptimized={true} alt="" width={0} height={0} src='/img/slider/8.jpg' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide hero-item">
                            <div className="hero-content">
                                <p className="title title--big">
                                    All products are proudly manufactured in the USA
                                </p>
                            </div>
                            <div className="hero-item__img">
                                <Image unoptimized={true} alt="" width={0} height={0} src='/img/slider/9.jpg' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                  
                                <div className="hero-nav__slider swiper">

                                    <Swiper
                                          loop
                                          spaceBetween={20}
                                          slidesPerView={4}
                                          freeMode={true}
                                          watchSlidesProgress
                                          slideToClickedSlide={true}
                                          autoplay={{
                                              delay: 9000,
                                              disableOnInteraction: true,
                                          }}
                                          modules={[Autoplay]}
                                          onSwiper={(swiper) => {  }}
                                          onClick={(swiper) => {
                                              const {snapIndex, realIndex} = swiper
                                            //  swiper.slideTo(snapIndex, 1100)
                                              setThumbSwiper(realIndex)
                                            //  swiper.slideTo(snapIndex)
                                            //  console.log(realIndex, swiper)
                                            }
                                          }
                                        >
      
                                            <SwiperSlide className="swiper-slide hero-nav__item">
                                              <div>
                                                  <p className="hero-nav__title">Bed Rack</p>
                                                  <p className="text text--base hero-nav__text">for accommodation and transportation of things and equipment</p>
                                              </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide hero-nav__item">
                                                          <div>
                                                              <p className="hero-nav__title">Bull Bar</p>
                                                              <p className="text text--base hero-nav__text">to protect the front of the car</p>
                                                          </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide hero-nav__item">
                                                          <div>
                                                              <p className="hero-nav__title">Running Board</p>
                                                              <p className="text text--base hero-nav__text">for the convenience of landing</p>
                                                          </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide hero-nav__item">
                                                          <div>
                                                              <p className="hero-nav__title">Made in USA</p>
                                                              <p className="text text--base hero-nav__text">for the convenience of landing</p>
                                                          </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide hero-nav__item">
                                                          <div>
                                                              <p className="hero-nav__title">Made in USA</p>
                                                              <p className="text text--base hero-nav__text">for the convenience of landing</p>
                                                          </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide hero-nav__item">
                                                          <div>
                                                              <p className="hero-nav__title">Made in USA</p>
                                                              <p className="text text--base hero-nav__text">for the convenience of landing</p>
                                                          </div>
                                            </SwiperSlide>
                                    </Swiper>  
                                </div>
         
            </div>
    
  )
}
export default SwiperComponent