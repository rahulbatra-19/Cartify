import axios from "axios";
import { toast } from "react-toastify";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const SORT_PRODUCTSINSC = "SORT_PRODUCTSINSC";
export const SORT_PRODUCTSDESC = "SORT_PRODUCTSDESC";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DELETED_PRODUCT = "DELETED_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const EDIT_PRODUCT = "EDIT_PRODUCT";
// function for fetching the products and calling get api call
export function fetchProducts(category) {
  const url = "https://excommerce-products.onrender.com/products";
  return function (dispatch) {
    axios
      .get(url)
      .then((response) => {
        // Handle the response data
        let products = response.data;
        if (category) {
          products = response.data.filter((product) => {
            return product.category === category;
          });
        }
        dispatch(fetchingProducts(products));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
}
// function for adding new product and calling api post call

export function addProduct(formdata) {
  const url = `https://excommerce-products.onrender.com/products`;
  return function (dispatch) {
    axios
      .post(url, formdata)
      .then((response) => {
        toast.success("New Product added!!");
        dispatch(addedProduct(response.data));
      })
      .catch((error) => {
        toast.error(`Error in Addding Product:, ${error}`);
      });
  };
}
// the addProduct would dispatch this function and this would send product to reducer
export function addedProduct(product) {
  return {
    type: ADD_PRODUCT,
    product,
  };
}

// function for editing product and calling put api call

export function productEdit(productData, id) {
  const url = `https://excommerce-products.onrender.com/products/${id}`;
  return function (dispatch) {
    axios
      .put(url, productData)
      .then((response) => {
        console.log(response.data);
        toast.success("Product Editted!!");
        dispatch(productEdited(response.data, id));
      })
      .catch((error) => {
        toast.error(`Error in Editing Product:, ${error}`);
      });
  };
}
// the productEdit would dispatch this function and this would send product to reducer
export function productEdited(product, id) {
  return {
    type: EDIT_PRODUCT,
    product,
    id,
  };
}
// function for deleting product and calling api delete call

export function DeleteProduct(product) {
  const url = `https://excommerce-products.onrender.com/products/${product.id}`;
  return function (dispatch) {
    axios
      .delete(url)
      .then(() => {
        console.log(product);
        toast.success("Product Deleted!!");
        dispatch(DeletedProduct(product));
      })
      .catch((error) => {
        toast.error(`Error in deleting Product:, ${error}`);
      });
  };
}
export function DeletedProduct(product) {
  return {
    type: DELETED_PRODUCT,
    product,
  };
}

// function for adding the product to cart
export function AddProductToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}
// function for removing the product from cart

export function RemoveProductFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
}

export function fetchProduct(product) {
  return {
    type: FETCH_PRODUCT,
    product,
  };
}

export function fetchingProducts(products) {
  return {
    type: FETCH_PRODUCTS,
    products,
  };
}
// Sorting products functions
export function sortProductsInsc(products) {
  return {
    type: SORT_PRODUCTSINSC,
    products,
  };
}

export function sortProductsDesc(products) {
  return {
    type: SORT_PRODUCTSDESC,
    products,
  };
}
