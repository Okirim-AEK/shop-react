import style from '../styles/demo.module.css'
import {useContext} from 'react';
import {useParams,useHistory} from 'react-router-dom'
import useQuery from "../api/useQuery";
import CartContext from '../store/cart/CartContext';



function ProductDetail() {

  const [state,dispatch] = useContext(CartContext);

   //params:{id:6 }
  const params = useParams();
  const history = useHistory();
 
    const url = `https://fakestoreapi.com/products/${params.id}`;
 
  const [product, isLoading, error] = useQuery(url)
  const addProductToCart = ()=>{
   //product_id
   //product_qte
    dispatch({type:"ADD_PRODUCT_TO_CART",payload:{product_id:params.id,product_qte:1}})
 }

    return (
        <>
        <button className={`${style.demo} ${style.btn_back}`}
          onClick={() => history.goBack()}>back</button>
        
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
          <button onClick={addProductToCart} className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Ajouter Au Panier</button>
         
        </div>
      </div>
    </div>
          </div>
          {state.products.map((el, i) => (<div className='ml-8' key={i}>{el.product_id} {el.product_qte }</div>))}
</section>

        </>
    );
}

export default ProductDetail;
// cart: { products: [],productOnCart:0}