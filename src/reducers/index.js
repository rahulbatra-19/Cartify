import {
  FETCH_PRODUCTS,
  SORT_PRODUCTSINSC,
  SORT_PRODUCTSDESC,
} from "../actions";

const initialProductsState = {
  products: [],
};
export default function products(state = initialProductsState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
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
