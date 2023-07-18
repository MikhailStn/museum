import "./header.css";
import { navItems } from "../../data/navMenu";

export function Header() {
  return (
    <div className="header__container">
      <header className="header">
        <a
          className="header__logo-link"
          href="#"
        >
          <div className="header__logo"></div>
          <h2 className="header__title">louvre</h2>
        </a>
        <nav className="header__navigation">
          <ul className="nav__list">
            {navItems.map((el) => (
              <li key={el.id} className="nav__item">
                <a
                  className="nav__link"
                  href={"#" + el.id}
                >
                  {el.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
