import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../store/hooks";

export function DoctorsPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    users: doctors,
    status,
    error,
  } = useAppSelector((state) => state.appData);

  return (
    <div className="page-content">
      <section className="panel-header">
        <div>
          <p className="eyebrow">{t("doctorSearch")}</p>
          <h1>{t("findRightDoctor")}</h1>
        </div>
        <button className="primary-button" type="button">
          {t("filterSpecialty")}
        </button>
      </section>
      <div className="doctor-search-bar">
        <div className="search-box large">
          <Search size={16} />
          <input type="text" aria-label={t("search")} />
        </div>
        <button className="outline-button" type="button">
          {t("location")}
        </button>
        <button className="outline-button" type="button">
          {t("symptoms")}
        </button>
      </div>
      <div className="doctor-list">
        {status === "loading" && (
          <p className="api-status">Loading doctors...</p>
        )}
        {status === "failed" && <p className="api-status api-error">{error}</p>}
        {doctors.map((doctor) => (
          <article className="doctor-card" key={doctor.id}>
            <div className="doctor-card-head">
              <div className="doctor-avatar large">
                {doctor.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <h3>{doctor.name}</h3>
                <p>{doctor.company.name}</p>
              </div>
              <div className="rating-badge">ID {doctor.id}</div>
            </div>
            <div className="doctor-meta">
              <span>{doctor.address.city}</span>
              <span>{doctor.email}</span>
            </div>
            <div className="doctor-card-footer">
              <div>
                <strong>{doctor.company.name}</strong>
                <span>{t("doctor")}</span>
              </div>
              <div>
                <strong>{doctor.address.city}</strong>
                <span>{t("location")}</span>
              </div>
              <button
                className="primary-button small"
                type="button"
                onClick={() => navigate("/booking")}>
                {t("bookVisit")}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
