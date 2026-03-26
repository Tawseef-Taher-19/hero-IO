import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RouteLoader from "../components/RouteLoader";

const MainLayout = () => {
  return (
    <>
      <RouteLoader />
      <Header />
      <main className="container section">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;