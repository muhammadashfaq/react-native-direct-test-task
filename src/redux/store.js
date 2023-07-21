import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './items/itemsSlice';
import { fetchItemsMiddleware } from './items/itemsMiddleware';
import { moviesApi } from '../api/moviesApi';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware, fetchItemsMiddleware),
});

export default store;
