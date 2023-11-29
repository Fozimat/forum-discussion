const Category = () => {
  return (
    <>
      <h1 className="text-xl font-medium mb-2">Kategori Populer</h1>
      <ul className="flex mb-8">
        <li className="mr-4">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white px-4 py-0.5 border border-blue-500 hover:border-transparent rounded-lg text-sm">
            #redux
          </button>
        </li>
        <li className="mr-4">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white px-4 py-0.5 border border-blue-500 hover:border-transparent rounded-lg text-sm">
            #context
          </button>
        </li>
      </ul>
    </>
  );
};

export default Category;
