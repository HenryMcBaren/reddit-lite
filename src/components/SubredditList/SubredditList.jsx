import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { dataRequest } from '../../actions';
import MixedBoundary from '../MixedBoundary';
import Subreddit from '../Subreddit';

import './SubredditList.css';

function SubredditList(props) {
  const {
    data, dataRequested, toNextPage, toPreviousPage, location: { pathname, search },
  } = props;
  const url = `${pathname}.json${search}`;
  useEffect(() => {
    dataRequested(url);
  }, [dataRequested, url]);

  function renderRow(sub) {
    return <Subreddit key={sub.data.id} subreddit={sub.data} />;
  }
  return (
    <MixedBoundary>
      <div className="subreddit-list">
        <div className="subreddit-list__header">Choose any subreddit</div>
        {data.map(renderRow)}
        <div className="subreddit-list__buttons-container">
          <button type="button" className="btn btn-info" onClick={() => toPreviousPage(data, pathname, search)}>previous</button>
          <button type="button" className="btn btn-info" onClick={() => toNextPage(data, pathname, search)}>next</button>
        </div>
      </div>
    </MixedBoundary>
  );
}

SubredditList.propTypes = {
  dataRequested: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  toNextPage: PropTypes.func.isRequired,
  toPreviousPage: PropTypes.func.isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function mapStateToProps(state) {
  const { data } = state;
  return { data };
}

const mapDispatchToProps = {
  dataRequested: dataRequest,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(SubredditList);
