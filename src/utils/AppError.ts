export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
  METHOD_NOT_ALLOWED = 405,
  CONFLICT = 409,
  BAD_GATEWAY = 502,
  NOT_ACCEPTABLE = 406,
  UNPROCESSABLE_IDENTITY = 422,
  GATEWAY_TIMEOUT = 504,
}

interface ErrorArgs {
  name?: string;
  isOperational?: boolean;
  message?: string;
  httpCode: HttpCode;
}

export class AppError extends Error {
  public readonly name: string;
  public readonly isOperational: boolean = true;
  public readonly httpCode: HttpCode;

  constructor(args: ErrorArgs) {
    super(args.message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.httpCode = args.httpCode;
    this.name = args.name || "error";

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}
