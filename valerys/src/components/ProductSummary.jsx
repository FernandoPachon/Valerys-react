import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const ProductSummary = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>{console.log("---",data); setData(data)})
        .catch((err)=>{console.log(err.message);})
    },[]);
  return (
    <div className="containerProduct">
        <div className="containerProductSummary">
        {data.slice(0, 5).map((data)=>(
                <ProductCard key={data.id} data={data}/>
            ))}
        </div>
        <div className="containerProductSummaryTablet">
        {data.slice(0, 4).map((data)=>(
                <ProductCard key={data.id} data={data}/>
            ))}
        </div>
        <div className="containerProductSummaryMobile">
        {data.slice(0, 3).map((data)=>(
                <ProductCard key={data.id} data={data}/>
            ))}
        </div>
      </div>
  )
}

export default ProductSummary