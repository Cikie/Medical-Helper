import { queue, doctorReview } from "../data/healthData";
import { useTranslation } from "react-i18next";

export function DoctorReviewPage() {
  const { t } = useTranslation();
  return (
    <div className="page-content doctor-page">
      <section className="panel-header">
        <div>
          <p className="eyebrow">{t("doctorReview")}</p>
          <h1>{t("patientReviewQueue")}</h1>
        </div>
      </section>

      <div className="doctor-review-layout">
        <div className="review-main">
          <div className="patient-card">
            <div>
              <p className="eyebrow">{t("patientProfile")}</p>
              <h2>{doctorReview.patientName}</h2>
            </div>
            <div className="profile-stats">
              <span>Age: 29</span>
              <span>Height: 168 cm</span>
              <span>Weight: 64 kg</span>
            </div>
          </div>

          <div className="summary-card">
            <h3>{t("clinicalNotes")}</h3>
            <p>{doctorReview.summary}</p>
            <ul>
              {doctorReview.recommendations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="review-sidebar">
          <div className="summary-card">
            <p className="eyebrow">{t("patientQueue")}</p>
            {queue.map((item) => (
              <div key={item.name} className="queue-item">
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.status}</span>
                </div>
                <div className="queue-meta">
                  <span>{item.risk}</span>
                  <em>{item.wait}</em>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
