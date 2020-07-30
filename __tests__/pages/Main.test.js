/* eslint-disable no-undef */
/* eslint-disable global-require */
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Main from '../../src/pages/Main';

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity.js',
  () => {
    const {TouchableHighlight} = require('react-native');
    const MockTouchable = (props) => {
      return <TouchableHighlight {...props} />;
    };
    MockTouchable.displayName = 'TouchableOpacity';
    return MockTouchable;
  },
);

describe('Main page', () => {
  it('open create new list modal', () => {
    const {getByTestId, getByText} = render(<Main />);

    fireEvent.press(getByTestId('new-list-btn'));
    expect(getByTestId('new-list-modal').props.visible).toBe(true);
    expect(getByTestId('new-list-modal')).toContainElement(
      getByText('Nova Lista'),
    );
  });

  it('create a new list', () => {
    const {getByTestId, getByText} = render(<Main />);

    fireEvent.changeText(getByTestId('new-list-input'), 'Presentes');

    expect(getByTestId('list-list')).toContainElement(getByText('Presentes'));
    // expect(getByText('Presentes-de-Natal')).toBeTruthy();
  });

  it('close create new list modal', () => {
    const {getByTestId} = render(<Main />);

    fireEvent.press(getByTestId('new-list-close-btn'));
    expect(getByTestId('new-list-modal').props.visible).toBe(false);
  });
});
