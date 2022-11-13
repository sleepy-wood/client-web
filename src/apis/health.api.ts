import * as C from '../constants';
import * as E from '../errors';
import * as I from '../interfaces';
import { callRequest } from '../utils';

const { v1 } = C.APIs;

export const health = {
  async findWeekData(): Promise<[I.Activity[], E.HttpException]> {
    try {
      const { method, url } = v1.health.findWeekData;
      const { result, data } = await callRequest<I.BasicResponse<I.Activity[]>>({
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
