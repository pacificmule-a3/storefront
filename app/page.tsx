
import Image from "next/image"
import MainSwiper from '@/components/MainSwiper'
import HomeSwiper from '@/components/HomeSwiper'

export default function App() {
  return (

        <div className="content__wrapper">
            <MainSwiper />

            <div className="hero-home">
                <HomeSwiper />
            </div>

            <section className="section">
                <div className="section__wrapper">
                    <div className="container">
                        <div className="block">
                            <div className="block__wrapper">
                                <div className="block__grid">
                                    <div className="block-img">
                                        <div className="block-img__wrapper">
                                            <p className="block__tag">About us</p>
                                        </div>
                                        <Image className="full" unoptimized={true} alt="Logo" width={0} height={0} src="/img/slider/1.webp" />   
                                    </div>
                                    <div className="block-content">
                                        <div className="block-content__wrapper">
                                            <div className="block-content__box">
                                                <div className="block-content__text">
                                                    <h2 className="title title--base">
                                                        Our company has its
                                                        <span className="title title--accent">own production</span>
                                                        of metal car accessories
                                                    </h2>
                                                    <p className="text text--opacity">
                                                        One of the elements described in the paragraph above. New ones
                                                        may
                                                        be added in the future. The picture below shows a Bed Rack
                                                        mounted
                                                        on a pickup truck body.
                                                    </p>
                                                    <p className="text text--opacity">
                                                        An element or group of elements that can be installed on or
                                                        using
                                                        one of the main products. In the photo below, a Bed Rack with an
                                                        option is a set of 4 screens.
                                                    </p>
                                                    <p className="text text--opacity">
                                                        A website for online sales and advertising of self-made
                                                        products.
                                                        Automotive-themed accessories made of metal, mostly stainless
                                                        steel
                                                        pipes, are typically used to protect specific parts of cars
                                                        during
                                                        transportation or outdoor adventures (overlanding).
                                                    </p>
                                                    <p className="text text--opacity">
                                                        One of the elements described in the paragraph above. New ones
                                                        may
                                                        be added in the future. The picture below shows a Bed Rack
                                                        mounted
                                                        on a pickup truck body.
                                                    </p>
                                                    <p className="text text--opacity">
                                                        One of the elements described in the paragraph above. New ones
                                                        may
                                                        be added in the future. The picture below shows a Bed Rack
                                                        mounted
                                                        on a pickup truck body.
                                                    </p>
                                                    <p className="text text--opacity">
                                                        One of the elements described in the paragraph above. New ones
                                                        may
                                                        be added in the future. The picture below shows a Bed Rack
                                                        mounted
                                                        on a pickup truck body.
                                                    </p>
                                                    <p className="text text--opacity">
                                                        One of the elements described in the paragraph above. New ones
                                                        may
                                                        be added in the future. The picture below shows a Bed Rack
                                                        mounted
                                                        on a pickup truck body.
                                                    </p>

                                                </div>
                                                <div className="block-content__footer">
                                                    <a href="#" className="button button--text">
                                                        <span className="button__text">More about company</span>
                                                        <svg className="button__icon">
                                                            
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="section__wrapper">
                    <div className="container">
                        <div className="block">
                            <div className="block__wrapper">
                                <div className="block__grid">


                                    <div className="block-content">
                                        <div className="block-content__wrapper">
                                            <div className="block-content__box">
                                                <div className="block-content__text">
                                                    <h2 className="title title--base">
                                                        <span className="title title--accent">All products</span>
                                                        are proudly designed, engineered and manufactured
                                                        <span className="title title--accent">in the USA</span>
                                                    </h2>
                                                    <p className="text text--opacity">
                                                        All products are proudly designed, engineered, and manufactured
                                                        in the USA using premium materials. Built to meet the highest
                                                        standards of quality, durability, and performance for real-world
                                                        American conditions.
                                                    </p>
                                                    <p className="text text--opacity">
                                                        One of the elements described in the paragraph above. New ones
                                                        may be added in the future. The picture below shows a Bed Rack
                                                        mounted on a pickup truck body.
                                                    </p>
                                                    <p className="text text--opacity">
                                                        An element or group of elements that can be installed on or
                                                        using one of the main products. In the photo below, a Bed Rack
                                                        with an option is a set of 4 screens.
                                                    </p>
                                                </div>
                                                <div className="block-content__footer">
                                                    <a href="#" className="button button--text">
                                                        <span className="button__text">More</span>
                                                        <svg className="button__icon">
                                                            
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block-img">
                                        <div className="block-img__wrapper">
                                            <p className="block__tag">Made in USA</p>
                                        </div>
                                        <Image className="full" unoptimized={true} alt="Logo" width={0} height={0} src="/img/slider/2.webp" />   
                                    </div> 

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>

  )
}
