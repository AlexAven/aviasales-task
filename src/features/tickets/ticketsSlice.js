import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const server = [
  {
    price: 12458,
    segments: [
      {
        origin: 'MOW',
        destination: 'HKG',
        date: '11:40',
        stops: ['PUA', 'DOV'],
        duration: 78,
      },
      {
        origin: 'HKG',
        destination: 'MOW',
        date: '00:30',
        stops: ['PUA'],
        duration: 94,
      },
    ],
  },
  {
    price: 65500,
    segments: [
      {
        origin: 'REW',
        destination: 'GIA',
        date: '11:40',
        stops: ['RTV', 'PUT'],
        duration: 96,
      },
      {
        origin: 'GIA',
        destination: 'REW',
        date: '00:30',
        stops: ['NOA'],
        duration: 123,
      },
    ],
  },
  {
    price: 28542,
    segments: [
      {
        origin: 'TYP',
        destination: 'HKG',
        date: '06:15',
        stops: ['YQP'],
        duration: 119,
      },
      {
        origin: 'HKG',
        destination: 'TYP',
        date: '14:31',
        stops: ['YQP'],
        duration: 150,
      },
    ],
  },
  {
    price: 28542,
    segments: [
      {
        origin: 'TYP',
        destination: 'HKG',
        date: '06:15',
        stops: ['YQP', 'YQP', 'YQP'],
        duration: 119,
      },
      {
        origin: 'HKG',
        destination: 'TYP',
        date: '14:31',
        stops: ['YQP'],
        duration: 150,
      },
    ],
  },
  {
    price: 28542,
    segments: [
      {
        origin: 'TYP',
        destination: 'HKG',
        date: '06:15',
        stops: ['YQP'],
        duration: 119,
      },
      {
        origin: 'HKG',
        destination: 'TYP',
        date: '14:31',
        stops: ['YQP'],
        duration: 150,
      },
    ],
  },
  {
    price: 28542,
    segments: [
      {
        origin: 'TYP',
        destination: 'HKG',
        date: '06:15',
        stops: [],
        duration: 119,
      },
      {
        origin: 'HKG',
        destination: 'TYP',
        date: '14:31',
        stops: [],
        duration: 150,
      },
    ],
  },
  {
    price: 28542,
    segments: [
      {
        origin: 'TYP',
        destination: 'HKG',
        date: '06:15',
        stops: ['HKG'],
        duration: 119,
      },
      {
        origin: 'HKG',
        destination: 'TYP',
        date: '14:31',
        stops: ['HKG', 'HKG', 'HKG'],
        duration: 150,
      },
    ],
  },
];

export const getSearchId = createAsyncThunk(
  '@@tickets/get-key',
  (_, { extra: { client, api } }) => {
    return client.get(api.GET_ID);
  },
);

export const loadTickets = createAsyncThunk(
  '@@tickets/load-tickets',
  (searchId, { extra: { client, api } }) => {
    return client.get(api.searchTicketsPack(searchId));
  },
);

const initialState = {
  entities: server,
  filteredTickets: server,
  searchId: null,
  status: 'idle',
  error: null,
};

// Хелпер для определения максимального количества пересадок
const getMaxStops = (segments) => {
  return Math.max(...segments.map((segment) => segment.stops.length));
};

// Добавляем обновлённую логику фильтрации
const filterTicketsByStops = (tickets, filters) => {
  // Если фильтр "все" включён, показываем все билеты
  if (filters.all) {
    return tickets;
  }

  // Проверка: если ни один из фильтров не включён, показываем все билеты
  const isAnyFilterActive =
    filters.noTrasfers || filters.oneTransfer || filters.twoTransfers || filters.threeTransfers;
  if (!isAnyFilterActive) {
    return tickets;
  }

  // Фильтруем билеты по количеству пересадок
  return tickets.filter((ticket) => {
    const maxStops = getMaxStops(ticket.segments);

    // Сопоставляем количество пересадок с включёнными фильтрами
    if (maxStops === 0 && filters.noTrasfers) return true;
    if (maxStops === 1 && filters.oneTransfer) return true;
    if (maxStops === 2 && filters.twoTransfers) return true;
    if (maxStops === 3 && filters.threeTransfers) return true;

    return false;
  });
};

const ticketsSlice = createSlice({
  name: '@@tickets',
  initialState,
  reducers: {
    applyFilters: (state, { payload }) => {
      const { filters } = payload;
      state.filteredTickets = filterTicketsByStops(state.entities, filters);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchId.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.error.message;
      })
      .addCase(getSearchId.fulfilled, (state, { payload }) => {
        state.searchId = payload.data;
      })
      .addCase(loadTickets.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadTickets.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.error.message;
        console.log(state.error);
      })
      .addCase(loadTickets.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.entities = payload || payload.data;
        state.filteredTickets = payload || payload.data;
      });
  },
});

export const { applyFilters } = ticketsSlice.actions;
export const ticketsReducer = ticketsSlice.reducer;

// selectors
export const searchId = (state) => state.tickets.searchId;
