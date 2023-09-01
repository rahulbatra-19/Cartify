const ProductCard = (props) => {
  const { product } = props;

  return (
    <li key={product.id} className="rounded-2xl border-solid p-5 border-2 mt-6 flex box-border justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-10  ">
        <img className="bg-gray-50" width="200px" src={product.image} alt="" />
        <div className="min-w-0 flex-auto">
          <p className="text-xl font-bold leading-6 text-gray-900">{product.title}</p>
          <p className="mt-1  text-s leading-5 text-gray-500">{product.rating.rate}⭐️ ({product.rating.count})</p>
          <p className="mt-5 text-sm leading-6 text-gray-900">{product.description}</p>
          <p className="text-4xl mt-10 font-bold leading-6 text-gray-900">${product.price}</p>
          <button className="rounded-full mt-10 p-2 bg-yellow-600 text-l text-white">Add to Cart</button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
