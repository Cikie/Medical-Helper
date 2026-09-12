import { useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchDoctors } from "../store/doctorsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export function DoctorsPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { items: doctors, status, error } = useAppSelector((state) => state.doctors);

    useEffect(() => {
        if (status === "idle") {
            void dispatch(fetchDoctors());
        }
    }, [dispatch, status]);

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
                    <input defaultValue="Cardiology, Downtown" type="text" />
                </div>
                <button className="outline-button" type="button">
                    {t("location")}
                </button>
                <button className="outline-button" type="button">
                    {t("symptoms")}
                </button>
            </div>

            <div className="doctor-list">
                {status === "loading" && <p className="api-status">Loading doctors...</p>}
                {status === "failed" && (
                    <div className="api-status api-error">
                        <span>{error} Showing saved results.</span>
                        <button className="ghost-button" type="button" onClick={() => void dispatch(fetchDoctors())}>
                            Retry
                        </button>
                    </div>
                )}
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
                                <p>{doctor.specialty}</p>
                            </div>
                            <div className="rating-badge">★ {doctor.rating}</div>
                        </div>
                        <div className="doctor-meta">
                            <span>{doctor.location}</span>
                            <span>{doctor.experience}</span>
                        </div>
                        <div className="doctor-availability">
                            {doctor.availability.map((slot) => (
                                <span key={slot}>{slot}</span>
                            ))}
                        </div>
                        <div className="doctor-card-footer">
                            <div>
                                <strong>{doctor.fees}</strong>
                                <span>{t("consultFee")}</span>
                            </div>
                            <div>
                                <strong>{doctor.match}</strong>
                                <span>{t("matchScore")}</span>
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
