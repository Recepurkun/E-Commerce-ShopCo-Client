"use client";
import { getUsersInfo } from "@/services/api";
import { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  Brush,
} from "recharts";

const OrdersChart = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      const data = await getUsersInfo();
      setUsers(data);
    };
    getAllUsers();
  }, []);

  const orderData = users.flatMap((user) =>
    user.user_basket.map((order) => ({
      date: new Date(order.orderDate).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      orders: 1, // Her sipariş için 1 olarak ayarlıyoruz
      productsInOrders: order.items.length,
    }))
  );

  // Tarihleri birleştir ve sipariş sayılarını topla
  const aggregatedData = orderData.reduce((acc, current) => {
    const existing = acc.find((item) => item.date === current.date);
    if (existing) {
      existing.orders += current.orders; // Sipariş sayısını artırıyoruz
      existing.productsInOrders += current.productsInOrders; // Ürün sayısını artırıyoruz
    } else {
      acc.push(current);
    }
    return acc;
  }, []);

  return (
    <div className="d-flex flex-column w-100 p-3">
      <div className="mb-3">
        <h3 className="fw-bolder">Orders Chart</h3>
        <span className="fw-light">
          Bu grafik, <b>ShopCO</b>’daki her gün için toplam sipariş sayısını ve
          siparişlerdeki toplam ürün miktarını gösterir. Sipariş trendlerini ve
          ürün dağılımını analiz ederek satış performansını daha iyi anlamanıza
          yardımcı olur.
        </span>
      </div>
      <div className="d-flex flex-columns align-items-center justify-content-center p-3 border rounded-4 h-100">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={aggregatedData} margin={{ right: 30, top: 30 }}>
            <YAxis />
            <XAxis dataKey="date" />
            <CartesianGrid strokeDasharray="3 3" />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "#ccc", fillOpacity: 0.3 }}
            />
            <Line type="monotone" dataKey="orders" fill="#3b82f6" />
            <Brush fill="black" stroke="#3b82f6" />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-body-tertiary border flex flex-col gap-4 rounded-3">
        <p className="text-primary fw-semibold w-100">Order date: {label}</p>
        <p className="">
          Order Quantity:
          <span className="ms-2 fw-bolder">{payload[0].payload.orders}</span>
        </p>
        <p className="">
          Total number of items ordered:
          <span className="ms-2 fw-bolder">
            {payload[0].payload.productsInOrders}
          </span>
        </p>
      </div>
    );
  }
};

export default OrdersChart;
