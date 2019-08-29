import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { dataRequest } from '../../actions';
import MixedBoundary from '../MixedBoundary';
import { PostContainer } from '../../containers';

import './PostList.css';

function PostList(props) {
  const {
    dataRequested,
    data,
    toNextPage,
    location: { pathname, search },
    match: { params },
    toPreviousPage,
  } = props;

  const url = `${pathname}.json${search}`;

  useEffect(() => {
    dataRequested(url);
  }, [dataRequested, url]);
  function renderRow(post) {
    const { data: postData } = post;
    return <PostContainer key={postData.id} post={postData} />;
  }
  return (
    <MixedBoundary>
      <div className="post-list">
        <span className="post-list__label">{`r/${params.subreddit} posts`}</span>
        {data.map(renderRow)}
        <div className="post-list__buttons-container">
          <button type="button" className="btn btn-info" onClick={() => toPreviousPage(data, pathname)}>previous</button>
          <button type="button" className="btn btn-info" onClick={() => toNextPage(data, pathname)}>next</button>
        </div>
      </div>
    </MixedBoundary>
  );
}

PostList.propTypes = {
  dataRequested: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  toNextPage: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  toPreviousPage: PropTypes.func.isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function mapStateToProps(state) {
  const { selectedItem, data } = state;
  return { selectedItem, data };
}

const mapDispatchToProps = {
  dataRequested: dataRequest,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(PostList);
