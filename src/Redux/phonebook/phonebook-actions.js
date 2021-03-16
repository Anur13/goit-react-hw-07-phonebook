import { createAction } from '@reduxjs/toolkit';

const deleteItem = createAction('phonebook/delete');
const submit = createAction('phonebook/add');
const getContacts = createAction('phonebook/getItems');

const submitContactRequest = createAction('phonebook/submitContactRequest');
const submitContactSuccess = createAction('phonebook/submitContactSuccess');
const submitContactError = createAction('phonebook/submitContactError');

const submitdDeleteItemRequest = createAction('phonebook/DeleteItemRequest');
const submitDeleteItemSuccess = createAction('phonebook/DeleteItemSuccess');
const submitDeleteItemError = createAction('phonebook/DeleteItemError');

const submitGetItemsRequest = createAction('phonebook/GetItemsRequest');
const submitGetItemsSuccess = createAction('phonebook/GetItemsSuccess');
const submitGetItemsError = createAction('phonebook/GetItemsError');

export {
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
};
