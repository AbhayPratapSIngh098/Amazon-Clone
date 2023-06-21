import React from 'react';
import {ShoppingCartIcon } from "@heroicons/react/24/outline";
import {Search} from '../Component/index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const cart = useSelector((state)=> state.cart.productNumber);
  return (
    <header className='min-w-[1000px]'>
        <div className='flex bg-amazonclone text-white h-[60px]'>
            <div className='flex items-center cursor-pointer m-4'>
                <Link to="/">
                <img src="/images/amazon.png" alt="logo" className='h-[35px] w-[100px] m-2' />
                </Link>
                <div className='px-4 '>
                    <div className='text-sm xl:text-sm'> Deliver to</div>
                    <div className='text-sm xl:text-base font-bold'>Noida, India</div>
                </div>
            </div>
            <div className='flex grow items-center'>
                <Search />
            </div>
            <div className='flex items-center m-4'>
                <div className='px-4 '>
                    <div className='text-sm xl:text-sm'> Hello, sign in</div>
                    <div className='text-sm xl:text-base font-bold'>Accounts & Lists</div>
                </div>
                <div className='px-4 '>
                    <div className='text-sm xl:text-sm'> Return</div>
                    <div className='text-sm xl:text-base font-bold'>& Orders</div>
                </div>
                <Link to={"/checkOut"} >
                <div className='flex px-3'>
                    <ShoppingCartIcon className='h-[48px]' />
                    <div className='relative'>
                        <div className='absolute right-[9px] font-bold m-2 text-orange-400'>
                            {cart}
                        </div>
                    </div>
                    <div className='mt-7 text-xs xl:text-sm font-bold'>
                    cart
                    </div>
                </div>
                </Link>
               
            </div>

        </div>
        <div className='flex bg-amazonclone-light_blue cursor-pointer text-white space-x-3 text-sm xl:text-sm p-2 pl-6'>
            <div>Today's Deals</div>
            <div>Customer Services</div>
            <div>Registry</div>
            <div>Gift Cards</div>
            <div>Sell</div>
        </div>
    </header>
  )
}

export default NavBar