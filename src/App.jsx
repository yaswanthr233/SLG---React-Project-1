import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/index.jsx'
import Dashboard from './pages/Dashboard/index.jsx'
import Products from './pages/Products/index.jsx'
import Billing from './pages/Billing/index.jsx'
import Customers from './pages/Customers/index.jsx'

import { Routes, Route } from 'react-router'
import { useState,useEffect } from 'react'

import ProductsContext from './components/context/ProductsContext/index.jsx'
import CustomersContext from './components/context/CustomersContext/index.jsx'
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

const initialCustomers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: "+91 6304999999",
    totalPurchases: 1000,
    balance: 500,
    status: "Active",
    customerNotes: "Regular customer, prefers cash payments.",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    email: "ravikumar@gmail.com",
    phone: "+91 9876543210",
    totalPurchases: 24500,
    balance: 3500,
    status: "Active",
    customerNotes: "Customer has been with us for over a year.",
  },
  {
    id: 3,
    name: "Suresh Reddy",
    email: "suresh.reddy@gmail.com",
    phone: "+91 9123456789",
    totalPurchases: 18200,
    balance: 0,
    status: "Paid",
    customerNotes: "First-time customer, interested in credit options.",
  },
  {
    id: 4,
    name: "Anil Kumar",
    email: "anilkumar@gmail.com",
    phone: "+91 9012345678",
    totalPurchases: 32800,
    balance: 6800,
    status: "Pending",
    customerNotes: "Customer is interested in installment plans.",
  },
  {
    id: 5,
    name: "Mahesh Babu",
    email: "maheshbabu@gmail.com",
    phone: "+91 9988776655",
    totalPurchases: 8450,
    balance: 1200,
    status: "Active",
    customerNotes: "Customer has been with us for over a year.",
  },
  {
    id: 6,
    name: "Prakash Naidu",
    email: "prakash.naidu@gmail.com",
    phone: "+91 9393939393",
    totalPurchases: 15600,
    balance: 0,
    status: "Paid",
    customerNotes: "Customer has made a large purchase.",
  },
  {
    id: 7,
    name: "Venkatesh Rao",
    email: "venkateshrao@gmail.com",
    phone: "+91 9555566666",
    totalPurchases: 41200,
    balance: 9200,
    status: "Pending",
    customerNotes: "Customer is interested in installment plans.",
  },
  {
    id: 8,
    name: "Lakshmi Narayana",
    email: "lakshmi.narayana@gmail.com",
    phone: "+91 9444455555",
    totalPurchases: 22450,
    balance: 2500,
    status: "Active",
    customerNotes: "Regular customer, prefers cash payments.",
  },
  {
    id: 9,
    name: "Sai Krishna",
    email: "saikrishna@gmail.com",
    phone: "+91 9888811111",
    totalPurchases: 13500,
    balance: 0,
    status: "Paid",
    customerNotes: "First-time customer, interested in credit options.",
  },
  {
    id: 10,
    name: "Ramesh Gupta",
    email: "rameshgupta@gmail.com",
    phone: "+91 9777722222",
    totalPurchases: 27800,
    balance: 4800,
    status: "Pending",
    customerNotes: "Customer has been with us for over a year.",
  },
];

function App() {
  const storedProducts = localStorage.getItem("products");
  const [products, setProducts] = useState(storedProducts
    ? JSON.parse(storedProducts)
    : initialProducts);
  const [productsCount, setProductsCount] = useState(0);
  useEffect(() => {
    setProductsCount(products.length);
  }, [products]);
  const addProduct = (product) => {
    setProducts([...products, product]);
  }
  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  } 
  
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  },[products])


  const storedCustomers = localStorage.getItem("customers");
  const [customers, setCustomers] = useState(storedCustomers
    ? JSON.parse(storedCustomers)
    : initialCustomers);
  const [customersCount, setCustomersCount] = useState(0);
  useEffect(() => {
    setCustomersCount(customers.length);
  }, [customers]);
  const addCustomer = (customer) => {
    setCustomers([...customers, customer]);
  }
  const deleteCustomer = (customerId) => {
    setCustomers(customers.filter((customer) => customer.id !== customerId));
  } 
  const updateCustomer = (updatedCustomer) => {
    setCustomers(customers.map((customer) => customer.id === updatedCustomer.id ? updatedCustomer : customer));
  }

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  },[customers])


  
  return (
    <div className="app-container">
      <Sidebar/>
      <CustomersContext.Provider value={{ customers, customersCount, addCustomer, updateCustomer, deleteCustomer }}>
      <ProductsContext.Provider value={{ products, addProduct, deleteProduct, productsCount }}>
      <Routes>
           <Route path="/" element={<Dashboard />} />
           <Route path="/products" element={<Products />} />
           <Route path="/billing" element={<Billing />} />
           <Route path="/customers" element={<Customers />} />
      </Routes>
      </ProductsContext.Provider>
      </CustomersContext.Provider>
    </div>
  )
}

export default App
