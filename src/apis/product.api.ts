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
  async findFiveByCategory(): Promise<
    [[I.User[][], { category: I.ProductCategory; categoryCount: number }[]], E.HttpException]
  > {
    try {
      const { method, url } = v1.product.findFiveByCategory;
      const { result, data } = await callRequest<
        I.BasicResponse<[I.User[][], { category: I.ProductCategory; categoryCount: number }[]]>
      >({
        method,
        url,
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async findFiveByQuery(query: string): Promise<[[I.Product[], number][], E.HttpException]> {
    try {
      const { method, url } = v1.product.findFiveByQuery;
      const { result, data } = await callRequest<I.BasicResponse<[I.Product[], number][]>>({
        method,
        url,
        params: { query },
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async findExtraProducts(id: string): Promise<[I.Product[], E.HttpException]> {
    try {
      const { method, url } = v1.product.findExtraProducts;
      const { result, data } = await callRequest<I.BasicResponse<I.Product[]>>({
        method,
        url: url.replace(':id', id),
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async findRecommendProducts(id: string): Promise<[I.Product[], E.HttpException]> {
    try {
      const { method, url } = v1.product.findRecommendProducts;
      const { result, data } = await callRequest<I.BasicResponse<I.Product[]>>({
        method,
        url: url.replace(':id', id),
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async updateHitPlusOne(id: string): Promise<E.HttpException> {
    try {
      const { method, url } = v1.product.updateHitPlusOne;
      const { result, data } = await callRequest<I.BasicResponse<I.Product[]>>({
        method,
        url: url.replace(':id', id),
      });

      return null;
    } catch (error) {
      const { data: _data, status } = error.response;

      return new E.HttpException(_data, status);
    }
  },
};
