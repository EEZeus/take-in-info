import { configureStore, createSlice } from '@reduxjs/toolkit'

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

const store = configureStore({
    reducer: {
        Fetch: fetchSlice.reducer,
    },
});
export const Actions = fetchSlice.actions;
export default store;