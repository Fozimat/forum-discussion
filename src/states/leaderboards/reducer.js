import { ActionType } from "./action";

const receiveLeaderboardsReducer = (action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_LEADERBOARS:
            return action.payload.leaderboards;
    }
}

export default receiveLeaderboardsReducer;
