import PropTypes from 'prop-types';

const propUsers = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
};

const propThreads = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    ownerId: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string),
    downVotesBy: PropTypes.arrayOf(PropTypes.string),
    totalComments: PropTypes.number.isRequired,
    user: PropTypes.shape(propUsers).isRequired,
};

const propDetailThread = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.shape(propUsers).isRequired,
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
    owner: PropTypes.shape(propUsers).isRequired,
}

const propLeaderboards = {
    user: PropTypes.shape(propUsers).isRequired,
    score: PropTypes.number.isRequired,
};

export {
    propUsers,
    propThreads,
    propDetailThread,
    propComments,
    propLeaderboards,
};