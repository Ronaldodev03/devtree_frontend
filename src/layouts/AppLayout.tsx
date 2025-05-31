import { Navigate } from "react-router-dom";
import Devtree from "../components/Devtree";
import type { User } from "../types";

const AppLayout = () => {
  // first check if user authed
  const isLoading = false;
  const isError = false;
  const data = {
    handle: "roro",
    name: "ronaldo",
    email: "ronaldosalazar45@test.com",
    _id: "1",
  } as User;

  if (isLoading) return "Cargando...";
  if (isError) return <Navigate to={"/auth/login"} />;
  if (data) return <Devtree data={data} />;
};

export default AppLayout;
