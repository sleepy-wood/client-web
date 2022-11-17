import update from 'immutability-helper';
import { createAction, createReducer, current } from '@reduxjs/toolkit';

const ACTIONS = {
  SET_CURRENT_PATHNAME: 'path/SET_CURRENT_PATHNAME',
};

export const setCurrentPathname = createAction(
  ACTIONS.SET_CURRENT_PATHNAME,
  (payload: { currentPathname: string }) => ({ payload }),
);

export interface PathState {
  currentPathname: string;
}

const initialState: PathState = {
  currentPathname: '/',
};

const pathReducer = createReducer<PathState>(initialState, builder => {
  builder.addCase(setCurrentPathname, (state, action) => {
    const currState = current(state);

    return update(currState, {
      currentPathname: { $set: action.payload.currentPathname },
    });
  });
});

export default pathReducer;
