"use client";
import { getProducts } from "@/services/api";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const ProductChart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    getAllProducts();
  }, []);

  const salesData = products.map((product) => ({
    name: product.name.slice(0, 7),
    sales: Number(product.numberOfSales),
    price: Number(product.price),
  }));

  return (
    <div className="d-flex flex-column w-100 p-3">
      <div className="mb-3">
        <h3 className="fw-bolder">Product Chart</h3>
        <span className="fw-light">
          This chart provides detailed insights into the sales of each product
          in <b>ShopCO</b>. It displays the quantity sold, the price per unit,
          and the name of each product, allowing for a comprehensive analysis of
          product performance.
        </span>
      </div>
      <div className="d-flex flex-columns align-items-center justify-content-center p-3 border rounded-4 h-100">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={salesData}
            width={400}
            height={300}
            margin={{ right: 30, top: 30 }}
          >
            <YAxis />
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="5 5" />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "#ccc", fillOpacity: 0.3 }}
            />

            <Bar
              dataKey="sales"
              fill="#3bcdf6"
              activeBar={<Rectangle stroke="#212121" />}
            />
            <Bar
              dataKey="price"
              fill="#7c107e"
              activeBar={<Rectangle stroke="#212121" />}
            />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-body-tertiary border flex flex-col gap-4 rounded-3">
        <p className="text-primary fw-semibold w-100"> {label}</p>
        <p>
          Number of products sold:
          <span className="ms-2 fw-bolder">{payload[0].value}</span>
        </p>
        <p>
          Product Price:
          <span className="ms-2 fw-bolder">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default ProductChart;
