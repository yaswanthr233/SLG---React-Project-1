import './index.css'
const InvoiceDetails = () => {
    return (
        <div className="invoice-details-container">
            <h1 className="invoice-details-title">Invoice Details</h1>
            <div className="invoice-number-container">
                <span className="invoice-label">Invoice No:</span><input type="text" placeholder="Invoice Number" className="invoice-number-input" />
            </div>
            <div className="invoice-date-container">
                <span className="invoice-label">Date:</span><input type="date" placeholder="Invoice Date" className="invoice-date-input" />
            </div>
            <div className="payment-method-container">
                <span className="invoice-label">Payment Method:</span>
                <select className="payment-type-input">
                    <option value="cash">Cash</option>
                    <option value="online">Online</option>
                    <option value="credit">Credit</option>
                </select>
            </div>
            <div className="due-date-container">
                <span className="invoice-label">Due Date:</span><input type="date" placeholder="Due Date" className="due-date-input" />
            </div>
        </div>
    )
}
export default InvoiceDetails