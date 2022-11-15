import * as C from '../constants';
import * as E from '../errors';
import * as I from '../interfaces';
import { callRequest } from '../utils';

const { v1 } = C.APIs;

export const user = {
  async findOne(): Promise<[I.User, E.HttpException]> {
    try {
      const { method, url } = v1.user.findOne;
      const { result, data } = await callRequest<I.BasicResponse<I.User>>({
        method,
        url,
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async findUserById(id: string): Promise<[[I.User, [I.Product[], number]], E.HttpException]> {
    try {
      const { method, url } = v1.user.findUserById;
      const { result, data } = await callRequest<I.BasicResponse<[I.User, [I.Product[], number]]>>({
        method,
        url: url.replace(':id', id),
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async findTrendingTen(): Promise<[I.User[], I.CommonError]> {
    try {
      const { method, url } = v1.user.trendingTen;
      const { result, data } = await callRequest<I.RowResponse<I.User>>({
        method,
        url,
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async getTopTen(): Promise<[I.User[], I.CommonError]> {
    try {
      const { method, url } = v1.user.topTen;
      const { result, data } = await callRequest<I.RowResponse<I.User>>({
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
