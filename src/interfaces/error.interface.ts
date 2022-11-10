export interface CommonError {
  data?: OldError;
}

export interface OldError {
  message: string;
  name: string;
}
