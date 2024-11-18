import Product from "./components/product";
import './App.css'
import { useState, useEffect } from "react";

function App() {

  const [products, setProducts] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')

      const products = await response.json()

      setProducts(products)
    } catch (error){
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
      <div className="App">
      {products.map((product) => (
        <Product key = {product.id} product = {product}/>
      ))}
    </div>
  );
}

export default App;
