import { Outlet } from "react-router";
import Footer from "../components/FooterComponent";
import NavBar from "../components/NavBarComponent";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePage;
