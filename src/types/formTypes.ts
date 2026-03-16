import { FORM_TYPE } from "../constants/formConstants";

export interface LoginFormDataType {
  email: string;
  password: string;
}

export interface SignupFormDataType extends LoginFormDataType {
  firstName: string;
  lastName?: string;
}

export type AuthFormErrors = {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
};

export type FormInputProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string | undefined;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  errorMessage?: string;
  required?: boolean;
};

export type ButtonType =
  | typeof FORM_TYPE.BUTTON
  | typeof FORM_TYPE.RESET
  | typeof FORM_TYPE.SUBMIT;

export type ButtonProps = {
  type?: ButtonType;
  buttonText: string;
  children?: React.ReactNode;
};
