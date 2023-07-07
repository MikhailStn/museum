import "./header.css";

export function Header() {
  return (
    <div className="header__container">
      <header className="header">
        <div className="header__logo-wrapper">
          <div className="header__logo"></div>
          <h2 className="header__title">louvre</h2>
        </div>
        <nav className="header__navigation">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link">Visiting</a>
            </li>
            <li className="nav__item">
              <a className="nav__link">Explore</a>
            </li>
            <li className="nav__item">
              <a className="nav__link">Video</a>
            </li>
            <li className="nav__item">
              <a className="nav__link">Gallery</a>
            </li>
            <li className="nav__item">
              <a className="nav__link">Tickets</a>
            </li>
            <li className="nav__item">
              <a className="nav__link">Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
