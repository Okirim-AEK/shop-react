import React, { useEffect, useRef, useState } from 'react';
import useQuery from '../api/useQuery';
import {
    Link, NavLink
} from "react-router-dom";
function NavBar() {
    const url = 'https://fakestoreapi.com/products/categories';

    const [categories, isLoading, error] = useQuery(url);
    const dropdownCat = useRef()
    const [isOpen, setIsOpen] = useState(false)

    const handleSelectCat = (e) => {
        setIsOpen(!isOpen)
    };
    const renderCat = categories.map((category, i) => (
        //['jewlery',.....]
        <Link key={i}  to={`/products/category/${category}`}>
            <div >
                {category}
            </div>
        </Link>
    ));
    useEffect(() => {
        let start = true;
        
        const handleHideDropDown = function (e) {
            if (e.target != dropdownCat.current) {
                setIsOpen(false);
            }
        };
        
        window.addEventListener('click', handleHideDropDown)

      window.addEventListener('keyup', function (e) {
            if (e.key=='Escape') {
                setIsOpen(false);
            }
        })
        return () => {
            //clean useEffect
             window.removeEventListener('click', handleHideDropDown)
             window.removeEventListener('keyup', function (e) {
            if (e.key=='Escape') {
                setIsOpen(false);
            }
        })
            
            start = false
        };
   },[dropdownCat])
    return (
        <div  className='flex justify-center items-center
        text-md font-semibold cursor-pointer  h-20 w-full bg-gray-300'>
            <NavLink isActive={(match) => {//{match:{isExact:true}} or match=null
                 if (match==null) {
                     return false;
                }else{
                  return  match.isExact
                }
            }}  activeClassName='bg-red-500'  to='/' className='mr-12 hover:text-gray-700 '>
                Home
               </NavLink>
            <div className='relative'><span onClick={handleSelectCat}
                className='hover:text-gray-500' ref={dropdownCat}>categories</span>
                {isOpen && <div className='absolute bg-gray-900 text-gray-100 px-4 py-2 rounded'>
                    {renderCat}
                </div>}</div>
            <NavLink isActive={(match) => {
                if (match==null) {
                    return false;
                }else{
                    return match.isExact;
                }
            }} activeClassName='bg-green-500 text-green-100'
                to='/contact'
                className='ml-12 hover:text-gray-700 '>
                contact
            </NavLink>
                    <NavLink isActive={(match) => {
                if (match==null) {
                    
                }else{
                  return  match.isExact
                }
            }} activeClassName='bg-green-500 text-green-100'  to='/products/create' className='ml-12 hover:text-gray-700 '>
                add product
            </NavLink>
            <NavLink to='/cart' className='ml-12 hover:text-gray-700 '>
                Cart
            </NavLink>
        </div >
    );
}

export default NavBar;