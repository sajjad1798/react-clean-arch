import { API_URL } from "@/config";
import axios from "axios";

const Axios = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
  },
});

export default Axios;
