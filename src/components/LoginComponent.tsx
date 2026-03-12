import { Link, useNavigate } from "react-router";
import {
  BASE_BACKEND_URL,
  EMAIL,
  LOGIN,
  LOGIN_TO_REGISTER_TEXT,
  PASSWORD,
} from "../constants/appConstants";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../app/features/auth/authSlice";

import { PLACEHOLDER } from "../constants/placeholderConstants";
import { REDIRECT_TO_REGISTER } from "../constants/routeConstant";
import { useState } from "react";
import axios from "axios";

const LoginComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post(`${BASE_BACKEND_URL}/api/auth/login`, formData, {
        withCredentials: true,
      });

      dispatch(loginSuccess());
      navigate("/products");
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message || "Login failed");
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <fieldset className="flex flex-col rounded-2xl p-4 bg-mist-100 shadow-2xl shadow-mist-600 w-90 h-80">
        <p className="text-gray-700 text-2xl text-center">{LOGIN}</p>

        <div className="flex flex-col">
          <label className="mt-2 text-lg">{EMAIL}</label>
          <input
            name="email"
            type="email"
            className="border p-2 rounded"
            placeholder={PLACEHOLDER.LOGIN_EMAIL}
            value={formData.email}
            onChange={handleChange}
          />

          <label className="mt-2 text-lg">{PASSWORD}</label>
          <input
            name="password"
            type="password"
            className="border p-2 rounded"
            placeholder={PLACEHOLDER.LOGIN_PASSWORD}
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3 mt-4 justify-center items-center">
          <button
            type="submit"
            className="border rounded-2xl p-1 hover:bg-purple-400 text-lg w-30"
          >
            {LOGIN}
          </button>

          <Link
            to={REDIRECT_TO_REGISTER}
            className="no-underline hover:underline text-sm"
          >
            {LOGIN_TO_REGISTER_TEXT}
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginComponent;
