/*
* test scenario for threadsReducer
*
* threadReducer function
* - should return the initial state when given by unknown action
* - should return the threads when given by RECEIVE_THREADS action
* - should return the threads with the new thread when given by ADD_THREAD action
* - should return the comments with the new comment when given by ADD_COMMENT action
*/

import { describe, expect, it } from "vitest";
import threadsReducer from "./reducer";
import { ActionType } from "./action";

describe('threadsReducer function', () => {
    it('should return the initial state when given by unknown action', () => {
        const initialState = [];
        const action = { type: 'UNKNOWON' };

        const nextState = threadsReducer(initialState, action);
        expect(nextState).toEqual(initialState);
    });

    it('should return the threads when given by RECEIVE_THREADS action', () => {
        const initialState = [];
        const action = {
            type: ActionType.RECEIVE_THREADS,
            payload: {
                threads: [
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
                ]
            }
        };
        const nextState = threadsReducer(initialState, action);
        expect(nextState).toEqual(action.payload.threads);
    });

    it('should return the threads with the new thread when given by ADD_THREAD action', () => {
        const initialState = [
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
            }
        ];
        const action = {
            type: ActionType.ADD_THREAD,
            payload: {
                thread:
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
                },
            }
        };
        const nextState = threadsReducer(initialState, action);
        expect(nextState).toEqual([action.payload.thread, ...initialState]);
    });

    it('should return the comments with the new comment when given by ADD_COMMENT action', () => {
        const initialState = [];
        const action = {
            type: ActionType.ADD_COMMENT,
            payload: {
                comment: {
                    id: "comment-1",
                    content: "Ini adalah komentar pertama",
                    createdAt: "2021-06-21T07:00:00.000Z",
                    upVotesBy: [],
                    downVotesBy: [],
                    owner: {
                        id: "users-1",
                        name: "John Doe",
                        email: "john@example.com"
                    }
                }
            }
        };
        const nextState = threadsReducer(initialState, action);
        expect(nextState).toEqual([action.payload.comment]);
    });
});
