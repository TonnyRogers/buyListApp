import {all, takeLatest, call, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

import {
  createProductSuccess,
  createProductFailure,
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  updateProductFailure,
  updateProductSuccess,
  deleteProductSuccess,
  deleteProductFailure,
} from './actions';

export function* createProduct({payload}) {
  try {
    const {name, unitPrice, quantity, listId} = payload.data;

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
      listId,
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
    Alert.alert('Erro ao criar produto.');
    yield put(createProductFailure());
  }
}

export function* getProducts({payload}) {
  const {listId} = payload;

  try {
    const products = yield call(
      [AsyncStorage, 'getItem'],
      '@buyingList:products',
    );

    if (products) {
      const productArray = JSON.parse(products);
      const filtered = productArray.filter(
        (product) => product.listId === listId,
      );

      yield put(getProductsSuccess(filtered));
    }

    return;
  } catch (error) {
    Alert.alert('Erro ao carregar produtos.');
    yield put(getProductsFailure());
  }
}

export function* updateProduct({payload}) {
  try {
    const {name, unitPrice, quantity, productId} = payload.data;

    const products = yield call(
      [AsyncStorage, 'getItem'],
      '@buyingList:products',
    );

    let productArray = [];

    if (products) {
      productArray = JSON.parse(products);

      let filteredProduct = productArray.filter(
        (product) => product.id === productId,
      );

      filteredProduct = {
        ...filteredProduct[0],
        name,
        unitPrice,
        quantity,
        amount: quantity * unitPrice,
      };

      const updatedArray = productArray.map((product) =>
        product.id === productId
          ? {
              ...filteredProduct,
            }
          : product,
      );

      yield call(
        [AsyncStorage, 'setItem'],
        '@buyingList:products',
        JSON.stringify(updatedArray),
      );

      yield put(updateProductSuccess(filteredProduct));
      yield put(getProductsRequest(filteredProduct.listId));
    }

    return;
  } catch (error) {
    Alert.alert('Erro ao atualizar produto.');
    yield put(updateProductFailure());
  }
}

export function* deleteProduct({payload}) {
  try {
    const {productId} = payload;

    const products = yield call(
      [AsyncStorage, 'getItem'],
      '@buyingList:products',
    );

    let productArray = [];

    if (products) {
      productArray = JSON.parse(products);
      const productIndex = productArray.findIndex(
        (product) => product.id === productId,
      );

      const {listId} = productArray[productIndex];

      productArray.splice(productIndex, 1);

      yield call(
        [AsyncStorage, 'setItem'],
        '@buyingList:products',
        JSON.stringify(productArray),
      );

      yield put(deleteProductSuccess());
      yield put(getProductsRequest(listId));
    }

    return;
  } catch (error) {
    Alert.alert('Erro ao remover produto.');
    yield put(deleteProductFailure());
  }
}

export default all([
  takeLatest('@products/CREATE_PRODUCT_REQUEST', createProduct),
  takeLatest('@products/GET_PRODUCTS_REQUEST', getProducts),
  takeLatest('@products/UPDATE_PRODUCT_REQUEST', updateProduct),
  takeLatest('@products/DELETE_PRODUCT_REQUEST', deleteProduct),
]);
