import { Link, useNavigate } from "react-router";
import {
  BASE_BACKEND_URL,
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  PASSWORD,
  REGISTER_TO_LOGIN_TEXT,
  SIGNUP,
} from "../constants/appConstants";
import { PLACEHOLDER } from "../constants/placeholderConstants";
import { REDIRECT_TO_LOGIN } from "../constants/routeConstant";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../app/features/auth/authSlice";
import { validateAuthForm } from "../utils/formValidator";

const SignupComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrorMessage("");
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validateAuthForm(formData, true);

    if (error) {
      setErrorMessage(error);
      return;
    }

    try {
      const res = await axios.post(
        `${BASE_BACKEND_URL}/api/auth/signup`,
        formData,
      );

      const token = res?.data?.token;

      document.cookie = `token=${token}; path=/; max-age=86400`;

      dispatch(loginSuccess());
      navigate("/products");
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        setErrorMessage(error.response.data.message || "Signup failed");
      } else {
        setErrorMessage("Something went wrong");
      }
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <fieldset className="flex flex-col rounded-2xl p-4 shadow-2xl shadow-mist-400 w-90 h-106">
        <p className="text-gray-700 text-2xl text-center">{SIGNUP}</p>

        <div className="flex flex-col gap-2">
          <label className="text-md">{FIRST_NAME}</label>
          <input
            name="firstName"
            type="text"
            className="border p-1 rounded"
            placeholder={PLACEHOLDER.FIRST_NAME}
            value={formData.firstName}
            onChange={handleChange}
          />

          <label className="text-md">{LAST_NAME}</label>
          <input
            name="lastName"
            type="text"
            className="border p-1 rounded"
            placeholder={PLACEHOLDER.LAST_NAME}
            value={formData.lastName}
            onChange={handleChange}
          />

          <label className="text-md">{EMAIL}</label>
          <input
            name="email"
            type="email"
            className="border p-1 rounded"
            placeholder={PLACEHOLDER.LOGIN_EMAIL}
            value={formData.email}
            onChange={handleChange}
          />

          <label className="text-md">{PASSWORD}</label>
          <input
            name="password"
            type="password"
            className="border p-1 rounded"
            placeholder={PLACEHOLDER.LOGIN_PASSWORD}
            value={formData.password}
            onChange={handleChange}
          />

          {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}
        </div>

        <div className="flex flex-col gap-3 mt-2 justify-center items-center">
          <button
            type="submit"
            className="border rounded-2xl hover:bg-[var(--color-secondary)] text-lg w-30"
          >
            {SIGNUP}
          </button>

          <Link
            to={REDIRECT_TO_LOGIN}
            className="no-underline hover:underline text-sm"
          >
            {REGISTER_TO_LOGIN_TEXT}
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default SignupComponent;
