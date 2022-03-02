import axios from "axios";
import queryString from "query-string"

const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:5000/api",
    headers:{
        'content-type' : 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    //Handle token...
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (errol) => {
    //Handle errors..
    throw errol;
});

export default axiosClient;