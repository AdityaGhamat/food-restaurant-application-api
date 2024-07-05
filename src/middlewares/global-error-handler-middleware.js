const { StatusCodes } = require("http-status-codes");
const globalErrorHandler = (err, req, res, next) => {
  res.json({
    message: "Something went wrong",
    statuscode: StatusCodes.INTERNAL_SERVER_ERROR,
    error: err.message,
  });
};

module.exports = globalErrorHandler;
