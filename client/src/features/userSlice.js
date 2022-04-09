import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../common/api/shopApi.js";

export const register = createAsyncThunk("user/register", async(user, {rejectWithValue}) => {

  try {
    const {data} = await publicRequest.post("/users/register", user);    
    return (data);
  }catch (err) {
    let errorMessage = "Internal Server Error";
    if (err.response) {
      errorMessage = err.response.data.message;
    }
    return rejectWithValue(errorMessage); 
  }

});

export const login = createAsyncThunk("user/login", async(user, {rejectWithValue}) => {  
  try {
    const {data} = await publicRequest.post("/users/login", user);  
    return data;
  } catch (err) {
    let errorMessage = "Internal Server Error";
    if (err.response) {
      errorMessage = err.response.data.message;
    }
    return rejectWithValue(errorMessage); 
  }

});

const initialState = { currentUser: null, status: "", error: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutStart: (state)  => {
      return{...state, currentUser :null, status : "", }
    },
    removeStatus: (state) => {
     return {...state, status : "", error : ""} 
    }
}, extraReducers: {
  [login.pending]: (state) => {
    return {...state, status: "pending"}
  }, 
  [login.fulfilled]: (state, {payload}) => {
    return {...state, currentUser: payload, status: "fulfilled", error: ""}
  }, 
  [login.rejected]: (state, {payload}) => {
    return {...state, error: payload, status: "rejected"}
  }, 
  [register.pending]: (state) => {
    return {...state, status: "pending"}
  }, 
  [register.fulfilled]: (state) => {
    return {...state, status: "fulfilled", error: ""}
  }, 
  [register.rejected]: (state, {payload}) => {
    return {...state, error: payload, status: "rejected"}
  }, 
}
});

export const { logoutStart, removeStatus } = userSlice.actions;
export default userSlice.reducer;
