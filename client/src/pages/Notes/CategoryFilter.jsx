function CategoryFilter({ category, setCategory }) {
  const categories = [
    "All",
    "Study",
    "Coding",
    "Ideas",
    "Personal",
  ];

  return (
    <div className="category-filter">
      {categories.map((item) => (
        <button
          key={item}
          className={
            category === item
              ? "category-btn active-category"
              : "category-btn"
          }
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;