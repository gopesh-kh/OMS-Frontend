import { Outlet } from "react-router";
import Footer from "../components/FooterComponent";
import NavBar from "../components/NavBarComponent";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
