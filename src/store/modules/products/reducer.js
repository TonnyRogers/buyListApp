import produce from 'immer';

const INITIAL_STATE = {
  data: [
    {
      id: 0,
      name: '',
      price: null,
      quantity: null,
      amount: null,
      fake: true,
    },
  ],
  loading: false,
  createListModalOpen: false,
  editListModalOpen: false,
};

export default function products(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@products/OPEN_CREATE_PRODUCT_MODAL': {
        draft.createListModalOpen = true;
        break;
      }
      case '@products/CLOSE_CREATE_PRODUCT_MODAL': {
        draft.createListModalOpen = false;
        break;
      }
      case '@products/CREATE_PRODUCT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@products/CREATE_PRODUCT_SUCCESS': {
        draft.loading = false;
        draft.createListModalOpen = false;
        draft.data = [...draft.data, action.payload.product];
        break;
      }
      case '@products/CREATE_PRODUCT_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@products/OPEN_EDIT_PRODUCT_MODAL': {
        draft.editListModalOpen = true;
        break;
      }
      case '@products/CLOSE_EDIT_PRODUCT_MODAL': {
        draft.editListModalOpen = false;
        break;
      }
      default:
    }
  });
}
