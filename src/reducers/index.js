import * as types from '../constants';

const initialState = {
  loading: false,
  error: '',
  data: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DATA_REQUEST:
      return {
        loading: true,
        error: '',
        data: [],
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        loading: false,
        error: '',
        data: action.payload,
      };
    case types.FETCH_DATA_FAILURE:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
}

export default reducer;
