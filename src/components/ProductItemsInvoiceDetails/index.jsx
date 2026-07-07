import './index.css'
import ProductsContext from '../context/ProductsContext/index.jsx'
import {useContext,useState} from 'react'
const ProductItemsInvoiceDetails = () =>{ 
    const {products} = useContext(ProductsContext);
    const [items,setItems] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(products.length > 0 ? products[0].id : null);
    const selectedProduct = products.find(p => p.id === selectedProductId);
    const addNewItem = (e) => {
        e.preventDefault();
    } 
    return (
        <div className="product-items-invoice-details-container">
            <h1 className="product-items-invoice-details-title">Product Items</h1>
            <table>
                <thead className="product-items-invoice-details-thead">
                    <tr>
                        <th className="product-items-invoice-details-header">Id</th>
                        <th className="product-items-invoice-details-header">Product Name</th>
                        <th className="product-items-invoice-details-header">Unit</th>
                        <th className="product-items-invoice-details-header">Qty</th>
                        <th className="product-items-invoice-details-header">Price (₹)</th>
                        <th className="product-items-invoice-details-header">Gst(%)</th>
                        <th className="product-items-invoice-details-header">Amount (₹)</th>
                    </tr>
                </thead>    
                <tbody className="product-items-invoice-details-tbody">
                    <tr>
                        <td className="product-items-invoice-details-data">1</td>
                        <td className="product-items-invoice-details-data">
                            <select className="product-items-invoice-details-select" onChange={(e) => setSelectedProductId(Number(e.target.value))}>
                                {products.map((product) => (
                                    <option key={product.id} value={product.id}>
                                        {product.name}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td className="product-items-invoice-details-data">
                            <select className="product-items-invoice-details-select">
                                <option value="box">bag</option>
                                <option value="pcs">Pcs</option>
                                <option value="kg">kg</option>
                                <option value="ml">ml</option>
                            </select>
                        </td>
                        <td className="product-items-invoice-details-data">
                            <input type="number" className="product-items-invoice-details-input-qty" placeholder="Qty"/>
                        </td>
                        <td className="product-items-invoice-details-data">
                            <p className="product-items-invoice-details-amount">₹{selectedProductId ? products.find(p => p.id === selectedProductId)?.price : ''}</p>
                        </td>
                        <td className="product-items-invoice-details-data">{selectedProductId ? products.find(p => p.id === selectedProductId)?.gst : ''}</td>
                        <td className="product-items-invoice-details-data">₹{selectedProduct? (selectedProduct.price +(selectedProduct.price * selectedProduct.gst) / 100).toFixed(2): "0.00"}</td>
                    </tr>
                </tbody>
            </table>
            <button className="product-items-invoice-details-add-item-button" onClick={addNewItem}>
                Add Item
            </button>
        </div>
    )
}
export default ProductItemsInvoiceDetails