import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
  creatListModalOpen: false,
};

export default function list(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@list/OPEN_LIST_MODAL': {
        draft.creatListModalOpen = true;
        break;
      }
      case '@list/CLOSE_LIST_MODAL': {
        draft.creatListModalOpen = false;
        break;
      }
      case '@list/CREATE_LIST_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@list/CREATE_LIST_SUCCESS': {
        draft.loading = false;
        draft.data = [...draft.data, action.payload.list];
        draft.creatListModalOpen = false;
        break;
      }
      case '@list/CREATE_LIST_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
