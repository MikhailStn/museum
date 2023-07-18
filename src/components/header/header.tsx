import "./header.css";

export function Header() {
  return (
    <div className="header__container">
      <header className="header">
        <a className="header__logo-link" href="#">
          <div className="header__logo"></div>
          <h2 className="header__title">louvre</h2>
        </a>
        <nav className="header__navigation">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#visiting">Visiting</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#eplore">Explore</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#video">Video</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#gallery">Gallery</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#buy_ticket">Tickets</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
