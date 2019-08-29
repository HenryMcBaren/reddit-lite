import React from 'react';
import { connect } from 'react-redux';
import LoadingIndicator from '../LoadingIndicator';
import ErrorIndicator from '../ErrorIndicator';

function MixedBoundary({ loading, error, children }) {
  const isError = error && <ErrorIndicator err={error} />;
  const isLoading = loading && <LoadingIndicator />;
  const view = isError || isLoading || children;
  return view;
}

function mapStateToProps(state) {
  const { loading, error } = state;
  return { loading, error };
}

export default connect(mapStateToProps)(MixedBoundary);
