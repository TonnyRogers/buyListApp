/* eslint-disable no-undef */
import reducer, {INITIAL_STATE} from '../../../src/store/modules/list/reducer';
import * as List from '../../../src/store/modules/list/actions';

describe('List reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('ADD LIST', () => {
    const newListName = 'Presentes';
    let state = reducer(INITIAL_STATE, List.createListRequest(newListName));
    expect(state.loading).toStrictEqual(true);

    state = reducer(INITIAL_STATE, List.createListSuccess(newListName));

    expect(state.data).toStrictEqual([newListName]);
  });
});
