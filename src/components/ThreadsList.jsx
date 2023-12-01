import React from "react";
import PropTypes from "prop-types";
import { propThreads } from "../utils/props";
import ThreadItem from "./ThreadItem";

function ThreadList({ threads }) {
  return (
    <div className="py-4 mb-4">
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      ))}
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(propThreads)).isRequired,
};

export default ThreadList;
