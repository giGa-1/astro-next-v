
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    currentColor: '#000000',
}

export const currentColorReducer = createSlice({
    name: "Color State",
    initialState,
    reducers: {
  
     setCurrentColor(state,action) {
        return {...state, currentColor: action.payload}
     },
      // Special reducer for hydrating the state. Special case for next-redux-wrapper
      extraReducers: {
        [HYDRATE]: (state, action) => {
          return {
            ...state,
            ...action.payload,
          };
        },
      },
  
    },
  });


export const {setCurrentColor} = currentColorReducer.actions;
export const currentColorState = (state) => state.currentColorReducer;
export default currentColorReducer.reducer;