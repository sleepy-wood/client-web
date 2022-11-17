import update from 'immutability-helper';
import { createAction, createReducer, current } from '@reduxjs/toolkit';

import * as I from '../interfaces';

const ACTIONS = {
  PUSH_CART_ITEM: 'cart/PUSH_CART_ITEM',
};

export const pushCartItem = createAction(
  ACTIONS.PUSH_CART_ITEM,
  (payload: { cartItem: I.CartItem }) => ({ payload }),
);

export interface CartState {
  cartItem: I.CartItem[];
}

const initialState: CartState = {
  cartItem: [],
};

const cartReducer = createReducer<CartState>(initialState, builder => {
  builder.addCase(pushCartItem, (state, action) => {
    const currState = current(state);

    return update(currState, {
      cartItem: {
        $push: [action.payload.cartItem],
      },
    });
  });
});

export default cartReducer;
