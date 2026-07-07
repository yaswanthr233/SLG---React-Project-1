import './index.css'
import { HiUsers } from "react-icons/hi2";
import AddCustomerForm from '../../components/AddCustomerForm/index.jsx';
import { FiSearch } from "react-icons/fi";
import CustomerDetailsItem from '../../components/CustomerDetailsItem/index.jsx';
import { useContext ,useState} from 'react';
import CustomersContext from '../../components/context/CustomersContext/index.jsx';

const Customers = () => {
    const { customers, deleteCustomer } = useContext(CustomersContext);
    const [searchCustomers, setSearchCustomers] = useState('');
    const onDeleteCustomer = (customerId) => {
        deleteCustomer(customerId);
    }
    const onGetCustomers = (e) => {
        setSearchCustomers(e.target.value);
    }
    const filteredCustomers = customers.filter((customer) =>
        customer.name.toLowerCase().includes(searchCustomers.toLowerCase())
    );

    return (
        <div className="customers-container">
            <div className="customers-main-content">
                <h1 className="customers-title">Customers</h1>
                <div className="total-customers-container">
                    <HiUsers size={30} color="#108A43" />
                    <div className="total-customers-text-container">
                        <p className="total-customers-text">Total Customers</p>
                        <span className="total-customers-count">{customers.length}</span>
                    </div>
                </div>
                <div className="customers-list-container">
                    <div className="customer-item-search-container">
                        <div className="customer-search-container">
                            <input type="text" placeholder="Search Customers" className="customer-search-input" onChange={onGetCustomers} value={searchCustomers} />
                            <FiSearch size={22} color="#000000" />
                        </div>
                    </div>
                    <table className="customers-table">
                        <thead className="customer-item-header">
                            <tr>
                                <th className="customer-item-header-attribute">Name</th>
                                <th className="customer-item-header-attribute">Phone</th>
                                <th className="customer-item-header-attribute">Total Purchases</th>
                                <th className="customer-item-header-attribute balance">Balance</th>
                                <th className="customer-item-header-attribute status">Status</th>
                                <th className="customer-item-header-attribute">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="customer-item-header-attributes-container">
                            {filteredCustomers.map((customer) => (
                                <CustomerDetailsItem key={customer.id} customer={customer} onDeleteCustomer={onDeleteCustomer} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <AddCustomerForm />
        </div>
    )
}
export default Customers;