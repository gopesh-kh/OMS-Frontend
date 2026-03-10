import { EMAIL, LOGIN, PASSWORD } from "../constants/appConstants";
import { PLACEHOLDER } from "../constants/placeholderConstants";

const LoginComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <fieldset className="flex flex-col border-base-300 rounded border p-4 bg-purple-200 w-80">
        <legend className="text-gray-700 text-3xl">{LOGIN}</legend>

        <label className="mt-2 text-xl">{EMAIL}</label>
        <input
          type="email"
          className="border p-2 rounded"
          placeholder={PLACEHOLDER.LOGIN_EMAIL}
        />

        <label className="mt-2 text-xl">{PASSWORD}</label>
        <input
          type="password"
          className="border p-2 rounded"
          placeholder={PLACEHOLDER.LOGIN_PASSWORD}
        />

        <button className="border rounded p-2 mt-5 hover:bg-purple-400 text-lg">
          {LOGIN}
        </button>
      </fieldset>
    </div>
  );
};

export default LoginComponent;
