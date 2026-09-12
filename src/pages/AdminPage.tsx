import { useState } from "react";
import { adminStats } from "../data/healthData";
import { useTranslation } from "react-i18next";

type ChartMetric = "appointments" | "completion" | "risk";
type ChartRange = "week" | "month";

const chartData: Record<ChartMetric, Record<ChartRange, number[]>> = {
  appointments: {
    week: [42, 58, 66, 70, 78, 90, 88],
    month: [38, 48, 57, 64, 72, 81, 88, 94, 86, 91, 96, 100],
  },
  completion: {
    week: [54, 61, 66, 70, 73, 79, 81],
    month: [48, 52, 57, 59, 63, 66, 68, 71, 74, 77, 79, 81],
  },
  risk: {
    week: [24, 31, 28, 42, 36, 49, 44],
    month: [22, 28, 25, 34, 31, 39, 36, 45, 41, 48, 44, 52],
  },
};

const chartLabels: Record<ChartRange, string[]> = {
  week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  month: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"],
};

export function AdminPage() {
  const { t } = useTranslation();
  const [metric, setMetric] = useState<ChartMetric>("appointments");
  const [range, setRange] = useState<ChartRange>("week");
  const values = chartData[metric][range];
  const labels = chartLabels[range];

  const metricTitle =
    metric === "appointments"
      ? t("appointmentTrend")
      : metric === "completion"
        ? t("screeningCompletion")
        : t("highRiskDetection");

  return (
    <div className="page-content admin-page">
      <section className="panel-header">
        <div>
          <p className="eyebrow">{t("adminPortal")}</p>
          <h1>{t("analyticsDashboard")}</h1>
        </div>
      </section>

      <div className="stats-grid">
        {adminStats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <em>{stat.delta}</em>
          </div>
        ))}
      </div>

      <div className="admin-layout">
        <div className="summary-card">
          <div className="chart-header">
            <div>
              <p className="eyebrow">{t("analyticsDashboard")}</p>
              <h3>{metricTitle}</h3>
            </div>
            <div className="chart-controls">
              <select
                aria-label="Chart metric"
                value={metric}
                onChange={(event) => setMetric(event.target.value as ChartMetric)}>
                <option value="appointments">{t("appointments")}</option>
                <option value="completion">{t("screeningCompletion")}</option>
                <option value="risk">{t("highRiskDetection")}</option>
              </select>
              <select
                aria-label="Chart range"
                value={range}
                onChange={(event) => setRange(event.target.value as ChartRange)}>
                <option value="week">7D</option>
                <option value="month">12W</option>
              </select>
            </div>
          </div>
          <div className="bar-chart" aria-live="polite">
            {values.map((height, index) => (
              <div className="chart-column" key={`${range}-${index}`}>
                <strong>{height}</strong>
                <span
                  className="chart-bar-fill"
                  style={{ height: `${height}%` }}
                  title={`${labels[index]}: ${height}`}
                />
                <small>{labels[index]}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="summary-card">
          <h3>{t("riskDistribution")}</h3>
          <ul className="risk-list">
            <li>
              <span>Low</span>
              <strong>52%</strong>
            </li>
            <li>
              <span>Medium</span>
              <strong>31%</strong>
            </li>
            <li>
              <span>High</span>
              <strong>12%</strong>
            </li>
            <li>
              <span>Emergency</span>
              <strong>5%</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
