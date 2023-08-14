import { NavLink } from "react-router-dom";
import "./LeftNav.css";

const LeftNav = () => {
  const categoriesObject = {
    all: "All",
    art: "Art",
    mathematics: "Mathematics",
    science: "Science",
    technology: "Technology",
    coding: "Coding",
    algorithm: "Algorithm",
    "data-structure": "Data Structure",
    other: "Other",
  };

  const categories = Object.keys(categoriesObject);

  const activeStyle = {
    color: "#71c6dd",
  };

  return (
    <div className="category-container">
      <h2 className="category-title">Category</h2>

      {categories.map((category) => (
        <p key={categories.indexOf(category)} className="post-category">
          <NavLink
            to={`/category/${category}`}
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            {categoriesObject[category]}
          </NavLink>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
