import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.items.unshift(action.payload);
    },
    deleteContact: (state, action) => {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { setFilter, addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export default contactsSlice.reducer;
