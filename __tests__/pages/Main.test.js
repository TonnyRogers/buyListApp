/* eslint-disable no-undef */
/* eslint-disable global-require */
import React from 'react';
import {fireEvent, cleanup} from '@testing-library/react-native';

import {renderWithRedux} from '../../test-utils/render';

import Main from '../../src/pages/Main';
// import MockedNavigator from '../../jest/MockedNavigator';

jest.mock(
  './path/to/the/image.png',
  () =>
    '/node_modules/@react-navigation/stack/lib/commonjs/views/assets/back-icon.png',
);

// const spyUseSelector = jest.spyOn(redux, 'useSelector');

// spyUseSelector.mockReturnValue({
//   list: {},
//   products: {},
// });

describe('Main page', () => {
  afterEach(cleanup);

  const initialState = {
    list: {
      data: [],
      loading: false,
      creatListModalOpen: false,
      selectedProducts: [],
    },
  };

  function renderMain(testState) {
    const state = {
      ...initialState,
      ...(testState || initialState),
    };

    return renderWithRedux(<Main />, {state});
  }

  it('open create new list modal', async () => {
    const rendered = renderMain();

    fireEvent.press(await rendered.findByTestId('new-list-btn'));

    renderMain({
      ...(initialState.list.creatListModalOpen = true),
    });

    expect(
      (await rendered.findByTestId('new-list-modal')).props.visible,
    ).toBeTruthy();
  });

  it('create new list', async () => {
    const rendered = renderMain();

    fireEvent.press(await rendered.findByTestId('new-list-btn'));

    renderMain({
      ...(initialState.list.creatListModalOpen = true),
    });

    fireEvent.changeText(
      await rendered.findByTestId('new-list-input'),
      'Presentes',
    );

    fireEvent.press(await rendered.findByTestId('new-list-btn-submit'));

    renderMain({
      ...(initialState.list.data = {id: 1, name: 'Presentes', total: 0.0}),
    });

    console.log(await rendered.findAllByText('Presentes'));
    expect(await rendered.findAllByText('Presentes')).toBeTruthy();
  });
});
