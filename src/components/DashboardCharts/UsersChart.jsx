"use client";
import { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import ChartContainer from "./ChartContainer";
import { useTranslations } from "next-intl";

const CustomTooltipForAges = ({ active, payload, label }) => {
  const t = useTranslations("Dashboard");
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-body-tertiary border flex flex-col gap-4 rounded-3">
        <p className="text-primary fw-semibold w-100">{label}</p>
        <p>
          {t("AgeRange")}
          <span className="ms-1 fw-bolder">{payload[0].payload.AgeRange}</span>
        </p>
        <p>
          {t("NumberOfUsers")}
          <span className="ms-2 fw-bolder">{payload[0].payload.Amount}</span>
        </p>
      </div>
    );
  }
  return null;
};

const UsersChart = ({ users, products }) => {
  const [ageGroups, setAgeGroups] = useState([]);
  const [userCommentsCount, setUserCommentsCount] = useState({});

  const t = useTranslations("Dashboard");

  useEffect(() => {
    const groupUsersByAge = (users) => {
      const groups = users.reduce((acc, user) => {
        const ageGroup = Math.floor(user.user_age / 10) * 10;
        acc[ageGroup] = (acc[ageGroup] || 0) + 1;
        return acc;
      }, {});

      return Object.keys(groups).map((ageGroup) => ({
        AgeRange: `${ageGroup}-${Number(ageGroup) + 9}`,
        Amount: groups[ageGroup],
      }));
    };

    setAgeGroups(groupUsersByAge(users));
  }, [users]);

  useEffect(() => {
    const countCommentsByUser = (products) => {
      const commentsCount = products.reduce((acc, product) => {
        product.comments.forEach((comment) => {
          acc[comment.user] = (acc[comment.user] || 0) + 1;
        });
        return acc;
      }, {});

      return commentsCount;
    };

    setUserCommentsCount(countCommentsByUser(products));
  }, [products]);

  const formatUserCommentsData = (commentsCount) =>
    Object.entries(commentsCount).map(([name, count]) => ({
      name: name.includes("@") ? name.split("@")[0] : name.split(" ")[0],
      CommentCount: count,
    }));

  const formattedData = formatUserCommentsData(userCommentsCount);

  const COLORS = ["#FF8042", "#7c107e", "#3b82f6"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="d-flex flex-column w-100 p-3 gap-3">
      <div className="mb-3">
        <h3 className="fw-bolder">{t("UsersChart")}</h3>
        <span className="fw-light">{t("UsersChartInfo")}</span>
      </div>
      <ChartContainer title={t("NumberOfComment")}>
        <ResponsiveContainer>
          <AreaChart
            data={formattedData}
            width={400}
            height={300}
            margin={{ right: 30, top: 30 }}
          >
            <YAxis />
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
              content={<CustomTooltip text={t("NOCByUser")} />}
              cursor={{ fill: "#ccc", fillOpacity: 0.3 }}
            />
            <Area
              type="monotone"
              dataKey="CommentCount"
              stroke="#3b82f6"
              fill="#7c107e"
            />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
      <ChartContainer title={t("AgeRangeUsers")}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={ageGroups}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              dataKey="Amount"
            >
              {ageGroups.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              content={<CustomTooltipForAges />}
              cursor={{ fill: "#ccc", fillOpacity: 0.3 }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default UsersChart;
