import {configureStore} from '@reduxjs/toolkit';
import exampleReducer from './slices/globalSlice.ts';
import authReducer from './slices/authSlice.ts';

const store = configureStore({
    reducer: {
        example: exampleReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
