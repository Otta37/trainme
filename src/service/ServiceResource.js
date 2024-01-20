import axios from "axios";

class ServiceResource {
  static #server_ip = "http://192.168.1.27:3000";

  static async post(endpoint, data) {
    try {
      const response = await axios.post(`${this.#server_ip}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async get_resource(endpoint, controller) {
    try {
      const response = await axios.get(`${this.#server_ip}/${endpoint}`, {
        signal: controller.signal,
      });
      return response.data;
    } catch (error) {
      throw error; // Puoi anche gestire l'errore qui o lanciarlo di nuovo
    }
  }
}

export default ServiceResource;
