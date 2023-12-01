import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

const ThreadCommentInput = ({ replyThread }) => {
  const [content, onContentChange, setContent] = useInput("");

  const addComment = (e) => {
    e.preventDefault();
    replyThread({ content });
    setContent("");
  };

  return (
    <div className="pb-2 mb-5">
      <h2 className="text-xl font-semibold text-gray-700 mt-5">
        Beri Komentar
      </h2>
      <form onSubmit={addComment}>
        <div className="mb-4">
          <textarea
            id="body"
            value={content}
            onChange={onContentChange}
            rows={5}
            className="mt-1 p-2 border w-full rounded-md  border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

ThreadCommentInput.propTypes = {
  replyThread: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
