import axiosClient from "./axiosClient";

class InvoiceApi {
    saveInvoice = (data) => {
        const url = "/order/save";
        return axiosClient.post(url, data);
    };
    saveContact = (data) => {
        const url = "/contact/save";
        return axiosClient.post(url, data);
    };
}

const invoiceApi = new InvoiceApi();
export default invoiceApi;