import React, { use, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';


const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [LatestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    },[])

    
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Cartel is a local brand in CAMBODIA that focuses on creating high-quality products. We are committed to providing our customers with the best possible experience, and we take pride in our craftsmanship and attention to detail. Our products are made with the finest materials and are designed to last. We believe that quality should never be compromised, and we strive to exceed our customers' expectations in every way.
            
            </p>
            

        </div>
        {/* {Redering Product } */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
           {
            
            LatestProducts.map((item,index)=> (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>

            ))
           }

        </div>
      
    </div>
  )
}

export default LatestCollection
