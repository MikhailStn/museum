import './welcome.css';
import { Slider } from './slider';

export function WelcomePage() {
  return (
    <div className="welcome__container">
      <section className="welcome">
        <div className="welcome__section">
          <h1 className="welcome__title">
            welcome
            <br />
            to the louvre
          </h1>
          <p className="welcome__subtitle">From the castle to the museum</p>
          <form
            action="https://www.google.com/maps/@48.8618159,2.3366818,3a,75y,81.55h,73.4t/data=!3m7!1e1!3m5!1sAF1QipOVxZQuSy3Bx9T_HpH_7FtBHDTXvI6SF-A10ocT!2e10!3e12!7i5472!8i2736"
            target="_blank"
          >
            <button className="welcome__button">Discover the Louvre</button>
          </form>
        </div>
        <Slider />
        <div className="slider__controls">
          <div className="slider__counter">
            <span>01</span>
            <span>|</span>
            <span>05</span>
          </div>
          <div className="slider__dots">
            <span className="slider__dot">■</span>
            <span className="slider__dot">■</span>
            <span className="slider__dot">■</span>
            <span className="slider__dot">■</span>
            <span className="slider__dot">■</span>
          </div>
          <div className="slider__arrows">
            <span className="slider__arrow">←</span>
            <span className="slider__arrow">→</span>
          </div>
        </div>
      </section>
    </div>
  );
}
