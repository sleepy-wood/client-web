export interface CommonError {
  data?: OldError;
  status: number;
}

export interface OldError {
  code: number;
  error: {
    text?: string;
    reason?: string;
  };
}
