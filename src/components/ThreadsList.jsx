import ThreadItem, { threadItemShape } from "./ThreadItem";
import PropTypes from "prop-types";

const ThreadList = ({ threads }) => {
  return (
    <div className="py-4 mb-4">
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      ))}
    </div>
  );
};

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadList;
