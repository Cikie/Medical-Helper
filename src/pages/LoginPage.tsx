import type { FormEvent } from "react";
import { HeartPulse } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../shared/LanguageSwitcher";

export function LoginPage({ onLogin }: { onLogin: () => void }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onLogin();
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-panel">
        <div className="auth-brand">
          <div className="brand-mark">
            <HeartPulse size={20} />
          </div>
          <span>carepath</span>
        </div>
        <div className="auth-copy">
          <p className="eyebrow">{t("secureAccess")}</p>
          <h1>{t("welcomeBack")}</h1>
          <p>{t("loginDescription")}</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            <span>{t("email")}</span>
            <input defaultValue="alex.morgan@email.com" type="email" />
          </label>
          <label>
            <span>{t("password")}</span>
            <input defaultValue="••••••••" type="password" />
          </label>
          <div className="auth-actions">
            <button className="primary-button" type="submit">
              {t("signIn")}
            </button>
            <button className="ghost-button" type="button">
              {t("usePhone")}
            </button>
          </div>
          <div className="auth-meta">
            <span>{t("forgotPassword")}</span>
            <span>{t("smsVerification")}</span>
          </div>
        </form>
      </div>
      <div className="auth-visual">
        <div className="auth-visual-card">
          <LanguageSwitcher />
          <div className="tag">{t("healthOverview")}</div>
          <div className="mini-stat">
            <strong>{t("riskScore")}</strong>
            <span>{t("low")}</span>
          </div>
          <div className="mini-stat">
            <strong>{t("nextReview")}</strong>
            <span>Tue · 10:30 AM</span>
          </div>
          <div className="mini-graph">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
