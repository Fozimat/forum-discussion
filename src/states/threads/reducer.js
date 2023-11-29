import { ActionType } from "./action"

const threadsReducer = (threads = [], comments = [], action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_THREADS:
            return action.payload.threads;
        case ActionType.ADD_THREAD:
            return [action.payload.thread, ...threads];
        case ActionType.ADD_COMMENT:
            return [action.payload.comment, ...comments];
        default:
            return { threads, comments };
    }
}

export default threadsReducer;