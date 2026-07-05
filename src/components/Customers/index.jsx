import './index.css'
import { HiUsers } from "react-icons/hi2";
import AddCustomerForm from '../AddCustomerForm/index.jsx';
import { FiSearch } from "react-icons/fi";
import CustomerDetailsItem from '../CustomerDetailsItem/index.jsx';
import { useContext } from 'react';
import CustomersContext from '../context/CustomersContext/index.jsx';

const Customers = () => {
    const { customers, deleteCustomer } = useContext(CustomersContext);
    const onDeleteCustomer = (customerId) => {
        deleteCustomer(customerId);
    }

    return (
        <div className="customers-container">
            <div>
                <h1 className="customers-title">Customers</h1>
                <div className="total-customers-container">
                    <HiUsers size={45} color="#108A43" />
                    <div className="total-customers-text-container">
                    <p className="total-customers-text">Total Customers</p>
                    <span className="total-customers-count">100</span>
                    </div>
                </div>
                <div className="customers-list-container">
                    <div className="customers-list-ul">
                        <div className="customer-item-search-container">
                            <div className="customer-search-container">
                            <input type="text" placeholder="Search Customers" className="customer-search-input"/>
                            <FiSearch size={22} color="#000000" />
                            </div>
                        </div>
                        <div className="customer-header-details-container"></div>
                        <div className="customer-item-header-attributes-container">
                                <span className="customer-header-attribute">Name</span>
                                <span className="customer-header-attribute email">Email</span>
                                <span className="customer-header-attribute">Phone</span>
                                <span className="customer-header-attribute">Total Purchases</span>
                                <span className="customer-header-attribute balance">Balance</span>
                                <span className="customer-header-attribute status">Status</span>
                                <span className="customer-header-attribute">Actions</span>
                        </div>
                        <ul className="customers-items-ul">
                            {customers.map((customer) => (
                                <CustomerDetailsItem key={customer.id} customer={customer} onDeleteCustomer={onDeleteCustomer} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <AddCustomerForm />
        </div>
    )
}
export default Customers