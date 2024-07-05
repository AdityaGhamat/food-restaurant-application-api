class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.notifyMessage = message;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
