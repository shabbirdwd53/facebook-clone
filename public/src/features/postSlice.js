import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    value: [],
  },
  reducers: {
    addPost: (state, action) => {
      console.log("AddPost Action");
      state.value.unshift(action.payload);
    },
    addAllPost: (state, action) => {
      console.log("AddPost Action");
      state.value.push(...action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, addAllPost } = postSlice.actions;
export const selectPost = (state) => state.post.value;
export default postSlice.reducer;
