
import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, AlertTriangle, HardHat, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const Preview = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      <Card className="max-w-3xl w-full p-8 shadow-lg">
        <SectionHeading
          title="Таїровський ліцей"
          description="Вибір версії сайту"
          align="center"
        />
        
        <Alert className="my-6 border-amber-300 bg-amber-50">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <AlertTitle className="text-amber-800 font-semibold">Увага! Сайт у розробці</AlertTitle>
          <AlertDescription className="text-amber-700">
            Нова версія сайту знаходиться в процесі розробки. Інформація на новому сайті 
            може бути неточною або неповною.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card className="p-6 border-blue-200 hover:border-blue-400 transition-all">
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <HardHat className="mr-2 h-5 w-5 text-blue-600" />
              Нова версія (в розробці)
            </h3>
            <p className="text-gray-600 mb-4">
              Це нова версія сайту з оновленим дизайном. Будь ласка, зверніть увагу, що сайт 
              знаходиться в розробці і містить тестові дані.
            </p>
            <Link to="/">
              <Button className="w-full">
                Перейти до нової версії
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>

          <Card className="p-6 border-green-200 hover:border-green-400 transition-all">
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <ExternalLink className="mr-2 h-5 w-5 text-green-600" />
              Поточна офіційна версія
            </h3>
            <p className="text-gray-600 mb-4">
              Це діюча версія сайту з актуальною інформацією про Таїровський ліцей, 
              навчальний процес та новини.
            </p>
            <a href="https://sites.google.com/view/tairovskyi-zaklad/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full border-green-300">
                Перейти до офіційного сайту
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </Card>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mt-6">
          <p className="text-blue-700 text-sm text-center">
            © 2024 Таїровський ліцей. Усі права захищені.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Preview;
