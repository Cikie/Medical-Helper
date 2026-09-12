import { useState } from "react";
import type { ReactNode } from "react";
import {
    ArrowRight,
    Bell,
    CalendarDays,
    ChevronRight,
    ClipboardList,
    HeartPulse,
    Home,
    Menu,
    MessageCircle,
    MoreHorizontal,
    Search,
    Settings,
    ShieldCheck,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function AppLayout({ children }: { children: ReactNode }) {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const { t } = useTranslation();
    const navigation = [
        { label: t("overview"), to: "/dashboard", icon: Home },
        { label: t("appointments"), to: "/booking", icon: CalendarDays },
        { label: t("findDoctor"), to: "/doctors", icon: Search },
        { label: t("screening"), to: "/screening", icon: ClipboardList },
        { label: t("review"), to: "/doctor-review", icon: MessageCircle },
        { label: t("admin"), to: "/admin", icon: Settings },
    ];

    return (
        <div className="app-shell">
            <aside className={`sidebar ${mobileNavOpen ? "sidebar-open" : ""}`}>
                <div className="brand">
                    <span className="brand-mark">
                        <HeartPulse size={20} />
                    </span>
                    <span>
                        care<span>path</span>
                    </span>
                </div>
                <div className="sidebar-label">{t("patientPortal")}</div>
                <nav aria-label={t("mainNavigation")} className="side-nav">
                    {navigation.map(({ label, to, icon: Icon }) => (
                        <NavLink
                            key={label}
                            to={to}
                            className={({ isActive }) =>
                                `nav-item ${isActive ? "active" : ""}`
                            }
                            onClick={() => setMobileNavOpen(false)}>
                            <Icon size={18} />
                            <span>{label}</span>
                        </NavLink>
                    ))}
                </nav>
                <div className="sidebar-divider" />
                <div className="sidebar-label">{t("account")}</div>
                <button className="nav-item" type="button">
                    <Settings size={18} />
                    <span>{t("settings")}</span>
                </button>
                <button className="nav-item" type="button">
                    <ShieldCheck size={18} />
                    <span>{t("privacy")}</span>
                </button>
                <div className="sidebar-bottom">
                    <div className="support-card">
                        <div className="support-icon">
                            <MessageCircle size={16} />
                        </div>
                        <strong>{t("needHand")}</strong>
                        <p>{t("careTeamHere")}</p>
                        <button type="button">
                            {t("chatWithUs")} <ArrowRight size={13} />
                        </button>
                    </div>
                    <div className="user-mini">
                        <div className="avatar avatar-small">AM</div>
                        <div>
                            <strong>Alex Morgan</strong>
                            <span>Patient ID · CP-20481</span>
                        </div>
                        <MoreHorizontal size={18} />
                    </div>
                </div>
            </aside>

            <main className="main-content">
                <header className="topbar">
                    <button
                        className="icon-button menu-button"
                        type="button"
                        aria-label={t("openMenu")}
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                        <Menu size={20} />
                    </button>
                    <div className="breadcrumb">
                        <span>{t("carePlatform")}</span>
                        <ChevronRight size={14} />
                        <strong>{t("portal")}</strong>
                    </div>
                    <div className="topbar-actions">
                        <LanguageSwitcher />
                        <div className="search-box">
                            <Search size={16} />
                            <input aria-label={t("search")} placeholder={t("search")} type="text" />
                        </div>
                        <button
                            className="icon-button notification-button"
                            type="button"
                            aria-label={t("notifications")}>
                            <Bell size={18} />
                            <span />
                        </button>
                        <div className="avatar">AM</div>
                    </div>
                </header>
                {children}
            </main>
        </div>
    );
}
