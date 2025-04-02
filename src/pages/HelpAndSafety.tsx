import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

// Images and icons
import { Shield, BookOpen, UserRound, ShieldAlert, Globe } from 'lucide-react';

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

          <Alert className="my-6 border-amber-300 bg-amber-50">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800">Увага! Ця сторінка все ще має тестову інформацію та не є коректною!</AlertTitle>
            <AlertDescription className="text-amber-700">
              Інформація на цій сторінці може бути неточною або неповною. Для отримання актуальної інформації, будь ласка, зверніться до адміністрації ліцею.
            </AlertDescription>
          </Alert>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card className="hover:shadow-md transition-shadow duration-200">
              <Link to="/help-and-safety/psychological-service" className="block p-6">
                <div className="flex items-center mb-4">
                  <UserRound className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold">Психологічна служба</h3>
                </div>
                <p className="text-gray-600">Інформація про психологічну підтримку та допомогу в ліцеї.</p>
              </Link>
            </Card>

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
              <Link to="/help-and-safety/stop-violence" className="block p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-lg font-semibold">Стоп насильству</h3>
                </div>
                <p className="text-gray-600">Інформація про запобігання та протидію всім формам насильства.</p>
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

            <Card className="hover:shadow-md transition-shadow duration-200">
              <Link to="/help-and-safety/psychologist" className="block p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold">Психолог та соціальний педагог</h3>
                </div>
                <p className="text-gray-600">Інформація про роботу шкільного психолога та соціального педагога.</p>
              </Link>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpAndSafety;
