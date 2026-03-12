import { HeartIcon } from "@heroicons/react/16/solid";
import { FOOTER_TEXT_1, FOOTER_TEXT_2 } from "../constants/appConstants";

const FooterComponent = () => {
  return (
    <div className="text-gray-600 flex justify-center items-center bg-mist-100 py-4 border-t">
      {FOOTER_TEXT_1}
      <HeartIcon className="w-7 text-purple-600 inline" />
      {FOOTER_TEXT_2}
    </div>
  );
};

export default FooterComponent;
