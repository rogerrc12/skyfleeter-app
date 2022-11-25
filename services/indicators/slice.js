import { createSlice } from "@reduxjs/toolkit";
import { getFuelIndicators, getMainteinanceIndicators, getTireIndicators } from "./actions";

const initialState = {
  isLoading: false,
  tireIndicators: {},
  fuelIndicators: {},
  maintenanceIndicators: {},
};

const indicatorsSlice = createSlice({
  name: "indicatorsSlice",
  initialState,
  reducers: {
    cleanIndicators: (state) => {
      state.tireIndicators = {};
      state.fuelIndicators = {};
      state.maintenanceIndicators = {};
    },
  },
  extraReducers: {
    // TIRE INDICATORS
    [getTireIndicators.pending]: (state) => ({ ...state, isLoading: true }),
    [getTireIndicators.fulfilled]: (state, action) => ({ ...state, isLoading: false, tireIndicators: action.payload }),
    [getTireIndicators.rejected]: (state) => ({ ...state, isLoading: false, tireIndicators: {} }),
    // FUEL INDICATORS
    [getFuelIndicators.pending]: (state) => ({ ...state, isLoading: true }),
    [getFuelIndicators.fulfilled]: (state, action) => ({ ...state, isLoading: false, fuelIndicators: action.payload }),
    [getFuelIndicators.rejected]: (state) => ({ ...state, isLoading: false, fuelIndicators: {} }),
    // MAINTENANCE INDICATORS
    [getMainteinanceIndicators.pending]: (state) => ({ ...state, isLoading: true }),
    [getMainteinanceIndicators.fulfilled]: (state, action) => ({ ...state, isLoading: false, maintenanceIndicators: action.payload }),
    [getMainteinanceIndicators.rejected]: (state) => ({ ...state, isLoading: false, maintenanceIndicators: {} }),
  },
});

// REDUCERS
export const { cleanIndicators } = indicatorsSlice.actions;

// SELECTORS
export const selectTireIndicators = (state) => state.indicators.tireIndicators;
export const selectFuelIndicators = (state) => state.indicators.fuelIndicators;
export const selectMaintenanceIndicators = (state) => state.indicators.maintenanceIndicators;
export const selectLoadingIndicators = (state) => state.indicators.isLoading;

export default indicatorsSlice.reducer;
