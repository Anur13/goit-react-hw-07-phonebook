import React, { useEffect } from 'react';
import Contacts from './Contacts';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems } from '../../Redux/phonebook/phonebook-operations';
import selectors from '../../Redux/phonebook/phonebook-selectors';

const ContactsList = ({ deleteID, getItems, visContacts }) => {
  useEffect(() => {
    getItems();
  }, []);

  console.log(visContacts);
  return (
    <ul className={styles.list}>
      {visContacts.map(item => {
        return <Contacts key={item.id} {...item} deleteID={deleteID} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  visContacts: selectors.getShownContacts(state),
});
const mapDispatchToProps = dispatchEvent => ({
  getItems: () => dispatchEvent(getItems()),
});

ContactsList.propTypes = {
  visContacts: PropTypes.array.isRequired,
  deleteID: PropTypes.number,
  getItems: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
