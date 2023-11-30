import { useSelector } from "react-redux";

const Category = () => {
  const { threads = [] } = useSelector((state) => state);

  const category = threads.map(({ category }) => category);
  const uniqueCategory = category.filter((cat, index, arr) => {
    return arr.indexOf(cat) === index;
  });

  return (
    <>
      <h1 className="text-xl font-medium mb-2">Kategori Populer</h1>
      <ul className="flex mb-8">
        {uniqueCategory.map((category, key) => (
          <li className="mr-4" key={key}>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white px-4 py-0.5 border border-blue-500 hover:border-transparent rounded-lg text-sm">
              #{category}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Category;
