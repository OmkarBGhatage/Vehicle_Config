import { Car, Globe } from "lucide-react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import EnhancedHero from "./components/EnhancedHero";
import EnhancedFeatures from "./components/EnhancedFeatures";
import EnhancedCTASection from "./components/EnhancedCTASection";
import Footer from "./components/layout/Footer";

import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import OAuthHandler from "./pages/OAuthHandler";

import ProtectedRoute from "./components/ProtectedRoute";
import WelcomePage from "./pages/WelcomePage";
import DefaultConfigPage from "./pages/DefaultConfigPage";
import Configurator from "./pages/Configurator";
import InvoicePage from "./pages/InvoicePage";
import ThankYou from "./pages/ThankYou";
import InternalServerError from "./pages/InternalServerError";

import EnhancedSidebar from "./components/layout/EnhancedSidebar";
import EnhancedDashboardHeader from "./components/layout/EnhancedDashboardHeader";
import EnhancedDashboardHome from "./pages/EnhancedDashboardHome";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation(); 

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const isDashboardRoute =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/configurator") ||
    location.pathname.startsWith("/welcome") ||
    location.pathname.startsWith("/default_config") ||
    location.pathname.startsWith("/invoice") ||
    location.pathname.startsWith("/thank-you");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Toaster />

      {/* ===== LANDING HEADER ===== */}
      {!isDashboardRoute && (
        <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  VehicleConfig
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                {/* 🌍 Language Selector */}
                <div className="flex items-center gap-1 px-2 py-1 border rounded-md">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <select
                    value={i18n.language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="text-sm bg-transparent focus:outline-none cursor-pointer"
                  >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="hi">हिन्दी</option>
                    <option value="mr">मराठी</option>
                    <option value="sa">संस्कृतम्</option>
                  </select>
                </div>

                <button
                  onClick={() => navigate("/signin")}
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  {t("signin:title")}
                </button>

                <button
                  onClick={() => navigate("/register")}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  {t("register:title")}
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* ===== ROUTES ===== */}
      <Routes>
        {/* Landing */}
        <Route
          path="/"
          element={
            <>
              <EnhancedHero />
              <EnhancedFeatures />
              <EnhancedCTASection />
              <Footer />
            </>
          }
        />

        {/* Auth */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/oauth2/redirect" element={<OAuthHandler />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <EnhancedDashboardHome />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <WelcomePage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/configurator/:modelId"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Configurator />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/default_config/:modelId"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <DefaultConfigPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/invoice"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <InvoicePage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/thank-you"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ThankYou />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route path="/500" element={<InternalServerError />} />

      </Routes>
    </div>
  );
}

/* ===== DASHBOARD LAYOUT ===== */
function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:flex md:w-64">
        <EnhancedSidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <EnhancedDashboardHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
