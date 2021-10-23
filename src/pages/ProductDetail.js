import React from 'react';
import {useParams,useHistory} from 'react-router-dom'
import useQuery from "../api/useQuery";
function ProductDetail() {
    const {id} = useParams();
  const history = useHistory();

    const url = `https://fakestoreapi.com/products/${id}`;
 
const [product,isLoading,error]=useQuery(url)
    return (
        <>
        <button className='bg-green-500 text-green-100 rounded px-4 py-2 ml-4 mt-2'
          onClick={()=>history.goBack()}>back</button>
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.image} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{ product.category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{ product.title}</h1>
        
                            <p className="leading-relaxed">{ product.description}</p>
     
        <div className="flex mt-8">
                                <span className="title-font font-medium text-2xl text-gray-900">{ product.price} $</span>
          <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Ajouter Au Panier</button>
         
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
}

export default ProductDetail;