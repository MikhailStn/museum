type ShowMenu = {
  type: "SHOW_MENU";
  payload: {
    isMenuOpen: boolean;
    line1: React.CSSProperties;
    line2: React.CSSProperties;
    line3: React.CSSProperties;
    welcomeSectionVisibility: React.CSSProperties;
    menuVisibility: React.CSSProperties;
    overlayVisibility: React.CSSProperties;
  };
};

type HideMenu = {
  type: "HIDE_MENU";
  payload: {
    isMenuOpen: boolean;
    line1: React.CSSProperties;
    line2: React.CSSProperties;
    line3: React.CSSProperties;
    welcomeSectionVisibility: React.CSSProperties;
    menuVisibility: React.CSSProperties;
    overlayVisibility: React.CSSProperties;
  };
};

export type MenuActions = ShowMenu | HideMenu;
