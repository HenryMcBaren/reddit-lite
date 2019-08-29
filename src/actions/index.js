import * as types from '../constants';

function dataRequest(url) {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload: { url },
  };
}

function dataSuccess(data) {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload: data,
  };
}

function dataFail(err) {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload: err.toString(),
  };
}


export {
  dataRequest,
  dataSuccess,
  dataFail,
};
