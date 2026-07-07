import './index.css'
import React from 'react'
import CustomerContext from '../context/CustomersContext/index.jsx'
import { useContext,useState } from 'react'
const CustomerInvoiceDetails = () => {
    const { customers } = useContext(CustomerContext)
    const [customerName, setCustomerName] = useState('')
    const [customerId, setCustomerId] = useState(1)
    
    return (
        <div className="customer-details-invoice-container">
            <h1 className="customer-details-title">Customer Details</h1>
            <p className="select-customer">Customer</p>
                <select className="customer-select" value={customerId} onChange={(e) => setCustomerId(e.target.value)}>
                {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>{customer.name}</option>
                ))}  
                </select>
            <input type="text" placeholder="Phone Number" className="customer-phone-input" value={customers.find((customer) => customer.id == customerId)?.phone || ''} />
            <input type="text" placeholder="Email" className="customer-email-input" value={customers.find((customer) => customer.id == customerId)?.email || ''} />
        </div>
    )
}
export default CustomerInvoiceDetails