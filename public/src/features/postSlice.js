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
//       state.value.push(...action.payload);
//       pervious line is not working because when we adding post the same post is coming 2 times. I fixed the issue.
      state.value = (action.payload);
      
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, addAllPost } = postSlice.actions;
export const selectPost = (state) => state.post.value;
export default postSlice.reducer;
