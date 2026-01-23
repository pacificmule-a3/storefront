'use client'
import { useState, useEffect } from 'react'
import { Provider } from "react-redux"
import { store } from "@/state/store"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from 'next/link'

import MobileMenu from "@/components/MobileMenu"

import "@/css/css/reset.css"
import "@/css/css/font.css"
import "@/css/css/index.css"


export default function RootLayout({
  children
} : {
  children: React.ReactNode;
} ) {
  const pathname = usePathname()
  const [isMenuActive, setMenuActive] = useState(false)

  //useEffect(() => {
   // setMenuActive(false)
  //}, [pathname])

  return <Provider store={store}>
    <html lang="en">
      <body>
      <div className="page-wrapper">
        <header className="header header--sticky">
            <div className="header__wrapper">
                <div className="nav">
                    <div className="nav__row">
                        <div className="nav-main nav-main--header">
                            <div className="nav-main__wrapper nav-main__wrapper--header">
                                <Link href="#" className={isMenuActive ? "burger active" : "burger"} onClick={() => setMenuActive(state => !state)}>
                                   <span className="burger__wrapper"></span>
                                </Link> 
                                <Link href="/" className="nav__logo nav__logo--header logo">
                                    <Image unoptimized={true} alt="Logo" width={301} height={58} src="/img/logo.webp" className="logo__img"  />
                                </Link> 
                                <ul className="nav-list nav-list--desktop">
                                <li className={pathname == "/products" ? "nav-list__item active" : "nav-list__item"}>
                                    <Link href="/products" className="nav-list__link">
                                        Products
                                    </Link> 
                                </li>
                                <li className={pathname == "/shopping" ? "nav-list__item active" : "nav-list__item"}>
                                    <Link href="/shopping" className={"nav-list__link"}>
                                        Shopping
                                    </Link> 
                                </li>
                                </ul>
                                <Link href="#" className="nav-button">
                                    <Image unoptimized={true} alt="Shop" width={0} height={0} src="/img/sprite.svg#shop" className="nav-button__icon" />
                                </Link> 
                            </div>
                        </div>

                        <div className="nav-buttons nav-buttons--header">
                            <div className="nav-button nav-buttons__item language-switcher" >
                                <Image unoptimized={true} alt="Language" width={0} height={0} src="/img/sprite.svg#language" className="nav-button__icon" />
                                <div className="language-switcher__list">
                                    <Link href="#" className="nav-button  language-switcher__item current">
                                       <p className="text text--middle">En</p>
                                    </Link> 
                                    <Link href="#" className="nav-button  language-switcher__item">
                                        <p className="text text--middle"></p>
                                    </Link> 
                                </div>
                            </div>
                            <Link href="#" className="nav-button nav-buttons__item">
                                <Image unoptimized={true} alt="Profile" width={0} height={0} src="/img/sprite.svg#profile" className="nav-button__icon" />
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className={isMenuActive ? "mobile-menu active" : "mobile-menu"} onClick={() => setMenuActive(false)}>
            <MobileMenu />
        </div>
      
            <main className="content">
                {children}
            </main>
  
        <footer className="footer menu">
            <div className="container">
                <div className="menu__wrapper menu__wrapper--footer">
                    <div className="menu-header nav">
                        <div className="nav__row">
                            <div className="nav-main">
                                <div className="nav-main__wrapper">
                                    <Link href="/" className="nav__logo logo">
                                        <Image unoptimized={true} alt="Logo" width={301} height={58} src="/img/logo.webp" className="logo__img" />
                                    </Link>
                                    <ul className="nav-list nav-list--desktop">
                                        <li className="nav-list__item">
                                            <Link href="/products" className="nav-list__link">Products</Link> 
                                        </li>
                                        <li className="nav-list__item">
                                            <Link href="/shopping" className="nav-list__link">Shopping</Link> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul className="nav-list nav-list--mobile">
                                <li className="nav-list__item">
                                    <Link href="/products" className="nav-list__link">Products</Link> 
                                </li>
                                <li className="nav-list__item">
                                    <Link href="/shopping" className="nav-list__link">Shopping</Link> 
                                </li>
                            </ul>
                            <div className="nav-buttons">
                                <Link href="#" className="nav-button nav-buttons__item">
                                    <Image unoptimized={true} alt="" width={0} height={0} src="/img/sprite.svg#shop" />
                                </Link> 
                                <div className="nav-button nav-buttons__item language-switcher" >
                                    <Image unoptimized={true} alt="" width={0} height={0} src="/img/sprite.svg#language" />
                                    <div className="language-switcher__list">
                                        <Link href="#" className="nav-button  language-switcher__item current">
                                            <p className="text text--middle">En</p>
                                        </Link> 
                                        <Link href="#" className="nav-button  language-switcher__item">
                                            <p className="text text--middle">Sp</p>
                                        </Link> 
                                    </div>
                                </div>
                                <Link href="#" className="nav-button nav-buttons__item">
                                    <Image unoptimized={true} alt="" width={0} height={0} src="/img/sprite.svg#profile" />
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="menu-content">
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
                                        <Link href="/company" className="nav-list__link">Company</Link> 
                                </li>
                                <li className="nav-list__item">
                                        <Link href="/shopping" className="nav-list__link">Shopping</Link> 
                                </li>
                                <li className="nav-list__item">
                                    <Link href="/made-in-usa" className="nav-list__link">Made in the USA</Link> 
                                </li>
                                <li className="nav-list__item">
                                    <Link href="/contact" className="nav-list__link">Contact</Link> 
                                </li>
                                <li className="nav-list__item">
                                    <Link href="/customer" className="nav-list__link">Customer Service</Link> 
                                </li>
                                <li className="nav-list__item">
                                    <Link href="/disclaimer" className="nav-list__link">Disclaimer</Link> 
                                </li>
                                <li className="nav-list__item">
                                    <Link href="/privacy" className="nav-list__link">Privacy & Cookie</Link> 
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
                                            <Image unoptimized={true} alt="" width={0} height={0} src="/img/sprite.svg#insta" />
                                        </Link> 
                                    </li>
                                    <li className="social-list__item">
                                        <Link href="#" className="social-link">
                                            <Image unoptimized={true} alt="" width={0} height={0} src="/img/sprite.svg#yt" />
                                        </Link> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
      </body>
    </html>
</Provider>
}
