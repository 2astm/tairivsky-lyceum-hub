import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl w-full">

          {/* Illustration */}
          <div className="flex-shrink-0 w-64 md:w-80">
            <svg viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              {/* Body */}
              <ellipse cx="160" cy="340" rx="60" ry="18" fill="#e2e8f0"/>
              <rect x="110" y="230" width="100" height="110" rx="20" fill="#94a3b8"/>
              {/* Arms */}
              <path d="M110 260 Q70 280 65 310" stroke="#94a3b8" strokeWidth="22" strokeLinecap="round"/>
              <path d="M210 260 Q250 280 252 315" stroke="#94a3b8" strokeWidth="22" strokeLinecap="round"/>
              {/* Hands down sad */}
              <circle cx="63" cy="316" r="14" fill="#94a3b8"/>
              <circle cx="253" cy="318" r="14" fill="#94a3b8"/>
              {/* Legs */}
              <rect x="125" y="330" width="26" height="40" rx="10" fill="#64748b"/>
              <rect x="169" y="330" width="26" height="40" rx="10" fill="#64748b"/>
              {/* Head */}
              <circle cx="160" cy="160" r="90" fill="#bfdbfe"/>
              {/* Hair */}
              <path d="M80 130 Q70 60 110 50 Q130 20 160 20 Q190 20 210 50 Q250 60 240 130" fill="#1e3a5f"/>
              <path d="M80 130 Q75 100 85 80" stroke="#1e3a5f" strokeWidth="3" fill="none"/>
              {/* Glasses */}
              <circle cx="135" cy="155" r="22" stroke="#6b21a8" strokeWidth="4" fill="white" fillOpacity="0.3"/>
              <circle cx="185" cy="155" r="22" stroke="#6b21a8" strokeWidth="4" fill="white" fillOpacity="0.3"/>
              <line x1="157" y1="155" x2="163" y2="155" stroke="#6b21a8" strokeWidth="3"/>
              <line x1="113" y1="148" x2="100" y2="143" stroke="#6b21a8" strokeWidth="3"/>
              <line x1="207" y1="148" x2="220" y2="143" stroke="#6b21a8" strokeWidth="3"/>
              {/* Sad eyes */}
              <path d="M125 148 Q135 142 145 148" stroke="#1e3a5f" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M175 148 Q185 142 195 148" stroke="#1e3a5f" strokeWidth="3" fill="none" strokeLinecap="round"/>
              {/* Open crying mouth */}
              <path d="M140 178 Q160 200 180 178" stroke="#1e3a5f" strokeWidth="3" fill="#fda4af" strokeLinecap="round"/>
              {/* Tears */}
              <ellipse cx="122" cy="172" rx="4" ry="6" fill="#93c5fd"/>
              <ellipse cx="198" cy="172" rx="4" ry="6" fill="#93c5fd"/>
              <ellipse cx="119" cy="182" rx="3" ry="5" fill="#93c5fd"/>
              <ellipse cx="201" cy="183" rx="3" ry="5" fill="#93c5fd"/>
            </svg>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-3">
              Помилка 404
            </p>
            <h1 className="mb-4 leading-none">
              <span className="block text-7xl md:text-8xl font-extrabold text-blue-600 tracking-tight">404</span>
              <span className="block text-2xl md:text-3xl font-semibold text-gray-800 mt-2">Сторінку не знайдено</span>
            </h1>
            <p className="text-gray-400 mb-10 max-w-sm">
              Схоже, сторінку{" "}
              <span className="font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">
                {location.pathname}
              </span>{" "}
              переклали у довготривалу пам'ять або її ніколи не існувало.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                ← Назад
              </button>
              <a
                href="/"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium text-center"
              >
                На головну
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;