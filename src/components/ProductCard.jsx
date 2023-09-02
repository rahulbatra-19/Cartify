import { FaStar } from 'react-icons/fa';
const ProductCard = (props) => {
  const { product } = props;
  return (
    <li key={product.id} className=" border-solid p-5 border-b-2 justify-between gap-x-6 py-5">
      <div className="md:flex sm:block md:h-4/6 sm:h-1/3  min-w-0 gap-10  ">
        <img className="bg-gray-50 object-content md:w-1/5 h-full  sm:w-11/12 w-full "  src={product.image} alt="" />
        <div className="min-w-0 flex-auto">
          <p className="text-xl font-bold leading-6 text-gray-900">{product.title}</p>
          <p className="mt-1  text-s leading-5 text-gray-500">{product.rating.rate}<FaStar className="inline text-yellow-400 mb-1" /> ({product.rating.count})</p>
          <p className="mt-5 text-sm h-fit md:mb-4 lg:mb-0 leading-6 text-gray-900">{product.description}</p>
          <div className="text-4xl justify-between font-bold lg:flex sm:inline  text-gray-900">
          <span className="mt-7">${product.price}</span>
          <button className="bg-gray-900 lg:mr-80  mt-5 text-white block rounded-md px-3 py-2 text-base font-medium ">Add to Cart</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
