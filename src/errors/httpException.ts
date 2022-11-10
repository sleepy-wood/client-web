import * as I from '../interfaces';

export class HttpException implements I.CommonError {
  data?: I.OldError;
  status: number;

  constructor(data: I.OldError, status: number) {
    this.data = data;
    this.status = status;
  }
}
