import { React, useEffect, useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";

const Home = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>{console.log("---",data); setData(data)})
        .catch((err)=>{console.log(err.message);})
    },[]);

  return (
    <div>
      <Header/>
      <div>
        <h1>Hola mundo</h1>
        <div>
            {data.map((data)=>(
                <ProductCard key={data.id} data={data}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
