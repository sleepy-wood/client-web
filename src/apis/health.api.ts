import * as C from '../constants';
import * as E from '../errors';
import * as I from '../interfaces';
import { callRequest } from '../utils';

const { v1 } = C.APIs;

export const health = {
  async findHeart(): Promise<[I.Heart, E.HttpException]> {
    try {
      const { method, url } = v1.health.findHeart;
      const { result, data } = await callRequest<I.BasicResponse<I.Heart>>({
        method,
        url,
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async findOxygen(): Promise<[I.Oxygen, E.HttpException]> {
    try {
      const { method, url } = v1.health.findOxygen;
      const { result, data } = await callRequest<I.BasicResponse<I.Oxygen>>({
        method,
        url,
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async findRespiratory(): Promise<[I.Respiratory, E.HttpException]> {
    try {
      const { method, url } = v1.health.findRespiratory;
      const { result, data } = await callRequest<I.BasicResponse<I.Respiratory>>({
        method,
        url,
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
  async findWeekData(date: Date): Promise<[I.Activity[], E.HttpException]> {
    try {
      const { method, url } = v1.health.findWeekData;
      const { result, data } = await callRequest<I.BasicResponse<I.Activity[]>>({
        method,
        url,
        params: { date },
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
};
