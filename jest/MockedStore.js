/* eslint-disable import/no-extraneous-dependencies */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
export const makeMockStore = (state = {}) => {
  return mockStore({
    ...state,
  });
};
