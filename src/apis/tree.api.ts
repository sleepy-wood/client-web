import * as C from '../constants';
import * as E from '../errors';
import * as I from '../interfaces';
import { callRequest } from '../utils';

const { v1 } = C.APIs;

export const tree = {
  async findAllNotNFTCollection(): Promise<[I.Tree[], E.HttpException]> {
    try {
      const { method, url } = v1.tree.findAllNotNFTCollection;
      const { result, count, data } = await callRequest<I.RowResponse<I.Tree>>({
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
