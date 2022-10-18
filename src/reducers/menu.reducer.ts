import update from 'immutability-helper';
import { createAction, createReducer, current } from '@reduxjs/toolkit';

import { initialMenuState } from '../constants/menu';

const ACTIONS = {
  SET_SELECTED_MENU: 'menu/SET_SELECTED_MENU',
};

export const setSelectedMenu = createAction(
  ACTIONS.SET_SELECTED_MENU,
  (payload: { kind: string }) => ({ payload }),
);

export interface MenuState {
  kind: string;
}

const initialState: MenuState = initialMenuState;

const menuReducer = createReducer<MenuState>(initialState, builder => {
  builder.addCase(setSelectedMenu, (state, action) => {
    const currState = current(state);

    return update(currState, {
      kind: { $set: action.payload.kind },
    });
  });
});

export default menuReducer;
