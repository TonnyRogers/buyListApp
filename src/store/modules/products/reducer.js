import produce from 'immer';

const INITIAL_STATE = {
  data: [
    {
      id: 0,
      name: '',
      price: 0.0,
      quantity: 0,
      amount: 0.0,
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
      case '@products/GET_PRODUCTS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@products/GET_PRODUCTS_SUCCESS': {
        draft.data = INITIAL_STATE.data;
        action.payload.products.map((product) => {
          draft.data = [...draft.data, product];
        });
        break;
      }
      case '@products/GET_PRODUCTS_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@products/UPDATE_PRODUCT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@products/UPDATE_PRODUCT_SUCCESS': {
        const updatedProduct = action.payload.product;
        const productIndex = draft.data.findIndex(
          (product) => product.id === updatedProduct.id,
        );
        draft.data.splice(productIndex, 1);
        draft.data = [...draft.data, updatedProduct];
        draft.editListModalOpen = false;
        break;
      }
      case '@products/UPDATE_PRODUCT_FAILURE': {
        draft.loading = false;
        draft.editListModalOpen = false;
        break;
      }
      case '@products/DELETE_PRODUCT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@products/DELETE_PRODUCT_SUCCESS': {
        draft.loading = false;
        draft.editListModalOpen = false;
        break;
      }
      case '@products/DELETE_PRODUCT_FAILURE': {
        draft.loading = false;
        draft.editListModalOpen = false;
        break;
      }
      default:
    }
  });
}
