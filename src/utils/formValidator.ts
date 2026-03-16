import type {
  AuthFormErrors,
  LoginFormDataType,
  SignupFormDataType,
} from "../types/formTypes";

export const validateAuthForm = (
  formData: LoginFormDataType | SignupFormDataType,
  isSignup: boolean = false,
): AuthFormErrors => {
  const errors: AuthFormErrors = {};

  if (!formData.email || formData.email.trim() === "") {
    errors.email = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }
  }

  if (!formData.password || formData.password.trim() === "") {
    errors.password = "Password is required";
  } else {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!strongPasswordRegex.test(formData.password)) {
      errors.password =
        "Password must be 8+ chars with A-Z, a-z, 0-9, and special char";
    }
  }

  if (isSignup) {
    const signupData = formData as SignupFormDataType;

    if (!signupData.firstName || signupData.firstName.trim() === "") {
      errors.firstName = "First name is required";
    }

    if (signupData.lastName && typeof signupData.lastName !== "string") {
      errors.lastName = "Last name must be valid";
    }
  }

  return errors;
};
