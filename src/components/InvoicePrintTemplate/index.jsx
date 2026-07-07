import React from 'react';
import './index.css';
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { BsCashStack, BsCreditCard } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";

const InvoicePrintTemplate = ({ invoiceNumber, paymentType, dueDate, activeCustomer }) => {
    
    const formatPrintDate = (dateString) => {
        if (!dateString) return 'N/A';
        const parsedDate = new Date(dateString);
        return isNaN(parsedDate.getTime()) ? 'N/A' : parsedDate.toLocaleDateString();
    };

    return (
        <div className="invoice-print-template-container">
            {/* --- DO NOT MODIFY HEADER (START) --- */}
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
                            <IoLocationSharp size={12} color="#00461d" />
                            <p className="logo-name-print-description">Near Hanuman Temple, Dondapadu village, Suryapet dist, Telangana - 508246</p>
                        </div>
                        <div className="logo-name-print-description-container">
                            <MdCall size={12} color="#00461d" />
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
                            <span className="invoice-number-value-print">{invoiceNumber || 'INV-2024-000123'}</span>
                        </div>
                        <div className="invoice-number-container-print">
                            <span className="invoice-number-text-print">Date</span>
                            <span className="invoice-number-colon-print">:</span>
                            <span className="invoice-number-value-print">{new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="invoice-number-container-print">
                            <span className="invoice-number-text-print">Place of Supply</span>
                            <span className="invoice-number-colon-print">:</span>
                            <span className="invoice-number-value-print">Dondapadu</span>
                        </div>
                        <div className="invoice-number-container-print">
                            <span className="invoice-number-text-print">Payment Type</span>
                            <span className="invoice-number-colon-print">:</span>
                            <span className="invoice-number-value-print" style={{ textTransform: 'capitalize' }}>{paymentType || 'Credit'}</span>
                        </div>
                        <div className="invoice-number-container-print">
                            <span className="invoice-number-text-print">Due Date</span>
                            <span className="invoice-number-colon-print">:</span>
                            <span className="invoice-number-value-print">{formatPrintDate(dueDate || '2026-07-20')}</span>
                        </div>
                    </div>
                </div>
            </div>    
            {/* --- DO NOT MODIFY HEADER (END) --- */}

            {/* BILL TO SECTION */}
            <div className="invoice-print-customer-details-section">
                <h4 className="bill-to-title">BILL TO :</h4>
                <div className="customer-details-print">
                    <strong className="customer-name">{activeCustomer?.name || 'Ravi Varma'}</strong>
                    <span>{activeCustomer?.address1 || 'Door No 12-3-45, Near Bus Stand,'}</span>
                    <span>{activeCustomer?.address2 || 'Pedakakani, Guntur,'}</span>
                    <span>{activeCustomer?.state || 'Andhra Pradesh - 522509'}</span>
                    <span>Phone: {activeCustomer?.phone || '9876543210'}</span>
                </div>
            </div>

            {/* PRODUCT ITEMS TABLE */}
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
                        <tr>
                            <td>1</td>
                            <td>Urea 46%</td>
                            <td>bag</td>
                            <td>1</td>
                            <td>266.00</td>
                            <td>5%</td>
                            <td className="text-right">279.30</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* SUMMARY SECTION */}
            <div className="invoice-summary-section">
                <div className="summary-empty-space"></div>
                <div className="summary-calculations">
                    <table className="summary-table">
                        <tbody>
                            <tr>
                                <td>Sub Total (₹)</td>
                                <td className="text-right">279.30</td>
                            </tr>
                            <tr>
                                <td>Discount (₹)</td>
                                <td className="text-right">0.00</td>
                            </tr>
                            <tr className="summary-highlight-row-green">
                                <td>Total Amount (₹)</td>
                                <td className="text-right">₹ 279.30</td>
                            </tr>
                            <tr>
                                <td>Paid Amount (₹)</td>
                                <td className="text-right">0.00</td>
                            </tr>
                            <tr className="summary-highlight-row-red">
                                <td className="balance-text">Balance Amount (₹)</td>
                                <td className="text-right balance-amount">₹ 279.30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* FOOTER SECTION */}
            <div className="invoice-footer-section">
                <div className="footer-block payment-options">
                    <p className="footer-title">Payment Options :</p>
                    <ul className="payment-list">
                        <li><BsCashStack size={12}/> Cash</li>
                        <li><MdPhoneIphone size={12}/> UPI</li>
                        <li><BsCreditCard size={12}/> Credit</li>
                    </ul>
                </div>
                
                <div className="footer-block notes-section">
                    <p className="footer-title">Notes :</p>
                    <ol className="notes-list">
                        <li>Goods once sold will not be taken back.</li>
                        <li>Please make the payment before the due date.</li>
                        <li>Subject to Guntur Jurisdiction only.</li>
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