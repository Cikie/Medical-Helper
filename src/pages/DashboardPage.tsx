import {
  Activity,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  FileText,
  HeartPulse,
  MessageCircle,
  MoreHorizontal,
  Stethoscope,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function DashboardPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="page-content">
      <section className="welcome-row">
        <div>
          <p className="eyebrow">{t("mondayDate")}</p>
          <h1>
            {t("goodMorning")} <span>✦</span>
          </h1>
          <p className="welcome-copy">
            {t("healthAtGlance")}
          </p>
        </div>
        <button
          className="primary-button"
          type="button"
          onClick={() => navigate("/screening")}>
          <CalendarDays size={17} /> {t("startScreening")}
        </button>
      </section>

      <section className="status-banner">
        <div className="status-check">
          <Check size={18} />
        </div>
        <div>
          <strong>{t("screeningComplete")}</strong>
          <p>{t("screeningPrompt")}</p>
        </div>
        <button type="button" onClick={() => navigate("/screening")}>
          {t("continue")} <ArrowRight size={15} />
        </button>
        <div className="progress-track">
          <span style={{ width: "60%" }} />
        </div>
      </section>

      <div className="section-heading">
        <div>
          <h2>{t("upcomingAppointment")}</h2>
          <p>{t("nextVisit")}</p>
        </div>
        <button
          className="text-button"
          type="button"
          onClick={() => navigate("/booking")}>
          {t("viewAllAppointments")} <ArrowRight size={15} />
        </button>
      </div>

      <section className="appointment-card">
        <div className="appointment-date">
          <strong>17</strong>
          <span>SEP</span>
          <div className="date-line" />
        </div>
        <div className="appointment-details">
          <div className="appointment-type">
            <span className="dot dot-teal" /> {t("videoConsultation")}
          </div>
          <h3>{t("followUpAppointment")}</h3>
          <div className="doctor-line">
            <div className="doctor-avatar">SP</div>
            <div>
              <strong>Dr. Sofia Patel</strong>
              <span>Internal medicine · Meridian Clinic</span>
            </div>
          </div>
        </div>
        <div className="appointment-time">
          <Clock3 size={16} />
          <strong>10:30 AM</strong>
          <span>30 minutes</span>
        </div>
        <div className="appointment-actions">
          <button className="outline-button" type="button">
            {t("reschedule")}
          </button>
          <button
            className="more-button"
            aria-label="More appointment actions"
            type="button">
            <MoreHorizontal size={19} />
          </button>
        </div>
      </section>

      <div className="dashboard-grid">
        <section>
          <div className="section-heading compact">
            <div>
              <h2>Health snapshot</h2>
              <p>Based on your latest records</p>
            </div>
            <button
              className="text-button"
              type="button"
              onClick={() => navigate("/summary")}>
              View records <ArrowRight size={15} />
            </button>
          </div>
          <div className="metric-grid">
            <div className="metric-card">
              <div className="metric-icon pink">
                <HeartPulse size={18} />
              </div>
              <span>Heart rate</span>
              <strong>
                72 <small>bpm</small>
              </strong>
              <em className="positive">
                ↘ 4% <i>vs last month</i>
              </em>
            </div>
            <div className="metric-card">
              <div className="metric-icon blue">
                <Activity size={18} />
              </div>
              <span>Blood pressure</span>
              <strong>
                118/76 <small>mmHg</small>
              </strong>
              <em className="positive">Healthy range</em>
            </div>
            <div className="metric-card">
              <div className="metric-icon orange">
                <Stethoscope size={18} />
              </div>
              <span>Weight</span>
              <strong>
                68.4 <small>kg</small>
              </strong>
              <em className="neutral">
                ↘ 0.8 kg <i>this month</i>
              </em>
            </div>
          </div>
        </section>

        <section className="care-team-card">
          <div className="section-heading compact">
            <div>
              <h2>Your care team</h2>
              <p>People looking after you</p>
            </div>
            <button
              className="more-button"
              aria-label="More care team actions"
              type="button">
              <MoreHorizontal size={19} />
            </button>
          </div>
          <div className="team-member">
            <div className="doctor-avatar large">SP</div>
            <div>
              <strong>Dr. Sofia Patel</strong>
              <span>Primary care physician</span>
            </div>
            <button
              className="round-action"
              aria-label="Message Dr. Sofia Patel"
              type="button">
              <MessageCircle size={17} />
            </button>
          </div>
          <div className="team-member">
            <div className="doctor-avatar large green">JM</div>
            <div>
              <strong>James Miller, RN</strong>
              <span>Care coordinator</span>
            </div>
            <button
              className="round-action"
              aria-label="Message James Miller"
              type="button">
              <MessageCircle size={17} />
            </button>
          </div>
        </section>
      </div>

      <div className="lower-grid">
        <section>
          <div className="section-heading compact">
            <div>
              <h2>Recent activity</h2>
              <p>Keep track of your care journey</p>
            </div>
            <button className="text-button" type="button">
              See all <ArrowRight size={15} />
            </button>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon teal">
                <Check size={16} />
              </div>
              <div>
                <strong>Blood pressure record added</strong>
                <span>Yesterday · By you</span>
              </div>
              <em>Completed</em>
            </div>
            <div className="activity-item">
              <div className="activity-icon purple">
                <FileText size={16} />
              </div>
              <div>
                <strong>Lab results are ready to view</strong>
                <span>Sep 11, 2026 · Meridian Clinic</span>
              </div>
              <em className="unread">New</em>
            </div>
            <div className="activity-item">
              <div className="activity-icon orange">
                <CalendarDays size={16} />
              </div>
              <div>
                <strong>Appointment confirmed</strong>
                <span>Sep 10, 2026 · Follow-up appointment</span>
              </div>
              <em>Completed</em>
            </div>
          </div>
        </section>

        <section className="wellness-card">
          <div className="wellness-orbit orbit-one" />
          <div className="wellness-orbit orbit-two" />
          <div className="wellness-content">
            <div className="wellness-icon">
              <HeartPulse size={20} />
            </div>
            <p className="eyebrow">Your wellbeing</p>
            <h2>Small steps, lasting health.</h2>
            <p>Take a moment today to check in with yourself.</p>
            <button className="soft-button" type="button">
              Explore wellbeing <ArrowRight size={15} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
