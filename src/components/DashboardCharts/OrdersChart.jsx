"use client";
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
import ChartContainer from "./ChartContainer";
import { useTranslations } from "next-intl";

const OrdersChart = ({ users }) => {
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

  const t = useTranslations("Dashboard");

  return (
    <div className="d-flex flex-column w-100 p-3">
      <div className="mb-3">
        <h3 className="fw-bolder">{t("OrdersChart")}</h3>
        <span className="fw-light">{t("OrdersChartInfo")}</span>
      </div>
      <ChartContainer>
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
            <Brush height={50} fill="#3b82f6" stroke="#083070" />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  const t = useTranslations("Dashboard");
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-body-tertiary border flex flex-col gap-4 rounded-3">
        <p className="text-primary fw-semibold w-100">
          {t("OrderDate")}: {label}
        </p>
        <p>
          {t("OrderQuantity")}:
          <span className="ms-2 fw-bolder">{payload[0].payload.orders}</span>
        </p>
        <p>
          {t("NumberOfProductsOrdered")}:
          <span className="ms-2 fw-bolder">
            {payload[0].payload.productsInOrders}
          </span>
        </p>
      </div>
    );
  }
};

export default OrdersChart;
