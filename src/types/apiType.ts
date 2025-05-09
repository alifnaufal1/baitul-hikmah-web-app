export type APIResponse<T> = {
  code: number;
  results: T;
  status: string;
};

export type Result<T> = {
  error: string;
  message: string;
  data: T;
};

export type ErrorRes = {
  code: number;
  results: Result<null>;
  status: string;
};

export type LoginResult = {
  message: string;
  token: string;
};

export type JWTPayload = {
  exp: number;
};
