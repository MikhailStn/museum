import "./contacts.css";

export function Contacts() {
  return (
    <div className="contacts__container">
      <section className="contacts">
        <h2 className="contacts__title">contacts</h2>
        <div className="contacts__content">
          <div className="contacts__description">
            <h3 className="contacts__description-title">
              Palais Royal<br></br>Musee du Louvre
            </h3>
            <p className="contacts__description-sub">
              adress: 75001 Paris, France
            </p>
            <p className="contacts__description-sub">
              phone: +33(0) 1 40 20 50 50
            </p>
            <p className="contacts__description-sub">mail: info@louvre.fr</p>
          </div>
          <div className="contacts__map"></div>
        </div>
      </section>
    </div>
  );
}
