import { HeartIcon } from "@heroicons/react/16/solid";

const Footer = () => {
  return (
    <div className="text-gray-600 flex justify-center items-center flex-col min-h-screen">
      Created with <HeartIcon className="w-7 text-purple-600 inline" /> by
      Gopesh.
    </div>
  );
};

export default Footer;
