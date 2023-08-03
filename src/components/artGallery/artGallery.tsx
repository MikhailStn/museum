import './artGallery.css';
import { galleryImages } from '../../data/artGallery';
import { useEffect, useRef, useState } from 'react';

const images = [];

function shuffle(array: { id: string; path: string }[]): { id: string; path: string }[] {
  return array.sort(() => Math.random() - 0.5);
}

const shuffledImages = shuffle(galleryImages)

export function ArtGallery() {
  return (
    <div className="gallery__container" id="gallery">
      <section className="gallery">
        <h2 className="gallery__title">art gallery</h2>
        <div className="gallery__images-wrapper">
          <div className="gallery__images">
            {shuffledImages.map((el) => {
              const imageRef = useRef(null);
              images.push(imageRef);
              const [imagePosition, setPosition] = useState({ top: 20, transform: 'scale(0.95) translateY(100px)', opacity: 0.5 });
              useEffect(() => {
                function callback(entries: { isIntersecting: boolean }[]) {
                  if (entries[0].isIntersecting) {
                    setPosition({ top: 0, transform: 'scale(1) translateY(0px)', opacity: 1 });
                  }
                }
                const observer = new IntersectionObserver(callback);
                if (imageRef.current) {
                  observer.observe(imageRef.current);
                }
              }, []);
              return (
                <img
                  ref={imageRef}
                  style={imagePosition}
                  className="gallery__image"
                  key={el.id}
                  src={el.path}
                ></img>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
