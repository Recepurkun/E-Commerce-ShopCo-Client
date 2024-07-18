// import { createSlice } from "@reduxjs/toolkit";

// const loadUsersFromLocalStorage = () => {
//     const savedUsers = localStorage.getItem("users");
//     return savedUsers ? JSON.parse(savedUsers) : [];
// };

// const saveUsersToLocalStorage = (user) => {
//     localStorage.setItem("users", JSON.stringify(user));
// };

// const loadCurrentUserMail = () => {
//     const currentEmail = localStorage.getItem("currentUserEmail");
//     return currentEmail ? JSON.parse(currentEmail) : ""
// }

// const saveUserEmailToLocalStorage = (email) => {
//     localStorage.setItem("currentUserEmail", JSON.stringify(email))
// }

// const initialState = {
//     isActiveUser: false,
//     currentUserEmail: loadCurrentUserMail(),
//     users: loadUsersFromLocalStorage(),
// };


// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         addToUser: (state, action) => {
//             state.isActiveUser = true;
//             state.users.push(action.payload);
//             saveUsersToLocalStorage(state.users);
//         },
//         setUser: (state, action) => {
//             state.currentUserEmail = action.payload;
//             saveUserEmailToLocalStorage(state.currentUserEmail)
//         },
//         logout: (state) => {
//             state.isActiveUser = false;
//             state.currentUserEmail = "";
//         }
//     },
// });

// export const { addToUser, setUser, logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";

const loadUsersFromLocalStorage = () => {
    if (!isBrowser) return [];
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
};

const saveUsersToLocalStorage = (users) => {
    if (!isBrowser) return;
    localStorage.setItem("users", JSON.stringify(users));
};

const loadCurrentUserMail = () => {
    if (!isBrowser) return "";
    const currentEmail = localStorage.getItem("currentUserEmail");
    return currentEmail ? JSON.parse(currentEmail) : "";
}

const saveUserEmailToLocalStorage = (email) => {
    if (!isBrowser) return;
    localStorage.setItem("currentUserEmail", JSON.stringify(email));
}

const initialState = {
    isActiveUser: false,
    currentUserEmail: loadCurrentUserMail(),
    users: loadUsersFromLocalStorage(),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addToUser: (state, action) => {
            state.isActiveUser = true;
            state.users.push(action.payload);
            saveUsersToLocalStorage(state.users);
        },
        setUser: (state, action) => {
            state.currentUserEmail = action.payload;
            saveUserEmailToLocalStorage(state.currentUserEmail);
        },
        logout: (state) => {
            state.isActiveUser = false;
            state.currentUserEmail = "";
        }
    },
});

export const { addToUser, setUser, logout } = authSlice.actions;
export default authSlice.reducer;

