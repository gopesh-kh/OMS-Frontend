import { Outlet } from "react-router";
import { WELCOME_TEXT_1, WELCOME_TEXT_2 } from "../constants/appConstants";
import {
  LOGIN_IMAGE_ALT_TEXT,
  LOGIN_IMAGE_URL,
} from "../constants/imageAndAltTextConstant";
import FooterComponent from "../components/FooterComponent";

const AuthPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 flex-col items-center justify-evenly bg-mist-200">
        <div className="text-3xl md:hidden lg:block sm:text-md">
          {WELCOME_TEXT_1}
          <span className="text-purple-600 font-bold text-3xl relative inline-block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            {WELCOME_TEXT_2}
          </span>
        </div>

        <div className="flex justify-center items-center bg-mist-300 w-300 h-110 rounded-2xl shadow-2xl shadow-mist-500">
          <div className="w-90">
            <img src={LOGIN_IMAGE_URL} alt={LOGIN_IMAGE_ALT_TEXT} />
          </div>

          <div className="w-40"></div>

          <Outlet />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default AuthPage;
