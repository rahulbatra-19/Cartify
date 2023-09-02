import {
  FETCH_PRODUCTS,
  SORT_PRODUCTSINSC,
  SORT_PRODUCTSDESC,
  FETCH_PRODUCT,
} from "../actions";

const initialProductsState = {
  product: {},
  products: [],
  loading: true,
};
export default function products(state = initialProductsState, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.product,
        loading: false,
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case SORT_PRODUCTSINSC:
      return {
        ...state, // Make sure to copy the existing state
        products: action.products.sort((a, b) => a.price - b.price),
      };
    case SORT_PRODUCTSDESC:
      return {
        ...state, // Make sure to copy the existing state
        products: action.products.sort((a, b) => b.price - a.price),
      };
    default:
      return state;
  }
}
