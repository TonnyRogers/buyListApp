import {all} from 'redux-saga/effects';

import list from './list/sagas';

export default function* rootSaga() {
  return yield all([list]);
}
