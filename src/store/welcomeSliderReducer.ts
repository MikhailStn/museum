import { SliderActions } from "../types/welcomeSlider";

const defaultState = {
  margin: 0,
  numberOfSlide: 1,
  dot1: { color: "#9d8665" },
  dot2: {},
  dot3: {},
  dot4: {},
  dot5: {},
};

export const welcomeSliderReducer = (state = defaultState, action: SliderActions) => {
  switch (action.type) {
    case "GO_NEXT_SLIDE":
      if (state.numberOfSlide == 1) {
        return {
          ...state,
          margin: -100,
          numberOfSlide: 2,
          dot1: {},
          dot2: { color: "#9d8665" },
          dot3: {},
          dot4: {},
          dot5: {},
        };
      } else if (state.numberOfSlide == 2) {
        return {
          ...state,
          margin: -200,
          numberOfSlide: 3,
          dot1: {},
          dot2: {},
          dot3: { color: "#9d8665" },
          dot4: {},
          dot5: {},
        };
      } else if (state.numberOfSlide == 3) {
        return {
          ...state,
          margin: -300,
          numberOfSlide: 4,
          dot1: {},
          dot2: {},
          dot3: {},
          dot4: { color: "#9d8665" },
          dot5: {},
        };
      } else if (state.numberOfSlide == 4) {
        return {
          ...state,
          margin: -400,
          numberOfSlide: 5,
          dot1: {},
          dot2: {},
          dot3: {},
          dot4: {},
          dot5: { color: "#9d8665" },
        };
      } else {
        return {
          ...state,
          margin: 0,
          numberOfSlide: 1,
          dot1: { color: "#9d8665" },
          dot2: {},
          dot3: {},
          dot4: {},
          dot5: {},
        };
      }
    case "GO_PREV_SLIDE":
      if (state.numberOfSlide == 1) {
        return {
          ...state,
          margin: -400,
          numberOfSlide: 5,
          dot1: {},
          dot2: {},
          dot3: {},
          dot4: {},
          dot5: { color: "#9d8665" },
        };
      } else if (state.numberOfSlide == 2) {
        return {
          ...state,
          margin: 0,
          numberOfSlide: 1,
          dot1: { color: "#9d8665" },
          dot2: {},
          dot3: {},
          dot4: {},
          dot5: {},
        };
      } else if (state.numberOfSlide == 3) {
        return {
          ...state,
          margin: -100,
          numberOfSlide: 2,
          dot1: {},
          dot2: { color: "#9d8665" },
          dot3: {},
          dot4: {},
          dot5: {},
        };
      } else if (state.numberOfSlide == 4) {
        return {
          ...state,
          margin: -200,
          numberOfSlide: 3,
          dot1: {},
          dot2: {},
          dot3: { color: "#9d8665" },
          dot4: {},
          dot5: {},
        };
      } else {
        return {
          ...state,
          margin: -300,
          numberOfSlide: 4,
          dot1: {},
          dot2: {},
          dot3: {},
          dot4: { color: "#9d8665" },
          dot5: {},
        };
      }
    case "SHOW_1":
      return {
        ...state,
        margin: 0,
        numberOfSlide: 1,
        dot1: { color: "#9d8665" },
        dot2: {},
        dot3: {},
        dot4: {},
        dot5: {},
      };
    case "SHOW_2":
      return {
        ...state,
        margin: -100,
        numberOfSlide: 2,
        dot1: {},
        dot2: { color: "#9d8665" },
        dot3: {},
        dot4: {},
        dot5: {},
      };
    case "SHOW_3":
      return {
        ...state,
        margin: -200,
        numberOfSlide: 3,
        dot1: {},
        dot2: {},
        dot3: { color: "#9d8665" },
        dot4: {},
        dot5: {},
      };
    case "SHOW_4":
      return {
        ...state,
        margin: -300,
        numberOfSlide: 4,
        dot1: {},
        dot2: {},
        dot3: {},
        dot4: { color: "#9d8665" },
        dot5: {},
      };
    case "SHOW_5":
      return {
        ...state,
        margin: -400,
        numberOfSlide: 5,
        dot1: {},
        dot2: {},
        dot3: {},
        dot4: {},
        dot5: { color: "#9d8665" },
      };
    default:
      return state;
  }
};
