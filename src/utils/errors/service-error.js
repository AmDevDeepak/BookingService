const { StatusCodes } = require("http-status-codes");

class ServiceError extends Error {
  constructor(
    message = "Something went wrong",
    explanation = "Service layer error occurred",
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    this.message = message;
    this.name = "ServiceError";
    this.explanation = explanation;
    this.statusCode = statusCode;
  }
}

module.exports = ServiceError;
