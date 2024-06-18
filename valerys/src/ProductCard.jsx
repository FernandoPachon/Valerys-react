import React from 'react'

const ProductCard = ({data}) => {
  return (
    <div>
        <img src={data.image} alt="" style={{width:'100px'}}/>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>{data.price}</p>
    </div>
  )
}

export default ProductCard