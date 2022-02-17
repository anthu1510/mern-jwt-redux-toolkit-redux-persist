import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jsCookie from "js-cookie";
import { Axios } from "../../axios/Axios";

const initailState = {
    user: {},
    isLoggedIn: false,
    isPendding: false,
    isError: null
}

export const userLogin = createAsyncThunk('login', async (user) => {
    const result = await Axios.post('/auth/login', user);
    return result.data.data;
});

export const authSlice = createSlice({
    name: 'auth',
    initialState: initailState,
    reducers: {
        setLoggedIn: (state) => {
            state.isLoggedIn = true;
        },
        setLogOut: (state) => {
            jsCookie.remove("token");
            jsCookie.remove("refreshToken");
            state.isLoggedIn = false;
        }
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.isPendding = true;
        },
        [userLogin.rejected]: (state) => {
            state.isError = true;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.isPendding = false;
            jsCookie.set("token", action.payload.token);
            jsCookie.set("refreshToken", action.payload.token);
        },
    }
});

export const { setLoggedIn, setLogOut } = authSlice.actions;

export default authSlice.reducer;