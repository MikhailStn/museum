import { videos } from "../../data/video";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";

export function VideoSlider() {
  return (
    <Carousel
      className="video-slider"
      showThumbs={false}
      infiniteLoop
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            className="video-btn-left"
            onClick={onClickHandler}
            title={label}
            style={{}}
          >
            «
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            className="video-btn-right"
            onClick={onClickHandler}
            title={label}
            style={{}}
          >
            »
          </button>
        )
      }
    >
      {videos.map((el) => {
        return (
          <div key={el.id}>
            <ReactPlayer
              url={el.videoPath}
              width="100%"
              height="auto"
              playing={false}
              controls
              config={{ file: { attributes: { poster: el.poster } } }}
            />
          </div>
        );
      })}
    </Carousel>
  );
}
