import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { postedAt } from "../utils/helper";
import ThreadBody from "./ThreadBody";
import { Link } from "react-router-dom";
import { propThreads } from "../utils/props";

const ThreadItem = ({
  id,
  user,
  title,
  body,
  category,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
}) => {
  // console.log({ category });
  return (
    <>
      <div className="border-b border-gray-300 pb-2 mb-5">
        <div className="mb-2">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white px-4 py-0.5 border border-blue-500 hover:border-transparent rounded-lg text-sm">
            #{category}
          </button>
        </div>
        <Link className="text-xl font-bold text-blue-700" to={`/threads/${id}`}>
          {title}
        </Link>
        <ThreadBody htmlContent={body} maxLength={250} />
        <div className="flex items-center mt-4">
          <AiOutlineLike />
          <span className="mr-4 ml-1">{upVotesBy.length}</span>
          <AiOutlineDislike />
          <span className="mr-4 ml-1">{downVotesBy.length}</span>
          <FaRegCommentDots />
          <span className="mr-4 ml-1">{totalComments}</span>
          <p className="text-gray-500">
            Dibuat oleh{" "}
            <span className="text-blue-600 font-medium">{user.name}</span>{" "}
            <span>{postedAt(createdAt)}</span>
          </p>
        </div>
      </div>
    </>
  );
};

ThreadItem.propTypes = {
  ...propThreads,
};

export default ThreadItem;
