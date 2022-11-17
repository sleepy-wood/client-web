import update from 'immutability-helper';
import { createAction, createReducer, current } from '@reduxjs/toolkit';

import * as I from '../interfaces';

const ACTIONS = {
  PUSH_WISHLIST_ITEM: 'wishlist/PUSH_WISHLIST_ITEM',
};

export const pushWishlistItem = createAction(
  ACTIONS.PUSH_WISHLIST_ITEM,
  (payload: { wishlistItem: I.WishlistItem }) => ({ payload }),
);

export interface WishlistState {
  wishlistItem: I.WishlistItem[];
}

const initialState: WishlistState = {
  wishlistItem: [],
};

const wishlistReducer = createReducer<WishlistState>(initialState, builder => {
  builder.addCase(pushWishlistItem, (state, action) => {
    const currState = current(state);

    return update(currState, {
      wishlistItem: {
        $push: [action.payload.wishlistItem],
      },
    });
  });
});

export default wishlistReducer;
