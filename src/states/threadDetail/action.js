import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
    RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
    CLEAR_TALK_DETAIL: 'CLEAR_TALK_DETAIL',
};

const receiveThreadDetailActionCreator = (threadDetail) => {
    return {
        type: ActionType.RECEIVE_THREAD_DETAIL,
        payload: {
            threadDetail,
        },
    };
}

const clearTalkDetailActionCreator = () => {
    return {
        type: ActionType.CLEAR_TALK_DETAIL,
    };
}

const asyncReceiveThread = (threadId) => {
    return async (dispatch) => {
        dispatch(showLoading());
        clearTalkDetailActionCreator();
        try {
            const threadDetail = await api.getThreadDetail(threadId);
            dispatch(receiveThreadDetailActionCreator(threadDetail));
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    }
}

export {
    ActionType,
    receiveThreadDetailActionCreator,
    clearTalkDetailActionCreator,
    asyncReceiveThread,
};