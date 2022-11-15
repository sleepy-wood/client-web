import { createAction, createReducer, current } from '@reduxjs/toolkit';
import { UserConfigurations } from './../interfaces/user.interface';
import update from 'immutability-helper';

import * as I from '../interfaces';

const ACTIONS = <const>{
  SET_THEME: 'user/SET_THEME',
  SET_USER: 'user/SET_USER',
};

export const setTheme = createAction(ACTIONS.SET_THEME, (payload: 'dark' | 'light') => ({
  payload,
}));

export const setUser = createAction(ACTIONS.SET_USER, (payload: { user: I.User }) => ({
  payload,
}));

export interface UserState {
  configurations: UserConfigurations;
  user: I.User;
}

const initialState: UserState = {
  configurations: {
    theme: 'light',
  },
  user: null,
};

const userReducer = createReducer<UserState>(initialState, builder => {
  builder
    .addCase(setUser, (state, action) => {
      const currState = current(state);

      return update(currState, {
        user: { $set: action.payload.user },
      });
    })
    .addCase(setTheme, (state, action) => {
      const currState = current(state);

      return update(currState, {
        configurations: { theme: { $set: action.payload } },
      });
    });
});

export default userReducer;
