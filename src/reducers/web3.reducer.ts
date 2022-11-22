import update from 'immutability-helper';
import Web3 from 'web3';
import { createAction, createReducer, current } from '@reduxjs/toolkit';

const ACTIONS = {
  SET_WEB3: 'web3/SET_WEB3',
};

export const setWeb3 = createAction(ACTIONS.SET_WEB3, (payload: { web3: Web3 }) => ({
  payload,
}));

export interface Web3State {
  web3: Web3;
}

const initialState: Web3State = {
  web3: null,
};

const web3Reducer = createReducer<Web3State>(initialState, builder => {
  builder.addCase(setWeb3, (state, action) => {
    const currState = current(state);

    return update(currState, {
      web3: { $set: action.payload.web3 },
    });
  });
});

export default web3Reducer;
