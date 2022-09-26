import { fetchContacts, addNewContact, removeContact } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const contactsInitState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
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
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addNewContact.pending]: state => {
      state.isLoading = true;
    },
    [addNewContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addNewContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [removeContact.pending]: state => {
      state.isLoading = true;
    },
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(c => c.id !== action.payload.id);
    },
    [removeContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setFilter } = contactsSlice.actions;

export const contactsReduser = contactsSlice.reducer;
