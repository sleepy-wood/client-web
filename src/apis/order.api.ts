import * as C from '../constants';
import * as E from '../errors';
import * as I from '../interfaces';
import { callRequest } from '../utils';

const { v1 } = C.APIs;

export const order = {
  async create(
    amount: number,
    payment: I.Payment,
    productIds: number[],
  ): Promise<[I.Order, E.HttpException]> {
    try {
      const { method, url } = v1.order.create;
      const { result, data } = await callRequest<I.BasicResponse<I.Order>>({
        method,
        url,
        data: {
          amount,
          payment,
          productIds,
        },
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async findAllGroupByMonth(): Promise<[I.Order[], E.HttpException]> {
    try {
      const { method, url } = v1.order.findAllGroupByMonth;
      const { result, data } = await callRequest<I.BasicResponse<I.Order[]>>({
        method,
        url,
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
};
