export default function products(state = [], action) {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
      };
    default:
      return state;
  }
}
