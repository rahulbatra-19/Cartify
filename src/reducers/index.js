import {
  FETCH_PRODUCTS,
  SORT_PRODUCTSINSC,
  SORT_PRODUCTSDESC,
  FETCH_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DELETED_PRODUCT,
  EDIT_PRODUCT,
  ADD_PRODUCT,
} from "../actions";

// initial state
const initialProductsState = {
  product: {},
  products: [],
  cartProducts: [],
  loading: true,
  categories: [],
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
        ...state,
        products: action.products.sort((a, b) => a.price - b.price),
      };
    case SORT_PRODUCTSDESC:
      return {
        ...state,
        products: action.products.sort((a, b) => b.price - a.price),
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartProducts: [action.product, ...state.cartProducts],
      };
    case REMOVE_FROM_CART:
      const filteredArray = state.cartProducts.filter(
        (product) => product.id !== action.product.id
      );
      return {
        ...state,
        cartProducts: filteredArray,
      };
    case DELETED_PRODUCT:
      const filteredArrayProducts = state.products.filter(
        (product) => product.id !== action.product.id
      );
      console.log("delete Product");
      return {
        ...state,
        products: filteredArrayProducts,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case EDIT_PRODUCT:
      const itemIndex = state.products.findIndex(
        (product) => product.id === action.id
      );

      if (itemIndex !== -1) {
        const updatedProducts = [...state.products]; // Create a copy of the products array
        updatedProducts[itemIndex] = action.product; // Update the specific item

        return {
          ...state,
          products: updatedProducts, // Set the updated array in the new state
        };
      } else {
        return state; // Return the current state if the item is not found
      }

    default:
      return state;
  }
}
