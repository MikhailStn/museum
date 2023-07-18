import './contacts.css';
import MapboxGL from 'mapbox-gl';
import ReactMapGL, { Marker } from 'react-map-gl';
import { markers } from '../../data/markers';

export function Contacts() {
  MapboxGL.accessToken =
    'pk.eyJ1IjoibWlraGFpbHN0biIsImEiOiJjbGp6anMxNW8wOWV6M3FtbGtuaTVnMmZuIn0.oqUgJDcA_wHnvBNRT7XMVQ';
  return (
    <div className="contacts__container" id="contacts">
      <section className="contacts">
        <h2 className="contacts__title">contacts</h2>
        <div className="contacts__content">
          <div className="contacts__description">
            <h3 className="contacts__description-title">
              Palais Royal<br></br>Musee du Louvre
            </h3>
            <p className="contacts__description-sub">adress: 75001 Paris, France</p>
            <p className="contacts__description-sub">phone: +33(0) 1 40 20 50 50</p>
            <p className="contacts__description-sub">mail: info@louvre.fr</p>
          </div>
          <div className="contacts__map">
            <ReactMapGL
              mapboxAccessToken={MapboxGL.accessToken}
              initialViewState={{
                latitude: 48.86094,
                longitude: 2.3363,
                zoom: 16,
              }}
              attributionControl={false}
              mapStyle="mapbox://styles/mapbox/light-v11"
            >
              {markers.map((el) => (
                <Marker
                  color={el.color}
                  key={el.id}
                  longitude={el.longitude}
                  latitude={el.latitude}
                ></Marker>
              ))}
            </ReactMapGL>
          </div>
        </div>
      </section>
    </div>
  );
}
