import { videos } from "../../data/video";
//import icon from "../../../public/icons/monalisa.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactPlayer from "react-player";

/* const videoitem = `'<div className="video__slider-item" style={backroundImage} key={el.id}>
<div className="video__slider-text">
  <img className="video__slider-item-icon" src={icon}></img>
  <h3 className="video__slider-item-title">{el.title}</h3>
</div>
<button className="video__slider-item-button"></button>
</div>'`; |*/

export function VideoSlider() {
  /*const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }; */
  return (
    /*<AliceCarousel responsive={responsive} infinite>
      {videos.map((el) => {
        return (
          <video className="video__el" poster={el.poster}>
              <source src={el.videoPath} />
          </video>
        );
      })}
    </AliceCarousel> */
    <Carousel className="video-slider" showThumbs={false} infiniteLoop
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
      hasPrev && (
          <button type="button" className="video-btn-left" onClick={onClickHandler} title={label} style={{  }}>
              «
          </button>
      )
  }
  renderArrowNext={(onClickHandler, hasNext, label) =>
      hasNext && (
          <button type="button" className="video-btn-right" onClick={onClickHandler} title={label} style={{  }}>
              »
          </button>
      )
  }>
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
