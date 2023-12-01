import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
    RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
    ADD_COMMENT: 'ADD_COMMENT',
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

const addCommentActionCreator = (comment) => {
    return {
        type: ActionType.ADD_COMMENT,
        payload: {
            comment,
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
        dispatch(clearTalkDetailActionCreator());
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

const asyncAddComment = ({ threadId, content }) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const comment = await api.createComment({ threadId, content });
            dispatch(addCommentActionCreator(comment));
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
    addCommentActionCreator,
    clearTalkDetailActionCreator,
    asyncReceiveThread,
    asyncAddComment,
};