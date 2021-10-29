import React, { forwardRef } from 'react';

const Input=forwardRef((props,ref)=> {
    return (
        <input className='border-2 border-gray-500 px-4 py-2 rounded block mb-2
        focus:ring-2 focus:ring-blue-500 focus:border-gray-100 outline-white'
            ref={ref} {...props}  />
    );
})

export default Input;

//{props:{ref:'title' ,placeholder:'title', name:''}}