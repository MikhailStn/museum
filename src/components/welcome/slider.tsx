import { sliderItems } from '../../data/welcomeSlider';

export function Slider() {
  return (
    <div className="slider__wrapper">
      <div className="slider__overlay"></div>
      <div className="welcome__slider">
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
