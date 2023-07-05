import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
