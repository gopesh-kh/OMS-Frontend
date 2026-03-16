import { Link, useNavigate } from "react-router";
import {
  BASE_BACKEND_URL,
  LOGIN_TO_REGISTER_TEXT,
} from "../constants/appConstants";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../app/features/auth/authSlice";
import {
  FORM_PLACEHOLDER,
  FORM_LABEL,
  FORM_TYPE,
  FORM_NAME,
  FORM_BUTTON_TEXT,
} from "../constants/formConstants";
import { REDIRECT_TO_REGISTER } from "../constants/routeConstant";
import axios from "axios";
import { validateAuthForm } from "../utils/formValidator";
import {
  ChevronDoubleRightIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/16/solid";
import FormInputComponent from "./FormInputComponent";
import ButtonComponent from "./ButtonComponent";
import type { ILoginFormDataType } from "../types/formTypes";
import { GENERIC_ERROR, LOGIN_ERROR } from "../constants/errorConstants";
import useAuthForm from "../hooks/useAuthForm";
import useToggle from "../hooks/useToggle";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { value: showPassword, toggle: togglePassword } = useToggle(false);

  const {
    formData,
    errorMessage,
    setErrorMessage,
    validationErrors,
    setValidationErrors,
    handleChange,
  } = useAuthForm<ILoginFormDataType>({
    email: "",
    password: "",
  });

  const buttonCss =
    "flex justify-around border rounded-xl p-1 text-lg w-30 hover:bg-(--color-secondary) hover:text-(--color-primarybg) transition";

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidationErrors({});

    const errors = validateAuthForm(formData);

    if (errors) {
      setValidationErrors(errors);
      return;
    }

    try {
      await axios.post(`${BASE_BACKEND_URL}/auth/login`, formData, {
        withCredentials: true,
      });

      dispatch(loginSuccess());
      navigate("/products");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setErrorMessage(error.response.data?.message || LOGIN_ERROR);
        } else {
          setErrorMessage(GENERIC_ERROR);
        }
      } else {
        setErrorMessage(GENERIC_ERROR);
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <FormInputComponent
            label={FORM_LABEL.EMAIL}
            name={FORM_NAME.EMAIL}
            type={FORM_TYPE.EMAIL}
            placeholder={FORM_PLACEHOLDER.EMAIL}
            value={formData.email}
            onchange={handleChange}
            errorMessage={validationErrors?.email}
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

        <div className="flex flex-col gap-3 mt-4 justify-center items-center">
          <p className="text-(--color-danger) text-sm mt-1 w-full h-4">
            {errorMessage && errorMessage}
          </p>

          <ButtonComponent
            type={FORM_TYPE.SUBMIT}
            buttonText={FORM_BUTTON_TEXT.LOGIN}
            css={buttonCss}
          >
            <ChevronDoubleRightIcon className="w-7" />
          </ButtonComponent>

          <Link
            to={REDIRECT_TO_REGISTER}
            className="no-underline hover:underline text-sm"
          >
            {LOGIN_TO_REGISTER_TEXT}
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginComponent;
