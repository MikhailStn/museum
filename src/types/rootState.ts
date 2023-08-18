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
    dot1: { color: string } | {};
    dot2: { color: string } | {};
    dot3: { color: string } | {};
    dot4: { color: string } | {};
    dot5: { color: string } | {};
  };
  ticketReducer: {
    ticketType: string;
    basicNum: number;
    seniorNum: number;
    date: string;
    time: string;
    basicSum: number;
    seniorSum: number;
    basic: number;
    senior: number;
  };
}
