/**
 * skenario test
 *
 * - asyncPopulateThreadsAndUser thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import {
    describe, it, beforeEach, afterEach, vi, expect
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import asyncPopulateThreadsAndUser from './action';
import { receiveUserActionCreator } from '../users/action';
import { receiveThreadsActionCreator } from '../threads/action';

const fakeThreadsResponse = [
    {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
    },
    {
        id: "thread-2",
        title: "Thread Kedua",
        body: "Ini adalah thread kedua",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-2",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
    }
];

const fakeUsersResponse = [
    {
        id: "john_doe",
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://generated-image-url.jpg"
    },
    {
        id: "jane_doe",
        name: "Jane Doe",
        email: "jane@example.com",
        avatar: "https://generated-image-url.jpg"
    },
    {
        id: "fulan",
        name: "Si Fulan",
        email: "fulan@example.com",
        avatar: "https://generated-image-url.jpg"
    }
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateThreadsAndUser thunk', () => {
    beforeEach(() => {
        api._getAllUsers = api.getAllUsers;
        api._getAllThreads = api.getAllThreads;
    });

    afterEach(() => {
        api.getAllUsers = api._getAllUsers;
        api.getAllThreads = api._getAllThreads;

        delete api._getAllUsers;
        delete api._getAllThreads;
    });

    it('should dispatch action correctly when data fetching success', async () => {
        api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
        api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);

        const dispatch = vi.fn();

        await asyncPopulateThreadsAndUser()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
        expect(dispatch).toHaveBeenCalledWith(receiveUserActionCreator(fakeUsersResponse));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });

    it('should dispatch action and call alert correctly when data fetching failed', async () => {
        api.getAllUsers = () => Promise.reject(fakeErrorResponse);
        api.getAllThreads = () => Promise.reject(fakeErrorResponse);

        const dispatch = vi.fn();
        window.alert = vi.fn();

        await asyncPopulateThreadsAndUser()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });
});
