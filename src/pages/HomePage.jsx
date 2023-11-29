import Category from "../components/Category";
import ThreadList from "../components/ThreadsList";

const HomePage = () => {
  return (
    <section className="bg-gray-50 flex h-screen">
      <div className="container mx-auto px-5 mt-8 ">
        <Category />
        <h2 className="text-3xl font-bold">Diskusi Tersedia</h2>
        <ThreadList />
      </div>
    </section>
  );
};

export default HomePage;
