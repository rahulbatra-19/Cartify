import { FaStar,FaExpeditedssl } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { GoPencil } from 'react-icons/go';
import { FcCancel } from 'react-icons/fc';
import { Navigate, redirect } from 'react-router-dom';
import { fetchProduct, AddProductToCart , productEdit } from '../actions';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductCard = (props) => {
  const { product, cartProducts, handleDeleteProduct, dispatch } = props;
  const [productData, setProductData] = useState(product);
  const [editing, setEditing] = useState(false);
  const Navigate = useNavigate();
  const handleRedirect = () => {
    
    props.dispatch(fetchProduct(product));
    Navigate(`/product/${product.id}`);
  }
  const handleEditProduct = () => {
    
  }
  const handleAddProductToCart = (e) => {
    e.stopPropagation(); 
    props.dispatch(AddProductToCart(product));
  }
   const handleInputChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
  <>
      {editing ? (
        <li key={product.id} className=" border-solid p-5 border-b-2 justify-between gap-x-6 py-5">
        <div className="md:flex sm:block md:h-4/6 sm:h-1/3  min-w-0 gap-10  ">
        <img className="bg-gray-50 object-content md:w-1/5 h-full  sm:w-11/12 w-full "  src={product.image} alt="" />
            <div className="min-w-0 flex-auto">
               <button className="float-right"
            onClick={(e) => {
              setEditing(false);
            }}>
            <FcCancel className='text-xl  mr-2'/> 
              </button>
          <button className="float-right"
            onClick={(e) => {
              e.stopPropagation()
              console.log(productData);
              dispatch(productEdit(productData, product.id));
              setEditing(false);
            }}>
            <FaExpeditedssl className='text-xl  mr-2'/> 
              </button>
              <span className='font-bold'>Tilte:</span>
          <input type='text' name='title' value={productData.title} onChange={handleInputChange} className="text-xl w-3/5 leading-6 bg-blue-200 border text-gray-900"></input>
              <p className="mt-1  text-s leading-5 text-gray-500">{productData.rating.rate}<FaStar className="inline text-yellow-400 mb-1" /> ({productData.rating.count})</p>
              
              <span className='font-bold'>Description:</span>
             <textarea  value={productData.description} name='description' onChange={handleInputChange}  className="mt-3 w-4/5  bg-blue-200 border text-sm h-fit  lg:mb-0 leading-6 text-gray-900"></textarea>
              <div className=" justify-between  sm:inline  text-gray-900">
                <span className='font-bold mt-4'>Price:</span>
                <input type='number' name='price' value={productData.price} onChange={handleInputChange} className=" bg-blue-200 border mt-3"></input>
<br />
                <span className='font-bold'>ImageAddres:</span>
                
                <input type='text' name='image' onChange={handleInputChange} value={productData.image} className=" w-4/5  bg-blue-200 border mt-3"></input>
            </div>
        </div>
          </div>
        </li>) :
        (<li key={product.id} className=" border-solid p-5 border-b-2 justify-between gap-x-6 py-5" onClick={handleRedirect}>
      <div className="md:flex sm:block md:h-4/6 sm:h-1/3  min-w-0 gap-10  ">
        <img className="bg-gray-50 object-content md:w-1/5 h-full  sm:w-11/12 w-full "  src={product.image} alt="" />
        <div className="min-w-0 flex-auto">
          <button className="float-right"
            onClick={(e) => handleDeleteProduct(e,product)}>
            <MdDelete className='text-xl' />
          </button>
          <button className="float-right"
            onClick={(e) => {
              e.stopPropagation()
              setEditing(true);
            }}>
            <GoPencil className='text-xl  mr-2'/> 
          </button>

            <p className="text-xl font-bold leading-6 text-gray-900">{product.title}</p>
          <p className="mt-1  text-s leading-5 text-gray-500">{product.rating.rate}<FaStar className="inline text-yellow-400 mb-1" /> ({product.rating.count})</p>
          <p className="mt-5 text-sm h-fit md:mb-4 lg:mb-0 leading-6 text-gray-900">{product.description}</p>
          <div className="text-4xl justify-between font-bold lg:flex sm:inline  text-gray-900">
            <span className="mt-7">${product.price}</span>
            {cartProducts.find(produc => produc.id === product.id)!== undefined ?
              <button className="bg-yellow-600 lg:mr-80  mt-5 text-white block rounded-md px-3 py-2 text-base font-medium "
                onClick={(e) => {
                    e.stopPropagation();
                  }}>Added to Cart</button>
              :
              <button className="bg-gray-900 lg:mr-80  mt-5 text-white block rounded-md px-3 py-2 text-base font-medium " onClick={handleAddProductToCart}>Add to Cart</button>
            }
          </div>
        </div>
      </div>
      </li>)}
      </>
    
  );
};

export default ProductCard;
