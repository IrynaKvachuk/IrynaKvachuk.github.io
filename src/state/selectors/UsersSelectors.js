import { createSelector } from "reselect";

const getUsersSelector = (state) => {
    return state.users.users
}
export const getPageSize = (state) => {
    return state.users.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.users.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.users.currentPage
}
export const getIsLoading = (state) => {
    return state.users.isLoading
}
export const getFollowingInProgress = (state) => {
    return state.users.followingInProgress
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})