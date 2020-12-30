import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

import {buildStore} from './store';

export function renderWithRedux(component, {state} = {}) {
  const store = buildStore(state);
  const queries = render(
    <Provider store={store}>
      <NavigationContainer>{component}</NavigationContainer>
    </Provider>,
  );

  return {
    ...queries,
    store,
  };
}
