import camelize from "camelize";
import axios from "./axios";

export const getTiresValues = async (customerId, fromDate = new Date().toISOString(), toDate = new Date().toISOString()) => {
  const response = await axios.get(`Dashboard/Tires?customerId=${customerId}&fromDate=${fromDate}&toDate=${toDate}`);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data);
};

export const getFuelValues = async (customerId, fromDate = new Date().toISOString(), toDate = new Date().toISOString()) => {
  const response = await axios.get(`Dashboard/Fuel?customerId=${customerId}&fromDate=${fromDate}&toDate=${toDate}`);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data);
};

export const getMainteinanceVuales = async (customerId, fromDate = new Date().toISOString(), toDate = new Date().toISOString()) => {
  const response = await axios.get(`Dashboard/Maintenance?customerId=${customerId}&fromDate=${fromDate}&toDate=${toDate}`);

  if (response.status >= 400) throw new Error(response.errors[0]);

  return camelize(response.data);
};
