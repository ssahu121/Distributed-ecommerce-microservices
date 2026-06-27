import "./Sidebar.css";
import { useFilter } from "../../context/FilterContext";

function Sidebar() {
  const { category, setCategory } = useFilter();

  const categories = [
    "all",
    "mobile",
    "laptop",
    "fashion",
    "beauty",
    "gaming",
    "home",
    "watch",
    "audio",
    "tv",
  ];

  return (
    <div className="sidebar">
      <h3>Categories</h3>

      {categories.map((item) => (
        <button
          key={item}
          className={category === item ? "active-category" : ""}
          onClick={() => setCategory(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;