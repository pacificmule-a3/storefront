'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'

export default () => {
  return (
    <Swiper className="swiper-wrapper"
      spaceBetween={30}
      slidesPerView={2}
      loop
      onSwiper={(swiper) => console.log(swiper)}>
                        <div className="single-slider__nav">
                                <a href="#" className="single-slider__button single-slider__button--prev">
                                    <Image unoptimized={true} alt="" width={0} height={0} src="/img/sprite.svg#arrow-right" />
                                </a>
                                <a href="#" className="single-slider__button single-slider__button--next">
                                    <Image unoptimized={true} alt="" width={0} height={0} src="/img/sprite.svg#arrow-right" />
                                </a>
                        </div>
                        <SwiperSlide className="block swiper-slide single-slider__item">
                                    <div className="block__grid">
                                        <div className="block-img block-img--full">
                                            <div className="block-img__bg">
                                                <Image unoptimized={true} alt="" width={0} height={0} src="/img/slider/1.webp" />
                                            </div>
                                            <div className="block-img__wrapper">
                                                <p className="block__tag">About us</p>
                                                <div className="block-img__content">
                                                    <p className="title title--base">
                                                        Bed Rack
                                                    </p>
                                                    <p className="text text--opacity text--base">
                                                        Pick-up truck roll cage built from 2.375" round stainless steel
                                                        tubing with stainless sheet connections and anodized aluminum
                                                        inserts. Designed for durability and style, with numerous
                                                        customization options available.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className="block swiper-slide single-slider__item">
                                    <div className="block__grid">
                                        <div className="block-img block-img--full">
                                            <div className="block-img__bg">
                                                <Image unoptimized={true} alt="" width={0} height={0} src="/img/slider/2.webp" />
                                            </div>
                                            <div className="block-img__wrapper">
                                                <p className="block__tag">About us</p>
                                                <div className="block-img__content">
                                                    <p className="title title--base">
                                                        Bed Rack
                                                    </p>
                                                    <p className="text text--opacity text--base">
                                                        Pick-up truck roll cage built from 2.375" round stainless steel
                                                        tubing with stainless sheet connections and anodized aluminum
                                                        inserts. Designed for durability and style, with numerous
                                                        customization options available.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className="block swiper-slide single-slider__item">
                                    <div className="block__grid">
                                        <div className="block-img block-img--full">
                                            <div className="block-img__bg">
                                                <Image unoptimized={true} alt="" width={0} height={0} src="/img/slider/3.webp" />
                                            </div>
                                            <div className="block-img__wrapper">
                                                <p className="block__tag">About us</p>
                                                <div className="block-img__content">
                                                    <p className="title title--base">
                                                        Bed Rack
                                                    </p>
                                                    <p className="text text--opacity text--base">
                                                        Pick-up truck roll cage built from 2.375" round stainless steel
                                                        tubing with stainless sheet connections and anodized aluminum
                                                        inserts. Designed for durability and style, with numerous
                                                        customization options available.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className="block swiper-slide single-slider__item">
                                    <div className="block__grid">
                                        <div className="block-img block-img--full">
                                            <div className="block-img__bg">
                                                <Image unoptimized={true} alt="" width={0} height={0} src="/img/slider/4.webp" />
                                            </div>
                                            <div className="block-img__wrapper">
                                                <p className="block__tag">About us</p>
                                                <div className="block-img__content">
                                                    <p className="title title--base">
                                                        Bed Rack
                                                    </p>
                                                    <p className="text text--opacity text--base">
                                                        Pick-up truck roll cage built from 2.375" round stainless steel
                                                        tubing with stainless sheet connections and anodized aluminum
                                                        inserts. Designed for durability and style, with numerous
                                                        customization options available.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </SwiperSlide>
                
    </Swiper>
  )
}