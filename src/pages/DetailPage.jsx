import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import {
  asyncAddComment,
  asyncReceiveThread,
} from "../states/threadDetail/action";
import ThreadDetailList from "../components/ThreadDetailList";
import ThreadComment from "../components/ThreadComment";
import ThreadCommentInput from "../components/ThreadCommentInput";
import asyncPopulateThreadsAndUser from "../states/shared/action";

function DetailPage() {
  const { id } = useParams();
  const selector = createSelector(
    (state) => state.threadDetail,
    (threadDetail) => ({ threadDetail })
  );
  const { threadDetail = null } = useSelector(selector);
  const dispatch = useDispatch();

  const addReplyThread = ({ content }) => {
    dispatch(asyncAddComment({ threadId: id, content }));
    dispatch(asyncPopulateThreadsAndUser());
  };

  useEffect(() => {
    dispatch(asyncReceiveThread(id));
  }, [id, dispatch]);

  if (!threadDetail) return null;

  return (
    <section className="bg-gray-50 flex min-h-screen">
      <div className="container mx-auto px-5 mt-8 ">
        <ThreadDetailList threadDetail={threadDetail} />
        <ThreadCommentInput replyThread={addReplyThread} />
        <ThreadComment threadDetail={threadDetail} />
      </div>
    </section>
  );
}

export default DetailPage;
