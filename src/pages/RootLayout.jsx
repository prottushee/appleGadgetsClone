import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const RootLayout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
