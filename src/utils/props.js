import PropTypes from 'prop-types';

const propUsers = {
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
};

const propThreads = {
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    category: PropTypes.string,
    createdAt: PropTypes.string,
    ownerId: PropTypes.string,
    upVotesBy: PropTypes.arrayOf(PropTypes.string),
    downVotesBy: PropTypes.arrayOf(PropTypes.string),
    totalComments: PropTypes.number,
    user: PropTypes.shape(propUsers),
};

const propDetailThread = {
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    category: PropTypes.string,
    createdAt: PropTypes.string,
    owner: PropTypes.shape(propUsers),
    upVotesBy: PropTypes.arrayOf(PropTypes.string),
    downVotesBy: PropTypes.arrayOf(PropTypes.string),
    comments: PropTypes.arrayOf(PropTypes.shape(propUsers)),
};

const propComments = {
    id: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    upVotesBy: PropTypes.arrayOf(PropTypes.string),
    downVotesBy: PropTypes.arrayOf(PropTypes.string),
    owner: PropTypes.shape(propUsers),
}

const propLeaderboards = {
    user: PropTypes.shape(propUsers),
    score: PropTypes.number,
};

export {
    propUsers,
    propThreads,
    propDetailThread,
    propComments,
    propLeaderboards,
};