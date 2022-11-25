import { createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { getAllEquipments, getEquipmentByCode, getTireByCode } from "../../api/equipment";

export const getEquipments = createAsyncThunk("@equipments/get_equipments", async (_, { getState }) => {
  try {
    const user = getState().authReducer.user;

    const equipments = await getAllEquipments(user?.customerId);

    return equipments;
  } catch (error) {
    Alert.alert("Error con equipos", "Ha ocurrido un error intentando obtener la lista de equipos. Por favor intneta más tarde.");
    throw error;
  }
});

export const getEquipment = createAsyncThunk("@equipment/get_equipment", async (code, { getState }) => {
  try {
    const user = getState().authReducer.user;

    const equipment = await getEquipmentByCode(code, user?.customerId);

    return equipment;
  } catch (error) {
    Alert.alert("Ha ocurrido un error", "No se ha podido obtener el equipo seleccionado. Por favor intente más tarde.");
    throw error;
  }
});

export const getTire = createAsyncThunk("@equipment/get_tire", async ({ code, setModal }, { getState }) => {
  try {
    const user = getState().authReducer.user;

    const tire = await getTireByCode(code, user.customerId);
    setModal(true);

    return tire;
  } catch (error) {
    Alert.alert("Ha ocurrido un error", "No se ha podido obtener la llanta seleccionada. Por favor intente más tarde.");
    throw error;
  }
});
