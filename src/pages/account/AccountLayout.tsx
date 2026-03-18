import { Outlet } from "react-router";
import NavigationMenu from "../../components/navigation/NavigationMenu";

const AccountLayout = () => {
  const navigationMenuStyle =
    "flex justify-around mt-4 bg-(--color-secondarybg) text-white rounded-4xl py-2 shadow-xl flex gap-3 px-4 py-3 overflow-x-auto scrollbar-hide rounded-xl bg-(--color-secondarybg)";

  return (
    <div className="px-8">
      <NavigationMenu navigationMenuStyle={navigationMenuStyle} />

      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;
