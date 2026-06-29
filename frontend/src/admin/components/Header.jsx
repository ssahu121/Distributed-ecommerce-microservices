import { FaBell, FaUserCircle } from "react-icons/fa";

function Header() {
  return (

    <div className="admin-header">

      <h3>Admin Dashboard</h3>

      <div className="header-right">

        <FaBell />

        <FaUserCircle size={28} />

      </div>

    </div>

  );
}

export default Header;