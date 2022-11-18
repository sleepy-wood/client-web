import update from 'immutability-helper';
import { createAction, createReducer, current } from '@reduxjs/toolkit';

import * as I from '../interfaces';

const ACTIONS = {
  SET_WISHLIST_ITEMS: 'wishlist/SET_WISHLIST_ITEMS',
  PUSH_WISHLIST_ITEM: 'wishlist/PUSH_WISHLIST_ITEM',
  POP_WISHLIST_ITEM: 'wishlist/POP_WISHLIST_ITEM',
};

export const setWishlistItem = createAction(
  ACTIONS.SET_WISHLIST_ITEMS,
  (payload: { wishlistItems: I.WishlistItem[] }) => ({ payload }),
);

export const pushWishlistItem = createAction(
  ACTIONS.PUSH_WISHLIST_ITEM,
  (payload: { wishlistItem: I.WishlistItem }) => ({ payload }),
);

export const popWishlistItem = createAction(
  ACTIONS.POP_WISHLIST_ITEM,
  (payload: { productIds: number[] }) => ({ payload }),
);

export interface WishlistState {
  wishlistItem: I.WishlistItem[];
}

const initialState: WishlistState = {
  wishlistItem: [],
};

const wishlistReducer = createReducer<WishlistState>(initialState, builder => {
  builder
    .addCase(setWishlistItem, (state, action) => {
      const currState = current(state);

      return update(currState, {
        wishlistItem: { $set: action.payload.wishlistItems },
      });
    })
    .addCase(pushWishlistItem, (state, action) => {
      const currState = current(state);

      return update(currState, {
        wishlistItem: {
          $push: [action.payload.wishlistItem],
        },
      });
    })
    .addCase(popWishlistItem, (state, action) => {
      const currState = current(state);

      return update(currState, {
        wishlistItem: {
          $set: currState.wishlistItem.filter(
            wishlistItem => !action.payload.productIds.includes(wishlistItem.productId),
          ),
        },
      });
    });
});

export default wishlistReducer;
