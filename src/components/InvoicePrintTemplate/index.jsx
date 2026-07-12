import React from 'react';
import './index.css';
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { BsCashStack, BsCreditCard } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";

const InvoicePrintTemplate = ({ invoiceNumber, paymentType, dueDate, activeCustomer, items = [] , discount , invoiceDate }) => {
    
    const formatPrintDate = (dateString) => {
        if (!dateString) return 'N/A';
        const parsedDate = new Date(dateString);
        return isNaN(parsedDate.getTime()) ? 'N/A' : parsedDate.toLocaleDateString();
    };

    const subTotal = items.reduce((total, item) => total + (item.rowAmount || 0), 0);
    const safeDiscount = discount !== undefined ? discount : activeCustomer?.discount || 0; // Replace with dynamic discount passing if tracked inside billing form state
    const netTotalAmount = Math.max(0, subTotal - safeDiscount);
    const paidAmount = paymentType === 'credit' ? 0 : netTotalAmount;
    const balanceAmount = paymentType === 'credit' ? netTotalAmount : 0;

    return (
        <div className="invoice-print-template-container">
            <div className="invoice-print-template-header">
                <div className="logo-container-billing">
                    <img className="sidebar-logo-print" src="https://res.cloudinary.com/duokznlha/image/upload/v1783096947/ChatGPT_Image_Jul_3_2026_10_02_51_PM_uyfe9v.png" alt="Logo"/>
                    <h1 className="sidebar-title-print">SLG</h1>
                </div>
                <div className="invoice-print-template-header-details">
                    <h1 className="logo-name-print">Sri Lakshmi Ganapathi Enterprises</h1>
                    <p className="logo-name-print-sub">FERTILIZERS & AGRO CHEMICALS</p>
                    <div className="logo-name-print-description-container-container">
                        <div className="logo-name-print-description-container">
                            <IoLocationSharp size={20} color="#00461d" />
                            <p className="logo-name-print-description">Near Hanuman Temple, Dondapadu village, Suryapet dist, Telangana - 508246</p>
                        </div>
                        <div className="logo-name-print-description-container">
                            <MdCall size={20} color="#00461d" />
                            <p className="logo-name-print-description">9908919593</p>
                        </div>
                    </div>
                </div>
                
                <div className="invoice-print-template-header-tax-invoice">
                    <div className="tax-invoice-text-print">Tax Invoice</div>
                    <div className="invoice-meta-info-block">
                        <div className="invoice-number-container-print">
                            <span className="invoice-number-text-print">Invoice No</span>
                            <span className="invoice-number-colon-print">:</span>
                            <span className="invoice-number-value-print">{invoiceNumber || 'N/A'}</span>
                        </div>
                        <div className="invoice-number-container-print">
                            <span className="invoice-number-text-print">Date</span>
                            <span className="invoice-number-colon-print">:</span>
                            <span className="invoice-number-value-print">{invoiceDate || new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="invoice-number-container-print">
                            <span className="invoice-number-text-print">Place of Supply</span>
                            <span className="invoice-number-colon-print">:</span>
                            <span className="invoice-number-value-print">Dondapadu</span>
                        </div>
                        <div className="invoice-number-container-print">
                            <span className="invoice-number-text-print">Payment Type</span>
                            <span className="invoice-number-colon-print">:</span>
                            <span className="invoice-number-value-print" style={{ textTransform: 'capitalize' }}>{paymentType || 'N/A'}</span>
                        </div>
                        <div className="invoice-number-container-print">
                            <span className="invoice-number-text-print">Due Date</span>
                            <span className="invoice-number-colon-print">:</span>
                            <span className="invoice-number-value-print">{formatPrintDate(dueDate)}</span>
                        </div>
                    </div>
                </div>
            </div>    

            <div className="invoice-print-customer-details-section">
                <h4 className="bill-to-title">BILL TO :</h4>
                <div className="customer-details-print">
                    <strong className="customer-name">{activeCustomer?.name || 'Walk-in Customer'}</strong>
                    <span>Email: {activeCustomer?.email || 'N/A'}</span>
                    <span>Phone: {activeCustomer?.phone || 'N/A'}</span>
                </div>
            </div>
            <div className="invoice-items-summary-tables-container">
                <div className="invoice-items-table-container">
                <table className="invoice-items-table">
                    <thead>
                        <tr>
                            <th width="5%">#</th>
                            <th width="35%">Product Name</th>
                            <th width="10%">Unit</th>
                            <th width="10%">Qty</th>
                            <th width="15%">Price (₹)</th>
                            <th width="10%">Gst(%)</th>
                            <th width="15%" className="text-right">Amount (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length === 0 ? (
                            <tr>
                                <td colSpan="7" style={{ textAlign: 'center', color: '#888' }}>No items added to invoice</td>
                            </tr>
                        ) : (
                            items.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.unit}</td>
                                    <td>{item.qty}</td>
                                    <td>{Number(item.price).toFixed(2)}</td>
                                    <td>{item.gst}%</td>
                                    <td className="text-right">{Number(item.rowAmount).toFixed(2)}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                </div>
                <div className="invoice-summary-section">
                <div className="summary-empty-space"></div>
                <div className="summary-calculations">
                    <table className="summary-table">
                        <tbody>
                            <tr>
                                <td>Sub Total (₹)</td>
                                <td className="text-right">{subTotal.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Discount (₹)</td>
                                <td className="text-right">{safeDiscount.toFixed(2)}</td>
                            </tr>
                            <tr className="summary-highlight-row-green">
                                <td>Total Amount (₹)</td>
                                <td className="text-right">₹ {netTotalAmount.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Paid Amount (₹)</td>
                                <td className="text-right">{paidAmount.toFixed(2)}</td>
                            </tr>
                            <tr className="summary-highlight-row-red">
                                <td className="balance-text">Balance Amount (₹)</td>
                                <td className="text-right balance-amount">₹ {balanceAmount.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            

            

            <div className="invoice-footer-section">
                <div className="footer-block payment-options">
                    <p className="footer-title">Payment Options :</p>
                    <ul className="payment-list">
                        <li><BsCashStack size={12}/> Cash</li>
                        <li><MdPhoneIphone size={12}/> UPI / Online</li>
                        <li><BsCreditCard size={12}/> Credit</li>
                    </ul>
                </div>
                
                <div className="footer-block notes-section">
                    <p className="footer-title">Notes :</p>
                    <ol className="notes-list">
                        <li>Goods once sold will not be taken back.</li>
                        <li>Please make the payment before the due date.</li>
                        <li>Subject to local Jurisdiction only.</li>
                    </ol>
                </div>

                <div className="footer-block signature-section">
                    <p className="signature-company-name">For Sri Lakshmi Ganapathi Enterprises</p>
                    <div className="signature-line-container">
                        <div className="signature-line"></div>
                        <p className="signature-text">Authorized Signature</p>
                    </div>
                </div>
            </div>

            <div className="invoice-thank-you">
                <span>❦</span> Thank you for your business! <span>❦</span>
            </div>
        </div>
    );
};

export default InvoicePrintTemplate;