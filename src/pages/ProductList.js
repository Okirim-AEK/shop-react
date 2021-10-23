import Product from "../components/Product";
import Load from "../utils/Load";
import { Link,useParams } from "react-router-dom";
import useQuery from "../api/useQuery";
function ProductList() {

    const { category } = useParams()
    let url;
    if (category) {
        url=`https://fakestoreapi.com/products/category/${category}`
    }else{
        url = 'https://fakestoreapi.com/products'; 
    }
    const [products,isLoading,error]=useQuery(url)
    if (isLoading) {
        return <Load />
    }
    if (error) {
        return <div className=' flex justify-center items-center w-screen h-screen text-red-500'>
            <div className='text-2xl'>{error}</div>
        </div>
    }
    return ( <>
        <div className='flex m-4 justify-center space-x-4 space-y-8 items-center  flex-wrap'>
            {
                products.map((product, i) => {
                    return (
                        <Link
                            className='h-100 flex w-1/4 flex-col justify-center items-center '
                            key={i}
                            to={`/products/${product.id}`}>
                        <Product urlImage={product.image} name={product.title} price={product.price} />
                    </Link>)
              })
            }
        </div>
    </>
    )
}//end
export default ProductList;