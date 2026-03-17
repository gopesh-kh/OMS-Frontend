import {
  EMAIL_ERROR,
  NAME_ERROR,
  PASSWORD_ERROR,
} from "../constants/errorConstants";
import type {
  AuthFormErrors,
  ILoginFormDataType,
  ISignupFormDataType,
} from "../types/formTypes";

export const validateAuthForm = (
  formData: ILoginFormDataType | ISignupFormDataType,
  isSignup: boolean = false,
): AuthFormErrors => {
  const errors: AuthFormErrors = {};

  if (!formData.email || formData.email.trim() === "") {
    errors.email = EMAIL_ERROR.REQUIRE;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      errors.email = EMAIL_ERROR.VALID;
    }
  }

  if (!formData.password || formData.password.trim() === "") {
    errors.password = PASSWORD_ERROR.REQUIRE;
  } else {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!strongPasswordRegex.test(formData.password)) {
      errors.password = PASSWORD_ERROR.VALID;
    }
  }

  if (isSignup) {
    const signupData = formData as ISignupFormDataType;

    if (!signupData.firstName || signupData.firstName.trim() === "") {
      errors.firstName = NAME_ERROR.FIRST_NAME;
    }

    if (signupData.lastName && typeof signupData.lastName !== "string") {
      errors.lastName = NAME_ERROR.LAST_NAME;
    }
  }

  return errors;
};
