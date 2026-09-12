import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { summaryData } from "../data/healthData";
import { useAppSelector } from "../store/hooks";

export function SummaryPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { posts, comments } = useAppSelector((state) => state.appData);
  const aiSummary = posts.length ? posts.slice(0, 3).map((post) => post.title) : summaryData.aiSummary;
  const doctorPacket = comments.length ? comments.slice(0, 3).map((comment) => comment.body) : summaryData.doctorPacket;

  return (
    <div className="page-content summary-page">
      <section className="panel-header">
        <div>
          <p className="eyebrow">{t("healthSummary")}</p>
          <h1>{t("preConsultationReport")}</h1>
        </div>
      </section>

      <div className="summary-grid">
        <div className="summary-card highlight-card">
          <p className="eyebrow">{t("riskAssessment")}</p>
          <h2>{t("lowRisk")}</h2>
          <span className="risk-pill success">{t("stable")}</span>
          <p>
            Your recent vitals remain within expected clinical range with a mild
            family history flag.
          </p>
        </div>

        <div className="summary-card">
          <p className="eyebrow">AI summary</p>
          <ul>{aiSummary.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>

        <div className="summary-card">
          <p className="eyebrow">Doctor packet</p>
          <ul>{doctorPacket.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>

      <div className="report-box">
        <h3>{t("clinicalRecommendations")}</h3>
        <ul>{summaryData.recommendations.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>

      <div className="screening-actions">
        <button
          className="ghost-button"
          type="button"
          onClick={() => navigate("/screening")}>
          {t("editResponses")}
        </button>
        <button
          className="primary-button"
          type="button"
          onClick={() => navigate("/doctor-review")}>
          {t("sendToDoctor")}
        </button>
      </div>
    </div>
  );
}
