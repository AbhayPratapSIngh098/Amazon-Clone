import { useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { GB_CURRENCY } from "../utlis/constants";
import { removeFromCart } from "../redux/cartSlice";

const CheckOut = () => {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.cart.products);
  const productNum = useSelector((state)=> state.cart.productNumber);
  const subtotal = useSelector((state)=> state.cart.products.reduce((subtotal, product)=> subtotal+product.price*product.quantity,0))
  return (
    <div className='h-screen bg-amazonclone-background'>
      <div className='min-w-[1000px] max-w-[1500px] m-auto pt-8'>
        <div className='grid grid-cols-8 '>
          <div className='col-span-6 bg-white'>
            <div className='text-2xl font-semibold xl:text-3xl m-4'>Shopping card</div>
            {
              products.map(product=>{
                return(
                  <div  key={product.id}>
                      <div className="grid grid-cols-12  divide-y divide-gray-400 mr-4">
                        <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                          <div className="col-span-2">
                          <Link to={`/product/${product.id}`} ><img className="p-4 m-auto"alt="im" src={product.image_small}/></Link>
                          </div>
                          <div className="col-span-6">
                            <div className="font-medium text-black mt-2">
                              <Link to={`/product/${product.id}`}>
                                <ProductDetails product={product} rating={false}/>
                              </Link>
                            </div> 
                            <div>
                              <button className="text-sm xl:text-base rounded text-blue-500 mt-2 m-1" onClick={()=>dispatch(removeFromCart(product.id))}>Delete</button> 
                            </div> 
                            <div className="grid grid-cols-3 items-center w-20 text-center">
                              <div className="text-xl xl:text-2xl bg-gray-400">-</div>
                              <div className="text-lg xl:text-xl bg-gray-200">{product.quantity}</div>
                              <div className="text-xl xl:text-2xl bg-gray-400">+</div>

                            </div>                       
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">
                            {GB_CURRENCY.format(product.price)}
                          </div>
                        </div>
                      </div>
                  </div>
                )
              })
            }
            <div className="text-lg xl:text-xl text-right mr-4 mb-4">SubTotal ({productNum} items): <span className="font-semibold">{GB_CURRENCY.format(subtotal)}</span></div>
          </div>
          <div className='col-span-2 bg-white rounded h-[250px] p-7 ml-12'>
              <div className="text-xs xl:text-sm text-green-800">Your Order Qualify for <span className="font-bold">Free Delivery</span>. Delivery Details</div>
              <div className="text-base xl:text-lg mt-3 mb-4">SubTotal ({productNum} items): <span className="font-semibold">{GB_CURRENCY.format(subtotal)}</span></div>
              <button className="bg-yellow-400 w-full  p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut