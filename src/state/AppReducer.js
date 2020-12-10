import { getAuthUserDataThunkCr } from "./AuthReducer";

const SET_INITIALIZED = "SET-INITIALIZED";

const initialState = {
    initialized: false,
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const setInitializedAC = () => ({ type: SET_INITIALIZED })

export const initializeAppThunkCr = () => (dispatch) => {
    const promiseAuthUser = dispatch(getAuthUserDataThunkCr());
    Promise.all([promiseAuthUser])
        .then(() => {
            dispatch(setInitializedAC());
        })
}

export default AppReducer;