import { connect } from "react-redux";
import { useState } from "react";
import { addProduct } from "../actions";
import { useNavigate } from "react-router-dom";
const AddProducthtmlForm = (props) => {
  const { products } = props;
  const Navigate = useNavigate();
  // html form for add product
  const [htmlFormData, sethtmlFormData] = useState({
    id: products[products.length - 1].id + 1,
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  // function handle submiision and adding product
  const handleSubmission = () => {
    console.log(htmlFormData);
    props.dispatch(addProduct(htmlFormData));
    Navigate("/");
  };
  // form data for item
  const handleInputChange = (event) => {
    // console.log(event.target);
    const { name, value } = event.target;
    sethtmlFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                value={htmlFormData.title}
                required
                onChange={handleInputChange}
                className="block w-full pl-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
            </div>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                type="number"
                onChange={handleInputChange}
                value={htmlFormData.price}
                required
                className="block pl-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
            </div>
            <div className="mt-2">
              <textarea
                onChange={handleInputChange}
                value={htmlFormData.description}
                name="description"
                id="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border"
                placeholder="Tell about the product"
              ></textarea>
            </div>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category
            </label>
            <div className="mt-2">
              <input
                onChange={handleInputChange}
                value={htmlFormData.category}
                id="category"
                name="category"
                type="text"
                required
                className="block pl-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Image Address
            </label>
            <div className="mt-2">
              <input
                id="image"
                onChange={handleInputChange}
                value={htmlFormData.image}
                name="image"
                type="text"
                required
                className="pl-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmission}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

// Connect the component to Redux and export it
export default connect(mapStateToProps)(AddProducthtmlForm);
