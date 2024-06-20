import { React } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductSummary from "./ProductSummary";
import BarRegistrer from "./BarRegistrer";

const Home = () => {
  return (
    <>
      <div className="containerHome">
        <Header />
        <BarRegistrer/>
        <h3 className="titleSummary">¡Productos destacados de la semana!</h3>
        <ProductSummary />
        <Footer />
      </div>
    </>
  );
};

export default Home;
