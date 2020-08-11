import {all} from 'redux-saga/effects';

import list from './list/sagas';
import products from './products/sagas';

export default function* rootSaga() {
  return yield all([list, products]);
}
