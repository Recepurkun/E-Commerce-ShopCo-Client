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
    // name: product.name.slice(0, 5),
    name: product.name,
    sales: Number(product.numberOfSales),
    // price: Number(product.price),
  }));

  return (
    <div className="d-flex flex-column w-100">
      <h3>Product Chart</h3>
      <div className="d-flex flex-columns align-items-center justify-content-center p-4 border rounded-4 h-100">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={salesData} margin={{ right: 30 }}>
            <YAxis />
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="5 5" />

            <Tooltip
              content={<CustomTooltip />}
              //   cursor={{ fill: "#fff", fillOpacity: 0.075 }} //baya ideal duruyor
              cursor={{ fill: "red", fillOpacity: 0.075 }} //arkada olusan gri bg'yi degistirebilmek icin
            />

            <Bar
              dataKey="sales"
              fill="#3b82f6"
              activeBar={<Rectangle fill="#0561f5" stroke="#fff" />}
            />
            {/* <Bar
              dataKey="price"
              fill="#8b5cf6"
              activeBar={<Rectangle fill="#6222f7" stroke="#fff" />}
            /> */}
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
        <p className="">
          Number of products sold:
          <span className="ms-2 fw-bolder">{payload[0].value}</span>
        </p>
        {/* <p className="">
          Profit : <span className="ml-2 fw-bolder">${payload[1].value}</span>
        </p> */}
      </div>
    );
  }
};

export default ProductChart;
