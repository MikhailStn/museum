import './artGallery.css';
import { galleryImages } from '../../data/artGallery';
import { useRef } from 'react';
import { images } from '../../App';

export function ArtGallery() {
  return (
    <div className="gallery__container" id="gallery">
      <section className="gallery">
        <h2 className="gallery__title">art gallery</h2>
        <div className="gallery__images-wrapper">
          <div className="gallery__images">
            {galleryImages.map((el) => {
              const imageRef = useRef(null)
              images.push(imageRef)
              return <img ref={imageRef} className="gallery__image" key={el.id} src={el.path}></img>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
