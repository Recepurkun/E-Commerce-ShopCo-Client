"use client";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Legend } from "recharts";
import ChartContainer from "./ChartContainer";
import { useTranslations } from "next-intl";

const CategoryChart = ({ products }) => {
  const [categoryDistribution, setCategoryDistribution] = useState([]);
  const [categoryRating, setCategoryRating] = useState([]);
  const [activeIndexDistribution, setActiveIndexDistribution] = useState(0);
  const [activeIndexRating, setActiveIndexRating] = useState(0);

  const t = useTranslations("Dashboard");

  useEffect(() => {
    if (products.length > 0) {
      const distribution = products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
      }, {});

      const rating = products.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = { totalRating: 0, count: 0 };
        }
        acc[product.category].totalRating += parseFloat(product.rating);
        acc[product.category].count += 1;
        return acc;
      }, {});

      const formattedDistributionData = Object.keys(distribution).map(
        (key) => ({
          name: capitalizeFirstLetter(key),
          value: distribution[key],
          type: "rating",
        })
      );

      const formattedRatingData = Object.keys(rating).map((key) => ({
        name: capitalizeFirstLetter(key),
        value: (rating[key].totalRating / rating[key].count).toFixed(2),
      }));

      setCategoryDistribution(formattedDistributionData);
      setCategoryRating(
        formattedRatingData.map((item) => ({
          ...item,
          value: parseFloat(item.value),
        }))
      );
    }
  }, [products]);

  const onPieEnterDistribution = (_, index) => {
    setActiveIndexDistribution(index);
  };

  const onPieEnterRating = (_, index) => {
    setActiveIndexRating(index);
  };

  return (
    <div className="d-flex flex-column w-100 p-3">
      <div className="mb-3">
        <h3 className="fw-bolder">{t("ProductCategoriesChart")}</h3>
        <span className="fw-light">{t("ProductCategoriesChartInfo")}</span>
      </div>

      <div className="d-flex flex-column flex-lg-row justify-content-around p-3 border rounded-4">
        <ChartContainer title={t("Distribution")} isCategory={true}>
          <PieChart width={550} height={320}>
            <Pie
              activeIndex={activeIndexDistribution}
              activeShape={renderActiveShape}
              data={categoryDistribution}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#3b82f6"
              dataKey="value"
              onMouseEnter={onPieEnterDistribution}
            />
            <Legend />
          </PieChart>
        </ChartContainer>
        <ChartContainer title={t("AverageRating")} isCategory={true}>
          <PieChart width={550} height={320}>
            <Pie
              activeIndex={activeIndexRating}
              activeShape={renderActiveShape}
              data={categoryRating}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#7c107e"
              dataKey="value"
              onMouseEnter={onPieEnterRating}
            />
            <Legend />
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  const categoryEmojiMap = {
    shorts: "🩳",
    shirt: "👕",
    hoodie: "🧥",
    "t-shirt": "👔",
    jeans: "👖",
  };

  const isDistribution = payload.type == "rating";
  const category = payload.name.toLowerCase();
  const emoji = categoryEmojiMap[category] || "❓";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name} - {payload.value} {isDistribution ? emoji : "⭐"}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill={fill}
      >{`Category: ${capitalizeFirstLetter(payload.name)}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Oran ${(percent * 100).toFixed(1)}%)`}
      </text>
    </g>
  );
};

export default CategoryChart;
