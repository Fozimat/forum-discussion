import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import PropTypes from "prop-types";
import { propDetailThread } from "../utils/props";
import parse from "html-react-parser";

const ThreadComment = ({ threadDetail }) => {
  return (
    <div className="py-4 ">
      <h2 className="text-xl font-medium mb-4">
        Komentar ({threadDetail.comments.length})
      </h2>
      {threadDetail.comments.map((comment) => (
        <div className="border-b border-gray-200 pb-2 mb-5" key={comment.id}>
          <div className="flex items-center">
            <img
              src="https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random"
              alt="Avatar"
              className="w-10 h-10 rounded-full mr-4"
            />
            <span className="font-semibold">{comment.owner.name}</span>
          </div>
          <div className="py-1">{parse(comment.content)}</div>
          <div className="flex flex-row items-center my-2">
            <AiOutlineLike />
            <span className="mr-4 ml-1">{comment.upVotesBy.length}</span>
            <AiOutlineDislike />
            <span className="mr-4 ml-1">{comment.downVotesBy.length}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

ThreadComment.propTypes = {
  threadDetail: PropTypes.shape(propDetailThread),
};

export default ThreadComment;
