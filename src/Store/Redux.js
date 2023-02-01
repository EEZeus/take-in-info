import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {data:[]}

const fetchSlice = createSlice({
    name: 'Fetch',
    initialState,
    reducers: {
        fetchState(state, action) {
            state.data = action.payload.data
        }
    }
})

const store = configureStore({
    reducer: {
      Fetch: fetchSlice.reducer,
    },
  });
export const fetchAction = fetchSlice.actions.fetchState;
export default store;