"use client";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import ChartContainer from "./ChartContainer";
import { PieChart, Pie, Legend, Cell, Tooltip } from "recharts";

const MainChart = ({ products, users }) => {
  const priceAllProducts = products.map((p) => p.price * Number(p.stock));
  // ShopCO'daki tüm ürünlerin toplam değeri
  const totalPrice = priceAllProducts.reduce((acc, price) => acc + price, 0);

  // Kullanıcıların toplam harcamalarını hesapla
  const userExpenses = users.reduce((acc, user) => {
    // Her kullanıcının sepetindeki ürünleri al
    user.user_basket
      .flatMap((order) => order.items)
      .forEach((item) => {
        const { userEmail, price, total } = item;
        const itemTotal = price * total;

        // Kullanıcının harcamasını güncelle
        acc[userEmail] = (acc[userEmail] || 0) + itemTotal;
      });
    return acc;
  }, {});

  // PieChart için uygun veri yapısını oluşturuyoruz
  const pieData = Object.entries(userExpenses).map(([userEmail, expense]) => ({
    name: capitalizeFirstLetter(userEmail.split("@")[0]),
    value: expense,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  console.log("userExpenses: ", userExpenses);

  return (
    <div className="d-flex flex-column w-100 p-3">
      <div className="mb-3">
        <h3 className="fw-bolder">BB</h3>
        <span className="fw-light">AA</span>
      </div>

      <div className="d-flex flex-column border  p-3 rounded-4 ">
        <div className="d-flex border p-4 align-items-center">
          <p className="fs-4 ">ShopCO'daki tüm ürünlerin fiyati:</p>
          <p className="ms-2 fs-5">${totalPrice}</p>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-around p-3 rounded-4">
          <ChartContainer
            isCategory={true}
            title="Kullanıcıların Ne kadar para harcadığı grafiği"
          >
            <PieChart width={550} height={320}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#3b82f6"
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "#ccc", fillOpacity: 0.3 }}
              />
              <Legend />
            </PieChart>
          </ChartContainer>
          <ChartContainer
            isCategory={true}
            title="Kullanıcıların Ne kadar para harcadığı grafiği"
          >
            <PieChart width={550} height={320}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#3b82f6"
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "#ccc", fillOpacity: 0.3 }}
              />
              <Legend />
            </PieChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-body-tertiary border flex flex-col gap-4 rounded-3">
        <p>
          User:
          <span className="ms-2 fw-bolder"> {payload[0].name}</span>
        </p>
        <p>
          Total amount spent:
          <span className="ms-2 fw-bolder">${payload[0].value}</span>
        </p>
      </div>
    );
  }
};

export default MainChart;
