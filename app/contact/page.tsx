import SlideLeft from "@/components/transitions/SlideLeft"
export default function App() {
  return (
    <SlideLeft> 
        <div className="content__wrapper">
            <section className="section">
                <div className="section__wrapper">
                    <div className="container">
                        <div className="block">
                            <div className="block__wrapper">
                                <div className="block__grid block__grid--auto">
                                    <div className="block-content block-content--gradient">
                                        <div className="block-content__wrapper">
                                            <div className="block-content__box">
                                                <div className="block-content__text">
                                                    <div className="block-content__main">
                                                        <div className="block-item">
                                                            <div className="block-item__wrapper">
                                                                <p className="title title--base">
                                                                    Contact
                                                                </p>
                                                                <ul className="contact-list">
                                                                    <li className="contact-list__item">
                                                                        <a href="#" className="contact-link">
                                                                        <span className="contact-link__icon">
                                                                            <svg className="icon">
                                                                               
                                                                            </svg>
                                                                        </span>
                                                                            <span className="text text--opacity">
                                                                            1301 Blue Ridge Dr Georgetown, Texas 78626
                                                                        </span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="contact-list__item">
                                                                        <a href="tel:(512) 636-8053" className="contact-link">
                                                                        <span className="contact-link__icon">
                                                                            <svg className="icon">
                                                                              
                                                                            </svg>
                                                                        </span>
                                                                            <span className="text text--opacity">
                                                                            (512) 636-8053
                                                                        </span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="contact-list__item">
                                                                        <a href="mailto:info@147pacific.com"
                                                                           className="contact-link">
                                                                        <span className="contact-link__icon">
                                                                            <svg className="icon">
                                                                               
                                                                            </svg>
                                                                        </span>
                                                                            <span className="text text--opacity text--underline">
                                                                          info@147pacific.com
                                                                        </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="block-item">
                                                            <div className="block-item__wrapper">
                                                                <p className="title title--base">
                                                                    Customer service
                                                                </p>
                                                                <ul className="contact-list">
                                                                    <li className="contact-list__item">
                                                                        <a href="mailto:customer@147pacific.com"
                                                                           className="contact-link">
                                                                        <span className="contact-link__icon">
                                                                            <svg className="icon">
                                                                               
                                                                            </svg>
                                                                        </span>
                                                                            <span className="text text--opacity text--underline">
                                                                         customer@147pacific.com
                                                                        </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <p className="text text--opacity">
                                                            All products are proudly designed, engineered, and manufactured
                                                            in the USA using premium materials. Built to meet the highest
                                                            standards of quality, durability, and performance for real-world
                                                            American conditions.
                                                            Family-owned and operated in Georgetown, Texas, the company is
                                                            dedicated to American craftsmanship and customer-focused
                                                            service.
                                                        </p>
                                                        <ul className="contact-list contact-list--row">
                                                            <li className="contact-list__item">
                                                                <a href="#"
                                                                   className="contact-link contact-link--big">
                                                                        <span className="contact-link__icon">
                                                                            <svg className="icon">
                                                                                
                                                                            </svg>
                                                                        </span>
                                                                </a>
                                                            </li>
                                                            <li className="contact-list__item">
                                                                <a href="#"
                                                                   className="contact-link contact-link--big">
                                                                        <span className="contact-link__icon">
                                                                            <svg className="icon">

                                                                            </svg>
                                                                        </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-content block-content--gradient--light">
                                        <div className="block-content__wrapper">
                                            <div className="block-content__box">
                                                <div className="block-content__text">
                                                    <div className="block-content__main">
                                                        <form action="" className="form">
                                                            <div className="form__wrapper form__wrapper--small">
                                                                <div className="form__header">
                                                                    <p className="title title--base title--center">
                                                                        Contact us
                                                                    </p>
                                                                </div>
                                                                <div className="form__content">
                                                                    <fieldset className="fieldset">
                                                                        <legend className="fieldset__legend">
                                                                            Your email
                                                                        </legend>
                                                                        <div className="input">
                                                                            <input type="text" className="input__item" placeholder="Email@example.com" />
                                                                        </div>
                                                                    </fieldset>
                                                                    <div className="form__grid">
                                                                        <fieldset className="fieldset">
                                                                            <legend className="fieldset__legend">
                                                                                First Name
                                                                            </legend>
                                                                            <div className="input">
                                                                                <input type="text" className="input__item" placeholder="First Name" />
                                                                            </div>
                                                                        </fieldset>
                                                                        <fieldset className="fieldset">
                                                                            <legend className="fieldset__legend">
                                                                                Last Name
                                                                            </legend>
                                                                            <div className="input">
                                                                                <input type="text" className="input__item" placeholder="Last Name" />
                                                                            </div>
                                                                        </fieldset>
                                                                    </div>
                                                                    <fieldset className="fieldset">
                                                                        <legend className="fieldset__legend">
                                                                            Phone number
                                                                        </legend>
                                                                        <div className="input">
                                                                            <input type="text" className="input__item" placeholder="8 (___) ___-__-__" />
                                                                        </div>
                                                                    </fieldset>
                                                                    <fieldset className="fieldset">
                                                                        <legend className="fieldset__legend">
                                                                            Your message
                                                                        </legend>
                                                                        <div className="input input--textarea">
                                                                            <textarea name="" id=""
                                                                                      className="input__item" placeholder="Message"></textarea>
                                                                        </div>
                                                                    </fieldset>
                                                                    <button type="submit" className="button button--center button--text">
                                                                        <span className="button__text">Send</span>
                                                                        <svg className="button__icon">
                                                                   
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
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
        </div>
    </SlideLeft>     
  )
}
