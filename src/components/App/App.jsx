import React from 'react';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Header from '../Header';
import { PostsPage, PageError404, SubredditsPage } from '../pages';
import { dataRequest } from '../../actions';

import './App.css';

function App({ history, dataRequested }) {
  function toNextPage(arrData, path) {
    window.scrollTo(0, 0);
    const lastElement = arrData.slice(-1)[0];
    const elementType = lastElement.kind;
    const elementId = lastElement.data.id;
    const query = `?after=${elementType}_${elementId}`;
    const res = `${path}.json${query}`;
    dataRequested(res);
    history.push(path + query);
  }
  function toPreviousPage(arrData, path) {
    window.scrollTo(0, 0);
    const firstElement = arrData.slice(0)[0];
    const elementType = firstElement.kind;
    const elementId = firstElement.data.id;
    const query = `?before=${elementType}_${elementId}`;
    const res = `${path}.json${query}`;
    dataRequested(res);
    history.push(path + query);
  }
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/r/popular" />} />
        <Route exact path="/r/:subreddit" render={() => <PostsPage toPreviousPage={toPreviousPage} toNextPage={toNextPage} />} />
        <Route exact path="/subreddits" render={() => <SubredditsPage toPreviousPage={toPreviousPage} toNextPage={toNextPage} />} />
        <Route path="/404" component={PageError404} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  dataRequested: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = {
  dataRequested: dataRequest,
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
)(App);
