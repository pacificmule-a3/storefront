'use client'
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from 'next/link'


export default () => {
  const pathname = usePathname()

  return (
        <footer className=" menu">
            <div className="container">
                <div className="menu__wrapper menu__wrapper--footer">
                    <div className="menu-content menu-content--mobile">
                        <div className="menu-content__wrapper">
                            <div className="menu-content__grid">
                                <div className="menu-content__block">
                                    <p className="title title--base title--opacity--big">
                                        Bed Rack
                                    </p>
                                    <p className="text text--base text--opacity--big">
                                        Pick-up truck bed racks built with 2.375" round stainless steel tubing with
                                        stainless sheet connections
                                    </p>
                                </div>
                                <div className="menu-content__block">
                                    <p className="title title--base title--opacity--big">
                                        Bull Bar
                                    </p>
                                    <p className="text text--base text--opacity--big">
                                        Protective front bar made from 2.375" round stainless steel tubing with stainless
                                        sheet reinforcements
                                    </p>
                                </div>
                                <div className="menu-content__block">
                                    <p className="title title--base title--opacity--big">
                                        Running Board
                                    </p>
                                    <p className="text text--base text--opacity--big">
                                        Designed to provide easy access to your vehicle while enhancing its rugged
                                        appearance
                                    </p>
                                </div>
                                <div className="menu-content__block">
                                    <p className="title title--base title--opacity--big">
                                        HD Grille Guard
                                    </p>
                                    <p className="text text--base text--opacity--big">
                                        Heavy-duty front-end protection for semi-trucks, built from high-strength stainless
                                        steel 2.375" or 2.875" tubing
                                    </p>
                                </div>
                                <div className="menu-content__block">
                                    <p className="title title--base title--opacity--big">
                                        Bed Rack
                                    </p>
                                    <p className="text text--base text--opacity--big">
                                        Pick-up truck bed racks built with 2.375" round stainless steel tubing with
                                        stainless sheet connections
                                    </p>
                                </div>
                                <div className="menu-content__block">
                                    <p className="title title--base title--opacity--big">
                                        Bull Bar
                                    </p>
                                    <p className="text text--base text--opacity--big">
                                        Protective front bar made from 2.375" round stainless steel tubing with stainless
                                        sheet reinforcements
                                    </p>
                                </div>
                            </div>
                            <div className="menu-content__list">
                                <ul className="nav-list nav-list--column">
                                    <li className="nav-list__item">
                                        <Link href="/company" className={pathname == "/company" ? "nav-list__link active" : "nav-list__link"}>
                                            Company
                                        </Link>
                                    </li>
                                    <li className="nav-list__item">
                                        <Link href="/made-in-usa" className={pathname == "/made-in-usa" ? "nav-list__link active" : "nav-list__link"}>
                                            Made in the USA
                                        </Link>
                                    </li>
                                    <li className="nav-list__item">
                                        <Link href="/contact" className={pathname == "/contact" ? "nav-list__link active" : "nav-list__link"}>
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="nav-list__item">
                                        <Link href="/customer" className={pathname == "/customer" ? "nav-list__link active" : "nav-list__link"}>
                                            Customer Service
                                        </Link>
                                    </li>
                                    <li className="nav-list__item">
                                        <Link href="/disclaimer" className={pathname == "/disclaimer" ? "nav-list__link active" : "nav-list__link"}>
                                            Disclaimer
                                        </Link>
                                    </li>
                                    <li className="nav-list__item">
                                        <Link href="/privacy" className={pathname == "/privacy" ? "nav-list__link active" : "nav-list__link"}>
                                            Privacy & Cookie
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="menu-footer">
                        <div className="menu-footer__row">
                            <div className="menu-footer__logos">
                                <Image unoptimized={true} alt="" width={0} height={0} src="/img/logo.webp" className="menu-footer__img" />
                                <Image unoptimized={true} alt="" width={0} height={0} src="/img/logo-second.webp" className="menu-footer__img" />
                            </div>
                            <div className="social">
                                <ul className="social-list">
                                    <li className="social-list__item">
                                        <Link href="#" className="social-link">
                                            <svg className="social-link__icon">
                                                
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="social-list__item">
                                        <Link href="#" className="social-link">
                                            <svg className="social-link__icon">
                                                
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>  
  )
}