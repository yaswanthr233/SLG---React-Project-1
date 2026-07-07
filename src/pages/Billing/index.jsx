import './index.css'
import { useContext, useState, useEffect } from 'react'
import CustomersContext from '../../components/context/CustomersContext/index.jsx'
import ProductsContext from '../../components/context/ProductsContext/index.jsx'
import { MdDeleteOutline } from "react-icons/md"
import InvoicePrintTemplate from '../../components/InvoicePrintTemplate/index.jsx'

const Billing = () => {
    const { customers } = useContext(CustomersContext);
    const { products } = useContext(ProductsContext);
    
    const [customerId, setCustomerId] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [discount, setDiscount] = useState(0);
    const [items, setItems] = useState([]);
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        if (customers && customers.length > 0) {
            setCustomerId(customers[0].id);
        }
    }, [customers]);

    const activeCustomer = customers.find((customer) => String(customer.id) === String(customerId));

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

    const deleteItem = (e, index) => {
        e.preventDefault();
        const afterDeleteItems = items.filter((item, i) => i !== index);
        setItems(afterDeleteItems);
    };

    const computedItemsList = items.map(item => {
        const currentProduct = products.find(p => p.id === Number(item.productId));
        const price = currentProduct ? currentProduct.price : 0;
        const gst = currentProduct ? currentProduct.gst : 0;
        const qty = Number(item.qty) || 0;
        const rowAmount = (price + (price * gst) / 100) * qty;
        
        return {
            ...item,
            name: currentProduct?.name || 'Unknown',
            price,
            gst,
            rowAmount
        };
    });

    const totalAmount = computedItemsList.reduce((total, item) => total + item.rowAmount, 0);
    const safeDiscount = Number(discount) || 0;
    const netTotalAmount = Math.max(0, totalAmount - safeDiscount);
    const paidAmount = paymentMethod === 'credit' ? 0 : netTotalAmount;
    const balanceAmount = paymentMethod === 'credit' ? netTotalAmount : 0;

    const onClearInvoice = (e) => {
        e.preventDefault();
        setItems([]);
        if (customers.length > 0) setCustomerId(customers[0].id);
        setPaymentMethod('cash');
        setDiscount(0);
        setInvoiceNumber('');
        setDueDate('');
    };

    const onPrintInvoice = (e) => {
        e.preventDefault();
        if(!customerId || !paymentMethod || items.length === 0){
            alert("Please fill all the required fields and add at least one product item before printing the invoice.");
        } else {
            window.print();
        }
    };

    return (
        <div className="billing-container">
            <h1 className="billing-title">Billing</h1>
            <form className="billing-form">
                <div className="billing-form-left">
                    <div className="customer-invoice-details-container">
                        <div className="customer-details-invoice-container">
                            <h1 className="customer-details-title">Customer Details</h1>
                            <p className="select-customer">Customer</p>
                            
                            <select 
                                className="customer-select" 
                                value={customerId} 
                                onChange={(e) => setCustomerId(e.target.value)}
                            >
                                <option value="" disabled>Select a customer</option>
                                {customers.map((customer) => (
                                    <option key={customer.id} value={customer.id}>
                                        {customer.name}
                                    </option>
                                ))}  
                            </select>

                            <input 
                                type="text" 
                                placeholder="Phone Number" 
                                className="customer-phone-input" 
                                value={activeCustomer?.phone || ''} 
                                readOnly
                            />
                            <input 
                                type="text" 
                                placeholder="Email" 
                                className="customer-email-input" 
                                value={activeCustomer?.email || ''} 
                                readOnly
                            />
                        </div>
                        
                        <div className="invoice-details-container">
                            <h1 className="invoice-details-title">Invoice Details</h1>
                            <div className="invoice-row-field">
                                <span className="invoice-label">Invoice No:</span>
                                <input type="text" placeholder="Invoice Number" className="invoice-number-input" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
                            </div>
                            <div className="invoice-row-field">
                                <span className="invoice-label">Date:</span>
                                <input type="date" className="invoice-date-input" defaultChecked />
                            </div>
                            <div className="invoice-row-field">
                                <span className="invoice-label">Payment Method:</span>
                                <select className="payment-type-input" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                                    <option value="cash">Cash</option>
                                    <option value="online">Online</option>
                                    <option value="credit">Credit</option>
                                </select>
                            </div>
                            <div className="invoice-row-field">
                                <span className="invoice-label">Due Date:</span>
                                <input type="date" className="due-date-input" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className="product-items-invoice-details-container">
                        <h1 className="product-items-invoice-details-title">Product Items</h1>
                        <table className="billing-products-table">
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
                                {computedItemsList.map((item, index) => {
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
                                                <p className="product-items-invoice-details-amount">₹{item.price}</p>
                                            </td>
                                            <td className="product-items-invoice-details-data">{item.gst}%</td>
                                            <td className="product-items-invoice-details-data">₹{item.rowAmount.toFixed(2)}</td>
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
                </div>
                
                <div className="billing-form-right">
                    <h1 className="billing-summary-title">Summary</h1>
                    <p className="billing-summary-text">Sub Total (₹): <span className='span-billing-summary-text'>{totalAmount.toFixed(2)}</span></p>
                    <div className="billing-summary-discount-container">
                        <label className="billing-summary-label" htmlFor="discount">Discount (₹):</label>
                        <input 
                            type="number" 
                            className="billing-summary-input" 
                            id="discount"
                            placeholder="Enter discount"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value ? parseFloat(e.target.value) : 0)}
                        />
                    </div>
                    <p className="billing-summary-text">Total Amount (₹): <span className='span-billing-total-amount'>{netTotalAmount.toFixed(2)}</span></p>
                    <p className="billing-summary-text">Paid Amount (₹): <span className='span-billing-paid-amount'>{paidAmount.toFixed(2)}</span></p>
                    <p className="billing-summary-text">Balance Amount (₹): <span className='span-billing-balance-amount'>{balanceAmount.toFixed(2)}</span></p>
                    <div className="billing-btns-container">
                        <button className="billing-summary-print-invoice-button" onClick={onPrintInvoice}>Print Invoice</button>
                        <button className="billing-summary-clear-button" onClick={onClearInvoice}>Clear</button>
                    </div>
                </div>
            </form>
            <div className="invoice-print-template-container">
                <InvoicePrintTemplate 
                    invoiceNumber={invoiceNumber} 
                    paymentType={paymentMethod} 
                    dueDate={dueDate} 
                    activeCustomer={activeCustomer} 
                    items={computedItemsList} 
                    discount={safeDiscount}
                />
            </div>
        </div>
    );
};

export default Billing;