import {
  HeartIcon,
  HomeIcon,
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";

const NavBar = () => {
  return (
    <nav className="">
      <ul className="flex justify-around items-center bg-mist-100 py-6 border-b">
        <li className="text-4xl font-bold text-purple-600 underline">
          Go Cart
        </li>
        <li>
          <div className="flex items-center border-2 border-gray-700 gap-3 rounded-xl">
            <input
              type="text"
              name="search"
              id="search"
              className="border-r-2 border-gray-700 w-80 h-10 p-4 outline-0"
              placeholder="Search items..."
            />
            <MagnifyingGlassIcon className="flex w-6 justify-center items-center mr-2.5 cursor-pointer text-purple-600" />
          </div>
        </li>
        <div className="flex justify-end items-center gap-10">
          <li className="flex items-center justify-center">
            <HomeIcon className="w-7 text-purple-600" />
          </li>
          <li className="flex items-center justify-center">
            <HeartIcon className="w-7 text-purple-600" />
          </li>
          <li className="flex items-center justify-center">
            <ShoppingCartIcon className="w-7 text-purple-600" />
          </li>
          <li className="flex items-center justify-center">
            <UserIcon className="w-7 text-purple-600" />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
