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
    };
    getProductDetail = (id) => {
        const url = "/product/getProductReviews?id="+id;
        return axiosClient.get(url);
    };
    saveReview = (data) => {
        const url = "/product/saveReview";
        return axiosClient.post(url, data);
    };
    getCategories = () => {
        const url = "/category/getAll";
        return axiosClient.get(url);
    };
}

const productApi = new ProductApi();
export default productApi;