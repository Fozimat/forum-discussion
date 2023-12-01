import React from "react";
import PropTypes from "prop-types";
import LeaderboardItem from "./LeaderboardItem";

function LeaderboardsList({ leaderboardsList }) {
  return (
    <div className="container mx-auto pt-3 px-5">
      <h1 className="text-3xl font-bold mb-6">Klasemen Pengguna Aktif</h1>
      {leaderboardsList.map((leaderboard) => (
        <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
      ))}
      <div className="grid grid-cols-1 gap-1" />
    </div>
  );
}

const userItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardShape = {
  user: PropTypes.shape(userItemShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardsList.propTypes = {
  leaderboardsList: PropTypes.arrayOf(PropTypes.shape(leaderboardShape))
    .isRequired,
};

export default LeaderboardsList;
