import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
const Navbar = (props) => {
  const { cartProducts } = props;
  const cartValue = cartProducts.length;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="bg-gray-800 pb-3">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/*               
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
           */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*               
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
           */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to={"/"}>
                <div className="flex mt-4 mr-6 sm:mr-8 flex-shrink-0 items-center font-bold font-serif text-purple-600 text-4xl italic">
                  <FaOpencart />
                  Cartify
                </div>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"  */}
                <Link to={"/"}>
                  <div className="bg-gray-900 text-xl mt-4 text-white rounded-md px-3 py-2 text-sm font-medium">
                    Products
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown  */}
            <Link
              to={"cart"}
              type="button"
              className=" relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none "
            >
              <span className="cartCount top-5 text-l text-white font-bold right-1 bg-transparent">
                {cartValue}
              </span>
              <HiOutlineShoppingBag className="text-3xl mt-3 mr-5 text-purple-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state.  */}
      {showMenu && (
        <div className="sm:hidden " id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"  */}
            <Link to={"/"}>
              <div className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">
                Products
              </div>
            </Link>
          </div>
        </div>
      )}
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
