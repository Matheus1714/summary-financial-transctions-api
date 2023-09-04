type CustomErrorType = Error;

class DatabaseError extends Error {
  constructor(
    public message: string,
    public error: CustomErrorType,
  ) {
    super(message);
  }
}

export default DatabaseError;
