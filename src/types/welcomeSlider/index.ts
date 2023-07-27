type GoNextSlide = {
  type: "GO_NEXT_SLIDE";
  payload: { margin: number; numberOfSlide: number };
};

type GoPrevSlider = {
  type: "GO_PREV_SLIDE";
  payload: { margin: number; numberOfSlide: number };
};

type Show1 = {
  type: "SHOW_1";
  payload: { margin: number; numberOfSlide: number };
};

type Show2 = {
  type: "SHOW_2";
  payload: { margin: number; numberOfSlide: number };
};

type Show3 = {
  type: "SHOW_3";
  payload: { margin: number; numberOfSlide: number };
};

type Show4 = {
  type: "SHOW_4";
  payload: { margin: number; numberOfSlide: number };
};

type Show5 = {
  type: "SHOW_5";
  payload: { margin: number; numberOfSlide: number };
};

export type SliderActions =
  | GoNextSlide
  | GoPrevSlider
  | Show1
  | Show2
  | Show3
  | Show4
  | Show5;
