import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import filter from '../../Redux/filter/filter-actions';

const Filter = ({ handleFilterInput }) => {
  return (
    <>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          onChange={handleFilterInput}
          type="text"
        />
      </label>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  handleFilterInput: event => dispatch(filter(event.currentTarget.value)),
});
Filter.propTypes = {
  handleFilterInput: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Filter);
