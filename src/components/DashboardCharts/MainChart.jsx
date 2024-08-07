"use client";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import ChartContainer from "./ChartContainer";
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTranslations } from "next-intl";

const MainChart = ({ products, users }) => {
  const t = useTranslations("Dashboard");
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const priceAllProducts = products.map((p) => p.price * Number(p.stock));
  //ShopCO'daki tüm ürünlerin toplam değeri
  const totalPrice = priceAllProducts.reduce((acc, price) => acc + price, 0);

  //kullanıcıların toplam harcamalarını hesaplıyoruz
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

  // pie grafiği için userexpensesi düzgün formata getir
  const dataUserExpenses = Object.entries(userExpenses).map(
    ([userEmail, expense]) => ({
      name: capitalizeFirstLetter(userEmail.split("@")[0]),
      value: expense,
    })
  );

  //gelen verileri pie grafiği için düzgün hale getir
  const formatData = (data) =>
    Object.entries(data).map(([name, value]) => ({
      name: capitalizeFirstLetter(name),
      value,
    }));

  //gelen verilerden aynı olanları kendi içinde topla
  const aggregateCounts = (items) => {
    return items.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
  };

  const transformData = (products) => {
    //kategoriler için verileri topla
    const categoryCounts = products.reduce((acc, product) => {
      const category =
        product.category.charAt(0).toUpperCase() + product.category.slice(1);
      acc[category] = (acc[category] || 0) + parseInt(product.stock, 10);
      return acc;
    }, {});

    //renkler için verileri topla
    const colorCounts = aggregateCounts(
      products.flatMap((product) => product.color)
    );

    //bedenler için verileri topla
    const sizeCounts = aggregateCounts(
      products.flatMap((product) => product.size)
    );

    return {
      dataCategories: formatData(categoryCounts),
      dataColors: formatData(colorCounts),
      dataSizes: formatData(sizeCounts),
    };
  };

  const { dataCategories, dataColors, dataSizes } = transformData(products);

  return (
    <div className="d-flex flex-column w-100 p-3">
      <div className="mb-3">
        <h3 className="fw-bolder">{t("DashboardTitle")}</h3>
        <span className="fw-light">{t("DashboardInfo")}</span>
      </div>

      <div className="d-flex flex-column border p-3 rounded-4 ">
        <div className="d-flex border p-4 w-100 align-items-center justify-content-center bg-body-tertiary rounded-4 shadow">
          <p className="fs-4 mb-0 me-2 fw-bold text-primary">
            {t("PriceAllProducts")}
          </p>
          <p className="fs-5 mb-0 text-success">: ${totalPrice}</p>
        </div>
        <div className="d-flex flex-column flex-wrap flex-md-row justify-content-center p-3 rounded-4">
          <div>
            <ChartContainer isCategory={true} title={t("TotalUserSpending")}>
              <ResponsiveContainer>
                <PieChart width={400} height={320}>
                  <Pie
                    data={dataUserExpenses}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    fill="#3b82f6"
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                  >
                    {dataUserExpenses.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    content={
                      <CustomTooltip
                        text={t("User")}
                        exp={t("TotalAmountSpend")}
                      />
                    }
                    cursor={{ fill: "#ccc", fillOpacity: 0.3 }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <ChartContainer
              isCategory={true}
              title={t("ProductCountbyCategory")}
            >
              <ResponsiveContainer>
                <PieChart width={400} height={320}>
                  <Pie
                    data={dataCategories}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    fill="#3b82f6"
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                  >
                    {dataCategories.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    content={
                      <CustomTooltip text={t("Category")} exp={t("Amount")} />
                    }
                    cursor={{ fill: "#ccc", fillOpacity: 0.3 }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div>
            <ChartContainer
              isCategory={true}
              title={t("ProductDistributionbyColor")}
            >
              <ResponsiveContainer>
                <PieChart width={400} height={320}>
                  <Pie
                    data={dataColors}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    fill="#3b82f6"
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                  >
                    {dataColors.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    content={
                      <CustomTooltip text={t("Color")} exp={t("Amount")} />
                    }
                    cursor={{ fill: "#ccc", fillOpacity: 0.3 }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <ChartContainer isCategory={true} title={t("ProductCountbySize")}>
              <ResponsiveContainer>
                <PieChart width={400} height={320}>
                  <Pie
                    data={dataSizes}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={2}
                    fill="#3b82f6"
                    dataKey="value"
                    nameKey="name"
                  >
                    {dataSizes.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    content={
                      <CustomTooltip text={t("Size")} exp={t("Amount")} />
                    }
                    cursor={{ fill: "#ccc", fillOpacity: 0.3 }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label, text, exp }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-body-tertiary border flex flex-col gap-4 rounded-3">
        <h6>
          {text}:<span className="ms-1 fw-bold">{payload[0].name}</span>
        </h6>
        <p>
          {exp}:
          <span className="ms-1 fw-bold">
            {payload[0]?.value > 1000
              ? `$${payload[0].value}`
              : payload[0].value}
          </span>
        </p>
      </div>
    );
  }
};

export default MainChart;
