import FormData from 'form-data';

import * as C from '../constants';
import * as E from '../errors';
import * as I from '../interfaces';
import { callRequest } from '../utils';

const { v1 } = C.APIs;

export const attachFile = {
  async upload(data: FormData): Promise<E.HttpException> {
    try {
      const { method, url } = v1.attachFile.create;
      const result = await callRequest({
        method,
        url,
        data,
      });

      return null;
    } catch (error) {
      const { data: _data, status } = error.response;

      return new E.HttpException(_data, status);
    }
  },
};
