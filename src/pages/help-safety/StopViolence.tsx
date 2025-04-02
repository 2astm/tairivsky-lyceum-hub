
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { ShieldBan, AlertTriangle, Phone } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const StopViolence = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Стоп насильству"
            description="Інформація про запобігання та протидію всім формам насильства"
          />
          
          <Alert className="my-6 border-amber-300 bg-amber-50">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800">Увага! Ця сторінка все ще має тестову інформацію та не є коректною!</AlertTitle>
            <AlertDescription className="text-amber-700">
              Інформація на цій сторінці може бути неточною або неповною. Для отримання актуальної інформації, будь ласка, зверніться до адміністрації ліцею.
            </AlertDescription>
          </Alert>
          
          <div className="prose prose-lg max-w-none mt-12">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <div className="flex items-center">
                <ShieldBan className="h-6 w-6 text-red-500 mr-3" />
                <p className="font-medium text-red-700">
                  Насильство у будь-якій формі є неприпустимим і порушує основні права людини.
                </p>
              </div>
            </div>
            
            <h2>Види насильства:</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-2">Фізичне насильство</h3>
                <p className="text-gray-700">Умисне заподіяння фізичної шкоди: побиття, штовхання, ляпаси, щипання, шарпання, нанесення тілесних ушкоджень тощо.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-2">Психологічне насильство</h3>
                <p className="text-gray-700">Словесні образи, погрози, приниження, залякування, шантаж, ізоляція, ігнорування, контроль та маніпуляції.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-2">Економічне насильство</h3>
                <p className="text-gray-700">Позбавлення або обмеження матеріальних ресурсів, коштів, знищення або пошкодження майна.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-2">Сексуальне насильство</h3>
                <p className="text-gray-700">Дії сексуального характеру без згоди особи, сексуальні домагання, примус до сексуальних дій.</p>
              </Card>
            </div>
            
            <h2>Ознаки того, що дитина зазнає насильства:</h2>
            <ul>
              <li>Зміни у поведінці (замкнутість, тривожність, агресивність)</li>
              <li>Необґрунтовані пропуски занять</li>
              <li>Зниження успішності в навчанні</li>
              <li>Фізичні пошкодження (синці, подряпини, опіки)</li>
              <li>Неохайний зовнішній вигляд</li>
              <li>Страх перед батьками чи певними дорослими</li>
            </ul>
            
            <h2>Куди звертатися у випадку насильства?</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex items-center">
                <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3" />
                <p className="font-medium text-yellow-700">
                  Якщо ви стали жертвою або свідком насильства, негайно повідомте про це!
                </p>
              </div>
            </div>
            
            <h3>Контакти для звернення:</h3>
            <ul>
              <li>Класний керівник</li>
              <li>Шкільний психолог - кабінет 215</li>
              <li>Адміністрація школи</li>
              <li>
                <div className="flex items-center my-1">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Національна "гаряча лінія" з попередження домашнього насильства: 116 123 (безкоштовно)</span>
                </div>
              </li>
              <li>Поліція: 102</li>
              <li>Служба у справах дітей: (048) 123-45-67</li>
            </ul>
            
            <h2>Важлива інформація:</h2>
            <p>
              Відповідно до Закону України "Про запобігання та протидію домашньому насильству", 
              кожна дитина має право на захист від усіх форм насильства, 
              а працівники закладів освіти зобов'язані повідомляти про випадки насильства 
              стосовно дітей.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StopViolence;
