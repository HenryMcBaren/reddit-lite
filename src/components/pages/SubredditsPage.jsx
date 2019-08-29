import React from 'react';
import PropTypes from 'prop-types';
import SubredditList from '../SubredditList';

function SubredditsPage({ toNextPage, toPreviousPage }) {
  return (
    <SubredditList toNextPage={toNextPage} toPreviousPage={toPreviousPage} />
  );
}
SubredditsPage.propTypes = {
  toNextPage: PropTypes.func.isRequired,
  toPreviousPage: PropTypes.func.isRequired,
};

export default SubredditsPage;
