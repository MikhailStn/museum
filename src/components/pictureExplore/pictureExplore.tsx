import "./pictureExplore.css";
import before from "../../../public/images/explore_slider/before.jpg";
import after from "../../../public/images/explore_slider/after.jpg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";

export function PictureExplore() {
  const buttonStyle = {
    background: "white",
    border: 0,
    color: "#333",
    width: "40px",
    height: "40px",
  };

  return (
    <div
      className="picture-explore__container"
      id="explore"
    >
      <section className="picture-explore">
        <div className="picture-explore__description">
          <h2 className="picture-explore__title">picture explore</h2>
          <p className="picture-explore__text mobile-text">
            Las Meninas is a 1656 painting by Diego Velázquez, the leading
            artist of the Spanish Golden Age.
          </p>
          <p className="picture-explore__text">
            It was cleaned in 1984 to remove a{" "}
            <span className="picture-explore__span">"yellow veil"</span> of dust
            that had gathered since the previous restoration in the 19th
            century.
          </p>
          <p className="picture-explore__text desktop-text">
            The cleaning provoked furious protests, not because the picture had
            been damaged in any way, but because it looked different.
          </p>
        </div>
        <div className="picture-explore__slider">
          <ReactCompareSlider
            handle={
              <ReactCompareSliderHandle
                buttonStyle={buttonStyle}
              ></ReactCompareSliderHandle>
            }
            itemOne={
              <ReactCompareSliderImage
                src={before}
                srcSet={before}
              ></ReactCompareSliderImage>
            }
            itemTwo={
              <ReactCompareSliderImage
                src={after}
                srcSet={after}
              ></ReactCompareSliderImage>
            }
          ></ReactCompareSlider>
        </div>
      </section>
    </div>
  );
}
