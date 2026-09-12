import { adminStats } from "../data/healthData";
import { useTranslation } from "react-i18next";

export function AdminPage() {
  const { t } = useTranslation();
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
          <h3>{t("appointmentTrend")}</h3>
          <div className="bar-chart">
            {[42, 58, 66, 70, 78, 90, 88].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
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
