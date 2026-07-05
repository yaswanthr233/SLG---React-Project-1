import './index.css'
import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";

const CustomerDetailsItem = ({ customer, onDeleteCustomer }) => {
    return (
        <li className="customer-item">
            <span className="customer-item-name">{customer.name}</span>
               <span className="customer-item-email">{customer.email}</span> 
            <span className="customer-item-phone">{customer.phone}</span>
            <span className="customer-item-total-purchases">${customer.totalPurchases}</span>
            <span className="customer-item-balance">${customer.balance}</span>
            <span className="customer-item-status">{customer.status}</span>
            <span className="customer-item-actions">
                <button className="btn-edit"><FiEdit size={20} color="#108A43" /></button>
                <button className="btn-delete" onClick={() => onDeleteCustomer(customer.id)}>
                    <FiTrash size={20} color="#FF0000" />
                </button>
            </span>
        </li>
    )
}
export default CustomerDetailsItem