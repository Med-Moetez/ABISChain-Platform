import axios from "axios";

const api = "http://localhost:8075";
class BlockchainService {
  /**
   * Get Block By Id
   * @returns
   */
  async getBlockById(id: any) {
    const data = await axios.get(`${api}/getBlock/${id}`);
    return data?.data;
  }

  /**
   * Get blockchain
   * @returns
   */
  async getBlockchain() {
    const data = await axios.get(`${api}/blocks`);

    return data?.data;
  }

  /**
   * Get blockchain stats
   * @returns
   */
  async getBlockchainStats() {
    const data = await axios.get(`${api}/stats`);

    return data?.data;
  }
}

export default new BlockchainService();
