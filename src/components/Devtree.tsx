import { Outlet } from "react-router-dom";
import Header from "./Header";

const Devtree = () => {
  return (
    <>
      <Header />
      Devtree
      <Outlet />
    </>
  );
};

export default Devtree;
