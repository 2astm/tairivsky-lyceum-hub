
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';
import {SchoolInfo} from "@/data/school-info.ts";

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <SectionHeading
              title="Контакти"
              description="Зв'яжіться з Таїровським ліцеєм"
            />

            <a
              href="mailto:YevhenMolchaniuk@tairivsky-lyceum.od.ua?subject=Побажання стосовно нового сайту"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Надіслати відгук</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl">Контактна інформація</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Адреса</h3>
                    <p className="mt-1">
                      {SchoolInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Телефон</h3>
                    { SchoolInfo.phones.map(phone => <p className="mt-1">
                      {phone}
                    </p>)}
                  </div>
                </div>

                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1">
                        { SchoolInfo.emails.map(email =>
                            <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
                                {email}
                        </a>)}
                    </p>
                  </div>
                </div>

                  <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Графік роботи</h3>
                    <p className="mt-1">
                        {SchoolInfo.workTime}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl">Розташування</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full h-full rounded-md overflow-hidden">
                  <iframe
                    src={SchoolInfo.coordinates}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Карта розташування Таїровського ліцею"
                  ></iframe>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">Як доїхати</h3>
                  <ul className="mt-2 ml-6 list-disc text-gray-700">
                    <li className="mt-1">Автобуси: 78Т, 81</li>
                    <li className="mt-1">Зупинка: "Таврія"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-md mt-8">
            <CardHeader>
              <CardTitle className="text-2xl">Зворотний зв'язок</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Маєте питання, пропозиції або зауваження? Ми завжди відкриті до спілкування.
                Надішліть нам повідомлення, і ми обов'язково вам відповімо.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a
                  href={`mailto:${SchoolInfo.emails[0]}?subject=Питання до адміністрації`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Написати на загальну пошту
                </a>

                <a
                  href="mailto:YevhenMolchaniuk@tairivsky-lyceum.od.ua?subject=Побажання стосовно нового сайту"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-blue-200 bg-white text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Відгук про новий сайт
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
