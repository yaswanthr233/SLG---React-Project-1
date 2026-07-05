import './index.css'
import { useState } from 'react';
import React from 'react';
import { useContext } from 'react';
import ProductsContext from '../context/ProductsContext/index.jsx';
import {v4 as uuid} from 'uuid';
const AddProductsForm = () => {
    const {addProduct} = useContext(ProductsContext);
    
    const onAddProduct = (event) => {
        event.preventDefault();
        const productName = event.target.elements['product-name'].value;
        const brandName = event.target.elements['brand-name'].value;
        const unit = event.target.elements['unit'].value;
        const stock = event.target.elements['product-stock'].value;
        const cost = event.target.elements['cost'].value;
        const gst = event.target.elements['gst'].value;

        const newProduct = {
            id: uuid(),
            name: productName,
            brand: brandName,
            price: parseFloat(cost),
            stock: parseInt(stock),
            unit: unit,
            gst: parseFloat(gst),
            imgUrl: event.target.elements['image-url'].value
        };

        addProduct(newProduct);
    }
  return (
    <div className="add-product-container">
                <h1 className="products-title">Add Product</h1>
                <form onSubmit={onAddProduct}>
                    <label className="add-product-label" htmlFor="product-name">Product Name</label>
                    <input className="add-product-input" type="text" id="product-name" name="product-name" placeholder="Enter product name" /> <br/>
                    <label className="brand-name-label" htmlFor="brand-name">Brand Name</label>
                    <select className="brand-name-select" id="brand-name" name="brand-name">
                        <option value="tata">Select a brand</option>
                        <option value="synergy">Synergy agro chemicals</option>
                        <option value="parijat">Parijat industries pvt Ltd</option>
                        <option value="dhanuka">Dhanuka agriteck limited</option>
                        <option value="pi">Pi industries Ltd</option>
                        <option value="tata">Tata industries Ltd</option>
                        <option value="crystal">Crystal crop protection ltd</option>
                        <option value="indofel">Indofel industries Ltd</option>
                        <option value="bayer">Bayer industries Ltd</option>
                        <option value="adama">Adama india private limited</option>
                        <option value="coramand">Coramand international limited</option>
                        <option value="basf">BASF</option>
                        <option value="croteva">Croteva</option>
                        <option value="upl">Upl</option>
                        <option value="fmc">FMC</option>
                        <option value="syngenta">Syngenta</option>
                        <option value="aries">Aries agri products</option>
                    </select>
                    <div className="product-price-stock-container">
                        <div>
                            <label className="unit-selling-label" htmlFor="unit">Unit</label>
                            <input className="unit-selling-input" type="number" id="unit" name="unit" placeholder="Enter unit" />
                        </div>
                        <div>
                            <label className="product-stock-label" htmlFor="product-stock">Stock</label>
                            <input className="product-stock-input" type="number" id="product-stock" name="product-stock" placeholder="Enter stock" />
                        </div>
                    </div>
                    <div className="cost-gst-container">
                        <div>
                            <label className="cost-label" htmlFor="cost">Cost (₹)</label>
                            <input className="cost-input" type="number" id="cost" name="cost" placeholder="Enter cost" />
                        </div>
                        <div>
                            <label className="gst-label" htmlFor="gst">GST (%)</label>
                            <input className="gst-input" type="number" id="gst" name="gst" placeholder="Enter GST" />
                        </div>
                    </div>
                    <label className="image-url-label" htmlFor="image-url">Image URL</label>
                    <input className="image-url-input" type="text" id="image-url" name="image-url" placeholder="Enter image URL" />
                    <button className="add-product-button" type="submit">Add Product</button>
                </form>
            </div>
  )
}
export default AddProductsForm