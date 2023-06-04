import "./videoJourney.css";
import { videos } from "../data/video";

export function VideoJourney() {
  return (
    <div className="video__container">
      <section className="video">
        <div className="video__title-section">
          <h2 className="video__title">video journey</h2>
          <p className="video__subtitle">
            Enter and visit one of the most famous museums in the world and enjoy masterpieces such as Mona Lisa or
            Hammurabi's Code
          </p>
        </div>
        <div className="video__player-section">
          <div className="video__wrapper">
            <video
              className="video"
              width="100%"
              height="100%"
              poster={videos[0].poster}
              controls
            >
              <source src={videos[0].videoPath} />
            </video>
            <button></button>
          </div>
          <div className="video__controls"></div>
        </div>
      </section>
    </div>
  );
}
