import {createSlice} from "@reduxjs/toolkit";

const initState = {
  patient: null,
  token: null,
  logs: [],
};

export const authSlice = createSlice({
  name: "auth",
  initState,
  reducers: {
    setLogin: (state, action) => {
      state.patient = action.payload.patient;
      state.token = action.payloadtoken;
    },
    setLogout: (state) => {
      state.patient = null;
      state.token = null;
    },
    setLogs: (state, action) => {
      state.logs = action.payload.logs;
    },
  },
});

export const { setLogin, setLogout, setLogs } = authSlice.actions;
export default authSlice.reducer;
