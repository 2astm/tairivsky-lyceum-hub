import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';

import { ShieldAlert, Globe, Download, FileText, ExternalLink, Phone } from 'lucide-react';

const HelpAndSafety = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Допомога і безпека"
            description="Інформація про психологічну допомогу та безпеку учнів"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="hover:shadow-md transition-shadow duration-200">
              <Link to="/help-and-safety/stop-bullying" className="block p-6">
                <div className="flex items-center mb-4">
                  <ShieldAlert className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold">Стоп булінг</h3>
                </div>
                <p className="text-gray-600">Запобігання та протидія булінгу в шкільному середовищі.</p>
              </Link>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-200">
              <Link to="/help-and-safety/internet-safety" className="block p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold">Безпека в Інтернеті</h3>
                </div>
                <p className="text-gray-600">Рекомендації щодо безпечного користування інтернетом для дітей.</p>
              </Link>
            </Card>
          </div>
          {/* Hotlines */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-2">Гарячі лінії для захисту прав дітей</h2>
          <p className="text-gray-500 text-sm mb-6">Усі номери безкоштовні та анонімні</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { number: '1678', tel: '1678', label: 'Уповноважений Верховної Ради з прав людини', note: null },
              { number: '0 800 50 17 20', tel: '0800501720', label: 'Гаряча лінія з питань дотримання прав дітей', note: 'безкоштовно' },
              { number: '116 000', tel: '116000', label: 'Гаряча лінія щодо булінгу', note: null },
              { number: '116 123', tel: '116123', label: 'Національна гаряча лінія', note: 'з мобільних' },
              { number: '0 800 500 225', tel: '0800500225', label: 'Національна гаряча лінія', note: 'зі стаціонарних' },
              { number: '0 800 500 235', tel: '0800500235', label: 'Лінія попередження домашнього насильства та торгівлі людьми', note: null },
              { number: '0 800 505 501', tel: '0800505501', label: 'Лінія протидії торгівлі людьми та консультування мігрантів', note: null },
              { number: '0 800 213 103', tel: '0800213103', label: 'Центр безоплатної правової допомоги', note: null },
            ].map(({ number, tel, label, note }) => (
              <div key={tel} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl bg-white">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 shrink-0">
                  <Phone className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <a href={`tel:${tel}`} className="text-lg font-bold text-blue-700 hover:text-blue-900 underline">
                    {number}
                  </a>
                  {note && <span className="ml-2 text-xs text-gray-400">({note})</span>}
                  <p className="text-gray-600 text-sm leading-tight mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl bg-white">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 shrink-0">
                <Phone className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <a href="tel:0442557675" className="text-lg font-bold text-blue-700 hover:text-blue-900 underline">044 255 76 75</a>
                <p className="text-gray-600 text-sm leading-tight mt-0.5">Уповноважений Президента України з прав дітей</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border border-red-200 rounded-xl bg-red-50">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-100 shrink-0">
                <Phone className="h-4 w-4 text-red-600" />
              </div>
              <div className="flex-1 min-w-0">
                <a href="tel:102" className="text-lg font-bold text-red-700 hover:text-red-900 underline">102</a>
                <p className="text-gray-600 text-sm leading-tight mt-0.5">Національна поліція України</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Матеріали для завантаження</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <a
              href="/files/documents/pamyatka-bezpeky-dlya-ditey.pdf"
              download
              className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors shrink-0">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">Пам'ятка безпеки для дітей</p>
                <p className="text-gray-500 text-xs mt-0.5">Твоя безпека у ліцеї та онлайн · PDF</p>
              </div>
              <Download className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
            </a>
            <a
              href="/files/documents/bezpeka-u-litseyi-ta-onlayn.pdf"
              download
              className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors shrink-0">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">Безпека у ліцеї та онлайн середовищі</p>
                <p className="text-gray-500 text-xs mt-0.5">Презентаційні матеріали · PDF</p>
              </div>
              <Download className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
            </a>
            <a
              href="/files/documents/pravyla-bezpechnoho-korystuvannya-merezhei-internet.pdf"
              download
              className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors shrink-0">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">Правила безпечного користування мережею Інтернет</p>
                <p className="text-gray-500 text-xs mt-0.5">Для здобувачів освіти Таїрівського ліцею · PDF</p>
              </div>
              <Download className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
            </a>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Корисні посилання</h2>
          <div className="flex flex-col gap-3 mb-4">
            <a
              href="https://stopfraud.gov.ua/about-the-project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors shrink-0">
                <ExternalLink className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">Про проєкт «Кібер Брама»</p>
                <p className="text-gray-400 text-xs mt-0.5">stopfraud.gov.ua</p>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-300 group-hover:text-blue-500 transition-colors shrink-0" />
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpAndSafety;
