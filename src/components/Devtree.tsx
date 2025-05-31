import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavigationTabs from "./NavigationTabs";
import type { User } from "../types";
import Header from "./Header";

type DevTreeProps = {
  data: User;
};

export default function DevTree({ data }: DevTreeProps) {
  return (
    <>
      <Header />

      <div className="bg-gray-100  min-h-screen py-10">
        <main className="mx-auto max-w-5xl p-10 md:p-0">
          <NavigationTabs />

          <div className="flex justify-end">Link a vista publica</div>

          <div className="flex flex-col md:flex-row gap-10 mt-10">
            <div className="flex-1 ">
              <Outlet />
            </div>
            <div className="w-full md:w-96 bg-slate-800 px-5 py-10 space-y-6">
              <p className="text-4xl text-center text-white">{data.handle}</p>

              <div className="mt-20 flex flex-col gap-5">SortableContent</div>
            </div>
          </div>
        </main>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
}
