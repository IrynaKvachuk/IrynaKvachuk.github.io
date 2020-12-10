import { usersAPI, profileAPI } from '../api/api';

const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

const initialState = {
    profile: null,
    status: ''
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case SET_STATUS:
            return { ...state, status: action.status };
        default:
            return state
    }
}


export const setUserProfileAC = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setUserStatusAC = (status) => ({
    type: SET_STATUS,
    status
})

export const getUserProfileThunkCr = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfileAC(response.data));
}
export const getUserStatusThunkCr = (userId) => async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatusAC(response.data));
}
export const updateUserStatusThunkCr = (status) => async (dispatch) => {
    const response = await profileAPI.updateUserStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatusAC(status));
    }
}

export default ProfileReducer;