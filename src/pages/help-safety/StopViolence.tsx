
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { ShieldBan, AlertTriangle, Phone } from 'lucide-react';

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

          <div className="prose prose-lg max-w-none mt-10">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg">
              <div className="flex items-center">
                <ShieldBan className="h-6 w-6 text-red-500 mr-3 shrink-0" />
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
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg">
              <div className="flex items-center">
                <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3 shrink-0" />
                <p className="font-medium text-yellow-700">
                  Якщо ви стали жертвою або свідком насильства, негайно повідомте про це!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              {[
                { number: '102', tel: 'tel:102', title: 'Національна поліція', desc: 'Фізичне насильство, злочини' },
                { number: '116 111', tel: 'tel:116111', title: 'Гаряча лінія для дітей', desc: 'Анонімна підтримка дітей і підлітків 24/7' },
                { number: '1547', tel: 'tel:1547', title: 'Лінія протидії насильству', desc: 'Консультації та захист прав дитини 24/7' },
              ].map(({ number, tel, title, desc }) => (
                <Card key={number} className="p-5 text-center">
                  <a href={tel} className="text-2xl font-extrabold text-blue-700 underline hover:text-blue-900 block mb-1">{number}</a>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{title}</div>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </Card>
              ))}
            </div>

            <ul>
              <li>Класний керівник</li>
              <li>Шкільний психолог</li>
              <li>Адміністрація ліцею</li>
            </ul>

            <h2>Важлива інформація:</h2>
            <p>
              Відповідно до Закону України «Про запобігання та протидію домашньому насильству»,
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