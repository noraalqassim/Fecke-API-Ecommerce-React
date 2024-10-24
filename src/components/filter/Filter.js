import React from "react";

import "./Filter.css";
export default function Filter({
  categories,
  selectedCategories,
  setSelectedCategories,
}) {
  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSelectAll = () => {
    setSelectedCategories(categories);
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="flex-container">
      <button className="button-83" onClick={handleSelectAll}>
        All
      </button>
      {categories.map((category) => (
        <button
          className="button-83"
          key={category}
          style={{
            background: selectedCategories.includes(category)
              ? "linear-gradient(to bottom, #fff, #c79f82)"
              : "white",
          }}
          onClick={() => handleCategoryToggle(category)}
        >
          {category}
        </button>
      ))}
      <button className="button-83" onClick={handleClearAll}>
        Clear
      </button>
    </div>
  );
}
