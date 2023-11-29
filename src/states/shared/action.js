import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';

const asyncPopulateThreads = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const threads = await api.getAllThreads();
            dispatch(receiveThreadsActionCreator(threads));
        } catch (error) {
            alert(error.mesage);
        } finally {
            dispatch(hideLoading());
        }
    }
}

export default asyncPopulateThreads;