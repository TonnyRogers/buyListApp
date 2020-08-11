import {all, takeLatest, call, put, delay} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import {createListSuccess, createListFailure} from './actions';

export function* createList({payload}) {
  try {
    const {name} = payload;

    const lists = yield call([AsyncStorage, 'getItem'], '@buyingList:lists');

    const newList = {
      id: 1,
      name,
      total: 0.0,
    };

    let listArray = [];
    console.tron.log(lists);
    if (lists) {
      listArray = JSON.parse(lists);

      newList.id = listArray.length + 2;

      listArray.push(newList);
    }
    console.tron.log(newList);
    yield call(
      [AsyncStorage, 'setItem'],
      '@buyingList:lists',
      JSON.stringify(listArray),
    );

    yield put(createListSuccess(newList));
  } catch (error) {
    console.tron.log(error);
    yield put(createListFailure());
  }
}

export default all([takeLatest('@list/CREATE_LIST_REQUEST', createList)]);
