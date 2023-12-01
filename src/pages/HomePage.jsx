import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import Category from "../components/Category";
import ThreadList from "../components/ThreadsList";
import asyncPopulateThreadsAndUser from "../states/shared/action";
import AddButton from "../components/AddButton";

function HomePage() {
  const selector = createSelector(
    (state) => state.threads,
    (state) => state.users,
    (state) => state.authUser,
    (threads, users, authUser) => ({ threads, users, authUser })
  );

  const { threads = [], users = [], authUser } = useSelector(selector);

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
    <section className="bg-gray-50 flex min-h-screen">
      <div className="container mx-auto px-5 mt-8 ">
        <Category />
        <h2 className="text-3xl font-bold">Diskusi Tersedia</h2>
        <ThreadList threads={threadList} />
        <AddButton />
      </div>
    </section>
  );
}

export default HomePage;
