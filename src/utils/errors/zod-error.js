const zodError = (error) => {
  if (error instanceof z.ZodError) {
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
  } else return 1;
};

module.exports = zodError;
