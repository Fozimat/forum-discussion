import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
    RECEIVE_LEADERBOARS: 'RECEIVE_LEADERBOARS',
};

const receiveLeaderboardsActionCreator = (leaderboards) => {
    return {
        type: ActionType.RECEIVE_LEADERBOARS,
        payload: {
            leaderboards,
        },
    };
}

const asyncReceiveLeaderboards = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const leaderboards = await api.getLeaderboards();
            dispatch(receiveLeaderboardsActionCreator(leaderboards));
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    }
}

export {
    ActionType,
    receiveLeaderboardsActionCreator,
    asyncReceiveLeaderboards,
};