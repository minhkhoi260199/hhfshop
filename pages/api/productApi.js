import axiosClient from "./axiosClient";

class ProductApi {
    getAll = () => {
        const url = "/product/getItems";
        return axiosClient.get(url);
    };
}

const productApi = new ProductApi();
export default productApi;