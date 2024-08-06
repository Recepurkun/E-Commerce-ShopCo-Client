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
import CustomTooltip from "./CustomTooltip";
import ChartContainer from "./ChartContainer";
import { useTranslations } from "next-intl";

const ProductChart = ({ products }) => {
  const salesData = products.map((product) => {
    const [firstWord, secondWord] = product.name.split(" ");
    const shortName = secondWord ? `${firstWord} ${secondWord[0]}.` : firstWord;
    return {
      name: shortName,
      sales: Number(product.numberOfSales),
      price: Number(product.price),
    };
  });

  const t = useTranslations("Dashboard");

  return (
    <div className="d-flex flex-column w-100 p-3">
      <div className="mb-3">
        <h3 className="fw-bolder">{t("ProductsChart")}</h3>
        <span className="fw-light">{t("ProductsChartInfo")}</span>
      </div>
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={salesData}
            width={400}
            height={300}
            margin={{ right: 30, top: 30 }}
          >
            <YAxis />
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="3 3" />

            <Tooltip
              content={
                <CustomTooltip
                  text={t("NumberOfProductSold")}
                  exp={t("ProductPrice")}
                />
              }
              cursor={{ fill: "#ccc", fillOpacity: 0.3 }}
            />

            <Bar
              dataKey="sales"
              fill="#3b82f6"
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
      </ChartContainer>
    </div>
  );
};

export default ProductChart;
