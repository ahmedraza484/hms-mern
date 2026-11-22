class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// export const errorMiddleware = (err, req, res, next) => {
//   err.message = err.message || "Internal Serval Error";
//   err.statusCode = err.statusCode || 500;
//   const errorMessage = err.errors
//     ? Object.values(err.errors)
//         .map((error) => error.message)
//         .join(" ")
//     : err.message;

//   return res.status(err.statusCode).json({
//     success: false,
//     message: errorMessage,
//   });
// };

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  const errors = err.errors
    ? Object.values(err.errors).map((error) => error.message)
    : [err.message];

  res.status(err.statusCode).json({
    success: false,
    message: errors[0],
    errors,
  });
};

export { ApiError };
