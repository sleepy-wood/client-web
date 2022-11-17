import * as C from '../constants';
import * as E from '../errors';
import * as I from '../interfaces';
import { callRequest } from '../utils';

const { v1 } = C.APIs;

export const cart = {
  async createCartItem(productId: number): Promise<[I.CartItem, E.HttpException]> {
    try {
      const { method, url } = v1.cart.createCartItem;
      const { result, data } = await callRequest<I.BasicResponse<I.CartItem>>({
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
  async getCartItems(cartItemIds: number[]): Promise<[I.CartItem[], E.HttpException]> {
    try {
      const { method, url } = v1.cart.getCartItems;
      const { result, data } = await callRequest<I.BasicResponse<I.CartItem[]>>({
        method,
        url,
        data: { cartItemIds },
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
};
