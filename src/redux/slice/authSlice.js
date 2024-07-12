// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     loggedInUsers: localStorage.getItem("loggedInUsers") || "",
// };

// const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         setUser: (state, action) => {
//             localStorage.setItem("loggedInUsers", action.payload)
//             state.loggedInUsers = action.payload;
//         },
//         clearUser: (state) => {
//             state.loggedInUsers = [];
//         },
//     },
// });

// export const { setUser, clearUser } = userSlice.actions;

// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const getUserFromStorage = () => {
    if (typeof window !== "undefined") {
        const user = window.localStorage.getItem("loggedInUser");
        return user ? JSON.parse(user) : "";
    }
    return "";
};

const initialState = {
    loggedInUser: getUserFromStorage(),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (typeof window !== "undefined") {
                localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
            }
            state.loggedInUser = action.payload;
        },
        clearUser: (state) => {
            if (typeof window !== "undefined") {
                localStorage.removeItem("loggedInUser");
            }
            state.loggedInUser = "";
        },
    },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;

