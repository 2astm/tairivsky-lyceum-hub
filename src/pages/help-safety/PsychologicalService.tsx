
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { BrainCircuit, MessageCircle, HeartPulse, Users, BookOpen } from 'lucide-react';

const PsychologicalService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Психологічна служба"
            description="Інформація про психологічну підтримку та допомогу в нашому ліцеї"
          />

          <div className="prose prose-lg max-w-none mt-10">
            <p className="lead">Психологічна служба Таїрівського ліцею створена для забезпечення психологічного благополуччя всіх учасників освітнього процесу.</p>

            <h2>Основні напрямки роботи:</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <BrainCircuit className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-medium">Психодіагностика</h3>
                </div>
                <p className="text-gray-700">Виявлення особливостей психічного розвитку учнів, визначення причин проблем у навчанні та поведінці.</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-medium">Консультування</h3>
                </div>
                <p className="text-gray-700">Індивідуальні та групові консультації для учнів, батьків та вчителів з різних психологічних питань.</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <HeartPulse className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-medium">Корекційно-відновлювальна робота</h3>
                </div>
                <p className="text-gray-700">Допомога у вирішенні особистісних проблем, розвиток соціальних навичок та емоційного інтелекту.</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-medium">Профілактична робота</h3>
                </div>
                <p className="text-gray-700">Профілактика девіантної поведінки, залежностей, булінгу та інших соціальних ризиків серед учнів.</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-medium">Просвітницька діяльність</h3>
                </div>
                <p className="text-gray-700">Проведення тренінгів, семінарів та занять для учнів, батьків і педагогів з питань психологічного здоров'я.</p>
              </Card>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-8">
              <p className="font-medium text-blue-800 text-sm">
                Звернутися до психологічної служби може будь-який учень, батько або вчитель ліцею.
                Усі консультації є <strong>конфіденційними</strong>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PsychologicalService;