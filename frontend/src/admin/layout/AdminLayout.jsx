import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../css/Admin.css";

function AdminLayout() {
  return (
    <div className="admin-wrapper">

      <Sidebar />

      <div className="admin-main">

        <Header />

        <div className="admin-page">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;