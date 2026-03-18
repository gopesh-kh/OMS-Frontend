import { Link } from "react-router";
import { PAGE_NOT_FOUND } from "../constants/errorConstants";
import { ROUTE } from "../constants/routeConstant";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <h1 className="text-4xl font-bold mb-4">{PAGE_NOT_FOUND[404]}</h1>

      <p className="text-gray-600 mb-6">{PAGE_NOT_FOUND.PAGE_NOT_FOUND}</p>

      <Link
        to={ROUTE.HOME.home}
        className="px-4 py-2 bg-(--color-secondarybg) text-(--color-primarytext) rounded-xl"
      >
        {PAGE_NOT_FOUND.BACK_TO_HOME}
      </Link>
    </div>
  );
};

export default PageNotFound;
