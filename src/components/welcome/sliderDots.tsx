import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types/rootState';

export function SliderDots() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.welcomeSliderReducer);

  return (
    <div className="slider__dots">
      <span
        onClick={() => {
          dispatch({ type: 'SHOW_1', payload: state });
        }}
        className="slider__dot"
      >
        ■
      </span>
      <span
        onClick={() => {
          dispatch({ type: 'SHOW_2', payload: state });
        }}
        className="slider__dot"
      >
        ■
      </span>
      <span
        onClick={() => {
          dispatch({ type: 'SHOW_3', payload: state });
        }}
        className="slider__dot"
      >
        ■
      </span>
      <span
        onClick={() => {
          dispatch({ type: 'SHOW_4', payload: state });
        }}
        className="slider__dot"
      >
        ■
      </span>
      <span
        onClick={() => {
          dispatch({ type: 'SHOW_5', payload: state });
        }}
        className="slider__dot"
      >
        ■
      </span>
    </div>
  );
}
