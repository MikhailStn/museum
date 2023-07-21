import { sliderItems } from '../../data/welcomeSlider';

interface SliderProps {
  margin: number;
}

export function Slider(props: SliderProps) {
  return (
    <div className="slider__wrapper">
      <div className="slider__overlay"></div>
      <div className="welcome__slider" style={{ marginLeft: `${props.margin}px` }}>
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
