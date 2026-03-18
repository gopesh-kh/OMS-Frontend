import {
  EMAIL_ERROR,
  NAME_ERROR,
  PASSWORD_ERROR,
} from "../constants/errorConstants";
import type {
  AuthFormErrorType,
  ILoginFormDataType,
  ISignupFormDataType,
} from "../types/formTypes";

export const validateAuthForm = (
  formData: ILoginFormDataType | ISignupFormDataType,
  isSignup: boolean = false,
): AuthFormErrorType => {
  const errors: AuthFormErrorType = {};

  if (!formData.email || formData.email.trim() === "") {
    errors.email = EMAIL_ERROR.REQUIRE;
  } else {
    /*
      ^        → Start of string
      [^\s@]+  → One or more characters except whitespace or '@' (email username)
      @        → Literal '@' symbol separating username and domain
      [^\s@]+  → One or more characters except whitespace or '@' (domain name)
      \.       → Literal dot before domain extension
      [^\s@]+  → One or more characters (domain extension like com, org)
      $        → End of string
    */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      errors.email = EMAIL_ERROR.VALID;
    }
  }

  if (!formData.password || formData.password.trim() === "") {
    errors.password = PASSWORD_ERROR.REQUIRE;
  } else {
    /*
      ^                → Start of string
      (?=.*[a-z])      → At least one lowercase letter
      (?=.*[A-Z])      → At least one uppercase letter
      (?=.*\d)         → At least one digit (0–9)
      (?=.*[@$!%*?&])  → At least one special character from @$!%*?&
      .{8,}            → Minimum 8 characters (any character allowed)
      $                → End of string
    */

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

    if (!signupData.lastName || signupData.lastName.trim() === "") {
      errors.lastName = NAME_ERROR.LAST_NAME;
    }
  }

  return errors;
};
