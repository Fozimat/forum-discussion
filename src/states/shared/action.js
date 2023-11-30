import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUserActionCreator } from '../users/action';

const asyncPopulateThreadsAndUser = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const threads = await api.getAllThreads();
            const users = await api.getAllUsers();
            dispatch(receiveThreadsActionCreator(threads));
            dispatch(receiveUserActionCreator((users)));
        } catch (error) {
            alert(error.mesage);
        } finally {
            dispatch(hideLoading());
        }
    }
}

export default asyncPopulateThreadsAndUser;