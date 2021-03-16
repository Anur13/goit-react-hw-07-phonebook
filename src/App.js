import React, { Component, useEffect } from 'react';
import PhoneBook from './Components/PhoneBook/PhoneBook';
import ContactsList from './Components/Contacts/ContactsList';
import Filter from './Components/Filter/Filter';
import { connect } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const App = ({ loader }) => {
  return (
    <div className="container">
      <h1>PhoneBook</h1>
      <PhoneBook />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      {loader && (
        <Loader
          color="#00BFFF"
          height={150}
          width={150}
          type="TailSpin"
          // timeout={Infinity}
          style={{ textAlign: 'center' }}
        />
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  loader: state.contacts.loading,
});

export default connect(mapStateToProps)(App);
