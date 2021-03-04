class AppError {
  constructor(name, httpCode, description, isOperational = false) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.name = name;
    this.httpCode = httpCode;
    this.description = description;
    this.isOperational = isOperational;
  }
}

AppError.prototype = Object.create(Error.prototype);
export default AppError;
