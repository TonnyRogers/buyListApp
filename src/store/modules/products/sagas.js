import {all, takeLatest, call, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import {createProductSuccess, createProductFailure} from './actions';

export function* createProduct({payload}) {
  try {
    const {name, unitPrice, quantity} = payload.data;

    const products = yield call(
      [AsyncStorage, 'getItem'],
      '@buyingList:products',
    );

    const newProduct = {
      id: 1,
      name,
      price: unitPrice,
      quantity,
      amount: quantity * unitPrice,
    };

    let productArray = [];

    if (products) {
      productArray = JSON.parse(products);
      newProduct.id = productArray.length + 2;
      productArray.push(newProduct);
    }

    yield call(
      [AsyncStorage, 'setItem'],
      '@buyingList:products',
      JSON.stringify(productArray),
    );

    yield put(createProductSuccess(newProduct));
  } catch (error) {
    yield put(createProductFailure());
  }
}

export default all([
  takeLatest('@products/CREATE_PRODUCT_REQUEST', createProduct),
]);
