import { Outlet } from "react-router";
import Footer from "../../components/layout/Footer";
import {
  COMPANY_NAME,
  LOGIN_IMAGE_ALT_TEXT,
  LOGIN_IMAGE_URL,
  WELCOME_TEXT,
} from "../../constants/appConstants";

const AuthPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 flex-col items-center justify-evenly bg-(--color-primarybg)">
        <h1 className="text-3xl md:text-4xl">
          {WELCOME_TEXT}
          <span className="font-bold text-(--color-secondary)">
            {COMPANY_NAME}
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl p-6 shadow-lg">
          <img
            src={LOGIN_IMAGE_URL}
            alt={LOGIN_IMAGE_ALT_TEXT}
            className="w-80"
          />

          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AuthPage;
