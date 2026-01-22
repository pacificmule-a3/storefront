
export default function App() {
  return (
        <div className="content__wrapper">

            <section className="section">
                <div className="section__wrapper">
                    <div className="container">
                        <div className="block login">
                            <div className="block__wrapper">
                                <div className="block__grid block__grid--login block__grid--auto">
                                    <div className="login-block login-block--nav">
                                        <div className="block-content">
                                            <div className="block-content__wrapper">
                                                <div className="block-content__box">
                                                    <div className="block-content__text">
                                                        <div className="block-content__main">
                                                            <form action="" className="form">
                                                                <div className="form__wrapper">
                                                                    <div className="form__header form__header--login form__header--row">
                                                                        <a href="#sign-in"
                                                                           className="title title--base title--center login__title active">
                                                                            Sign In
                                                                        </a>
                                                                        <a href="#sign-up"
                                                                           className="title title--base title--center login__title">
                                                                            Sign Up
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="login-block active" id="sign-in">
                                        <div className="block-content block-content--bg--desktop block-content--gradient">
                                            <div className="block-content__wrapper">
                                                <div className="block-content__box">
                                                    <div className="block-content__text">
                                                        <div className="block-content__main">
                                                            <form action="" className="form">
                                                                <div className="form__wrapper">
                                                                    <div className="form__header form__header--desktop">
                                                                        <p className="title title--base title--center">
                                                                            Sign In
                                                                        </p>
                                                                    </div>
                                                                    <div className="form__content form__content--center">
                                                                        <fieldset className="fieldset">
                                                                            <legend className="fieldset__legend">
                                                                                Your email (login)
                                                                            </legend>
                                                                            <div className="input">
                                                                                <input type="text" className="input__item" placeholder="" />
                                                                            </div>
                                                                        </fieldset>
                                                                        <fieldset className="fieldset">
                                                                            <legend className="fieldset__legend">
                                                                                Password
                                                                            </legend>
                                                                            <div className="input">
                                                                                <input type="password"
                                                                                       className="input__item"
                                                                                       placeholder="" />
                                                                            </div>
                                                                        </fieldset>

                                                                        <button type="submit"
                                                                                className="button button--center button--text">
                                                                            <span className="button__text">sign in</span>
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
                                    <div className="login-block" id="sign-up">
                                        <div className="block-content block-content--bg--desktop block-content--gradient--light">
                                            <div className="block-content__wrapper">
                                                <div className="block-content__box">
                                                    <div className="block-content__text">
                                                        <div className="block-content__main">
                                                            <form action="" className="form">
                                                                <div className="form__wrapper">
                                                                    <div className="form__header form__header--desktop">
                                                                        <p className="title title--base title--center">
                                                                            Sign Up
                                                                        </p>
                                                                    </div>
                                                                    <div className="form__content">
                                                                        <fieldset className="fieldset">
                                                                            <legend className="fieldset__legend">
                                                                                Your email
                                                                            </legend>
                                                                            <div className="input">
                                                                                <input type="text" className="input__item"
                                                                                       placeholder="Email@example.com" />
                                                                            </div>
                                                                        </fieldset>
                                                                        <div className="form__grid">
                                                                            <fieldset className="fieldset">
                                                                                <legend className="fieldset__legend">
                                                                                    First Name
                                                                                </legend>
                                                                                <div className="input">
                                                                                    <input type="text"
                                                                                           className="input__item"
                                                                                           placeholder="First Name" />
                                                                                </div>
                                                                            </fieldset>
                                                                            <fieldset className="fieldset">
                                                                                <legend className="fieldset__legend">
                                                                                    Last Name
                                                                                </legend>
                                                                                <div className="input">
                                                                                    <input type="text"
                                                                                           className="input__item"
                                                                                           placeholder="Last Name" />
                                                                                </div>
                                                                            </fieldset>
                                                                        </div>
                                                                        <div className="form__grid form__grid--column">
                                                                            <fieldset className="fieldset">
                                                                                <legend className="fieldset__legend">
                                                                                    Your Address
                                                                                </legend>
                                                                                <div className="input">
                                                                                    <input type="text"
                                                                                           className="input__item"
                                                                                           placeholder="Address 1" />
                                                                                </div>
                                                                            </fieldset>
                                                                            <fieldset className="fieldset">

                                                                                <div className="input">
                                                                                    <input type="text"
                                                                                           className="input__item"
                                                                                           placeholder="Address 2" />
                                                                                </div>
                                                                            </fieldset>
                                                                        </div>
                                                                        <div className="form__grid">
                                                                            <fieldset className="fieldset">
                                                                                <legend className="fieldset__legend">
                                                                                    City
                                                                                </legend>
                                                                                <div className="input">
                                                                                    <input type="text"
                                                                                           className="input__item"
                                                                                           placeholder="City" />
                                                                                </div>
                                                                            </fieldset>
                                                                            <fieldset className="fieldset">
                                                                                <legend className="fieldset__legend">
                                                                                    State
                                                                                </legend>
                                                                                <div className="input">
                                                                                    <input type="text"
                                                                                           className="input__item"
                                                                                           placeholder="State" />
                                                                                </div>
                                                                            </fieldset>
                                                                        </div>
                                                                        <fieldset className="fieldset">
                                                                            <legend className="fieldset__legend">
                                                                                Phone number
                                                                            </legend>
                                                                            <div className="input">
                                                                                <input type="text" className="input__item"
                                                                                       placeholder="8 (___) ___-__-__" />
                                                                            </div>
                                                                        </fieldset>
                                                                        <fieldset className="fieldset">
                                                                            <legend className="fieldset__legend">
                                                                                ZIP code
                                                                            </legend>
                                                                            <div className="input">
                                                                                <input type="text" className="input__item"
                                                                                       placeholder="****************" />
                                                                            </div>
                                                                        </fieldset>
                                                                        <button type="submit"
                                                                                className="button button--center button--text">
                                                                            <span className="button__text">sign up</span>
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
                </div>
            </section>
        
        </div>
  )
}
