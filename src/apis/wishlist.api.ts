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
};
