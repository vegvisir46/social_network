import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fc7409b9-dd54-42e1-bc03-e50f7973f262"
    }
})

export const getUsersAPI = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
};

export const followAPI = (userId) => {
    return instance.post(`follow/${userId}`)
};

export const unfollowAPI = (userId) => {
    return instance.delete(`follow/${userId}`)
};

export const authAPI = () => {
    return instance.get(`auth/me`)
};

export const profileAPI = (userId) => {
    return instance.get(`profile/${userId}`)
};