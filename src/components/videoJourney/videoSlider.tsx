import { videos } from '../../data/video';

export function VideoSlider() {
  return (
    <div className="video__slider">
      {videos.map((el) => {
        const backroundImage = {
          backgroundImage: `url('${el.poster}')`,
        };
        return (
          <div className="video__slider-item" style={backroundImage}>
            <h3></h3>
            <button></button>
          </div>
        );
      })}
    </div>
  );
}
