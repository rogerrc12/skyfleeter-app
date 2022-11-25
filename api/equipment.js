import camelize from "camelize";
import axios from "./axios";

export const getAllEquipments = async (customerId) => {
  const response = await axios.get(`Equipment/GetAll/${customerId}`);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data);
};

export const getEquipmentByCode = async (code, customerId) => {
  const response = await axios.get(`Equipment/GetSingle?code=${code}&customerId=${customerId}`);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data);
};

export const getTireByCode = async (code, customerId) => {
  const response = await axios.get(`Tire/GetSingle?code=${code}&customerId=${customerId}`);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data);
};
