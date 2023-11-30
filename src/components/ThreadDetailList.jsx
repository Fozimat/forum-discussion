import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import PropTypes from "prop-types";
import { propDetailThread } from "../utils/props";
import { postedAt } from "../utils/helper";
import parse from "html-react-parser";

const ThreadDetailList = ({ threadDetail }) => {
  return (
    <div className="py-4 mb-4">
      <div className="mb-2">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white px-4 py-0.5 border border-blue-500 hover:border-transparent rounded-lg text-sm">
          #{threadDetail.category}
        </button>
      </div>
      <p className="text-3xl font-bold text-blue-700">{threadDetail.title}</p>
      <div className="overflow-hidden">{parse(threadDetail.body)}</div>
      <div className="flex items-center mt-4">
        <AiOutlineLike />
        <span className="mr-4 ml-1">{threadDetail.upVotesBy.length}</span>
        <AiOutlineDislike />
        <span className="mr-4 ml-1">{threadDetail.downVotesBy.length}</span>
        <FaRegCommentDots />
        <span className="mr-4 ml-1">{threadDetail.comments.length}</span>
        <p className="text-gray-500">
          Dibuat oleh{" "}
          <span className="text-blue-600 font-medium">
            {threadDetail.owner.name}
          </span>{" "}
          <span>{postedAt(threadDetail.createdAt)}</span>
        </p>
      </div>
    </div>
  );
};

ThreadDetailList.propTypes = {
  threadDetail: PropTypes.shape(propDetailThread),
};

export default ThreadDetailList;
