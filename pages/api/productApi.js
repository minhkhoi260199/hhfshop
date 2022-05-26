import axiosClient from "./axiosClient";

class ProductApi {
    getAll = () => {
        const url = "/product/getItems";
        return axiosClient.get(url);
    };
    search = (keyword) => {
        const url = "/product/search?keyword="+keyword;
        return axiosClient.get(url);
    };
    getByCategory = (cateId) => {
        const url = "/product/getItemsByCate?cateId="+cateId;
        return axiosClient.get(url);
    }
    getCategories = () => {
        const url = "/category/getAll";
        return axiosClient.get(url);
    };
}

const productApi = new ProductApi();
export default productApi;