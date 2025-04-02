
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { BrainCircuit, MessageCircle, HeartPulse, AlertTriangle } from 'lucide-react';

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

          <Alert className="my-6 border-amber-300 bg-amber-50">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800">Увага! Ця сторінка все ще має тестову інформацію та не є коректною!</AlertTitle>
            <AlertDescription className="text-amber-700">
              Інформація на цій сторінці може бути неточною або неповною. Для отримання актуальної інформації, будь ласка, зверніться до адміністрації ліцею.
            </AlertDescription>
          </Alert>
          
          <div className="prose prose-lg max-w-none mt-12">
            <p className="lead">Психологічна служба Таїровського ліцею створена для забезпечення психологічного благополуччя всіх учасників освітнього процесу.</p>
            
            <h2>Основні напрямки роботи:</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
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
            </div>
            
            <h2>Графік роботи психологічної служби:</h2>
            <table className="w-full mb-8 border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-blue-100 p-2 text-left">День тижня</th>
                  <th className="border border-blue-100 p-2 text-left">Години роботи</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-2">Понеділок - П'ятниця</td>
                  <td className="border border-gray-200 p-2">8:00 - 16:00</td>
                </tr>
              </tbody>
            </table>
            
            <h2>Контакти:</h2>
            <p>Телефон: (048) 123-45-67</p>
            <p>Email: psychology@tairivsky-lyceum.od.ua</p>
            <p>Кабінет: 215 (другий поверх)</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PsychologicalService;
