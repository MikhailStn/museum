import { videos } from "../../data/video";
import icon from "../../../public/icons/monalisa.png";

export function VideoSlider() {
  return (
    <div className="video__slider">
      {videos.map((el) => {
        const backroundImage = {
          backgroundImage: `url('${el.poster}')`,
        };
        return (
          <div
            className="video__slider-item"
            style={backroundImage}
            key={el.id}
          >
            <div className="video__slider-text">
              <img
                className="video__slider-item-icon"
                src={icon}
              ></img>
              <h3 className="video__slider-item-title">{el.title}</h3>
            </div>
            <button className="video__slider-item-button"></button>
          </div>
        );
      })}
    </div>
  );
}
