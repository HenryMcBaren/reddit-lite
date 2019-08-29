import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import redditLogo from '../../img/reddit-logo.png';
import './Subreddit.css';

function Subreddit({ subreddit, history }) {
  const { title, icon_img: image, display_name_prefixed: name } = subreddit;
  const isImg = image || redditLogo;
  return (
    <div className="subreddit-container" onClick={() => history.push(name)}>
      <div className="subreddit">
        <img src={isImg} alt="subreddit" className="subreddit__item" />
        <span className="subreddit__item subreddit__header">{name}</span>
      </div>
      <div className="subreddit__title">{title}</div>
    </div>
  );
}

Subreddit.propTypes = {
  subreddit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Subreddit);
