import { createContext } from "react";
const CustomersContext = createContext(
    {
    customers: [],
    customersCount: 0,
    addCustomer: () => {},
    updateCustomer: () => {},
    deleteCustomer: () => {}
}
)
export default CustomersContext