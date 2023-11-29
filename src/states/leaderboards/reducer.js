import { ActionType } from "./action";

const leaderboardsReducer = (leaderboards = [], action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_LEADERBOARS:
            return action.payload.leaderboards;
        default:
            return leaderboards;
    }
}

export default leaderboardsReducer;
