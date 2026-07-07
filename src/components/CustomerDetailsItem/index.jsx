import './index.css'
import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";

const CustomerDetailsItem = ({ customer, onDeleteCustomer }) => {
    // Determine dynamic status based on balance
    const statusText = customer.balance > 0 ? "Pending" : "Paid";
    const statusClass = customer.balance > 0 ? "status-pending" : "status-paid";

    return (
        <tr className="customer-row">
            <td className="customer-item-name">{customer.name}</td>
            <td className="customer-item-phone">{customer.phone}</td>
            <td className="customer-item-total-purchases">₹{customer.totalPurchases}</td>
            <td className="customer-item-balance">₹{customer.balance}</td>
            <td className="customer-item-status">
                <span className={`status-badge ${statusClass}`}>{statusText}</span>
            </td>
            <td className="customer-item-actions">
                <button className="btn-edit" title="Edit"><FiEdit size={18} color="#108A43" /></button>
                <button className="btn-delete" title="Delete" onClick={() => onDeleteCustomer(customer.id)}>
                    <FiTrash size={18} color="#FF0000" />
                </button>
            </td>
        </tr>
    )
}
export default CustomerDetailsItem;