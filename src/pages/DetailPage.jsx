import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncReceiveThread } from "../states/threadDetail/action";
import ThreadDetailList from "../components/ThreadDetailList";
import ThreadComment from "../components/ThreadComment";
import ThreadCommentInput from "../components/ThreadCommentInput";

const DetailPage = () => {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThread(id));
  }, [id, dispatch]);

  if (!threadDetail) return null;

  // console.log(threadDetail);

  return (
    <section className="bg-gray-50 flex min-h-screen">
      <div className="container mx-auto px-5 mt-8 ">
        <ThreadDetailList threadDetail={threadDetail} />
        <ThreadCommentInput />
        <ThreadComment threadDetail={threadDetail} />
      </div>
    </section>
  );
};

export default DetailPage;
