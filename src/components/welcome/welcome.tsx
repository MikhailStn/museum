import "./welcome.css";
import { Slider } from "./slider";

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
          <button className="welcome__button">Discover the Louvre</button>
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
