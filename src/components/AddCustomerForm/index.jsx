import './index.css'
import CustomerContext from '../context/CustomersContext/index.jsx'
import React from 'react'
import { useState } from 'react'
const AddCustomerForm = () => {
    const { addCustomer } = React.useContext(CustomerContext)
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerBalance, setCustomerBalance] = useState('');
    const [customerNotes, setCustomerNotes] = useState('');

    const onAddCustomer = (e) => {
        e.preventDefault();
        const customerName = e.target.elements['customer-name'].value;
        const customerPhone = e.target.elements['customer-phone'].value;
        const customerEmail = e.target.elements['customer-email'].value;
        const customerAddress = e.target.elements['customer-address'].value;
        const customerBalance = e.target.elements['customer-balance'].value;
        const customerNotes = e.target.elements['customer-notes'].value;
        addCustomer({ customerName, customerPhone, customerEmail, customerAddress, customerBalance, customerNotes });
        setCustomerName('');
        setCustomerPhone('');
        setCustomerEmail('');
        setCustomerAddress('');
        setCustomerBalance('');
        setCustomerNotes('');
        
    }
    return (
        <div className="add-customer-form-container">
            <h2 className="add-customer-title">Add Customer</h2>
            <form className="add-customer-form" onSubmit={onAddCustomer}>
                <label className="add-customer-label" htmlFor="customer-name">Customer Name</label> <br/>
                <input type="text" id="customer-name" placeholder="Customer Name" className="add-customer-input" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/><br/>
                <label className="add-customer-label" htmlFor="customer-phone">Phone Number</label><br/>
                <input type="tel" id="customer-phone" placeholder="Customer Phone Number" className="add-customer-input" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)}/><br/>
                <label className="add-customer-label" htmlFor="customer-email">Email</label><br/>
                <input type="email" id="customer-email" placeholder="Customer Email" className="add-customer-input" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)}/> <br/>
                <label className="add-customer-label" htmlFor="customer-address">Address</label><br/>
                <textarea id="customer-address" placeholder="Customer Address" className="add-customer-textarea" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)}></textarea><br/>
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