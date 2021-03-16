import { createSelector } from 'reselect';
const getContactItem = state => state.contacts.items;
const getContactsFilter = state => state.contacts.filter;

const getShownContacts = createSelector(
  [getContactItem, getContactsFilter],
  (contacts, filter) => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter) ? item : null,
    );
  },
);

export default { getContactItem, getContactsFilter, getShownContacts };
