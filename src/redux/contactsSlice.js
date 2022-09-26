import { fetchContacts, addNewContact, removeContact } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const contactsInitState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addNewContact.pending]: handlePending,
    [addNewContact.rejected]: handleRejected,
    [removeContact.pending]: handlePending,
    [removeContact.rejected]: handleRejected,

    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addNewContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [removeContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(c => c.id !== action.payload.id);
    },
  },
});

export const { setFilter } = contactsSlice.actions;

export const contactsReduser = contactsSlice.reducer;
