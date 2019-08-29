import React from 'react';
import PropTypes from 'prop-types';
import Post from '../components/Post';

function PostContainer({ post }) {
  function parseDate(date) {
    const a = new Date(date * 1000);
    const b = new Date();
    const msAgo = (b.getTime() - a.getTime());
    const daysAgo = Math.floor(msAgo / 86400000);
    const hrsAgo = Math.floor((msAgo % 86400000) / 3600000);
    const minAgo = Math.round(((msAgo % 86400000) % 3600000) / 60000);
    if (hrsAgo === 0) {
      return `${minAgo} minutes ago`;
    }
    if (hrsAgo >= 24) {
      return `${daysAgo} days ago`;
    }
    return `${hrsAgo} hours ago`;
  }
  function parseNumComments(numComments) {
    if (numComments >= 1000) {
      return `${(numComments / 1000).toFixed(1)}k comments`;
    }
    return `${numComments} comments`;
  }
  function isImgValid(link) {
    const isValid = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&=]*)/.test(link);
    const res = isValid && <img src={link} className="post__item" alt="post" />;
    return res;
  }
  function redirectToPost(link) {
    const isRedirect = window.confirm('Перейти на полную версию?');
    if (isRedirect) window.location.href = `http://reddit.com${link}`;
  }
  return (
    <Post
      post={post}
      parseDate={parseDate}
      parseNumComments={parseNumComments}
      isImgValid={isImgValid}
      redirectToPost={redirectToPost}
    />
  );
}

PostContainer.propTypes = {
  post: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
};

export default PostContainer;
