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
import { useState } from "react";
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
import type { AuthFormErrors, LoginFormDataType } from "../types/formTypes";
import { GENERIC_ERROR, LOGIN_ERROR } from "../constants/errorConstants";

const LoginComponent = () => {
  const [formData, setFormData] = useState<LoginFormDataType>({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [validationErrorMessage, setValidationErrorMessage] =
    useState<AuthFormErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData((prev: LoginFormDataType) => ({
      ...prev,
      [name]: value,
    }));

    setErrorMessage("");

    setValidationErrorMessage((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationErrorMessage({});

    const validationErrors = validateAuthForm(formData);

    if (validationErrors) {
      setValidationErrorMessage(validationErrors);
      return;
    }

    try {
      const res = await axios.post(`${BASE_BACKEND_URL}/auth/login`, formData, {
        withCredentials: true,
      });

      const token = res?.data?.token;
      document.cookie = `token=${token}; path=/; max-age=86400 `;

      dispatch(loginSuccess());
      navigate("/products");
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        setErrorMessage(error.response.data.message || LOGIN_ERROR);
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
            errorMessage={validationErrorMessage?.email}
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
            errorMessage={validationErrorMessage?.password}
          >
            {!showPassword && (
              <EyeIcon
                className="w-7 text-(--color-secondary) cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            )}
            {showPassword && (
              <EyeSlashIcon
                className="w-7 text-(--color-secondary) cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
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
