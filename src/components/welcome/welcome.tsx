import "./welcome.css";
import { Slider } from "./slider";
import { useDispatch, useSelector } from "react-redux";
import { SliderDots } from "./sliderDots";
import { RootState } from "../../types/rootState";

export function WelcomePage() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.welcomeSliderReducer);
  const numOfSlider = useSelector(
    (state: RootState) => state.welcomeSliderReducer.numberOfSlide
  );
  const margin = useSelector(
    (state: RootState) => state.welcomeSliderReducer.margin
  );
  const welcomeSectionState = useSelector(
    (state: RootState) => state.burgerMenuReducer.welcomeSectionVisibility
  );
  return (
    <div className="welcome__container">
      <section className="welcome">
        <div
          className="welcome__section"
          style={welcomeSectionState}
        >
          <h1 className="welcome__title">
            welcome
            <br className="welcome__separator" />
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
        <Slider margin={margin} />
        <div className="slider__controls">
          <div className="slider__counter">
            <span>0{numOfSlider}</span>
            <span>|</span>
            <span>05</span>
          </div>
          <SliderDots />
          <div className="slider__arrows">
            <button
              className="slider__arrow"
              onClick={() => {
                dispatch({ type: "GO_PREV_SLIDE", payload: state });
              }}
            >
              ←
            </button>
            <button
              className="slider__arrow"
              onClick={() => {
                dispatch({ type: "GO_NEXT_SLIDE", payload: state });
              }}
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
