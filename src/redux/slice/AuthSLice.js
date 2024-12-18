import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../services/ApiEndpoint";

export const updateUser = createAsyncThunk("updateuser", async () => {
  const request = await get("/auth/check-user");
  const response = request.data;
  return response;
});

const initialState = {
  loading: null,
  error: null,
  user: null,
};
const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload;
    },
    LogoutUser: (state) => {
      (state.user = null), (state.loading = null), (state.error = null);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      (state.loading = null), (state.user = action.payload);
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      (state.loading = null), (state.error = action.error.message), (state.user = null);
    });
  },
});

export const { SetUser, LogoutUser } = AuthSlice.actions;

export default AuthSlice.reducer;
