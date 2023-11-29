import { ActionType } from './action';

const threadDetailReducer = (threadDetail = null, action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_THREAD_DETAIL:
            return action.payload.threadDetail;
        case ActionType.CLEAR_TALK_DETAIL:
            return null;
        default:
            threadDetail;
    }
}

export default threadDetailReducer;