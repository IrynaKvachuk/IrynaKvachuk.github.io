const UPDATE_INFO = "UPDATE-INFO";

const initialState = {
        name: 'Jack',
        secondName: 'Sparrow',
        sex: 'male',
        familySituation: 'single',
        age: '35',
        homeTown: 'Sea',
        avatar: "https://www.flaticon.com/premium-icon/icons/svg/3106/3106921.svg",
        status: "Why Is The Rum Always Gone?"
}

const ProfileInfoReducer = (state = initialState, action) => {
    const updateInfo = (profileInfo) => {
        return { ...state, profileInfo: profileInfo }
    }
    switch (action.type) {
        case UPDATE_INFO:
            return updateInfo(action.profileInfo);
        default:
            return state
    }

}

export const profileInfoAC = (profileInfo) => ({
    type: UPDATE_INFO,
    profileInfo
})

export default ProfileInfoReducer;