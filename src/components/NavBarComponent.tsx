import {
  HeartIcon,
  HomeIcon,
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import { COMPANY_NAME } from "../constants/appConstants";
import { FORM_PLACEHOLDER } from "../constants/formConstants";
import { ROUTE } from "../constants/routeConstant";
import { Link } from "react-router";

const NavBarComponent = () => {
  return (
    <nav>
      <ul className="flex justify-around items-center bg-hover:bg-[var(--color-secondarytext)] py-2 border-b">
        <Link to={ROUTE.PRODUCTS.products}>
          <li className="text-4xl font-bold text-(--color-secondary) underline">
            {COMPANY_NAME}
          </li>
        </Link>
        <li>
          <div className="flex items-center border-2 border-(--color-secondarybg) gap-3 rounded-xl">
            <input
              type="text"
              name="search"
              id="search"
              className="border-r-2 border-(--color-secondarybg) text-(--color-secondary) w-80 h-10 p-4 outline-0"
              placeholder={FORM_PLACEHOLDER.SEARCH_BAR}
            />
            <MagnifyingGlassIcon className="flex w-6 justify-center items-center mr-2.5 cursor-pointer text-(--color-secondary)" />
          </div>
        </li>
        <div className="flex justify-end items-center gap-16">
          <Link to={ROUTE.PRODUCTS.products}>
            <li className="flex items-center justify-center">
              <HomeIcon className="w-7 text-(--color-secondary)" />
            </li>
          </Link>
          <Link to={ROUTE.FAVOURITE.favourite}>
            <li className="flex items-center justify-center">
              <HeartIcon className="w-7 text-(--color-secondary)" />
            </li>
          </Link>
          <Link to={ROUTE.CART.cart}>
            <li className="flex items-center justify-center">
              <ShoppingCartIcon className="w-7 text-(--color-secondary)" />
            </li>
          </Link>
          <Link to={`${ROUTE.ACCOUNT.account}/${ROUTE.ACCOUNT.viewprofile}`}>
            <li className="flex items-center justify-center">
              <UserIcon className="w-7 text-(--color-secondary)" />
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBarComponent;
