
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Users, HeartHandshake } from 'lucide-react';

const Psychologist = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Психолог та соціальний педагог"
            description="Інформація про роботу шкільного психолога та соціального педагога"
          />

          <div className="prose prose-lg max-w-none mt-10">
            <p className="lead">В Таїрівському ліцеї працюють кваліфіковані психологи та соціальні педагоги, які надають допомогу учням, батькам та вчителям.</p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  Шкільний психолог
                </h2>
                <p className="text-gray-700">Шкільний психолог проводить діагностичну, консультативну та корекційну роботу з учнями, надає рекомендації вчителям та батькам.</p>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <HeartHandshake className="h-6 w-6 text-blue-600 mr-3" />
                  Соціальний педагог
                </h2>
                <p className="text-gray-700">Соціальний педагог допомагає учням у вирішенні соціальних проблем, працює з дітьми, які опинилися в складних життєвих обставинах.</p>
              </Card>
            </div>

            <h2>Напрямки роботи:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Психологічна діагностика та моніторинг</li>
              <li>Індивідуальні та групові консультації</li>
              <li>Профілактика девіантної поведінки</li>
              <li>Психологічна підтримка в кризових ситуаціях</li>
              <li>Соціальний супровід учнів пільгових категорій</li>
              <li>Проведення семінарів та тренінгів для учнів, батьків та вчителів</li>
              <li>Розвиток життєвих компетенцій учнів</li>
              <li>Профорієнтаційна робота</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-8">
              <p className="font-medium text-blue-800 text-sm">
                Звернутися за консультацією може будь-який учень, батько або вчитель ліцею.
                Усі звернення є <strong>конфіденційними</strong>. Для запису зверніться до адміністрації ліцею.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Psychologist;