import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePoketmonById } from "./thunk";

export const poketmonSlice = createSlice({
  name: "poketmon",
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {}, // 동기적 상태 변경
  extraReducers: (builder) => {
    //비동기적 상태 변경
    builder
      .addCase(fetchMultiplePoketmonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMultiplePoketmonById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchMultiplePoketmonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
}); // =>action, reducer만들어짐 reducer가 만들어졌다는 건 store를 만들 수 있다는 것
