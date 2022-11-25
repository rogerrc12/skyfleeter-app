import camelize from "camelize";
import axios from "./axios";

export const login = async (values) => {
  const response = await axios.post("Authenticate/Login", values);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data);
};
