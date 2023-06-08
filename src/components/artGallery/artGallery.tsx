import './artGallery.css';
import { galleryImages } from '../../data/artGallery';

export function ArtGallery() {
  return (
    <div className="gallery__container">
      <section className="gallery">
        <h2 className="gallery__title">art gallery</h2>
        <div className="gallery__images-wrapper">
          <div className="gallery__images">
            {galleryImages.map((el) => {
              return <img className="gallery__images" key={el.id} src={el.path}></img>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
