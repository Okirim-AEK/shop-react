import React from 'react';

const Select=React.forwardRef((props,ref)=> {
    return (
        <select className='border-2 border-gray-500 px-4 py-2 rounded block
              focus:ring-2 focus:ring-blue-500 focus:border-gray-100 outline-white'
            ref={ref}>
            <option>{props.defaultSelectText}</option>
                {props.data.map((el,index) => (
                <option key={index} value={el}>{el}</option>
                ))}
            </select>
    );
})

export default Select;