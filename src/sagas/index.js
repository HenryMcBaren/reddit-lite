import { call, put, takeEvery } from 'redux-saga/effects';

import RedditService from '../services';
import { dataSuccess, dataFail } from '../actions';
import { FETCH_DATA_REQUEST } from '../constants';

const redditService = new RedditService();
const { getData } = redditService;


function* fetchData({ payload: { url } }) {
  try {
    const posts = yield call(() => getData(url));
    yield put(dataSuccess(posts));
  } catch (err) {
    yield put(dataFail(err));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchData);
}

export default rootSaga;
