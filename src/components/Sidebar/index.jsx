import './index.css'
import { GoHome } from "react-icons/go";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from 'react-router'
import { TbFileInvoice } from "react-icons/tb";


const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-logo-container">
                <img className="sidebar-logo" src="https://res.cloudinary.com/duokznlha/image/upload/v1783096947/ChatGPT_Image_Jul_3_2026_10_02_51_PM_uyfe9v.png" alt="Logo"/>
                <h1 className="sidebar-title">SLG</h1>
            </div>
            <p className="sidebar-subtitle">Sri Lakshmi Ganapathi Enterprises</p>
            <div className="sidebar-links-container">
                <button className="sidebar-item-btn">
                    <GoHome size={30} color="#1B8343" />
                    <span className="sidebar-link-text">Dashboard</span>
                </button>
                <Link to="/products" className="sidebar-link-item-btn">
                <button className="sidebar-item-btn">
                        <AiOutlineProduct size={30} color="#1B8343" />
                        <span className="sidebar-link-text">Products</span>
                    </button>
                </Link>
                <Link to="/billing" className="sidebar-link-item-btn">
                <button className="sidebar-item-btn">
                        <TbFileInvoice size={30} color="#1B8343" />
                        <span className="sidebar-link-text">Billing</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Sidebar