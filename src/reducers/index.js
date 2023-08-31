import { FETCH_PRODUCTS } from "../actions";
const initialProductsState = {
  products: [],
};
export default function products(state = initialProductsState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        products: action.products,
      };
    default:
      return state;
  }
}
