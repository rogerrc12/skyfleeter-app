import axios from "axios";
import { setInterceptors } from "./interceptors";

const instance = axios.create({
  baseURL: "https://api.skyfleeter.com/api/",
  timeout: 30000,
});

setInterceptors(instance);

export default instance;
