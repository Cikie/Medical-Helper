import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { doctors } from "../data/healthData";

export function BookingPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0].id);
  const [selectedSlot, setSelectedSlot] = useState(doctors[0].availability[0]);
  const [paymentMethod, setPaymentMethod] = useState("Card ending 9842");

  return (
    <div className="page-content booking-page">
      <section className="panel-header">
        <div>
          <p className="eyebrow">{t("appointmentBooking")}</p>
          <h1>{t("bookConsultation")}</h1>
        </div>
      </section>

      <div className="booking-layout">
        <div className="booking-panel">
          <div className="steps">
            <span className="active">{t("doctorStep")}</span>
            <span>{t("timeStep")}</span>
            <span>{t("paymentStep")}</span>
          </div>

          <div className="form-group">
            <label>{t("chooseDoctor")}</label>
            <select
              value={selectedDoctor}
              onChange={(event) => setSelectedDoctor(event.target.value)}>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} · {doctor.specialty}
                </option>
              ))}
            </select>
          </div>

          <div className="times-grid">
            {doctors
              .find((doctor) => doctor.id === selectedDoctor)
              ?.availability.map((slot) => (
                <button
                  key={slot}
                  className={`slot-button ${selectedSlot === slot ? "selected" : ""}`}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}>
                  {slot}
                </button>
              ))}
          </div>

          <div className="form-group">
            <label>{t("paymentMethod")}</label>
            <select
              value={paymentMethod}
              onChange={(event) => setPaymentMethod(event.target.value)}>
              <option>Card ending 9842</option>
              <option>HSA account</option>
              <option>Insurance</option>
            </select>
          </div>

          <div className="booking-actions">
            <button className="ghost-button" type="button">
              {t("back")}
            </button>
            <button
              className="primary-button"
              type="button"
              onClick={() => navigate("/dashboard")}>
              {t("confirmBooking")}
            </button>
          </div>
        </div>

        <aside className="booking-summary">
          <h3>{t("bookingReview")}</h3>
          <div className="summary-row">
            <span>{t("doctor")}</span>
            <strong>
              {doctors.find((doctor) => doctor.id === selectedDoctor)?.name}
            </strong>
          </div>
          <div className="summary-row">
            <span>{t("session")}</span>
            <strong>{selectedSlot}</strong>
          </div>
          <div className="summary-row">
            <span>{t("location")}</span>
            <strong>
              {doctors.find((doctor) => doctor.id === selectedDoctor)?.location}
            </strong>
          </div>
          <div className="summary-row total-row">
            <span>{t("estimatedTotal")}</span>
            <strong>
              {doctors.find((doctor) => doctor.id === selectedDoctor)?.fees}
            </strong>
          </div>
        </aside>
      </div>
    </div>
  );
}
