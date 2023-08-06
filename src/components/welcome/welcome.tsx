import "./welcome.css";
import { Slider } from "./slider";
import { useDispatch, useSelector } from "react-redux";
import { SliderDots } from "./sliderDots";
import { RootState } from "../../types/rootState";
import { Link } from "react-router-dom";

export function WelcomePage() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.welcomeSliderReducer);
  const numOfSlider = useSelector((state: RootState) => state.welcomeSliderReducer.numberOfSlide);
  const margin = useSelector((state: RootState) => state.welcomeSliderReducer.margin);
  const welcomeSectionState = useSelector((state: RootState) => state.burgerMenuReducer.welcomeSectionVisibility);
  return (
    <div className="welcome__container">
      <section className="welcome">
        <div className="welcome__section" style={welcomeSectionState}>
          <h1 className="welcome__title">
            welcome
            <br className="welcome__separator" />
            to the louvre
          </h1>
          <p className="welcome__subtitle">From the castle to the museum</p>
          <button
            onClick={(event) => {
              event.preventDefault;
            }}
            className="welcome__button"
          >
            <Link className="welcome__button-link" to="/buy-ticket">
              Buy Ticket
            </Link>
          </button>
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
