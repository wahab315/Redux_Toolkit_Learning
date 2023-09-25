import { createSlice } from "@reduxjs/toolkit";

import { useSelector } from "react-redux";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      const id = state.filter((item) => item.id === action.payload);
      state.splice(action.payload, id);
    },
    deleteUsers(state, action) {},
  },
});

export default userSlice;

export const { addUser, removeUser } = userSlice.actions;
