import React from "react";
import { connect } from "react-redux";
import {
  fetchProducts,
  sortProductsInsc,
  sortProductsDesc,
  DeleteProduct,
} from "../actions";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortClicked: false,
      showFilters: false,
      selectedCategory: "",
      sortSelected: false,
      categories: [
        "men's clothing",
        "jewelery",
        "electronics",
        "women's clothing",
      ],
    };
  }

  // this is home so it fetches the products
  componentDidMount() {
    this.props.dispatch(fetchProducts());
    this.findCategories();
  }
  componentDidUpdate(prevProps) {
    // Check if the specific prop you want to watch has changed
    if (this.props.products !== prevProps.products) {
      // This function will be called when the specified prop changes
      console.log("Props have changed:", this.props.products);

      // Call your specific function here
      this.findCategories();
    }
  }
  // dispatches delete product action
  handleDeleteProduct = (e, product) => {
    e.stopPropagation();

    this.props.dispatch(DeleteProduct(product));
  };
  // this is for category if category is seleced it fetches that particular category products
  handleOptionChange = (e) => {
    this.setState({
      selectedCategory: e.target.value,
    });
    this.props.dispatch(fetchProducts(e.target.value));
  };
  // It finds the catefory and shows in category section
  findCategories = () => {
    const { products } = this.props;
    let categories = [];
    products.map((product) => {
      if (!categories.includes(product.category))
        categories.push(product.category);
    });
    if (categories.length !== 0) {
      this.setState({
        categories,
      });
    }
  };
  render() {
    const { products, cartProducts } = this.props;
    const {
      sortClicked,
      showFilters,
      categories,
      selectedCategory,
      sortSelected,
    } = this.state;
    if (products.length == 0) {
      return <Loader />;
    }
    return (
      <div className="Home">
        <div className="bg-white">
          {showFilters && (
            <div
              className="relative z-40 lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25"></div>

              <div className="fixed inset-0 z-40 flex">
                <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() =>
                        this.setState({
                          showFilters: !this.state.showFilters,
                        })
                      }
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* <!-- Filters --> */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <div className="border-t border-gray-200 px-4 py-6">
                      <h3 className="-mx-2 -my-3 flow-root">
                        {/* <!-- Expand/collapse section button --> */}
                        <button
                          type="button"
                          className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                          aria-controls="filter-section-mobile-1"
                          aria-expanded="false"
                        >
                          <span className="font-medium text-gray-900">
                            Category
                          </span>
                          <span
                            className="ml-6 flex items-center"
                            onClick={() => {
                              this.setState({
                                selectedCategory: "",
                              });
                              this.props.dispatch(fetchProducts());
                            }}
                          >
                            {/* <!-- Expand icon, show/hide based on section open state. --> */}
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      {/* <!-- Filter section, show/hide based on section state. --> */}
                      <div className="pt-6" id="filter-section-mobile-1">
                        <div className="space-y-6">
                          {categories.map((category, index) => (
                            <div
                              className="flex items-center"
                              key={`category-${index}`}
                            >
                              <input
                                radioGroup="category"
                                id={`category-${index}`}
                                name="category[]"
                                value={category}
                                type="radio"
                                checked={selectedCategory === category}
                                onChange={this.handleOptionChange}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`category-${index}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {category}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          <main className=" px-2 sm:pxl-3 lg:pl-3">
            <div className="flex items-baseline border-b border-gray-200 pb-6 pt-6 mr-6 justify-between">
              <Link
                to={"addProduct"}
                className="rounded-full p-1 text-white bg-blue-500"
              >
                Add Product +
              </Link>
              <div className="flex">
                <div className="relative inline-block text-left">
                  <div>
                    {sortSelected ? (
                      <button
                        type="button"
                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                        id="menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={() => {
                          this.setState({
                            sortSelected: !sortSelected,
                            sortClicked: false,
                          });
                          this.props.dispatch(fetchProducts());
                        }}
                      >
                        Remove Sort
                        <svg
                          className="-mr-1 ml-1 h-4 w-4 mt-0 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                        id="menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={() =>
                          this.setState({
                            sortClicked: !this.state.sortClicked,
                          })
                        }
                      >
                        Sort
                        <svg
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                  {this.state.sortClicked && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="text-gray-500 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-1"
                          onClick={() => {
                            this.setState({
                              sortClicked: !sortClicked,
                              sortSelected: !sortSelected,
                            });
                            this.props.dispatch(sortProductsInsc(products));
                          }}
                        >
                          Price: Low to High
                        </a>
                        <a
                          href="#"
                          className="text-gray-500 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-2"
                          onClick={() => {
                            this.setState({
                              sortClicked: !sortClicked,
                              sortSelected: !sortSelected,
                            });
                            this.props.dispatch(sortProductsDesc(products));
                          }}
                        >
                          Price: High to Low
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 inline lg:hidden"
                  onClick={() =>
                    this.setState({
                      showFilters: !this.state.showFilters,
                    })
                  }
                >
                  <span className="sr-only">Filters</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <section aria-labelledby="products-heading" className="pb-24">
              <div className="flex">
                {/* <!-- Filters --> */}
                <form className="w-1/6 hidden lg:block bottom-1 border-r-2 border-gray-200">
                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      {/* <!-- Expand/collapse section button --> */}
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-1"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Category
                        </span>
                        <span
                          className="ml-1 flex items-center"
                          onClick={() => {
                            this.setState({
                              selectedCategory: "",
                            });
                            this.props.dispatch(fetchProducts());
                          }}
                        >
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* <!-- Filter section, show/hide based on section state. --> */}
                    <div className="pt-6" id="filter-section-1">
                      <div className="space-y-4">
                        {categories.map((category, index) => (
                          <div
                            className="flex items-center"
                            key={`category-${index}`}
                          >
                            <input
                              radioGroup="category"
                              id={`category-${index}`}
                              name="category[]"
                              value={category}
                              type="radio"
                              checked={selectedCategory === category}
                              onChange={this.handleOptionChange}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`category-${index}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </form>
                <ul role="list" className="lg:w-5/6 ">
                  {products.map((product, index) => (
                    <ProductCard
                      product={product}
                      key={`product-${index}`}
                      dispatch={this.props.dispatch}
                      cartProducts={cartProducts}
                      handleDeleteProduct={this.handleDeleteProduct}
                    />
                  ))}
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cartProducts: state.cartProducts, // Assuming your state has a "products" property
  };
};

// Connect the component to Redux and export it
export default connect(mapStateToProps)(Home);
