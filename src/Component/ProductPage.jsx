import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {callAPI} from "../utlis/CallApi";
import { ProductDetails } from './index';
import {GB_CURRENCY} from '../utlis/constants';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const ProductPage = () => {
    const {id} = useParams();
    const [product, setProduct]= useState(null);
    const [quantity, setQuantity] = useState("1");
    const dispatch = useDispatch();
    const getProduct = () => { 
      callAPI(`data/products.json`).then((res)=> {setProduct(res[id]) })
     }

    const addQuantityToProduct = ()=>{
      setProduct(product.quantity = quantity);
      return product;
      
    }
   

   useEffect(()=>{
    getProduct();
   },[])
    if (!product?.title) return <h1>Loading Product ...</h1>;
    
  return (
    
    product && 
    <div className='h-screen bg-amazonclone-background p-4'>
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <div className='grid grid-cols-10 gap-2 m-auto' >
        <div className='col-span-3 p-8 bg-white' >
          <img src={`${product.image}`} alt='im' />
        </div>
        <div className='col-span-5 p-4 rounded bg-white'>
          <div className='mb-3'>
            <ProductDetails product={product} rating={true}/>
            <hr className= 'mt-3 border-gray-400 border'></hr>
          </div>
          <div className="text-base xl:text-lg mt-3">{product.description}</div>
        </div>
        <div className='col-span-2 bg-white p-4'>
          <div className="text-xl text-red-700 xl:text-2xl text-right font-semibold">{GB_CURRENCY.format(product.price)}</div>
          <div className="text-base xl:text-lg text-gray-500 text-right  font-semibold">MRP:<span className='line-through'>{GB_CURRENCY.format(product.oldPrice)}</span></div>
          <div className="text-base xl:text-base text-blue-500 font-semibold mt-3">FREE Returns</div>
          <div className="text-base xl:text-base text-blue-500 font-semibold mt-1">FREE Delivery</div>
          <div className="text-base text-green-700 font-semibold xl:text-lg mt-1">In Stock</div>
          <div className="text-base xl:text-lg ">Quantity:
            <select onChange={(e)=>setQuantity(e.target.value)} className='ml-2 p-2 bg-white border outline-none rounded-md focus:border-indigo-600'>
              <option >1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <Link to={"/checkout"}>
          <button onClick={()=>dispatch(addToCart(addQuantityToProduct()))} type="button" className='bg-yellow-400 w-full  p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3'>Add To Cart</button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage