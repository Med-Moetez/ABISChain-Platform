import axios from "axios";

const api = "http://localhost:8075";
class ProductService {
  /**
   * Get last mined products
   * @returns
   */
  async getMinedProducts() {
    const data = await axios.get(`${api}/lastBlock`);

    return data?.data;
  }

  /**
   * Get pending products
   * @returns
   */
  async getPendingProducts() {
    const data = await axios.get(`${api}/mempool`);

    return data?.data;
  }

  /**
   *To Add a Product
   * @returns
   */
  async addProduct(data: any) {
    const res = await axios.post(`${api}/addData`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return res;
  }

  /**
   * Get Block By Id
   * @returns
   */
  getBlockById(id: any) {
    return axios.get(`${api}/getBlock/${id}`);
  }

  /**
   * Get mined products
   * @returns
   */
  async getBlockchain() {
    const data = await axios.get(`${api}/blocks`);

    return data?.data;
  }
}

export default new ProductService();
