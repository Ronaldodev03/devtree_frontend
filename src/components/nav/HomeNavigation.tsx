import { Link } from "react-router-dom";

export default function HomeNavigation() {
  const hasAuthToken = !!localStorage.getItem("AUTH_TOKEN");

  return (
    <>
      <Link
        className="text-white p-2 uppercase font-black text-xs cursor-pointer"
        to={hasAuthToken ? "/admin" : "/auth/login"}
      >
        Iniciar Sesión
      </Link>

      <Link
        className="bg-lime-500 text-slate-800 p-2 uppercase font-black text-xs cursor-pointer rounded-lg"
        to="/auth/register"
      >
        Registrarme
      </Link>
    </>
  );
}
