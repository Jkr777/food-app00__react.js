import { IoIosInfinite, IoIosPause, IoIosLeaf, IoIosNutrition, IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoMdMenu, IoMdClose } from 'react-icons/io';
import { IconContext } from 'react-icons';
import './test.css';
import './general.css';
import './queries.css';

function Test() {
  return (
    <div className="main">
      <header className="header">
        <a href="#" className="no-link-style">
          <span className="logo">Omnif<span className="logo--style">oo</span>d</span>
        </a>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li><a className="main-nav-link" href="#">How it works</a></li>
            <li><a className="main-nav-link" href="#">Meals</a></li>
            <li><a className="main-nav-link" href="#">Testimonials</a></li>
            <li><a className="main-nav-link" href="#">Pricing</a></li>
            <li><a className="main-nav-link nav-cta" href="#">Try for free</a></li>
          </ul>
        </nav>
        {/* <button className="btn-mobile-nav">
        <IconContext.Provider value={{ className: "icon-mobile-nav" }}>
          <span className="menu-outline"><IoMdMenu /></span>
          <span className="close-outline"><IoMdClose /></span>
        </IconContext.Provider>
        </button> */}
      </header>
      <main>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">A healthy meal delivered to your door, every single day</h1>
              <p className="hero-description">The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. </p>
              <a href="#" className="btn btn--full margin-right-sm">Start eating well</a>
              <a href="#" className="btn btn--outline">Learn more &darr;</a>
              <div className="delivered-meals">
                <div className="delivered-imgs">
                  <img src="https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="customer face" />
                  <img src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=971&q=80" alt="customer face" />
                  <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=944&q=80" alt="customer face" />
                  <img src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="customer face" />
                  <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80" alt="customer face" />
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="customer face" />
                </div>
                <p className="delivered-text"><span>250,000+</span> meals delivered last year!</p>
              </div>
            </div>
            <div className="hero-img-box">
              <img className="hero-img" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2153&q=80" alt="food" />
            </div>
          </div>
        </section>

        <section className="section-how">
          <div className="container">
            <span className="subheading">How it works</span>
            <h2 className="heading-secondary">Your daily dose of health in 3 simple steps</h2>
          </div>
          <div className="container grid grid--2-cols grid--center-v">
            <div className="step-text-box">
              <p className="step-number">01</p>
              <h3 className="heading-tertiary">Tell us what you like (and what not)</h3>
              <p className="step-description">Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!</p>
            </div>
            <div className="step-img-box">
              <img src="https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" className="step-img" alt="iPhone app preferences selection screen" />
            </div>

            <div className="step-img-box">
              <img src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" className="step-img" alt="iPhone app preferences selection screen" />
            </div>
            <div className="step-text-box">
              <p className="step-number">02</p>
              <h3 className="heading-tertiary">Approve your weekly meal plan</h3>
              <p className="step-description">Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.</p>
            </div>

            <div className="step-text-box">
              <p className="step-number">03</p>
              <h3 className="heading-tertiary">Receive meals at convenient time</h3>
              <p className="step-description">Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!</p>
            </div>
            <div className="step-img-box">
              <img src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" className="step-img" alt="iPhone app preferences selection screen" />
            </div>
          </div>
        </section>

        <section className="section-meals">
          <div className="container center-text">
            <span className="subheading">Meals</span>
            <h2 className="heading-secondary">Omnifood AI chooses from 5,000+ recipes</h2>
          </div>

          <div className="container grid grid--3-cols margin-bottom-md">
            <div className="meal">
              <img src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80" className="meal-img" alt="japanese food" />
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="tag">Vegetarian</span>
                </div>
                <p className="meal-title">Japanese Gyozas</p>
                <ul className="meal-attributes">
                  <li className="meal-attribute">&#9679; <span className="bold">650</span> calories</li>
                  <li className="meal-attribute">&#9679; NutriScore&reg; <span className="bold">74</span></li>
                  <li className="meal-attribute">&#9679; <span className="bold">4.9</span> rating(537)</li>
                </ul>
              </div>
            </div>

            <div className="meal">
              <img src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="meal-img" alt="Avocado Salad" />
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="tag tag--vegan">Vegan</span>
                  <span className="tag tag--paleo">Paleo</span>
                </div>
                <p className="meal-title">Avocado Salad</p>
                <ul className="meal-attributes">
                  <li className="meal-attribute">&#9679; <span className="bold">400</span> calories</li>
                  <li className="meal-attribute">&#9679; NutriScore&reg; <span className="bold">92</span></li>
                  <li className="meal-attribute">&#9679; <span className="bold">4.8</span> rating(441)</li>
                </ul>
              </div>
            </div>

            <div className="diets">
              <h3 className="heading-tertiary">Omnifood works with any diet:</h3>
              <ul className="list">
                <li className="list-item">&#9679; <span>Vegetarian</span></li>
                <li className="list-item">&#9679; <span>Vegan</span></li>
                <li className="list-item">&#9679; <span>Pescatarian</span></li>
                <li className="list-item">&#9679; <span>Gluten-free</span></li>
                <li className="list-item">&#9679; <span>Lactose-free</span></li>
                <li className="list-item">&#9679; <span>Keto</span></li>
                <li className="list-item">&#9679; <span>Paleo</span></li>
                <li className="list-item">&#9679; <span>Low FOODMAP</span></li>
                <li className="list-item">&#9679; <span>Kid-friendly</span></li>
              </ul>
            </div>
          </div>

          <div className="container all-recipes">
            <a href="#" className="link">See all recipes &rarr;</a>
          </div>
        </section>

        <section className="section-testimonials">
          <div className="testimonials-container">
            <span className="subheading">Testimonials</span>
            <h2 className="heading-secondary">Once you try it, you can't go back</h2>

            <div className="testimonials">
              <figure className="testimonial">
                <img className="testimonial-img" src="https://images.unsplash.com/photo-1514929781313-76fcbb2136b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80" alt="customer" />
                <blockquote className="testimonial-text">Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.</blockquote>
                <p className="testimonial-name">&mdash; Dave Bryson</p>
              </figure>

              <figure className="testimonial">
                <img className="testimonial-img" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80" alt="customer" />
                <blockquote className="testimonial-text">The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!</blockquote>
                <p className="testimonial-name">&mdash; Ben Hadley</p>
              </figure>

              <figure className="testimonial">
                <img className="testimonial-img" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80" alt="customer" />
                <blockquote className="testimonial-text">Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!</blockquote>
                <p className="testimonial-name">&mdash; Steve Miller</p>
              </figure>

              <figure className="testimonial">
                <img className="testimonial-img" src="https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" alt="customer" />
                <blockquote className="testimonial-text">I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.</blockquote>
                <p className="testimonial-name">&mdash; Hannah Smith</p>
              </figure>
            </div>
          </div>

          <div className="gallery">
            <figure className="gallery-item">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" alt="food1" />
            </figure>            
            <figure className="gallery-item">
              <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" alt="food2" />
            </figure>            
            <figure className="gallery-item">
              <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80" alt="food3" />
            </figure>            
            <figure className="gallery-item">
              <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1980&q=80" alt="food4" />
            </figure>            
            <figure className="gallery-item">
              <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="food5" />
            </figure>            
            <figure className="gallery-item">
              <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="food6" />
            </figure>            
            <figure className="gallery-item">
              <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="food7" />
            </figure>            
            <figure className="gallery-item">
              <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80" alt="food8" />
            </figure>            
            <figure className="gallery-item">
              <img src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" alt="food9" />
            </figure>            
            <figure className="gallery-item">
              <img src="https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="food10" />
            </figure>            
            <figure className="gallery-item">
              <img src="https://images.unsplash.com/photo-1619337744931-97f65a4f14d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="food11" />
            </figure>            
            <figure className="gallery-item">
              <img src="https://images.unsplash.com/photo-1572785031839-8d006462dcd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1482&q=80" alt="food12" />
            </figure>
          </div>
        </section>

        <section className="section-pricing">
          <div className="container">
            <span className="subheading">Pricing</span>
            <h2 className="heading-secondary">Eating well without breaking the bank</h2>
          </div>

          <div className="container grid grid--2-cols margin-bottom-md"> 
            <div className="princing-plan princing-plan--starter">
              <header className="plan-header">
                <p className="plan-name">Starter</p>
                <p className="plan-price"><span>$</span>399</p>
                <p className="plan-text">per month. That's just $13 per meal!</p>
              </header>
              <ul className="list">
                <li className="list-item">&#9679; <span>1 meal per day</span></li>
                <li className="list-item">&#9679; <span>Order from 11am to 9pm</span></li>
                <li className="list-item">&#9679; <span>Delivery is free</span></li>
                <li className="list-item">&#10005;</li>
              </ul>
              <div className="plan-sign-up">
                <a href="#" className="btn btn--full">Start eating well</a>
              </div>
            </div>            
            
            <div className="princing-plan princing-plan--complete">
              <header className="plan-header">
                <p className="plan-name">Complete</p>
                <p className="plan-price"><span>$</span>649</p>
                <p className="plan-text">per month. That's just $11 per meal!</p>
              </header>
              <ul className="list">
                <li className="list-item">&#9679; <span><span className="bold">2</span> meals per day</span></li>
                <li className="list-item">&#9679; <span>Order <span className="bold">24/7</span></span></li>
                <li className="list-item">&#9679; <span>Delivery is free</span></li>
                <li className="list-item">&#9679; <span>Get access to latest recipes</span></li>
              </ul>
              <div className="plan-sign-up">
                <a href="#" className="btn btn--full">Start eating well</a>
              </div>
            </div>
          </div>

          <div className="container grid">
            <aside className="plan-details">Prices include all applicable taxes. You can cancel at any time. Both plans include the following: </aside>
          </div>

          <div className="container grid grid--4-cols">
            <IconContext.Provider value={{ color: "#e67e22", size: "3.2rem", className: "feature-icon" }}>
            <div className="feature">
              <IoIosInfinite />
              <p className="feature-title">Never cook again!</p>
              <p className="feature-text">Our subscriptions cover 365 days per year, even including major holidays.</p>
            </div>            
            
            <div className="feature">
              <IoIosNutrition />
              <p className="feature-title">Local and organic</p>
              <p className="feature-text">Our cooks only use local, fresh, and organic products to prepare your meals.</p>
            </div>            
            
            <div className="feature">
              <IoIosLeaf />
              <p className="feature-title">No waste</p>
              <p className="feature-text">All our partners only use reusable containers to package all your meals.</p>
            </div>            
            
            <div className="feature">
              <IoIosPause />
              <p className="feature-title">Pause anytime</p>
              <p className="feature-text">Going on vacation? Just pause your subscription, and we refund unused days.</p>
            </div>
            </IconContext.Provider>
          </div>
        </section>

        <section className="section-cta"> 
          <div className="container">
            <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">Get your first meal for free!</h2>
              <p className="cta-text">Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!</p>

              <form className="cta-form">
                <div>
                  <label htmlFor="full-name">Full Name</label>
                  <input required id="full-name" type="text" placeholder="John Smith" />
                </div>

                <div>
                  <label htmlFor="email">Email address</label>
                  <input required id="email" type="email" placeholder="me@example.com" />
                </div>

                <button className="btn btn--form">Sign up now</button>
              </form>
            </div>

            <div className="cta-img-box" role="img" aria-label="Woman enjoying food"></div> 
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <a href="#" className="footer-logo no-link-style">
              <span className="logo">Omnif<span className="logo--style">oo</span>d</span>
            </a>

            <ul className="social-links">
              <IconContext.Provider value={{ color: "#767676", size: "2.4rem", className: "social-icon" }}>
              <li><a href="#"><IoLogoInstagram /></a></li>
              <li><a href="#"><IoLogoFacebook /></a></li>
              <li><a href="#"><IoLogoTwitter /></a></li>
              </IconContext.Provider>
            </ul>

            <p className="copyright">
              Copyright &copy; 2027 by Omnifood, Inc. All rights reserved.
            </p>
          </div>
          
          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
              <p>
                <a className="footer-link" href="tel:415-201-6370">415-201-6370</a><br />
                <a className="footer-link" href="maito:hello@omnifood.com">hello@omnifood.com</a>
              </p>
            </address>
          </div>        
          
          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li><a className="footer-link" href="#">Create account</a></li>
              <li><a className="footer-link" href="#">Sign in</a></li>
              <li><a className="footer-link" href="#"></a>iOS app</li>
              <li><a className="footer-link" href="#"></a>Android app</li>
            </ul>
          </nav>        
          
          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li><a className="footer-link" href="#">About Omnifood</a></li>
              <li><a className="footer-link" href="#">For Business</a></li>
              <li><a className="footer-link" href="#">Cooking partners</a></li>
              <li><a className="footer-link" href="#">Careers</a></li>
            </ul>
          </nav>        
          
          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li><a className="footer-link" href="#">Recipe directory</a></li>
              <li><a className="footer-link" href="#">Help center</a></li>
              <li><a className="footer-link" href="#">Privacy & terms</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}


// Recipe directory 
// Help center
// Privacy & terms

export default Test;