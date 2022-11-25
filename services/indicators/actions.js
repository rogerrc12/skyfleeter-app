import { createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { getFuelValues, getMainteinanceVuales, getTiresValues } from "../../api/indicators";
import { formatFuelIndicators, formatMaintenanceIndicators, formatTireIndicators } from "../../helpers/formatters";

export const getTireIndicators = createAsyncThunk("@indicators/get_tire_indicators", async (dates, { getState }) => {
  const fromDate = dates.start ? new Date(dates.start).toISOString() : null,
    toDate = dates.end ? new Date(dates.end).toISOString() : null;

  try {
    const user = getState().authReducer.user;

    const indicators = await getTiresValues(user?.customerId, fromDate, toDate);

    const formattedIndicators = formatTireIndicators(indicators);

    return formattedIndicators;
  } catch (error) {
    Alert.alert("Ha ocurrido un error", "No se han podido obtener los indicadores de llantas. Por favor intenta más tarde o contácta a soporte.");
    throw error.message;
  }
});

export const getFuelIndicators = createAsyncThunk("@indicators/get_fuel_indicators", async (dates, { getState }) => {
  const fromDate = dates.start ? new Date(dates.start).toISOString() : null,
    toDate = dates.end ? new Date(dates.end).toISOString() : null;

  try {
    const user = getState().authReducer.user;

    const indicators = await getFuelValues(user?.customerId, fromDate, toDate);

    const formattedIndicators = formatFuelIndicators(indicators);

    return formattedIndicators;
  } catch (error) {
    Alert.alert("Ha ocurrido un error", "No se han podido obtener los indicadores de combustibles. Por favor intenta más tarde o contácta a soporte.");
    throw error.message;
  }
});

export const getMainteinanceIndicators = createAsyncThunk("@indicators/getMaintenanceIndicators", async (dates, { getState }) => {
  const fromDate = dates.start ? new Date(dates.start).toISOString() : null,
    toDate = dates.end ? new Date(dates.end).toISOString() : null;

  try {
    const user = getState().authReducer.user;

    const indicators = await getMainteinanceVuales(user?.customerId, fromDate, toDate);

    const formattedIndicators = formatMaintenanceIndicators(indicators);

    return formattedIndicators;
  } catch (error) {
    Alert.alert("Ha ocurrido un error", "No se han podido obtener los indicadores de combustibles. Por favor intenta más tarde o contácta a soporte.");
    throw error.message;
  }
});
