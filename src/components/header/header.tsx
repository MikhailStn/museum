import "./header.css";
import { navItems, navItemsMob } from "../../data/navMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types/rootState";
import { Link } from "react-router-dom";

export function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.burgerMenuReducer);

  const hideMenu = () => {
    dispatch({
      type: "HIDE_MENU",
      payload: {
        isMenuOpen: false,
        burgerBtnStyle: {},
        welcomeSectionVisibility: { opacity: 1, visibility: "visible" },
        menuVisibility: { left: "-260px" },
        overlayVisibility: { opacity: 0, visibility: "hidden" },
      },
    });
  };

  const showMenu = () => {
    dispatch({
      type: "SHOW_MENU",
      payload: {
        isMenuOpen: true,
        burgerBtnStyle: {},
        welcomeSectionVisibility: { opacity: 0, visibility: "hidden" },
        menuVisibility: { left: 0 },
        overlayVisibility: { opacity: 1, visibility: "visible" },
      },
    });
  };

  return (
    <div className="header__container">
      <header className="header">
        <a className="header__logo-link" href="#" onClick={hideMenu}>
          <div className="header__logo"></div>
          <h2 className="header__title">louvre</h2>
        </a>
        <nav className="header__navigation desktop-nav">
          <ul className="nav__list">
            {navItems.map((el) => (
              <li key={el.id} className="nav__item">
                <a className="nav__link" href={"#" + el.id}>
                  {el.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="header__burger-btn"
          onClick={() => {
            if (state.isMenuOpen) {
              hideMenu();
            } else {
              showMenu();
            }
          }}
        >
          <span className="header__burger-line line1" style={state.line1}></span>
          <span className="header__burger-line line2" style={state.line2}></span>
          <span className="header__burger-line line3" style={state.line3}></span>
        </button>
        <div className="header__overlay" style={state.overlayVisibility} onClick={hideMenu}></div>
        <div className="header__burger-menu mobile-nav" style={state.menuVisibility}>
          <nav className="header__burger-nav">
            <ul className="burger__nav-list">
              {navItemsMob.map((el) =>
                el.id == "buy-ticket" ? (
                  <li key={el.id} className="burger__nav-item" onClick={hideMenu}>
                    <Link className="burger__nav-link" to={el.id}>
                      {el.title}
                    </Link>
                  </li>
                ) : (
                  <li key={el.id} className="burger__nav-item" onClick={hideMenu}>
                    <a className="burger__nav-link" href={"#" + el.id}>
                      {el.title}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
