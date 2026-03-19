import { FORM_TYPE } from "../constants/formConstants";

export interface ILoginFormDataType {
  email: string;
  password: string;
}

export interface ISignupFormDataType extends ILoginFormDataType {
  firstName: string;
  lastName: string;
}

export type AuthFormErrorType = Partial<
  Record<keyof ISignupFormDataType, string>
>;

export type FormInputPropType = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  onchange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  children?: React.ReactNode;
  errorMessage?: string;
  inputFieldStyle?: string;
  labelStyle?: string;
  inputDivStyle?: string;
};

export type ButtonType =
  | typeof FORM_TYPE.BUTTON
  | typeof FORM_TYPE.RESET
  | typeof FORM_TYPE.SUBMIT;

export type ButtonPropType = {
  type: ButtonType;
  buttonText?: string;
  children?: React.ReactNode;
  buttonStyle: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};
