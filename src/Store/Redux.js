import { configureStore, createSlice } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const initialState = { data: [],currentId:null }

const fetchSlice = createSlice({
    name: 'Fetch',
    initialState,
    reducers: {
        fetchState(state, action) {
            state.data = action.payload.data
        },
        pickId(state,action){
            state.currentId = action.payload.currentId
        }
    }
})

const persistConfig = {
    key: 'Fetch',
    storage,
};

const reducers = combineReducers({ Fetch: fetchSlice.reducer });
const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const Actions = fetchSlice.actions;
export default store;