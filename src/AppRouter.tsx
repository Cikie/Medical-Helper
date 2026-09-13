import type { ReactNode } from "react";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import { useEffect } from "react";
import {
    AdminPage,
    BookingPage,
    DashboardPage,
    DoctorReviewPage,
    DoctorsPage,
    LoginPage,
    ScreeningPage,
    SummaryPage,
} from "./pages";
import { AppLayout } from "./shared";
import { useAppSelector } from "./store/hooks";
import { useAppDispatch } from "./store/hooks";
import { signIn } from "./store/authSlice";
import { fetchAppData } from "./store/appDataSlice";

export function AppRouter() {
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
    const dispatch = useAppDispatch();

    useEffect(() => {
        void dispatch(fetchAppData());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
                    }
                />
                <Route
                    path="/login"
                    element={<LoginPage onLogin={() => dispatch(signIn())} />}
                />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedPage isAuthenticated={isAuthenticated}>
                            <DashboardPage />
                        </ProtectedPage>
                    }
                />
                <Route
                    path="/doctors"
                    element={
                        <ProtectedPage isAuthenticated={isAuthenticated}>
                            <DoctorsPage />
                        </ProtectedPage>
                    }
                />
                <Route
                    path="/booking"
                    element={
                        <ProtectedPage isAuthenticated={isAuthenticated}>
                            <BookingPage />
                        </ProtectedPage>
                    }
                />
                <Route
                    path="/screening"
                    element={
                        <ProtectedPage isAuthenticated={isAuthenticated}>
                            <ScreeningPage />
                        </ProtectedPage>
                    }
                />
                <Route
                    path="/summary"
                    element={
                        <ProtectedPage isAuthenticated={isAuthenticated}>
                            <SummaryPage />
                        </ProtectedPage>
                    }
                />
                <Route
                    path="/doctor-review"
                    element={
                        <ProtectedPage isAuthenticated={isAuthenticated}>
                            <DoctorReviewPage />
                        </ProtectedPage>
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <ProtectedPage isAuthenticated={isAuthenticated}>
                            <AdminPage />
                        </ProtectedPage>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

function ProtectedPage({
    isAuthenticated,
    children,
}: {
    isAuthenticated: boolean;
    children: ReactNode;
}) {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <AppLayout>{children}</AppLayout>;
}
