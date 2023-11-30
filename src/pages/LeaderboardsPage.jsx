import { useDispatch, useSelector } from "react-redux";
import LeaderboardsList from "../components/LeaderboardsList";
import { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { asyncReceiveLeaderboards } from "../states/leaderboards/action";

const LeaderboardsPage = () => {
  const selector = createSelector(
    (state) => state.leaderboards,
    (leaderboards) => ({ leaderboards })
  );

  const { leaderboards = [] } = useSelector(selector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  const leaderboardList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <div className="bg-gray-50 min-h-screen">
      <LeaderboardsList leaderboardsList={leaderboardList} />
    </div>
  );
};

export default LeaderboardsPage;
