/* eslint-disable no-undef */
/* eslint-disable global-require */
import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';

import Main from '../../src/pages/Main';
import MockedNavigator from '../../jest/MockedNavigator';

jest.mock(
  './path/to/the/image.png',
  () =>
    '/node_modules/@react-navigation/stack/lib/commonjs/views/assets/back-icon.png',
);

describe('Main page', () => {
  afterEach(cleanup);

  it('render no list message', async () => {
    const {findByText} = render(<MockedNavigator component={Main} />);

    const emptyList = await findByText('Você não possui listas');

    expect(emptyList).toBeTruthy();
  });

  it('do not allow to create a empty name list', async () => {
    const {findByTestId} = render(<MockedNavigator component={Main} />);

    const input = await findByTestId('new-list-input');
    const button = await findByTestId('new-list-btn-submit');

    fireEvent.press(button);
  });

  it('open create new list modal', async () => {
    const {findByTestId, findByText} = render(
      <MockedNavigator component={Main} />,
    );

    const button = await findByTestId('new-list-btn');

    fireEvent.press(button);

    const modal = await findByTestId('new-list-modal');
    const newList = await findByText('Nova Lista');

    expect(modal.props.visible).toBe(true);
    expect(modal).toContainElement(newList);
  });

  it('create a new list', async () => {
    const {findByTestId, findByText} = render(
      <MockedNavigator component={Main} />,
    );

    const input = await findByTestId('new-list-input');
    const button = await findByTestId('new-list-btn-submit');

    fireEvent.changeText(input, 'Presentes');
    fireEvent.press(button);

    const list = await findByTestId('list-list');
    const listItem = await findByText('Presentes');

    expect(list).toContainElement(listItem);
    // expect(getByTestId('list-list').props.data.length).toEqual(3);
  });

  it('close create new list modal', async () => {
    const {findByTestId} = render(<MockedNavigator component={Main} />);

    const button = await findByTestId('new-list-close-btn');

    fireEvent.press(button);

    const modal = await findByTestId('new-list-modal');
    expect(modal.props.visible).toBe(false);
  });

  it('navigate to list details', async () => {
    const {findByText, findByTestId, getByText, findAllByText} = render(
      <MockedNavigator component={Main} />,
    );

    const input = await findByTestId('new-list-input');
    const button = await findByTestId('new-list-btn-submit');

    await fireEvent.changeText(input, 'Presentes');
    await fireEvent.press(button);

    const navigateButton = await findByText('Presentes');

    await fireEvent.press(navigateButton);

    const pageHeader = await findAllByText('Presentes');

    await expect(pageHeader).toBeTruthy();
  });
});
