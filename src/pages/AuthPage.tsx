import { Outlet } from "react-router";
import {
  LOGIN_IMAGE_ALT_TEXT,
  LOGIN_IMAGE_URL,
  WELCOME_TEXT,
  COMPANY_NAME,
} from "../constants/appConstants";
import FooterComponent from "../components/FooterComponent";

const AuthPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 flex-col items-center justify-evenly bg-(--color-primarybg)">
        <div className="text-3xl md:text-4xl">
          {WELCOME_TEXT}
          <span className="text-(--color-secondary) font-bold relative inline-block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            {COMPANY_NAME}
          </span>
        </div>

        <div className="flex flex-col gap-y-10 md:gap-0 md:flex-row md:justify-around items-center bg-(--color-primarytext) rounded-2xl md:h-115 md:w-250">
          <div className="w-90">
            <img src={LOGIN_IMAGE_URL} alt={LOGIN_IMAGE_ALT_TEXT} />
          </div>

          <Outlet />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default AuthPage;
