import axiosClient from "./axiosClient";

class UserApi {
    register = (data) => {
        const url = "/auth/register";
        return axiosClient.post(url,data);
    };
    login = (username, password) => {
        const url = "/auth/login?un="+username+"&pw="+password;
        return axiosClient.get(url);
    };
    getUserProfile = (username) => {
        const url = "/auth/getUserProfile?un="+username;
        return axiosClient.get(url);
    };
    saveProfile = (data) => {
        const url = "/auth/profileSave";
        return axiosClient.post(url,data);
    };
}

const userApi = new UserApi();
export default userApi;