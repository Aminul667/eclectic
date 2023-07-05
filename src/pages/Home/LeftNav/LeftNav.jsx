import { Link } from "react-router-dom";
import './LeftNav.css'

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
      <h2>Category</h2>
      {categories.map((category) => (
        <button key={categories.indexOf(category)} className="post-category">
          <Link>{categoriesObject[category]}</Link>
        </button>
      ))}
    </div>
  );
};

export default LeftNav;
