import React from "react";
import PropTypes from "prop-types";

function LeaderboardItem({ user, score }) {
  return (
    <div
      key={user.id}
      className="flex items-center bg-white p-4 rounded-md shadow-md mb-4"
    >
      <img
        src={user.avatar}
        alt={user.name}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <p className="font-semibold">{user.name}</p>
        <p className="text-gray-600">{`Skor: ${score}`}</p>
      </div>
    </div>
  );
}

const userItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

LeaderboardItem.propTypes = {
  user: PropTypes.shape(userItemShape).isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
