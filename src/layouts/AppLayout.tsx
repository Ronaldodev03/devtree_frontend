import { Navigate } from "react-router-dom";
import Devtree from "../components/Devtree";

const AppLayout = () => {
  // first check if user authed
  const isLoading = false;
  const isError = false;
  const data = {};

  if (isLoading) return "Cargando...";
  if (isError) return <Navigate to={"/auth/login"} />;
  if (data) return <Devtree />;
};

export default AppLayout;
