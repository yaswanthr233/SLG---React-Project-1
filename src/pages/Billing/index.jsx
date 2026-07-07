import './index.css'
import CustomerInvoiceDetails from '../../components/CustomerInvoiceDetails/index.jsx'
import InvoiceDetails from '../../components/InvoiceDetails/index.jsx'
import ProductItemsInvoiceDetails from '../../components/ProductItemsInvoiceDetails/index.jsx'
const Billing = () => {
    return (
        <div className="billing-container">
            <h1 className="billing-title">Billing</h1>
            <form className="billing-form">
                <div className='billing-form-left'>
                    <div className="customer-invoice-details-container">
                        <CustomerInvoiceDetails />
                        <InvoiceDetails />
                    </div>
                    <ProductItemsInvoiceDetails/>
                </div>
                
            </form>
        </div>
    )
}
export default Billing