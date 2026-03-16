import { Link, useNavigate } from "react-router";
import {
  BASE_BACKEND_URL,
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
import { useState } from "react";
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
import type { AuthFormErrors, SignupFormDataType } from "../types/formTypes";
import { GENERIC_ERROR, SIGNUP_ERROR } from "../constants/errorConstants";

const SignupComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [formData, setFormData] = useState<SignupFormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<AuthFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));

    setErrorMessage("");

    setValidationErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSignup = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidationErrors({});

    const error = validateAuthForm(formData, true);

    if (error) {
      setValidationErrors(error);
      return;
    }

    try {
      const res = await axios.post(`${BASE_BACKEND_URL}/auth/signup`, formData);

      const token = res?.data?.token;

      document.cookie = `token=${token}; path=/; max-age=86400`;

      dispatch(loginSuccess());
      navigate("/products");
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        setErrorMessage(error.response.data.message || SIGNUP_ERROR);
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
          >
            <UserIcon className="w-7 text-(--color-secondary)" />
          </FormInputComponent>

          <FormInputComponent
            label={FORM_LABEL.LAST_NAME}
            name={FORM_NAME.LAST_NAME}
            type={FORM_TYPE.TEXT}
            placeholder={FORM_PLACEHOLDER.LAST_NAME}
            value={formData?.lastName}
            onchange={handleChange}
            errorMessage={validationErrors?.lastName}
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

        <div className="flex flex-col gap-3 mt-2 justify-center items-center">
          <p className="text-(--color-danger) text-sm mt-1 w-full h-4">
            {errorMessage}
          </p>

          <ButtonComponent
            type={FORM_TYPE.SUBMIT}
            buttonText={FORM_BUTTON_TEXT.SIGNUP}
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
