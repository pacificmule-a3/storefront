import Image from "next/image"
import SlideUp from "@/components/transitions/SlideUp"
export default function App() {
  return (
    <SlideUp> 
        <div className="content__wrapper">
            <section className="section">
                <div className="section__wrapper">
                    <div className="container">
                        <div className="block">
                            <div className="block__wrapper">
                                <div className="block__grid">
                                    <div className="block-img">
                                        <div className="block-img__wrapper">
                                            <p className="block__tag">Bed Rack</p>
                                        </div>
                                        <Image unoptimized={true} alt="" width={0} height={0} className="full" src="/img/slider/1.webp" />
                                    </div> 
                                    <div className="block-content">
                                        <div className="block-content__wrapper">
                                            <div className="block-content__box">
                                                <div className="block-content__text">
                                                    <h2 className="title title--base">
                                                        Bed Rack
                                                    </h2>
                                                    <p className="text text--opacity">
                                                        Pick-up truck roll cage built from 2.375" round stainless steel
                                                        tubing with stainless sheet connections and anodized aluminum
                                                        inserts. Designed for durability and style, with numerous
                                                        customization options available. Pick-up truck bed racks built
                                                        with 2.375" round stainless steel tubing with stainless sheet
                                                        connections. Pick-up truck bed racks built with 2.375" round
                                                        stainless steel tubing with stainless sheet connections
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
                                                    <p className="text text--opacity">
                                                        A website for online sales and advertising of self-made
                                                        products. Automotive-themed accessories made of metal, mostly
                                                        stainless steel pipes, are typically used to protect specific
                                                        parts of cars during transportation or outdoor adventures
                                                        (overlanding).
                                                    </p>
                                                    <p className="text text--opacity">
                                                        One of the elements described in the paragraph above. New ones
                                                        may be added in the future. The picture below shows a Bed Rack
                                                        mounted on a pickup truck body.
                                                    </p>
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
                                                        Bed Rack
                                                    </h2>
                                                    <p className="text text--opacity">
                                                        Protective front bar made from 2.375" round stainless steel
                                                        tubing with stainless sheet reinforcements. Designed for pickups
                                                        and SUVs to enhance front-end protection and rugged
                                                        appearance.Protective front bar made from 2.375" round stainless
                                                        steel tubing with stainless sheet reinforcements. Protective
                                                        front bar made from 2.375" round stainless steel tubing with
                                                        stainless sheet reinforcements.
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
                                                    <p className="text text--opacity">
                                                        A website for online sales and advertising of self-made
                                                        products. Automotive-themed accessories made of metal, mostly
                                                        stainless steel pipes, are typically used to protect specific
                                                        parts of cars during transportation or outdoor adventures
                                                        (overlanding).
                                                    </p>
                                                    <p className="text text--opacity">
                                                        One of the elements described in the paragraph above. New ones
                                                        may be added in the future. The picture below shows a Bed Rack
                                                        mounted on a pickup truck body.
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-img">
                                        <div className="block-img__wrapper">
                                            <p className="block__tag">Bull Bar</p>
                                        </div>
                                        <Image unoptimized={true} alt="" width={0} height={0} className="full" src="/img/slider/2.webp" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </SlideUp>       
  )
}
