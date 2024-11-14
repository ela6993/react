import Product from "./components/product";
import './App.css'

function App() {
  // const product = {
  //   id: 1, product_name: "iPhone 12", price: 100000
  // }

  const products = [
    {id: 2, product_name: "iPhone 13", description: "Device", price: 100000, img: "https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1a_Desert_Titanium_Color__TH-TH.jpg?v=1725928582&width=823"},
    {id: 3, product_name: "iPhone 14", description: "Device", price: 100000, img: "https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1a_Desert_Titanium_Color__TH-TH.jpg?v=1725928582&width=823"},
    {id: 1, product_name: "iPhone 12", description: "Device", price: 100000, img: "https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1a_Desert_Titanium_Color__TH-TH.jpg?v=1725928582&width=823"}
  ]

  return (
    <div className="App">
      {products.map((product) => (
        <Product key = {product.id} product = {product}/>
      ))}
    </div>
  );
}

export default App;
