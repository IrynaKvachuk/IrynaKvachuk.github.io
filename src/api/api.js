import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "6458bf48-3c96-48bd-95f0-7672ad9f038f",
  },
});

export const usersAPI = {
  getProfile(userId) {
    console.warn("Obsolete method. Please, profileAPI object.");
    return profileAPI.getProfile(userId);
  },
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((resp) => resp.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((resp) => resp.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((resp) => resp.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateUserStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
