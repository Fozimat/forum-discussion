import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
    ADD_THREAD: 'ADD_THREAD',
    ADD_COMMENT: 'ADD_COMMENT',
};

const receiveThreadsActionCreator = (threads) => {
    return {
        type: ActionType.RECEIVE_THREADS,
        payload: {
            threads,
        },
    };
}

const addThreadActionCreator = (thread) => {
    return {
        type: ActionType.ADD_THREAD,
        payload: {
            thread,
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

const asyncAddThread = ({ title, body, category = '', callbackSuccess = () => { } }) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const thread = await api.createThread({ title, body, category });
            dispatch(addThreadActionCreator(thread));
            callbackSuccess();
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    }
}

const asyncAddComment = ({ threadId, content }) => {
    return async (dispatch) => {
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
    receiveThreadsActionCreator,
    addThreadActionCreator,
    asyncAddThread,
    asyncAddComment,
};
