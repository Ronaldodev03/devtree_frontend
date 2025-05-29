import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import HomeView from "./views/HomeView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
        </Route>

        <Route path="/admin" element={<AppLayout />}>
          <Route index={true} element={<div>devtree view</div>} />
          <Route path="profile" element={<div>profile view</div>} />
        </Route>

        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}
