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
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to={"/"}>
              <div className="flex mt-4 flex-shrink-0 items-center font-bold font-serif text-purple-600 text-4xl italic">
                <FaOpencart />
                Cartify
              </div>
            </Link>
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
