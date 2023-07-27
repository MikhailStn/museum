import { MenuActions } from "../types/hamburger";

const defaultState = {
  isMenuOpen: false,
  line1: { transform: "rotate(0)" },
  line2: { marginTop: "12.5px", opacity: 1, left: "0" },
  line3: { marginTop: "3", transform: "rotate(0)" },
  welcomeSectionVisibility: { opacity: 1, visibility: "visible" },
  menuVisibility: { left: "-260px" },
  overlayVisibility: { opacity: 0, visibility: "hidden" },
};

export const burgerMenuReducer = (
  state = defaultState,
  action: MenuActions
) => {
  switch (action.type) {
    case "SHOW_MENU":
      return {
        isMenuOpen: true,
        line1: { transform: "rotate(45deg)" },
        line2: { opacity: 0, left: "-60px" },
        line3: { marginTop: "-13px", transform: "rotate(135deg)" },
        welcomeSectionVisibility: { opacity: 0, visibility: "hidden" },
        menuVisibility: { left: "0" },
        overlayVisibility: { opacity: 1, visibility: "visible" },
      };
    case "HIDE_MENU":
      return {
        isMenuOpen: false,
        line1: { transform: "rotate(0)" },
        line2: { marginTop: "12px", opacity: 1, left: "0" },
        line3: { marginTop: "3", transform: "rotate(0)" },
        welcomeSectionVisibility: { opacity: 1, visibility: "visible" },
        menuVisibility: { left: "-260px" },
        overlayVisibility: { opacity: 0, visibility: "hidden" },
      };
    default:
      return state;
  }
};
