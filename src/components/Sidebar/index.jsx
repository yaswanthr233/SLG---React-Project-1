import './index.css'
import { GoHome } from "react-icons/go";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from 'react-router'
import { TbFileInvoice } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { useState } from 'react';


const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('/');
    
    return (
        <div className="sidebar-container">
            <div className="sidebar-logo-container">
                <img className="sidebar-logo" src="https://res.cloudinary.com/duokznlha/image/upload/v1783096947/ChatGPT_Image_Jul_3_2026_10_02_51_PM_uyfe9v.png" alt="Logo"/>
                <h1 className="sidebar-title">SLG</h1>
            </div>
            <p className="sidebar-subtitle">Sri Lakshmi Ganapathi Enterprises</p>
            <div className="sidebar-links-container">
                <Link to="/" className="sidebar-link-item-btn" onClick={() => setActiveTab('/')}>
                <button className={activeTab === '/' ? 'sidebar-item-btn active' : 'sidebar-item-btn'}>
                    <GoHome size={30} color="#000000" />
                    <span className="sidebar-link-text">Dashboard</span>
                </button>
                </Link>
                <Link to="/products" className="sidebar-link-item-btn" onClick={() => setActiveTab('/products')}>
                <button className={activeTab === '/products' ? 'sidebar-item-btn active' : 'sidebar-item-btn'}>
                        <AiOutlineProduct size={30} color="#000000" className="sidebar-link-icon" />
                        <span className="sidebar-link-text">Products</span>
                    </button>
                </Link>
                <Link to="/billing" className="sidebar-link-item-btn" onClick={() => setActiveTab('/billing')}>
                <button className={activeTab === '/billing' ? 'sidebar-item-btn active' : 'sidebar-item-btn'}>
                        <TbFileInvoice size={30} color="#000000" />
                        <span className="sidebar-link-text">Billing</span>
                    </button>
                </Link>
                <Link to="/customers" className="sidebar-link-item-btn" onClick={() => setActiveTab('/customers')}>
                <button className={activeTab === '/customers' ? 'sidebar-item-btn active' : 'sidebar-item-btn'}>
                        <HiOutlineUsers size={30} color="#000000" />
                        <span className="sidebar-link-text">Customers</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Sidebar