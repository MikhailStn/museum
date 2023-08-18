import "./artGallery.css";
import { galleryImages } from "../../data/artGallery";
import { useEffect, useRef, useState } from "react";

const images = [];
function shuffle(array: { id: string; path: string }[]): { id: string; path: string }[] {
  return array.sort(() => Math.random() - 0.5);
}
const shuffledImages = shuffle(galleryImages);
shuffledImages.splice(5, 0, { id: `line-break${100}`, path: "null" });
shuffledImages.splice(11, 0, { id: `line-break${200}`, path: "null" });

export function ArtGallery() {
  const galleryBorder = useRef(null);
  let counter = 0;
  return (
    <div className="gallery__container" id="gallery">
      <div ref={galleryBorder} className="gallery__intersection"></div>
      <section className="gallery">
        <h2 className="gallery__title">art gallery</h2>
        <div className="gallery__images-wrapper">
          <div className="gallery__images">
            {shuffledImages.map((el) => {
              counter++;
              const imageRef = useRef(null);
              images.push(imageRef);
              const [imagePosition, setPosition] = useState({ top: 20, transform: "scale(0.95) translateY(100px)", opacity: 0.5 });
              useEffect(() => {
                function callback(entries: { isIntersecting: boolean }[]) {
                  if (entries[0].isIntersecting) {
                    setPosition({ top: 20, transform: "scale(0.95) translateY(100px)", opacity: 0.5 });
                  }
                }
                const observer = new IntersectionObserver(callback);
                if (galleryBorder.current) {
                  observer.observe(galleryBorder.current);
                }
              }, []);
              useEffect(() => {
                function callback(entries: { isIntersecting: boolean }[]) {
                  if (entries[0].isIntersecting) {
                    setPosition({ top: 0, transform: "scale(1) translateY(0px)", opacity: 1 });
                  }
                }
                const observer = new IntersectionObserver(callback);
                if (imageRef.current) observer.observe(imageRef.current);
              }, []);
              return counter == 6 || counter == 12 ? (
                <div className="gallery__line-break" key={el.id}></div>
              ) : (
                <img ref={imageRef} style={imagePosition} className="gallery__image" key={el.id} src={el.path}></img>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
