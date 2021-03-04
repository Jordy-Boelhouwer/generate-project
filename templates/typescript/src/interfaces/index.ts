export interface IError extends Error {
  name: string;
  httpCode: number;
  isOperational: boolean | null;
}
