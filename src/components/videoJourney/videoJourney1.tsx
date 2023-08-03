import './videoJourney.css';
import { videos } from '../../data/video';
import { VideoSlider } from './videoSlider';

export function VideoJourney() {
  return (
    <div className="video__container" id="video">
      <section className="video__section">
        <div className="video__title-section">
          <h2 className="video__title">video journey</h2>
          <p className="video__subtitle">
            Enter and visit one of the most famous museums in the world and enjoy masterpieces such
            as Mona Lisa or Hammurabi's Code
          </p>
        </div>
        <div className="video__player-section">
          <div className="video__wrapper">
            <video className="video" poster={videos[0].poster}>
              <source src={videos[0].videoPath} />
            </video>
            <button className="video__btn"></button>
          </div>
          <div className="video__controls">
            <button className="video__controls-play"></button>
            <input type="range" className="video__controls-progress"></input>
            <button className="video__controls-volume"></button>
            <input type="range" className="video__controls-progress-vol"></input>
            <button className="video__controls-screen"></button>
          </div>
          <VideoSlider />
          <div className="video__slider-controls">
            <span className="video__slider-controls-arrow">«</span>
            <div className="video__slider-controls-dots">
              {videos.map((el) => {
                return (
                  <span className="video__slider-controls-dots" key={el.id}>
                    ●
                  </span>
                );
              })}
            </div>
            <span className="video__slider-controls-arrow">»</span>
          </div>
        </div>
      </section>
    </div>
  );
}
