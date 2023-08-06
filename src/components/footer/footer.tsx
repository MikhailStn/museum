import "./footer.css";
import { navItems } from "../../data/navMenu";
import { socialMedia } from "../../data/socialMedia";

export function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <footer className="footer">
          <div className="footer__links">
            <a className="footer__logo-link" href="#">
              <div className="footer__logo"></div>
              <h2 className="footer__title">louvre</h2>
            </a>
            <div className="footer__nav">
              <ul className="footer__nav-list">
                {navItems.map((el) => (
                  <li key={el.id} className="nav__item">
                    <a className="nav__link" href={"#" + el.id}>
                      {el.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__social">
              <ul className="social__list">
                {socialMedia.map((el) => (
                  <li
                    style={{
                      backgroundImage: el.src,
                    }}
                    key={el.id}
                    className="social__item"
                  >
                    <a className="social__link" href={el.link} target="_blank"></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
      <div className="footer__sub-wrapper">
        <div className="footer__subtitles">
          <div className="footer__year">© 2023</div>
          <div className="footer__github">
            <a className="github-link" href="https://github.com/MikhailStn" target="_blank">
              My Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
