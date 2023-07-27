export interface RootState {
  burgerMenuReducer: {
    isMenuOpen: boolean;
    line1: React.CSSProperties;
    line2: React.CSSProperties;
    line3: React.CSSProperties;
    welcomeSectionVisibility: React.CSSProperties;
    menuVisibility: React.CSSProperties;
    overlayVisibility: React.CSSProperties;
  };
  welcomeSliderReducer: {
    margin: number;
    numberOfSlide: number;
  };
}
