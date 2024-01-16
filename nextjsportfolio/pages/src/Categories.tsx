import React from 'react';

type Props = {
  categories: (string | Set<string>)[];

  filterItems: any;
}; 

const Categories = ({ categories, filterItems }: Props) => {
  return (
    <div className="btn-container text-cyan-500">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn flex gap-4 space-x-6  text-cyan-500"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
