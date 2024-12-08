import { Outlet } from "react-router-dom";
import Navigasi from "./Navigasi";

function Layout() {
  return (
    <>
      <div className="max-w-md m-auto p-4 relative h-screen">
        <Navigasi />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
