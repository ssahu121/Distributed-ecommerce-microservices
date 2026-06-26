import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* HEADER (SAME EVERY PAGE) */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>

      {/* FOOTER (SAME EVERY PAGE) */}
      <Footer />
    </>
  );
}

export default Layout;