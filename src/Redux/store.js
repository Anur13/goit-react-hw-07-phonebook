import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';
import filterReducer from '../Redux/filter/filter-reducer';
import {
  phonebookReducer,
  loaderReducer,
} from '../Redux/phonebook/phonebook-reducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const contactsReducer = combineReducers({
  items: phonebookReducer,
  filter: filterReducer,
  loading: loaderReducer,
});
const rootReducer = combineReducers({ contacts: contactsReducer });
let store = configureStore({ reducer: rootReducer });

export default store;
