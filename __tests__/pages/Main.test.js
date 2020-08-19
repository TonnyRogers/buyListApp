/* eslint-disable no-undef */
/* eslint-disable global-require */
import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import Main from '../../src/pages/Main';
import MockedNavigator from '../../jest/MockedNavigator';

const {Provider} = redux;

jest.mock(
  './path/to/the/image.png',
  () =>
    '/node_modules/@react-navigation/stack/lib/commonjs/views/assets/back-icon.png',
);

const spyUseSelector = jest.spyOn(redux, 'useSelector');

spyUseSelector.mockReturnValue({
  list: {},
  products: {},
});

describe('Main page', () => {
  afterEach(cleanup);

  const mockStore = configureStore();
  let store;

  // it('render no list message', async () => {
  //   const INITIAL_STATE = {
  //     creatListModalOpen: false,
  //   };

  //   store = mockStore(INITIAL_STATE);

  //   const {findByText} = render(
  //     <Provider store={store}>
  //       <MockedNavigator component={Main} />
  //     </Provider>,
  //   );

  //   const emptyList = await findByText('Você não possui listas');

  //   expect(emptyList).toBeTruthy();
  // });

  // it('do not allow to create a empty name list', async () => {
  //   const INITIAL_STATE = {
  //     creatListModalOpen: false,
  //   };

  //   store = mockStore(INITIAL_STATE);

  //   const {findByTestId} = render(
  //     <Provider store={store}>
  //       <MockedNavigator component={Main} />
  //     </Provider>,
  //   );

  //   const input = await findByTestId('new-list-input');
  //   const button = await findByTestId('new-list-btn-submit');

  //   fireEvent.press(button);
  // });

  // it('open create new list modal', async () => {
  //   const INITIAL_STATE = {
  //     creatListModalOpen: false,
  //   };

  //   store = mockStore(INITIAL_STATE);

  //   const {findByTestId, findByText} = render(
  //     <Provider store={store}>
  //       <MockedNavigator component={Main} />
  //     </Provider>,
  //   );

  //   const button = await findByTestId('new-list-btn');

  //   fireEvent.press(button);

  //   const modal = await findByTestId('new-list-modal');
  //   const newList = await findByText('Nova Lista');

  //   expect(modal.props.visible).toBe(true);
  //   expect(modal).toContainElement(newList);
  // });

  it('create a new list', async () => {
    const INITIAL_STATE = {
      creatListModalOpen: false,
    };

    store = mockStore(INITIAL_STATE);

    const {findByTestId, findAllByText, debug} = render(
      <Provider store={store}>
        <MockedNavigator component={Main} />
      </Provider>,
    );

    const input = await findByTestId('new-list-input');
    const button = await findByTestId('new-list-btn-submit');

    fireEvent.changeText(input, 'Presentes');
    fireEvent.press(button);

    debug(input);

    const list = await findByTestId('list-list');
    const listItem = await findAllByText('Presentes');

    expect(list).toContainElement(listItem);
    // expect(getByTestId('list-list').props.data.length).toEqual(3);
  });

  // it('close create new list modal', async () => {
  //   const INITIAL_STATE = {
  //     creatListModalOpen: false,
  //   };

  //   store = mockStore(INITIAL_STATE);

  //   const {findByTestId} = render(
  //     <Provider store={store}>
  //       <MockedNavigator component={Main} />
  //     </Provider>,
  //   );

  //   const button = await findByTestId('new-list-close-btn');

  //   fireEvent.press(button);

  //   const modal = await findByTestId('new-list-modal');
  //   expect(modal.props.visible).toBe(false);
  // });

  // it('navigate to list details', async () => {
  //   const INITIAL_STATE = {
  //     creatListModalOpen: false,
  //   };

  //   store = mockStore(INITIAL_STATE);

  //   const {findByText, findByTestId, getByText, findAllByText} = render(
  //     <Provider store={store}>
  //       <MockedNavigator component={Main} />
  //     </Provider>,
  //   );

  //   const input = await findByTestId('new-list-input');
  //   const button = await findByTestId('new-list-btn-submit');

  //   await fireEvent.changeText(input, 'Presentes');
  //   await fireEvent.press(button);

  //   const navigateButton = await findByText('Presentes');

  //   await fireEvent.press(navigateButton);

  //   const pageHeader = await findAllByText('Presentes');

  //   await expect(pageHeader).toBeTruthy();
  // });
});
