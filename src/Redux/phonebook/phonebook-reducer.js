import { createReducer } from '@reduxjs/toolkit';
import {
  submit,
  deleteItem,
  submitContactRequest,
  submitContactSuccess,
  submitContactError,
  submitdDeleteItemRequest,
  submitDeleteItemSuccess,
  submitDeleteItemError,
  getContacts,
  submitGetItemsRequest,
  submitGetItemsSuccess,
  submitGetItemsError,
} from './phonebook-actions';

const phonebookReducer = createReducer([], {
  [submit]: (state, { payload }) => [...state, payload],
  [deleteItem]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
  [submitGetItemsSuccess]: (state, { payload }) => payload,
});

const loaderReducer = createReducer(false, {
  [submitContactRequest]: () => true,
  [submitContactSuccess]: () => false,
  [submitContactError]: () => false,
  [submitdDeleteItemRequest]: () => true,
  [submitDeleteItemSuccess]: () => false,
  [submitDeleteItemError]: () => false,
  [getContacts]: () => true,
  [submitGetItemsRequest]: () => true,
  [submitGetItemsSuccess]: () => false,
  [submitGetItemsError]: () => false,
});
export { phonebookReducer, loaderReducer };
