import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../store/hooks";

type ChartMetric = "appointments" | "completion" | "risk";
type ChartRange = "week" | "month";

function createChartValues(values: number[], count: number) {
  if (!values.length) return [];
  return Array.from(
    { length: count },
    (_, index) => values[index % values.length],
  );
}

export function AdminPage() {
  const { t } = useTranslation();
  const { users, posts, todos, comments } = useAppSelector(
    (state) => state.appData,
  );

  const [metric, setMetric] = useState<ChartMetric>("appointments");
  const [range, setRange] = useState<ChartRange>("week");
  const bucketCount = range === "week" ? 7 : 12;

  const sourceValues = useMemo(() => {
    if (metric === "appointments") return posts.map((post) => post.id);
    if (metric === "completion")
      return todos.map((todo) => (todo.completed ? 100 : 0));
    return comments.map((comment) => comment.postId);
  }, [comments, metric, posts, todos]);

  const values = createChartValues(sourceValues, bucketCount);

  const labels = Array.from({ length: bucketCount }, (_, index) =>
    range === "week"
      ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]
      : `W${index + 1}`,
  );

  const completedTodos = todos.filter((todo) => todo.completed).length;

  const lowRisk = todos.length
    ? Math.round((completedTodos / todos.length) * 100)
    : 0;

  const mediumRisk = todos.length ? 100 - lowRisk : 0;
  const stats = [
    { label: t("appointmentsScheduled"), value: String(posts.length) },
    { label: t("screeningCompletion"), value: `${lowRisk}%` },
    { label: t("highRiskDetection"), value: String(comments.length) },
    { label: t("doctorSatisfaction"), value: String(users.length) },
  ];
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
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
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
                onChange={(event) =>
                  setMetric(event.target.value as ChartMetric)
                }>
                <option value="appointments">{t("appointments")}</option>
                <option value="completion">{t("screeningCompletion")}</option>
                <option value="risk">{t("highRiskDetection")}</option>
              </select>
              <select
                aria-label="Chart range"
                value={range}
                onChange={(event) =>
                  setRange(event.target.value as ChartRange)
                }>
                <option value="week">7D</option>
                <option value="month">12W</option>
              </select>
            </div>
          </div>
          <div className="bar-chart" aria-live="polite">
            {values.map((value, index) => (
              <div className="chart-column" key={`${range}-${index}`}>
                <strong>{value}</strong>
                <span
                  className="chart-bar-fill"
                  style={{ height: `${Math.min(100, value)}%` }}
                  title={`${labels[index]}: ${value}`}
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
              <span>{t("low")}</span>
              <strong>{lowRisk}%</strong>
            </li>
            <li>
              <span>{t("medium")}</span>
              <strong>{mediumRisk}%</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
