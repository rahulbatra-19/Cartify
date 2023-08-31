import axios from "axios";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";


export function fetchProducts() {
  const url = "https://excommerce-products.onrender.com/products";
  return function (dispatch) {
    axios
      .get(url)
      .then((response) => {
        // Handle the response data
        console.log(response.data);
        dispatch(fetchingProducts(response.data));
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  };
}

export function fetchingProducts(products) {
  return {
    type: FETCH_PRODUCTS,
    products,
  };
}
