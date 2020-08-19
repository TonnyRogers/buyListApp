import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
  creatListModalOpen: false,
  selectedProducts: [],
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
      case '@list/SET_LIST_TOTAL': {
        const {product} = action.payload;
        const isInTotalList = draft.selectedProducts.findIndex(
          (filtered) => filtered.id === product.id,
        );

        console.tron.log(product);
        console.tron.log(isInTotalList);
        if (isInTotalList !== -1) {
          draft.selectedProducts.splice(isInTotalList, 1);
        } else {
          draft.selectedProducts = [...draft.selectedProducts, product];
        }
        break;
      }
      case '@list/CLEAN_LIST_TOTAL': {
        draft.selectedProducts = [];
        break;
      }
      default:
    }
  });
}
