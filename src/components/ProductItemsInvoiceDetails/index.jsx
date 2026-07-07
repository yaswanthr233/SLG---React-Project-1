import './index.css'
import ProductsContext from '../context/ProductsContext/index.jsx'
import { useContext, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";


const ProductItemsInvoiceDetails = () => {
    const { products } = useContext(ProductsContext);
    const [items, setItems] = useState([]);

    const addNewItem = (e) => {
        e.preventDefault();
        
        const defaultProduct = products.length > 0 ? products[0] : null;
        
        const newItem = {
            id: items.length + 1, 
            productId: defaultProduct ? defaultProduct.id : '',
            unit: 'bag',
            qty: 1
        };
        
        setItems([...items, newItem]);
    };

    const handleItemChange = (index, key, value) => {
        const updatedItems = [...items];
        updatedItems[index][key] = value;
        setItems(updatedItems);
    };
    const deleteItem = (e,index) =>{
        e.preventDefault();
        const afterDeleteItems = items.filter((item, i) => i !== index);
        setItems(afterDeleteItems);
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
                        <th className="product-items-invoice-details-header">Actions</th>
                    </tr>
                </thead>    
                <tbody className="product-items-invoice-details-tbody">
                    {items.map((item, index) => {
                        const currentProduct = products.find(p => p.id === Number(item.productId));
                        const price = currentProduct ? currentProduct.price : 0;
                        const gst = currentProduct ? currentProduct.gst : 0;
                        const qty = Number(item.qty) || 0;
                        const rowAmount = (price + (price * gst) / 100) * qty;

                        return (
                            <tr key={index}>
                                <td className="product-items-invoice-details-data">{index + 1}</td>
                                <td className="product-items-invoice-details-data">
                                    <select 
                                        className="product-items-invoice-details-select" 
                                        value={item.productId}
                                        onChange={(e) => handleItemChange(index, 'productId', e.target.value)}
                                    >
                                        {products.map((product) => (
                                            <option key={product.id} value={product.id}>
                                                {product.name}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                <td className="product-items-invoice-details-data">
                                    <select 
                                        className="product-items-invoice-details-select"
                                        value={item.unit}
                                        onChange={(e) => handleItemChange(index, 'unit', e.target.value)}
                                    >
                                        <option value="bag">bag</option>
                                        <option value="pcs">Pcs</option>
                                        <option value="kg">kg</option>
                                        <option value="ml">ml</option>
                                    </select>
                                </td>
                                <td className="product-items-invoice-details-data">
                                    <input 
                                        type="number" 
                                        className="product-items-invoice-details-input-qty" 
                                        placeholder="Qty"
                                        value={item.qty}
                                        min="1"
                                        onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
                                    />
                                </td>
                                <td className="product-items-invoice-details-data">
                                    <p className="product-items-invoice-details-amount">₹{price}</p>
                                </td>
                                <td className="product-items-invoice-details-data">{gst}%</td>
                                <td className="product-items-invoice-details-data">₹{rowAmount.toFixed(2)}</td>
                                <td className="product-items-invoice-details-data">
                                    <button className="product-items-invoice-details-delete-button" onClick={(e) => deleteItem(e, index)}>
                                        <MdDeleteOutline size={20} color="#ff0000" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button className="product-items-invoice-details-add-item-button" onClick={addNewItem}>
                Add Item
            </button>
        </div>
    );
};

export default ProductItemsInvoiceDetails;