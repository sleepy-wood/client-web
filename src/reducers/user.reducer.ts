import { createAction, createReducer, current } from '@reduxjs/toolkit';
import { UserConfigurations } from './../interfaces/user.interface';
import update from 'immutability-helper';

const ACTIONS = <const>{
  SET_THEME: 'User/SET_THEME',
};

export const setTheme = createAction(ACTIONS.SET_THEME, (payload: 'dark' | 'light') => ({
  payload,
}));

export interface UserState {
  configurations: UserConfigurations;
}

const initialState: UserState = {
  configurations: {
    theme: 'light',
  },
};

const userReducer = createReducer<UserState>(initialState, builder => {
  builder.addCase(setTheme, (state, action) => {
    const currState = current(state);

    return update(currState, {
      configurations: {
        theme: {
          $set: action.payload,
        },
      },
    });
  });
});

export default userReducer;
