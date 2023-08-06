import "./videoJourney.css";
import { VideoSlider } from "./videoSlider";

export function VideoJourney() {
  return (
    <div className="video__container" id="video">
      <section className="video__section">
        <div className="video__title-section">
          <h2 className="video__title">video journey</h2>
          <p className="video__subtitle">
            Enter and visit one of the most famous museums in the world and enjoy masterpieces such as Mona Lisa or Hammurabi's Code
          </p>
        </div>
        <div className="video__player-section">
          <VideoSlider />
        </div>
      </section>
    </div>
  );
}
