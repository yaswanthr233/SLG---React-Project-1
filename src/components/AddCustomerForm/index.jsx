import './index.css'
import CustomerContext from '../../context/CustomersContext/index.jsx'
import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const AddCustomerForm = () => {
    const { addCustomer } = React.useContext(CustomerContext)
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerBalance, setCustomerBalance] = useState('');
    const [customerNotes, setCustomerNotes] = useState('');
    const [customerTotalPurchases, setCustomerTotalPurchases] = useState('');
    const [status, setStatus] = useState('');

    const onAddCustomer = (e) => {
        e.preventDefault();
        const newCustomer = {
            id:uuidv4(),
            name: customerName,
            phone: customerPhone,
            email: customerEmail,
            address: customerAddress,
            balance: customerBalance,
            notes: customerNotes,
            totalPurchases: customerTotalPurchases,
            status: status,
        } 
        setStatus(customerBalance > 0 ? "Pending" : "Paid");
        addCustomer(newCustomer);
        setCustomerName('');
        setCustomerPhone('');
        setCustomerEmail('');
        setCustomerAddress('');
        setCustomerBalance('');
        setCustomerNotes('');
        setCustomerTotalPurchases('');
        
    }
    return (
        <div className="add-customer-form-container">
            <h2 className="add-customer-title">Add Customer</h2>
            <form className="add-customer-form" onSubmit={onAddCustomer}>
                <label className="add-customer-label" htmlFor="customer-name">Customer Name</label> <br/>
                <input type="text" id="customer-name" placeholder="Customer Name" className="add-customer-input" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/><br/>
                <label className="add-customer-label" htmlFor="customer-phone">Phone Number</label><br/>
                <input type="tel" maxLength="10" id="customer-phone" placeholder="Customer Phone Number" className="add-customer-input" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)}/><br/>
                <label className="add-customer-label" htmlFor="customer-email">Email</label><br/>
                <input type="email" id="customer-email" placeholder="Customer Email" className="add-customer-input" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)}/> <br/>
                <label className="add-customer-label" htmlFor="customer-address">Address</label><br/>
                <textarea id="customer-address" placeholder="Customer Address" className="add-customer-textarea" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)}></textarea><br/>
                <label className="add-customer-label" htmlFor="customer-total-purchases">Total Purchases</label><br/>
                <input type="number" id="customer-total-purchases" placeholder="Customer Total Purchases" className="add-customer-input" value={customerTotalPurchases} onChange={(e) => setCustomerTotalPurchases(e.target.value)}/><br/>
                <label className="add-customer-label" htmlFor="customer-balance">Balance</label><br/>
                <input type="number" id="customer-balance" placeholder="Customer Balance" className="add-customer-input" value={customerBalance} onChange={(e) => setCustomerBalance(e.target.value)}/><br/>
                <label className="add-customer-label" htmlFor="customer-notes">Notes</label><br/>
                <textarea id="customer-notes" placeholder="Customer Notes" className="add-customer-textarea" value={customerNotes} onChange={(e) => setCustomerNotes(e.target.value)}></textarea><br/>
                <button type="submit" className="add-customer-button">Add Customer</button>
            </form>
        </div>
    )
}
export default AddCustomerForm;