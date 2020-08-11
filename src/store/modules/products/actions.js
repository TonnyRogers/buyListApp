export function openCreateProductModal() {
  return {
    type: '@products/OPEN_CREATE_PRODUCT_MODAL',
  };
}

export function closeCreateProductModal() {
  return {
    type: '@products/CLOSE_CREATE_PRODUCT_MODAL',
  };
}

export function createProductRequest(data) {
  return {
    type: '@products/CREATE_PRODUCT_REQUEST',
    payload: {data},
  };
}

export function createProductSuccess(product) {
  return {
    type: '@products/CREATE_PRODUCT_SUCCESS',
    payload: {product},
  };
}

export function createProductFailure() {
  return {
    type: '@products/CREATE_PRODUCT_FAILURE',
  };
}

export function openEditProductModal() {
  return {
    type: '@products/OPEN_EDIT_PRODUCT_MODAL',
  };
}

export function closeEditProductModal() {
  return {
    type: '@products/CLOSE_EDIT_PRODUCT_MODAL',
  };
}
