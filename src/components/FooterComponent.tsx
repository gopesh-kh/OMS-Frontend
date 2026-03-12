import { HeartIcon } from "@heroicons/react/16/solid";
import { FOOTER_TEXT_1, FOOTER_TEXT_2 } from "../constants/appConstants";

const FooterComponent = () => {
  return (
    <div className="text-[var(--color-primarytext)] flex justify-center items-center bg-[var(--color-secondarybg)] py-4 border-t">
      {FOOTER_TEXT_1}
      <HeartIcon className="w-7 text-[var(--color-secondary)] inline" />
      {FOOTER_TEXT_2}
    </div>
  );
};

export default FooterComponent;
