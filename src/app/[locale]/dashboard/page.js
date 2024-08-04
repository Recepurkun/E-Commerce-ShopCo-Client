'use client'
import { FaHome } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { AiOutlineDashboard, AiFillProduct } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import MainChart from "@/components/DashboardCharts/MainChart";
import ProductChart from "@/components/DashboardCharts/ProductChart";
import UsersChart from "@/components/DashboardCharts/UsersChart";

const DashboardPage = () => {
    const [activeLink, setActiveLink] = useState(null);
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    const renderContent = () => {
        switch (activeLink) {
            case 'home':
                return <MainChart />;
            case 'products':
                return <ProductChart />;
            case 'customers':
                return <UsersChart />;
            default:
                return <h3>sağ taraf</h3>;
        }
    };

    return (
        <div className="row m-0 my-5" >
            <div className="d-none d-lg-flex  flex-column align-items-center col-1 p-0 bg-body-tertiary" >
                <a href="/"
                    className="d-block p-3 link-body-emphasis text-decoration-none"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="ShopCo Dashboard"
                    data-tooltip-place="top">
                    <FaHome size={24} />
                    <Tooltip id="my-tooltip" />
                </a>
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center w-100">
                    <li className="nav-item">
                        <a href="#"
                            className={`nav-link py-3 border-bottom rounded-0 ${activeLink === 'home' ? 'active' : ''}`}
                            data-tooltip-id="home-tooltip"
                            data-tooltip-content="Home"
                            data-tooltip-place="right"
                            onClick={() => handleLinkClick('home')}>
                            <FaHome size={24} aria-label="Home" role="img" />
                            <Tooltip id="home-tooltip"
                            />
                        </a>
                    </li>
                    <li className="nav-item" >
                        <a href="#"
                            className={`nav-link py-3 border-bottom rounded-0 ${activeLink === 'dashboard' ? 'active' : ''}`}
                            data-tooltip-id="dashboard-tooltip"
                            data-tooltip-content="Dashboard"
                            data-tooltip-place="right"
                            onClick={() => handleLinkClick('dashboard')}>
                            <AiOutlineDashboard size={24} aria-label="Dashboard" role="img" />
                            <Tooltip id="dashboard-tooltip" />
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            className={`nav-link py-3 border-bottom rounded-0 ${activeLink === 'orders' ? 'active' : ''}`}
                            data-tooltip-id="orders-tooltip"
                            data-tooltip-content="Orders"
                            data-tooltip-place="right"
                            onClick={() => handleLinkClick('orders')}>
                            <FaRegCalendarDays size={24} aria-label="Orders" role="img" />
                            <Tooltip id="orders-tooltip" />
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            className={`nav-link py-3 border-bottom rounded-0 ${activeLink === 'products' ? 'active' : ''}`}
                            data-tooltip-id="products-tooltip"
                            data-tooltip-content="Products"
                            data-tooltip-place="right"
                            onClick={() => handleLinkClick('products')}>
                            <AiFillProduct size={24} aria-label="Products" role="img" />
                            <Tooltip id="products-tooltip" />
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            className={`nav-link py-3 border-bottom rounded-0 ${activeLink === 'customers' ? 'active' : ''}`}
                            data-tooltip-id="customers-tooltip"
                            data-tooltip-content="Customers"
                            data-tooltip-place="right"
                            onClick={() => handleLinkClick('customers')}>
                            <IoPersonCircleSharp size={24} aria-label="Customers" role="img" />
                            <Tooltip id="customers-tooltip" />
                        </a>
                    </li>
                </ul>
                <div className="dropdown border-top">
                    <a href="#" className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" style={{ width: 24, height: 24 }} className="rounded-circle" />
                    </a>
                    <ul className="dropdown-menu text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
            <div className="d-flex col-12 col-lg-11 border p-0 m-0">
                {renderContent()}
            </div>
        </div>

    )
}

export default DashboardPage