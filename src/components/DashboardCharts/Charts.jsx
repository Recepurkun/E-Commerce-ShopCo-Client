"use client";
import { FaRegCalendarDays } from "react-icons/fa6";
import { AiOutlineDashboard, AiFillProduct } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import MainChart from "@/components/DashboardCharts/MainChart";
import ProductChart from "@/components/DashboardCharts/ProductChart";
import OrdersChart from "@/components/DashboardCharts/OrdersChart";
import CategoryChart from "@/components/DashboardCharts/CategoryChart";
import UsersChart from "@/components/DashboardCharts/UsersChart";
import { DetailsDivider } from "@/styles/Product";

const navLinks = [
  {
    id: "dashboard",
    icon: <AiOutlineDashboard size={24} aria-label="Dashboard" role="img" />,
    tooltip: "Dashboard",
  },
  {
    id: "orders",
    icon: <FaRegCalendarDays size={24} aria-label="Orders" role="img" />,
    tooltip: "Orders",
  },
  {
    id: "products",
    icon: <AiFillProduct size={24} aria-label="Products" role="img" />,
    tooltip: "Products",
  },
  {
    id: "categories",
    icon: <MdCategory size={24} aria-label="Categories" role="img" />,
    tooltip: "Categories",
  },
  {
    id: "users",
    icon: <FaUser size={24} aria-label="Users" role="img" />,
    tooltip: "Users",
  },
];

const Charts = ({ users, products }) => {
  const [activeLink, setActiveLink] = useState("dashboard");
  const handleLinkClick = (link) => setActiveLink(link);

  const renderContent = () => {
    switch (activeLink) {
      case "products":
        return <ProductChart products={products} />;
      case "categories":
        return <CategoryChart products={products} />;
      case "orders":
        return <OrdersChart users={users} />;
      case "users":
        return <UsersChart users={users} products={products} />;
      default:
        return <MainChart products={products} users={users} />;
    }
  };

  return (
    <>
      <DetailsDivider />
      <div className="row m-0 my-5">
        <div className="d-none d-lg-flex flex-column col-1 p-0">
          <ul className="nav nav-pills nav-flush flex-column text-center w-100">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`nav-link py-3 ${
                  activeLink === link.id ? "active" : ""
                }`}
                style={{ cursor: "pointer" }}
                data-tooltip-id={`${link.id}-tooltip`}
                data-tooltip-content={link.tooltip}
                data-tooltip-place="right"
                onClick={() => handleLinkClick(link.id)}
              >
                {link.icon}
                <Tooltip id={`${link.id}-tooltip`} />
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex col-12 col-lg-11 p-0 m-0">{renderContent()}</div>
      </div>
    </>
  );
};

export default Charts;
