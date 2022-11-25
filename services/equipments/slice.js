import { createSlice } from "@reduxjs/toolkit";
import { getEquipment, getEquipments, getTire } from "./actions";

const equipmentsSlice = createSlice({
  name: "equipments",
  initialState: {
    equipments: [],
    isLoading: false,
    equipment: null,
    tire: null,
  },
  extraReducers: {
    [getEquipments.pending]: (state) => {
      state.isLoading = true;
      state.equipment = null;
    },
    [getEquipments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.equipments = action.payload;
    },
    [getEquipments.rejected]: (state) => {
      state.isLoading = false;
    },
    [getEquipment.pending]: (state) => {
      state.isLoading = true;
    },
    [getEquipment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.equipment = action.payload;
    },
    [getEquipment.rejected]: (state) => {
      state.isLoading = false;
      state.equipment = null;
    },
    [getTire.pending]: (state) => {
      state.isLoading = true;
    },
    [getTire.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.tire = action.payload;
    },
    [getTire.rejected]: (state) => {
      state.isLoading = false;
      state.tire = null;
    },
  },
});

export default equipmentsSlice.reducer;
