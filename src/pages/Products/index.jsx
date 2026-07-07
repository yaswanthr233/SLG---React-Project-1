import './index.css'
import { BsFillHandbagFill } from "react-icons/bs";
import AddProductsForm from '../../components/AddProductsForm/index.jsx';
import { useState } from 'react';
import React from 'react';
import ProductsContext from '../../components/context/ProductsContext/index.jsx';

const Products = () => {
    const {products, deleteProduct,productsCount} = React.useContext(ProductsContext)
    return(
        <div className="products-container">
            <div>
            <h1 className="products-title">Products</h1>
               <div className="total-products-container">
                <BsFillHandbagFill size={45} color="#1B8343" />
                <div className="total-products-text-container">
                    <span className="total-products-text">Total Products</span>
                    <span className="total-products-count">{productsCount}</span>
                </div>
              </div>
              <div className="products-list-container">
                 <ul className="products-list-ul">
                    {products.map((product) => (
                        <li key={product.id} className="products-list-li">
                            <img className="product-image" src={product.imgUrl} alt={product.name} />
                            <div className="product-details-container">
                                <div className="product-info-container">
                                   <h3 className="product-name">{product.name}</h3>
                                   <p className="product-brand">Brand: {product.brand}</p>
                                   <p className="product-stock">Stock: {product.stock}</p>
                                   <p className="product-unit">Unit: {product.unit}</p>
                                   <p className="product-gst">GST: {product.gst}%</p>
                                </div>
                                <div>
                                    {product.stock > 0 && (
                                <p className="product-in-stock">In Stock</p>
                            )}
                            {product.stock === 0 && (
                                <p className="product-out-of-stock">Out of Stock</p>
                            )
                            }
                                </div>
                            </div>
                            <div className="product-price-delete-container">
                                <h1 className="product-price">₹ {product.price}</h1>
                                <button className="product-delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                 </ul>
              </div>
            </div>
            <AddProductsForm />
        </div>
    )
}
export default Products