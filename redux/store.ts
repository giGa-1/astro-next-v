import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper";
import { currentColorReducer } from "./color-reducer";


const makeStore = () => configureStore({
    reducer: {
        [currentColorReducer.name]:currentColorReducer.reducer,
    },
    devTools: true
})

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore['getState']>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType, 
    AppState,
    unknown,
    Action
>

export const wrapper = createWrapper<AppStore>(makeStore);