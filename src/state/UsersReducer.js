import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objectHelpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_COUNT = "USERS-COUNT";
const TOGGLE_IS_LOADING = "TOGGLE-IS-LOADING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    followingInProgress: []
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_USERS_COUNT:
            return { ...state, totalUsersCount: action.usersCount }
        case TOGGLE_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersCount = (usersCount) => ({ type: SET_USERS_COUNT, usersCount })
export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })



export const getUsersThunkCreator = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsLoading(true));

        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsLoading(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCr) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCr(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}

export const followThunkCreator = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), follow);
    }
}
export const unfollowThunkCreator = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollow);
    }
}

export default UsersReducer; 