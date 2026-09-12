import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function SummaryPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          <ul>
            <li>Blood pressure trending below concern threshold.</li>
            <li>Exercise and hydration patterns are consistent.</li>
            <li>Follow-up with your doctor recommended in 2 weeks.</li>
          </ul>
        </div>

        <div className="summary-card">
          <p className="eyebrow">Doctor packet</p>
          <ul>
            <li>Latest screening questionnaire attached.</li>
            <li>Measurement timeline included.</li>
            <li>Medication and allergy profile reviewed.</li>
          </ul>
        </div>
      </div>

      <div className="report-box">
        <h3>{t("clinicalRecommendations")}</h3>
        <ul>
          <li>
            Continue current medication plan with weekly hydration tracking.
          </li>
          <li>Maintain exercise routine and add one extra walk each week.</li>
          <li>Bring blood pressure readings to the next consultation.</li>
        </ul>
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
