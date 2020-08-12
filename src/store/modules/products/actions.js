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

export function getProductsRequest(listId) {
  return {
    type: '@products/GET_PRODUCTS_REQUEST',
    payload: {listId},
  };
}

export function getProductsSuccess(products) {
  return {
    type: '@products/GET_PRODUCTS_SUCCESS',
    payload: {products},
  };
}

export function getProductsFailure() {
  return {
    type: '@products/GET_PRODUCTS_FAILURE',
  };
}

export function updateProductRequest(data) {
  return {
    type: '@products/UPDATE_PRODUCT_REQUEST',
    payload: {data},
  };
}

export function updateProductSuccess(product) {
  return {
    type: '@products/UPDATE_PRODUCT_SUCCESS',
    payload: {product},
  };
}

export function updateProductFailure() {
  return {
    type: '@products/UPDATE_PRODUCT_FAILURE',
  };
}

export function deleteProductRequest(productId) {
  return {
    type: '@products/DELETE_PRODUCT_REQUEST',
    payload: {productId},
  };
}

export function deleteProductSuccess() {
  return {
    type: '@products/DELETE_PRODUCT_SUCCESS',
  };
}

export function deleteProductFailure() {
  return {
    type: '@products/DELETE_PRODUCT_FAILURE',
  };
}
