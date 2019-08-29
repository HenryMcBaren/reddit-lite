import React from 'react';
import PropTypes from 'prop-types';

import PostList from '../PostList';

function PostsPage(props) {
  const { toNextPage, toPreviousPage } = props;
  return (
    <PostList toNextPage={toNextPage} toPreviousPage={toPreviousPage} />
  );
}
PostsPage.propTypes = {
  toNextPage: PropTypes.func.isRequired,
  toPreviousPage: PropTypes.func.isRequired,
};

export default PostsPage;
