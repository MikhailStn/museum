import { sliderItems } from "../../data/welcomeSlider";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types/rootState";

interface SliderProps {
  margin: number;
}

export function Slider(props: SliderProps) {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.welcomeSliderReducer);
  return (
    <div className="slider__wrapper">
      <div className="slider__overlay"></div>
      <div className="welcome__slider-mobile-arrows">
        <button
          className="welcome__slider-mobile-arrow"
          onClick={() => {
            dispatch({ type: "GO_PREV_SLIDE", payload: state });
          }}
        >
          {"‹"}
        </button>
        <button
          className="welcome__slider-mobile-arrow"
          onClick={() => {
            dispatch({ type: "GO_NEXT_SLIDE", payload: state });
          }}
        >
          {"›"}
        </button>
      </div>
      <div className="welcome__slider" style={{ marginLeft: `${props.margin}%` }}>
        {sliderItems.map((el) => {
          const backroundImage = {
            backgroundImage: `url('${el.path}')`,
          };
          return <div className="slider__el" style={backroundImage} key={el.id}></div>;
        })}
      </div>
    </div>
  );
}
