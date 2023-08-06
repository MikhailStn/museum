import "./virtualTour.css";
import { virualTourCards } from "../../data/virtualTourCards";

export function VirtualTour() {
  return (
    <div className="virtual-tour__container" id="visiting">
      <section className="virtual-tour">
        <h2 className="virtual-tour__title">virtual tour</h2>
        <div className="virtual-tour__cards">
          {virualTourCards.map((el) => {
            const backroundImage = {
              backgroundImage: `url('${el.image}')`,
            };
            return (
              <a className="virtual-tour__link" href={el.href} target="_blank" key={el.id}>
                <div className="virtual-tour__card">
                  <div className="virtual-tour__bg" style={backroundImage}></div>
                  <h3 className="virtual-tour__subtitle">{el.name}</h3>
                  <p className="virtual-tour__sub-top">{el.sub1}</p>
                  <p className="virtual-tour__sub-bottom">{el.sub2}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
