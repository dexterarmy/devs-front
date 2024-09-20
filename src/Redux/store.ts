// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './reducer'; // Import the API slice

export const store = configureStore({
  reducer: {
    // Add the API reducer
    [userApi.reducerPath]: userApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, and polling
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

// Set up types for the store's state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;