import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
    RECEIVE_USERS: 'RECEIVE_USERS',
};

const receiveUserActionCreator = (users) => {
    return {
        type: ActionType.RECEIVE_USERS,
        payload: {
            users,
        },
    };
}

const asyncRegisterUser = ({ name, email, password, callbackSuccess = () => { } }) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            await api.register({ name, email, password });
            alert('Registered successfully');
            callbackSuccess();
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch(hideLoading());
        }
    }
}

export {
    ActionType,
    receiveUserActionCreator,
    asyncRegisterUser
};