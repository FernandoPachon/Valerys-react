import {React,useState,useEffect} from 'react'
import Header from './Header';
import ProductCard from './ProductCard';

const Products = () => {

    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>{console.log("---",data); setData(data)})
        .catch((err)=>{console.log(err.message);})
    },[]);

  return (
    <div>
      <Header />
      <div>
        <div>
            {data.map((data)=>(
                <ProductCard key={data.id} data={data}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products