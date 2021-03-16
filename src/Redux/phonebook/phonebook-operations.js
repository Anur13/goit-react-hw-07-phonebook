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
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

const addContact = contact => async dispatch => {
  dispatch(submitContactRequest());
  try {
    const { data } = await axios.post('contacts', contact);
    dispatch(submitContactSuccess());
    dispatch(submit(data));
  } catch (error) {
    dispatch(submitContactError());
  }
};

const getItems = () => async dispatch => {
  dispatch(submitGetItemsRequest());

  try {
    const { data } = await axios.get('contacts');
    dispatch(submitGetItemsSuccess(data));
  } catch (error) {
    dispatch(submitGetItemsError());
  }
};

const deleteContact = id => async dispatch => {
  dispatch(submitdDeleteItemRequest());
  try {
    const { data } = await axios.delete(`contacts/${id}`);
    dispatch(submitDeleteItemSuccess());
    dispatch(deleteItem(id));
  } catch (error) {
    dispatch(submitDeleteItemError());
    console.log(error);
  }
};

export { addContact, deleteContact, getItems };
