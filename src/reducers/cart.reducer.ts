import update from 'immutability-helper';
import { createAction, createReducer, current } from '@reduxjs/toolkit';

import * as I from '../interfaces';

const ACTIONS = {
  SET_CART_ITEMS: 'cart/SET_CART_ITEMS',
  PUSH_CART_ITEM: 'cart/PUSH_CART_ITEM',
  POP_CART_ITEM: 'cart/POP_CART_ITEM',
};

export const setCartItem = createAction(
  ACTIONS.SET_CART_ITEMS,
  (payload: { cartItems: I.CartItem[] }) => ({ payload }),
);

export const pushCartItem = createAction(
  ACTIONS.PUSH_CART_ITEM,
  (payload: { cartItem: I.CartItem }) => ({ payload }),
);

export const popCartItem = createAction(
  ACTIONS.POP_CART_ITEM,
  (payload: { productIds: number[] }) => ({ payload }),
);

export interface CartState {
  cartItem: I.CartItem[];
}

const initialState: CartState = {
  cartItem: [],
};

const cartReducer = createReducer<CartState>(initialState, builder => {
  builder
    .addCase(setCartItem, (state, action) => {
      const currState = current(state);

      return update(currState, {
        cartItem: { $set: action.payload.cartItems },
      });
    })
    .addCase(pushCartItem, (state, action) => {
      const currState = current(state);

      return update(currState, {
        cartItem: {
          $push: [action.payload.cartItem],
        },
      });
    })
    .addCase(popCartItem, (state, action) => {
      const currState = current(state);

      return update(currState, {
        cartItem: {
          $set: currState.cartItem.filter(
            cartItem => !action.payload.productIds.includes(cartItem.productId),
          ),
        },
      });
    });
});

export default cartReducer;
