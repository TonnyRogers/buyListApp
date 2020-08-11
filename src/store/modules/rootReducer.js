import {combineReducers} from 'redux';

import list from './list/reducer';
import products from './products/reducer';

export default combineReducers({
  list,
  products,
});
