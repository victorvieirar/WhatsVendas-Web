import axios from "axios";

const API_URL = "http://localhost:3000";

export class APIService {
  constructor() {}

  createOrder(name, phone, address, price) {
    const url = `${API_URL}/api/order/`;
    const requestBody = {
      name: name,
      phone: phone,
      address: address,
      price: price
    };
    return axios.post(url, requestBody).then(response => response.data);
  }
}
