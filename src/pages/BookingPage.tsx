import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../store/hooks";

export function BookingPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    users: doctors,
    todos,
    albums,
    status,
  } = useAppSelector((state) => state.appData);
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [selectedSlotId, setSelectedSlotId] = useState<number | null>(null);
  const [selectedPaymentId, setSelectedPaymentId] = useState<number | null>(
    null,
  );
  const activeDoctorId = selectedDoctorId || String(doctors[0]?.id ?? "");
  const selectedDoctor = doctors.find(
    (doctor) => String(doctor.id) === activeDoctorId,
  );
  const slots = useMemo(
    () =>
      todos.filter((todo) => todo.userId === selectedDoctor?.id).slice(0, 3),
    [selectedDoctor?.id, todos],
  );
  const paymentMethods = useMemo(
    () =>
      albums.filter((album) => album.userId === selectedDoctor?.id).slice(0, 3),
    [albums, selectedDoctor?.id],
  );
  const activeSlotId = slots.some((slot) => slot.id === selectedSlotId)
    ? selectedSlotId
    : slots[0]?.id;
  const activePaymentId = paymentMethods.some(
    (method) => method.id === selectedPaymentId,
  )
    ? selectedPaymentId
    : paymentMethods[0]?.id;
  const selectedSlot = slots.find((slot) => slot.id === activeSlotId);
  const selectedPayment = paymentMethods.find(
    (method) => method.id === activePaymentId,
  );

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
          {status === "loading" && (
            <p className="api-status">Loading appointment data...</p>
          )}
          <div className="steps">
            <span className="active">{t("doctorStep")}</span>
            <span>{t("timeStep")}</span>
            <span>{t("paymentStep")}</span>
          </div>
          <div className="form-group">
            <label>{t("chooseDoctor")}</label>
            <select
              value={activeDoctorId}
              onChange={(event) => setSelectedDoctorId(event.target.value)}>
              <option value="" disabled>
                Select a doctor
              </option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} · {doctor.company.name}
                </option>
              ))}
            </select>
          </div>
          <div className="times-grid">
            {slots.map((slot) => (
              <button
                key={slot.id}
                className={`slot-button ${activeSlotId === slot.id ? "selected" : ""}`}
                type="button"
                onClick={() => setSelectedSlotId(slot.id)}>
                {slot.title}
              </button>
            ))}
          </div>
          <div className="form-group">
            <label>{t("paymentMethod")}</label>
            <select
              value={activePaymentId ?? ""}
              onChange={(event) =>
                setSelectedPaymentId(Number(event.target.value))
              }>
              {paymentMethods.map((method) => (
                <option key={method.id} value={method.id}>
                  {method.title}
                </option>
              ))}
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
            <strong>{selectedDoctor?.name}</strong>
          </div>
          <div className="summary-row">
            <span>{t("session")}</span>
            <strong>{selectedSlot?.title}</strong>
          </div>
          <div className="summary-row">
            <span>{t("location")}</span>
            <strong>{selectedDoctor?.address.city}</strong>
          </div>
          <div className="summary-row total-row">
            <span>{t("paymentMethod")}</span>
            <strong>{selectedPayment?.title}</strong>
          </div>
        </aside>
      </div>
    </div>
  );
}
