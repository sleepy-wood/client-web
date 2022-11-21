import update from 'immutability-helper';
import Web3 from 'web3';
import { createAction, createReducer, current } from '@reduxjs/toolkit';

const ACTIONS = {
  SET_ACCOUNT: 'web3/SET_ACCOUNT',
  SET_WEB3: 'web3/SET_WEB3',
};

export const setAccount = createAction(ACTIONS.SET_ACCOUNT, (payload: { account: string }) => ({
  payload,
}));

export const setWeb3 = createAction(ACTIONS.SET_WEB3, (payload: { web3: Web3 }) => ({
  payload,
}));

export interface Web3State {
  account: string;
  web3: Web3;
}

const initialState: Web3State = {
  account: '',
  web3: null,
};

const web3Reducer = createReducer<Web3State>(initialState, builder => {
  builder
    .addCase(setAccount, (state, action) => {
      const currState = current(state);

      return update(currState, {
        account: { $set: action.payload.account },
      });
    })
    .addCase(setWeb3, (state, action) => {
      const currState = current(state);

      return update(currState, {
        web3: { $set: action.payload.web3 },
      });
    });
});

export default web3Reducer;
