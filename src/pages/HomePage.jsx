import { useDispatch, useSelector } from "react-redux";
import Category from "../components/Category";
import ThreadList from "../components/ThreadsList";
import { useEffect } from "react";
import asyncPopulateThreadsAndUser from "../states/shared/action";

const HomePage = () => {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateThreadsAndUser());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="bg-gray-50 flex h-screen">
      <div className="container mx-auto px-5 mt-8 ">
        <Category />
        <h2 className="text-3xl font-bold">Diskusi Tersedia</h2>
        <ThreadList threads={threadList} />
      </div>
    </section>
  );
};

export default HomePage;
