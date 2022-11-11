import * as C from '../constants';
import * as E from '../errors';
import * as I from '../interfaces';
import { callRequest } from '../utils';

const { v1 } = C.APIs;

export const product = {
  async findFiveByCategory(): Promise<[[I.User[], string][], E.HttpException]> {
    try {
      const { method, url } = v1.product.findFiveByCategory;
      const { result, data } = await callRequest<I.BasicResponse<[I.User[], string][]>>({
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
