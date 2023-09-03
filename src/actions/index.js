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
export function addedProduct(product) {
  return {
    type: ADD_PRODUCT,
    product,
  };
}
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
export function productEdited(product, id) {
  return {
    type: EDIT_PRODUCT,
    product,
    id,
  };
}

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

export function AddProductToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

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
