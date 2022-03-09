import { createSlice } from "@reduxjs/toolkit";

export const navToggleSlice = createSlice({
    name : 'navToggler',
    initialState : {
        toggle : false
    },
    reducers : {
        toggleNavOn : (state) => {
            const upToggle = {
                ...state,
                toggle : true
            }
            return upToggle;
            // state.toggle = true;
        },
        toggleNavOff : (state) => {
            const upToggle = {
                ...state,
                toggle : false
            }
            return upToggle;
            // state.toggle = false;
        },
    }
});

export const { toggleNavOn, toggleNavOff } = navToggleSlice.actions;
export default navToggleSlice.reducer;