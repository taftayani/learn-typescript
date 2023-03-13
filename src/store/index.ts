import { configureStore,combineReducers} from "@reduxjs/toolkit";
import { counterSlice } from "./counter/counterSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
    storage,
    key:'root',
    whiteList: ['counter']
}
export const rootReducer = combineReducers({
  counter:counterSlice.reducer
});

export const persisReducer =persistReducer(persistConfig,rootReducer)
export const store = configureStore({
    reducer: persisReducer,
})

export const persistor =persistStore(store)
export type Store = typeof store;
export type Reducer = typeof rootReducer; 
export type State = ReturnType<Reducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;