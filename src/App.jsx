import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/index.jsx'
import Dashboard from './components/Dashboard/index.jsx'
import Products from './components/Products/index.jsx'
import Billing from './components/Billing/index.jsx'
import { Routes, Route } from 'react-router'
import { useState,useEffect } from 'react'
import ProductsContext from './components/ProductsContext/index.jsx'
import "@fontsource/poppins";


const initialProducts = [
  {
    id: 1,
    name: "Urea 46%",
    brand: "IFFCO",
    price: 266,
    stock: 120,
    unit: "Bag",
    gst: 5,
    imgUrl: "https://res.cloudinary.com/duokznlha/image/upload/v1783171638/Seawinner-Microbial-Fertilizer-Synergy-Bio-Fertilizer_p6ao44.avif",
  },
  {
    id: 2,
    name: "DAP 18:46:0",
    brand: "Coromandel",
    price: 1350,
    stock: 65,
    unit: "Bag",
    gst: 5,
    imgUrl: "https://res.cloudinary.com/duokznlha/image/upload/v1783171638/Seawinner-Microbial-Fertilizer-Synergy-Bio-Fertilizer_p6ao44.avif",
  },
  {
    id: 3,
    name: "MOP",
    brand: "Tata",
    price: 1680,
    stock: 42,
    unit: "Bag",
    gst: 5,
    imgUrl: "https://res.cloudinary.com/duokznlha/image/upload/v1783171638/Seawinner-Microbial-Fertilizer-Synergy-Bio-Fertilizer_p6ao44.avif",
  },
  {
    id: 4,
    name: "NPK 20:20:0:13",
    brand: "IFFCO",
    price: 1450,
    stock: 58,
    unit: "Bag",
    gst: 5,
    imgUrl: "https://res.cloudinary.com/duokznlha/image/upload/v1783171638/Seawinner-Microbial-Fertilizer-Synergy-Bio-Fertilizer_p6ao44.avif",
  },
  {
    id: 5,
    name: "NPK 19:19:19",
    brand: "UPL",
    price: 980,
    stock: 34,
    unit: "Bag",
    gst: 5,
    imgUrl: "https://res.cloudinary.com/duokznlha/image/upload/v1783171638/Seawinner-Microbial-Fertilizer-Synergy-Bio-Fertilizer_p6ao44.avif",
  },
  {
    id: 6,
    name: "Zinc Sulphate",
    brand: "Aries",
    price: 520,
    stock: 80,
    unit: "Bag",
    gst: 5,
    imgUrl: "https://res.cloudinary.com/duokznlha/image/upload/v1783171638/Seawinner-Microbial-Fertilizer-Synergy-Bio-Fertilizer_p6ao44.avif",
  },
  {
    id: 7,
    name: "Gypsum",
    brand: "Coromandel",
    price: 340,
    stock: 90,
    unit: "Bag",
    gst: 5,
    imgUrl: "https://res.cloudinary.com/duokznlha/image/upload/v1783171638/Seawinner-Microbial-Fertilizer-Synergy-Bio-Fertilizer_p6ao44.avif",
  },
  {
    id: 8,
    name: "Boron 20%",
    brand: "Crystal",
    price: 420,
    stock: 50,
    unit: "Bottle",
    gst: 12,
    imgUrl: "https://res.cloudinary.com/duokznlha/image/upload/v1783171638/Seawinner-Microbial-Fertilizer-Synergy-Bio-Fertilizer_p6ao44.avif",
  },
  {
    id: 9,
    name: "Calcium Nitrate",
    brand: "Syngenta",
    price: 760,
    stock: 40,
    unit: "Bag",
    gst: 5,
    imgUrl: "https://res.cloudinary.com/duokznlha/image/upload/v1783171638/Seawinner-Microbial-Fertilizer-Synergy-Bio-Fertilizer_p6ao44.avif",
  },
  {
    id: 10,
    name: "Magnesium Sulphate",
    brand: "BASF",
    price: 650,
    stock: 38,
    unit: "Bag",
    gst: 5,
    imgUrl: "https://res.cloudinary.com/duokznlha/image/upload/v1783171638/Seawinner-Microbial-Fertilizer-Synergy-Bio-Fertilizer_p6ao44.avif",
  },
];


function App() {
  const storedProducts = localStorage.getItem("products");
  const [products, setProducts] = useState(storedProducts
    ? JSON.parse(storedProducts)
    : initialProducts);
  const addProduct = (product) => {
    setProducts([...products, product]);
  }
  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  } 
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  },[products])
  return (
    <div className="app-container">
      <Sidebar/>
      <ProductsContext.Provider value={{ products, addProduct, deleteProduct }}>
      <Routes>
           <Route path="/" element={<Dashboard />} />
           <Route path="/products" element={<Products />} />
           <Route path="/billing" element={<Billing />} />
      </Routes>
      </ProductsContext.Provider>
    </div>
  )
}

export default App
