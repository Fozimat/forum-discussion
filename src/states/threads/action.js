import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  ADD_COMMENT: 'ADD_COMMENT',
};

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREAD,
  payload: {
    thread,
  },
});

const asyncAddThread = ({
  title, body, category = '', callbackSuccess = () => { },
}) => async (dispatch) => {
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
};

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
};
