import axios from "axios";
import queryString from "query-string"
import { BASEURL } from "../../components/helper/config";

const axiosClient = axios.create({
    // baseURL: "http://127.0.0.1:5000/api",
    baseURL: BASEURL+"/api",
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