export type ErrorKey =
  | "invalid-length"
  | "must-have-digit"
  | "must-have-upper-case-letter";

const validatePassword = (
  password: string
): { isValid: boolean; errors?: ErrorKey[] } => {
  if (password.length < 5 || password.length > 15) {
    return {
      isValid: false,
      errors: ["invalid-length"],
    };
  }

  return { isValid: true };
};

export default validatePassword;
