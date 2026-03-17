import { Link, useNavigate } from "react-router";
import {
  VITE_BASE_BACKEND_URL,
  REGISTER_TO_LOGIN_TEXT,
} from "../constants/appConstants";
import {
  FORM_BUTTON_TEXT,
  FORM_LABEL,
  FORM_NAME,
  FORM_PLACEHOLDER,
  FORM_TYPE,
} from "../constants/formConstants";
import { REDIRECT_TO_LOGIN } from "../constants/routeConstant";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../app/features/auth/authSlice";
import { validateAuthForm } from "../utils/formValidator";
import FormInputComponent from "./FormInputComponent";
import ButtonComponent from "./ButtonComponent";
import {
  ChevronDoubleRightIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import type { ISignupFormDataType } from "../types/formTypes";
import { GENERIC_ERROR, SIGNUP_ERROR } from "../constants/errorConstants";
import useToggle from "../hooks/useToggle";
import useAuthForm from "../hooks/useAuthForm";

const SignupComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { value: showPassword, toggle: togglePassword } = useToggle(false);

  const {
    formData,
    errorMessage,
    setErrorMessage,
    validationErrors,
    setValidationErrors,
    handleChange,
  } = useAuthForm<ISignupFormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const buttonStyle =
    "flex justify-around border rounded-xl p-1 text-lg w-30 hover:bg-(--color-secondary) hover:text-(--color-primarybg) transition";
  const labelStyle = "mt-2 text-md items-center gap-1";
  const inputFieldStyle = "border-r w-80 outline-none";
  const inputDivStyle = "flex gap-2 border rounded p-1";

  const handleSignup = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidationErrors({});

    const errors = validateAuthForm(formData, true);

    if (errors) {
      setValidationErrors(errors);
      return;
    }

    try {
      await axios.post(`${VITE_BASE_BACKEND_URL}/auth/signup`, formData, {
        withCredentials: true,
      });

      dispatch(loginSuccess());
      navigate("/products");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setErrorMessage(error.response.data?.message || SIGNUP_ERROR);
        } else {
          setErrorMessage(GENERIC_ERROR);
        }
      } else {
        setErrorMessage(GENERIC_ERROR);
      }
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <FormInputComponent
            label={FORM_LABEL.FIRST_NAME}
            name={FORM_NAME.FIRST_NAME}
            type={FORM_TYPE.TEXT}
            placeholder={FORM_PLACEHOLDER.FIRST_NAME}
            value={formData.firstName}
            onchange={handleChange}
            errorMessage={validationErrors?.firstName}
            required
            inputFieldStyle={inputFieldStyle}
            labelStyle={labelStyle}
            inputDivStyle={inputDivStyle}
          >
            <UserIcon className="w-7 text-(--color-secondary)" />
          </FormInputComponent>

          <FormInputComponent
            label={FORM_LABEL.LAST_NAME}
            name={FORM_NAME.LAST_NAME}
            type={FORM_TYPE.TEXT}
            placeholder={FORM_PLACEHOLDER.LAST_NAME}
            value={formData.lastName}
            onchange={handleChange}
            errorMessage={validationErrors?.lastName}
            inputFieldStyle={inputFieldStyle}
            labelStyle={labelStyle}
            inputDivStyle={inputDivStyle}
          >
            <UserIcon className="w-7 text-(--color-secondary)" />
          </FormInputComponent>

          <FormInputComponent
            label={FORM_LABEL.EMAIL}
            name={FORM_NAME.EMAIL}
            type={FORM_TYPE.EMAIL}
            placeholder={FORM_PLACEHOLDER.EMAIL}
            value={formData.email}
            onchange={handleChange}
            errorMessage={validationErrors?.email}
            required
            inputFieldStyle={inputFieldStyle}
            labelStyle={labelStyle}
            inputDivStyle={inputDivStyle}
          >
            <EnvelopeIcon className="w-7 text-(--color-secondary)" />
          </FormInputComponent>

          <FormInputComponent
            label={FORM_LABEL.PASSWORD}
            name={FORM_NAME.PASSWORD}
            type={showPassword ? FORM_TYPE.TEXT : FORM_TYPE.PASSWORD}
            placeholder={FORM_PLACEHOLDER.PASSWORD}
            value={formData.password}
            onchange={handleChange}
            errorMessage={validationErrors?.password}
            required
            inputFieldStyle={inputFieldStyle}
            labelStyle={labelStyle}
            inputDivStyle={inputDivStyle}
          >
            {showPassword ? (
              <EyeSlashIcon
                className="w-7 text-(--color-secondary) cursor-pointer"
                onClick={togglePassword}
              />
            ) : (
              <EyeIcon
                className="w-7 text-(--color-secondary) cursor-pointer"
                onClick={togglePassword}
              />
            )}
          </FormInputComponent>
        </div>

        <div className="flex flex-col gap-3 mt-2 justify-center items-center">
          <p className="text-(--color-danger) text-sm mt-1 w-full h-4">
            {errorMessage && errorMessage}
          </p>

          <ButtonComponent
            type={FORM_TYPE.SUBMIT}
            buttonText={FORM_BUTTON_TEXT.SIGNUP}
            buttonStyle={buttonStyle}
          >
            <ChevronDoubleRightIcon className="w-7" />
          </ButtonComponent>

          <Link
            to={REDIRECT_TO_LOGIN}
            className="no-underline hover:underline text-sm"
          >
            {REGISTER_TO_LOGIN_TEXT}
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignupComponent;
