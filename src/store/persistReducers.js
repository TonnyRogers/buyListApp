import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'buyinlistapp2020',
      storage: AsyncStorage,
      whitelist: ['list', 'product'],
    },
    reducers,
  );
  return persistedReducer;
};
