import React, { useState } from 'react';
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import { Thumbs } from "swiper/modules"
type ThumbsSwiper = { id: number; title: String; text: string; isActive: Boolean; }
type SliderSwiper = { id: number; img: string; }

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

  SwiperCore.use([Thumbs])

  const MainSwiper = () => {
    // store thumbs swiper instance
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
      <main>
        {/* Main Swiper -> pass thumbs swiper instance */}
        <Swiper thumbs={{ swiper: thumbsSwiper }}>
            <div className="swiper-wrapper">
              {
                slides.map(item => <SwiperSlide key={item.id} className="swiper-slide hero-item">
                            <div className="hero-item__img">
                                <Image unoptimized={true} alt="" width={0} height={0} src={item.img} />
                            </div>
                </SwiperSlide>)
              }
            </div>
        </Swiper>

        {/* Thumbs Swiper -> store swiper instance */}
        {/* It is also required to set watchSlidesVisibility and watchSlidesProgress props */ }
        <Swiper
          onSwiper={setThumbsSwiper}
          watchSlidesVisibility
          watchSlidesProgress
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
      </main>
    )
  }

  export default MainSwiper