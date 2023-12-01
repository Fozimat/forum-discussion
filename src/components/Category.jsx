import React from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

function Category() {
  const selector = createSelector(
    (state) => state.threads,
    (threads) => ({ threads })
  );

  const { threads = [] } = useSelector(selector);

  const category = threads.map(({ category }) => category);
  const uniqueCategory = category.filter(
    (cat, index, arr) => arr.indexOf(cat) === index
  );

  return (
    <>
      <h1 className="text-xl font-medium mb-2">Kategori Populer</h1>
      <ul className="flex mb-8">
        {uniqueCategory.map((category, key) => (
          <li className="mr-4" key={key}>
            <button
              type="button"
              className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white px-4 py-0.5 border border-blue-500 hover:border-transparent rounded-lg text-sm"
            >
              #{category}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Category;
