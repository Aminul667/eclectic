import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
