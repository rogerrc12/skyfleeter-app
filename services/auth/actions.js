import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { login } from "../../api/auth";
import { decodeToken } from "../../helpers/functions";
import { getSecureItem, setSecureItem } from "../../helpers/secure-store";

// ACTIONS
export const loginUser = createAsyncThunk("@auth/login_user", async (values) => {
  try {
    const response = await login(values);
    await setSecureItem("authData", response);

    const decodedToken = decodeToken(response.token);

    return { customerId: +decodedToken.CustomerId, name: decodedToken.FullName, email: decodedToken.Email };
  } catch (error) {
    Alert.alert("No se pudo iniciar sesión", "Usuario y/o contraseña incorrectos. Por favor verifica los datos e intenta de nuevo.");
    throw error;
  }
});

export const validateSession = createAsyncThunk("@auth/validate_session", async (_, { rejectWithValue }) => {
  try {
    const authData = await getSecureItem("authData");

    if (!authData) return rejectWithValue("no session");

    if (new Date(authData.expiration) <= new Date()) return rejectWithValue("session expired");

    const decodedToken = decodeToken(authData.token);

    return { customerId: +decodedToken.CustomerId, name: decodedToken.FullName, email: decodedToken.Email };
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const logoutUser = createAction("@auth/logout");
