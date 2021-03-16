import React from 'react';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../Redux/phonebook/phonebook-operations';

const Contacts = ({ name, number, handleDelete }) => {
  return (
    <>
      <li>
        <span className={styles.name}>
          {name}: {number}
        </span>

        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

const mapDispatchToProps = (dispatchEvent, ownProps) => ({
  handleDelete: event => dispatchEvent(deleteContact(ownProps.id)),
});

Contacts.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Contacts);
