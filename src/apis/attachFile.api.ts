import FormData from 'form-data';

import * as C from '../constants';
import * as E from '../errors';
import * as I from '../interfaces';
import { callRequest } from '../utils';

const { v1 } = C.APIs;

export const attachFile = {
  async upload(data: FormData): Promise<void> {
    try {
      const { method, url } = v1.attachFile.create;
      const result = await callRequest({
        method,
        url,
        data,
      });
    } catch (err) {
      console.error(err);
    }
  },
};
