const Product = (props) => {
 
    return (<>
        
        <>
            <div className=' bg-cover w-10/12 h-48' style={{ backgroundImage: `url(${props.urlImage})` }}>
           </div>
            <div className='text-gray-700 text-lg font-bold'>{props.name }  </div>
            <div className='bg-purple-500 px-4 py-2 text-purple-100 rounded'>{props.price } DA</div>
    </>
    </>)
}

export default Product