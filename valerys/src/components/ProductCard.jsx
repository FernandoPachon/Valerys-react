import React from "react";
import estilos from "../App.css";
const ProductCard = ({ data }) => {
  return (
    <>
      <div className="containerProductCard" style={estilos}>
        <img className="imgProductCard" src={data.image} alt="" style={{ width: "100px" }} />
        <h2 className="titleProductCard">{data.title}</h2>
        {/* <p className="infoProductCard">{data.description}</p> */}
        <p className="priceProductCard">${data.price}</p>
        <button className="btnProductCard">Comprar</button>
      </div>
      <br />
    </>
  );
};

export default ProductCard;
