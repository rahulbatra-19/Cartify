import React from "react";
import { fetchProducts } from "../actions";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortClicked: false,
      showFilters: false,
    };
  }
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    store.dispatch(fetchProducts());
    console.log("State", this.props.store.getState());
  }
  render() {
    const { products } = this.props.store.getState();
    const { sortClicked, showFilters } = this.state;
    return (
      <div className="App">
        <Navbar />

        <div className="bg-white">
          <div>
            {/* <!--
      Mobile filter dialog

      Off-canvas filters for mobile, show/hide based on off-canvas filters state.
    --> */}
            {showFilters && (
              <div
                className="relative z-40 lg:hidden"
                role="dialog"
                aria-modal="true"
              >
                {/* <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
                <div className="fixed inset-0 bg-black bg-opacity-25"></div>

                <div className="fixed inset-0 z-40 flex">
                  {/* <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}

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
                            <span className="ml-6 flex items-center">
                              {/* <!-- Expand icon, show/hide based on section open state. --> */}
                              <svg
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  d="M10.75 4.75a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                              <svg
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </button>
                        </h3>
                        {/* <!-- Filter section, show/hide based on section state. --> */}
                        <div className="pt-6" id="filter-section-mobile-1">
                          <div className="space-y-6">
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-category-0"
                                name="category[]"
                                value="new-arrivals"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-category-0"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                New Arrivals
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-category-1"
                                name="category[]"
                                value="sale"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-category-1"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Sale
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-category-2"
                                name="category[]"
                                value="travel"
                                type="checkbox"
                                checked
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-category-2"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Travel
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-category-3"
                                name="category[]"
                                value="organization"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-category-3"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Organization
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-category-4"
                                name="category[]"
                                value="accessories"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-category-4"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                Accessories
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
            <main className=" px-2 sm:pxl-6 lg:pl-8">
              <div className="flex items-baseline border-b border-gray-200 pb-6 pt-6 mr-6 justify-end">
                <div className="flex">
                  <div className="relative inline-block text-left">
                    <div>
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
                        {sortClicked ? (
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
                        ) : (
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
                        )}
                      </button>
                    </div>

                    {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
                    {this.state.sortClicked && (
                      <div
                        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabindex="-1"
                      >
                        <div className="py-1" role="none">
                          {/* <!--
                  Active: "bg-gray-100", Not Active: ""

                  Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                --> */}
                          <a
                            href="#"
                            className="text-gray-500 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-3"
                          >
                            Price: Low to High
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-4"
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
                          <span className="ml-6 flex items-center">
                            {/* <!-- Expand icon, show/hide based on section open state. --> */}
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                            {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      {/* <!-- Filter section, show/hide based on section state. --> */}
                      <div className="pt-6" id="filter-section-1">
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <input
                              id="filter-category-0"
                              name="category[]"
                              value="new-arrivals"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-0"
                              className="ml-3 text-sm text-gray-600"
                            >
                              New Arrivals
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-category-1"
                              name="category[]"
                              value="sale"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-1"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Sale
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-category-2"
                              name="category[]"
                              value="travel"
                              type="checkbox"
                              checked
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-2"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Travel
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-category-3"
                              name="category[]"
                              value="organization"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-3"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Organization
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-category-4"
                              name="category[]"
                              value="accessories"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="filter-category-4"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Accessories
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <ul role="list" className="w-5/6">
                    {products.map((product, index) => (
                      <ProductCard product={product} key={`product-${index}`} />
                    ))}
                  </ul>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
