import { configureStore,combineReducers } from "@reduxjs/toolkit";
export const rootReducer = combineReducers({
  
});
export const store = configureStore({
    reducer:{}
})

export type Store = typeof store;
export type Reducer = typeof rootReducer; 
export type State = ReturnType<Reducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;