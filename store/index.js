import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../services/auth/slice";
import equipmentsReducer from "../services/equipments/slice";
import indicatorsReducer from "../services/indicators/slice";

export const store = configureStore({
  reducer: {
    authReducer,
    equipmentsReducer,
    indicators: indicatorsReducer,
  },
});
