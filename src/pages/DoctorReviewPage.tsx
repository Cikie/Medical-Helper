import { useTranslation } from "react-i18next";
import { useAppSelector } from "../store/hooks";

export function DoctorReviewPage() {
  const { t } = useTranslation();
  const { users, comments, posts, todos } = useAppSelector(
    (state) => state.appData,
  );
  const patient = users[0];
  const recommendations = comments.slice(1, 4);
  const queue = users.slice(1, 4).map((user) => {
    const todo = todos.find((item) => item.userId === user.id);
    return {
      user,
      status: todo?.completed ? t("ready") : t("pendingReview"),
      risk: todo?.completed ? t("lowRisk") : t("mediumRisk"),
    };
  });

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
              <h2>{patient?.name}</h2>
            </div>
            <div className="profile-stats">
              <span>{patient?.email}</span>
              <span>{patient?.address.city}</span>
              <span>{patient?.company.name}</span>
            </div>
          </div>
          <div className="summary-card">
            <h3>{t("clinicalNotes")}</h3>
            <p>{posts[0]?.body}</p>
            <ul>
              {recommendations.map((item) => (
                <li key={item.id}>{item.body}</li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="review-sidebar">
          <div className="summary-card">
            <p className="eyebrow">{t("patientQueue")}</p>
            {queue.map(({ user, status, risk }) => (
              <div key={user.id} className="queue-item">
                <div>
                  <strong>{user.name}</strong>
                  <span>{status}</span>
                </div>
                <div className="queue-meta">
                  <span>{risk}</span>
                  <em>{user.address.city}</em>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
