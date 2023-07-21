import { SliderActions } from '../types';

const defaultState = {
  margin: 0,
  numberOfSlide: 1,
};

export const welcomeSliderReducer = (state = defaultState, action: SliderActions) => {
  switch (action.type) {
    case 'GO_NEXT_SLIDE':
      if (state.numberOfSlide == 5) {
        return {
          ...state,
          margin: 0,
          numberOfSlide: 1,
        };
      } else {
        return {
          ...state,
          margin: state.margin - 1000,
          numberOfSlide: state.numberOfSlide + 1,
        };
      }
    case 'GO_PREV_SLIDE':
      if (state.numberOfSlide == 1) {
        return {
          ...state,
          margin: -4000,
          numberOfSlide: 5,
        };
      } else {
        return {
          ...state,
          margin: state.margin + 1000,
          numberOfSlide: state.numberOfSlide - 1,
        };
      }
    case 'SHOW_1':
      return {
        ...state,
        margin: 0,
        numberOfSlide: 1,
      };
    case 'SHOW_2':
      return {
        ...state,
        margin: -1000,
        numberOfSlide: 2,
      };
    case 'SHOW_3':
      return {
        ...state,
        margin: -2000,
        numberOfSlide: 3,
      };
    case 'SHOW_4':
      return {
        ...state,
        margin: -3000,
        numberOfSlide: 4,
      };
    case 'SHOW_5':
      return {
        ...state,
        margin: -4000,
        numberOfSlide: 5,
      };
    default:
      return defaultState;
  }
};
