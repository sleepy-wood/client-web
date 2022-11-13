import * as C from '../constants';
import * as E from '../errors';
import * as I from '../interfaces';
import { callRequest } from '../utils';

const { v1 } = C.APIs;

export const product = {
  async findOne(id: string): Promise<[I.Product, E.HttpException]> {
    try {
      const { method, url } = v1.product.findOne;
      const { result, data } = await callRequest<I.BasicResponse<I.Product>>({
        method,
        url: url.replace(':id', id),
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async findAll(params: I.FindAllProductQuery): Promise<[[I.Product[], number], E.HttpException]> {
    try {
      const { method, url } = v1.product.findAll;
      const { result, data, count } = await callRequest<I.RowResponse<I.Product>>({
        method,
        url,
        params,
      });

      return [[data, count], null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
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
  async findFourExtraProducts(id: string | number): Promise<[I.Product, E.HttpException]> {
    try {
      const { method, url } = v1.product.findFourExtraProducts;
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async findFourRecommendProducts(id: string | number): Promise<[I.Product, E.HttpException]> {
    try {
      const { method, url } = v1.product.findFourRecommendProducts;
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
};
