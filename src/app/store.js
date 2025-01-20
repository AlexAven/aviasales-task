import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import * as api from '../config';
import { filtersReducer } from '../features/filters/filtersSlice';
import { ticketsReducer } from '../features/tickets/ticketsSlice';

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    filters: filtersReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export default store;
