import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

function Post(props) {
  const {
    post,
    parseDate,
    parseNumComments,
    isImgValid,
    redirectToPost,
  } = props;
  const {
    title,
    author,
    created_utc: postedDate,
    num_comments: numComments,
    permalink,
    thumbnail,
  } = post;

  return (
    <div className="post" onClick={() => redirectToPost(permalink)}>
      <div className="post__item content">
        <div className="content__head">
          <span>{`Posted by u/${author} `}</span>
          <span>{parseDate(postedDate)}</span>
        </div>
        <span className="content__title">{title}</span>
        <span className="content__comment">{parseNumComments(numComments)}</span>
      </div>
      {isImgValid(thumbnail)}
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  parseDate: PropTypes.func.isRequired,
  parseNumComments: PropTypes.func.isRequired,
  isImgValid: PropTypes.func.isRequired,
  redirectToPost: PropTypes.func.isRequired,
};

export default Post;
