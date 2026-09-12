import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { initialScreening, screeningChecks, screeningOptions } from "../data/healthData";

export function ScreeningPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [form, setForm] = useState(initialScreening);

    const updateField = (key: keyof typeof initialScreening, value: string) => {
        setForm((current) => ({ ...current, [key]: value }));
    };

    const riskScore =
        38 +
        (form.familyDiabetes === "Yes" ? 12 : 0) +
        (form.hypertension === "Yes" ? 15 : 0) +
        (form.fever === "Yes" ? 8 : 0);

    return (
        <div className="page-content screening-page">
            <section className="panel-header">
                <div>
                    <p className="eyebrow">{t("preConsultation")}</p>
                    <h1>{t("questionnaire")}</h1>
                </div>
                <div className="risk-chip">
                    {t("riskScore")}: <strong>{riskScore > 60 ? t("high") : riskScore > 40 ? t("medium") : t("low")}</strong>
                </div>
            </section>

            <div className="screening-grid">
                <div className="screening-section">
                    <h3>{t("personalInformation")}</h3>
                    <div className="field-row">
                        <label>
                            {t("age")}
                            <input
                                value={form.age}
                                onChange={(event) => updateField("age", event.target.value)}
                            />
                        </label>
                        <label>
                            {t("gender")}
                            <select
                                value={form.gender}
                                onChange={(event) => updateField("gender", event.target.value)}>
                                {screeningOptions.gender.map((option) => <option key={option}>{option}</option>)}
                            </select>
                        </label>
                    </div>
                    <div className="field-row">
                        <label>
                            Height (cm)
                            <input
                                value={form.height}
                                onChange={(event) => updateField("height", event.target.value)}
                            />
                        </label>
                        <label>
                            Weight (kg)
                            <input
                                value={form.weight}
                                onChange={(event) => updateField("weight", event.target.value)}
                            />
                        </label>
                        <label>
                            BMI
                            <input
                                value={form.bmi}
                                onChange={(event) => updateField("bmi", event.target.value)}
                            />
                        </label>
                    </div>
                </div>

                <div className="screening-section">
                    <h3>{t("lifestyle")}</h3>
                    <div className="field-row">
                        <label>
                            Smoking
                            <select
                                value={form.smoking}
                                onChange={(event) => updateField("smoking", event.target.value)}>
                                {screeningOptions.smoking.map((option) => <option key={option}>{option}</option>)}
                            </select>
                        </label>
                        <label>
                            Alcohol
                            <select
                                value={form.alcohol}
                                onChange={(event) => updateField("alcohol", event.target.value)}>
                                {screeningOptions.alcohol.map((option) => <option key={option}>{option}</option>)}
                            </select>
                        </label>
                    </div>
                    <div className="field-row">
                        <label>
                            Exercise frequency
                            <select
                                value={form.exercise}
                                onChange={(event) => updateField("exercise", event.target.value)}>
                                {screeningOptions.exercise.map((option) => <option key={option}>{option}</option>)}
                            </select>
                        </label>
                        <label>
                            Diet habits
                            <select
                                value={form.diet}
                                onChange={(event) => updateField("diet", event.target.value)}>
                                {screeningOptions.diet.map((option) => <option key={option}>{option}</option>)}
                            </select>
                        </label>
                    </div>
                </div>

                <div className="screening-section">
                    <h3>{t("medicalHistory")}</h3>
                    <div className="checks-grid">
                        {screeningChecks.medical.map(([key, label]) => (
                            <label key={key} className="check-item">
                                <input
                                    type="checkbox"
                                    checked={
                                        form[key as keyof typeof initialScreening] === "Yes" ||
                                            form[key as keyof typeof initialScreening] === "No"
                                            ? form[key as keyof typeof initialScreening] === "Yes"
                                            : false
                                    }
                                    onChange={() =>
                                        updateField(
                                            key as keyof typeof initialScreening,
                                            form[key as keyof typeof initialScreening] === "Yes"
                                                ? "No"
                                                : "Yes",
                                        )
                                    }
                                />
                                {label}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="screening-section">
                    <h3>{t("symptomsSection")}</h3>
                    <div className="checks-grid">
                        {screeningChecks.symptoms.map(([key, label]) => (
                            <label key={key} className="check-item">
                                <input
                                    type="checkbox"
                                    checked={
                                        form[key as keyof typeof initialScreening] === "Yes" ||
                                            form[key as keyof typeof initialScreening] === "Sometimes"
                                            ? true
                                            : false
                                    }
                                    onChange={() =>
                                        updateField(
                                            key as keyof typeof initialScreening,
                                            form[key as keyof typeof initialScreening] === "Yes" ||
                                                form[key as keyof typeof initialScreening] === "Sometimes"
                                                ? "No"
                                                : "Yes",
                                        )
                                    }
                                />
                                {label}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="screening-section">
                    <h3>{t("familyMedications")}</h3>
                    <div className="field-row">
                        <label>
                            Family diabetes
                            <select
                                value={form.familyDiabetes}
                                onChange={(event) => updateField("familyDiabetes", event.target.value)}>
                                {screeningOptions.yesNo.map((option) => <option key={option}>{option}</option>)}
                            </select>
                        </label>
                        <label>
                            Family card. disease
                            <select
                                value={form.familyCardio}
                                onChange={(event) => updateField("familyCardio", event.target.value)}>
                                {screeningOptions.yesNo.map((option) => <option key={option}>{option}</option>)}
                            </select>
                        </label>
                        <label>
                            Family cancer
                            <select
                                value={form.familyCancer}
                                onChange={(event) => updateField("familyCancer", event.target.value)}>
                                {screeningOptions.yesNo.map((option) => <option key={option}>{option}</option>)}
                            </select>
                        </label>
                    </div>
                    <div className="field-row">
                        <label>
                            Current medication
                            <input
                                value={form.medication}
                                onChange={(event) => updateField("medication", event.target.value)}
                            />
                        </label>
                        <label>
                            Allergies
                            <input
                                value={form.allergies}
                                onChange={(event) => updateField("allergies", event.target.value)}
                            />
                        </label>
                    </div>
                </div>
            </div>

            <div className="screening-actions">
                <button className="ghost-button" type="button">
                    {t("saveLater")}
                </button>
                <button
                    className="primary-button"
                    type="button"
                    onClick={() => navigate("/summary")}>
                    {t("submitScreening")}
                </button>
            </div>
        </div>
    );
}
