import FormData from 'form-data';

import * as C from '../constants';
import * as E from '../errors';
import * as I from '../interfaces';
import { callRequest } from '../utils';

const { v1 } = C.APIs;

export const attachFile = {
  async upload(formData: FormData): Promise<[I.AttachFile[], E.HttpException]> {
    try {
      const { method, url } = v1.attachFile.create;
      const { result, data } = await callRequest<I.BasicResponse<I.AttachFile[]>>({
        method,
        url,
        data: formData,
      });

      return [data, null];
    } catch (error) {
      const { data: _data, status } = error.response;

      return [null, new E.HttpException(_data, status)];
    }
  },
};
