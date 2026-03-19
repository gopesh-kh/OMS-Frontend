import { Outlet } from "react-router";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
