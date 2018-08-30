import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

var mapStateToProps = (state) => ({
  query: state.query,
});

var mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (query) => {
    dispatch(handleSearchChange(query));
  }
});

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
