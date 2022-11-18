import * as C from '../constants';
import * as E from '../errors';
import * as I from '../interfaces';
import { callRequest } from '../utils';

const { v1 } = C.APIs;

export const wishlist = {
  async createWishlistItem(productId: number): Promise<[I.WishlistItem, E.HttpException]> {
    try {
      const { method, url } = v1.wishlist.createWishlistItem;
      const { result, data } = await callRequest<I.BasicResponse<I.WishlistItem>>({
        method,
        url,
        data: { productId },
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async getWishlistItems(wishlistItemIds: number[]): Promise<[I.WishlistItem[], E.HttpException]> {
    try {
      const { method, url } = v1.wishlist.getWishlistItems;
      const { result, data } = await callRequest<I.BasicResponse<I.WishlistItem[]>>({
        method,
        url,
        data: { wishlistItemIds },
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async removeWishlistItems(productIds: number[]): Promise<E.HttpException> {
    try {
      const { method, url } = v1.wishlist.removeWishlistItems;
      const { result, data } = await callRequest<I.BasicResponse<null>>({
        method,
        url,
        data: { productIds },
      });

      return null;
    } catch (error) {
      const { data: _data, status } = error.response;

      return new E.HttpException(_data, status);
    }
  },
};
