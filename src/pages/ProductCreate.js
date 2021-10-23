import React from 'react';
import axios from 'axios';
import useQuery from '../api/useQuery';
import Input from '../utils/Input';
import Select from '../utils/Select';
function ProductCreate() {
    const title = React.useRef(null);
    const price = React.useRef(null);
    const description = React.useRef(null);
    const image = React.useRef(null);
    const category = React.useRef(null);

     const url = 'https://fakestoreapi.com/products/categories';

    const [categories, isLoading, error] = useQuery(url);
 
    const addProduct = () => {
         const titleValue = title.current.value;
        const priceValue = price.current.value;
        const descriptionValue = description.current.value;
        const imageValue = image.current.value;
        const categoryValue = category.current.value;
        const data={
            title: titleValue,
            price:priceValue,
            description: descriptionValue,
            image: imageValue,
            category:categoryValue
        }
        axios
            .post('https://fakestoreapi.com/products', data)
             .then((res)=>console.log(res))
    }
    return (
        <div className='m-4'>
            <Input type='text' placeholder='title' ref={ title} />
            <Input type='text' placeholder='price' ref={ price} />
            <Input type='text' placeholder='description' ref={ description} />
            <Input type='text' placeholder='image' ref={ image} />
            <Select label='select category' data={categories} ref={category} />
            <button className='bg-green-500 px-4 py-2 rounded block mt-2'
                onClick={addProduct}>save</button>
            
        </div>
    );
}

export default ProductCreate;