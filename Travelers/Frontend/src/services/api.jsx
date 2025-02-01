import axios from "axios";

const api = axios.create({
  MONGO_URI: "http://127.0.0.1:4010api", // Ensure the correct port
});

export default api;
