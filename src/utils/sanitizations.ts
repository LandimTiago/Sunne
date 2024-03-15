import { ArraySchema, ObjectSchema } from "joi";

class SanitizationError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, SanitizationError.prototype);
  }
}

function sanitize<T>(
  input: unknown,
  schema: ObjectSchema<T> | ArraySchema<T>
): T {
  const { error, value } = schema.validate(input);
  if (error) {
    throw new SanitizationError(error.message);
  }
  return value;
}

export { sanitize, SanitizationError };
