import { Link } from "react-router-dom";
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
  };

  const categories = Object.keys(categoriesObject);
  return (
    <div className="category-container">
      <h2 className="category-title">Category</h2>
      {categories.map((category) => (
        <p key={categories.indexOf(category)} className="post-category">
          <Link to={`/category/${category}`}>{categoriesObject[category]}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
