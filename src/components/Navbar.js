import { HiShoppingCart } from "react-icons/hi";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Navbar = (props) => {
  const { cartProducts } = props;
  const cartValue = cartProducts.length;
  return (
    <nav className="bg-gray-800 h-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link to={"/"}>
              <div className="flex mt-4 flex-shrink-0 items-center font-bold font-serif text-purple-600 text-4xl italic">
                <FaOpencart />
                Cartify
              </div>
            </Link>
          </div>
          <div className="mt-9">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] flex-auto rounded-l border border-solid border-neutral-300 bg-pink bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                // className="rounded-l-full pl-1"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
              />

              {/* <!--Search button--> */}
              <button
                className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to={"cart"}
              type="button"
              className=" relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="cartCount top-5 text-l text-white font-bold right-1 bg-transparent">
                {cartValue}
              </span>
              <HiShoppingCart className="text-3xl mt-8 text-purple-500" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartProducts, // Assuming your state has a "products" property
  };
};

// Connect the component to Redux and export it
export default connect(mapStateToProps)(Navbar);
