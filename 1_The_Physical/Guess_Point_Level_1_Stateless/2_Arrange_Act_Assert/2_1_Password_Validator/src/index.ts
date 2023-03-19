export type ErrorKey =
  | "invalid-length"
  | "must-have-digit"
  | "must-have-upper-case-letter";

export type ValidationResult = { isValid: boolean; errors: ErrorKey[] };

const validatePassword = (password: string): ValidationResult => {
  const result: ReturnType<typeof validatePassword> = {
    isValid: true,
    errors: [],
  };

  if (password.length < 5 || password.length > 15) {
    result.isValid = false;
    result.errors.push("invalid-length");
  }

  if (!/\d/.test(password)) {
    result.isValid = false;
    result.errors.push("must-have-digit");
  }

  if (!/[A-Z]/.test(password)) {
    result.isValid = false;
    result.errors.push("must-have-upper-case-letter");
  }

  return result;
};

export default validatePassword;
