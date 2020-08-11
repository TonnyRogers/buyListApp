export function openListModal() {
  return {
    type: '@list/OPEN_LIST_MODAL',
  };
}

export function closeListModal() {
  return {
    type: '@list/CLOSE_LIST_MODAL',
  };
}

export function createListRequest(name) {
  return {
    type: '@list/CREATE_LIST_REQUEST',
    payload: {name},
  };
}

export function createListSuccess(list) {
  return {
    type: '@list/CREATE_LIST_SUCCESS',
    payload: {list},
  };
}

export function createListFailure() {
  return {
    type: '@list/CREATE_LIST_FAILURE',
  };
}
