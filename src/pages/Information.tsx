
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import BackgroundGradient from '@/components/ui/BackgroundGradient';
import {CheckCircle, Award, BookOpen, Users, School, PenTool, AlertTriangle} from 'lucide-react';
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";

const Information = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <BackgroundGradient className="pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Про Таїровський ліцей
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Дізнайтеся більше про наш заклад освіти, його історію, місію та цінності.
              </p>
            </div>
          </div>
        </BackgroundGradient>
        
        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <Alert className="my-6 border-amber-300 bg-amber-50">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800">Увага! Ця сторінка все ще має тестову інформацію та не є коректною!</AlertTitle>
            <AlertDescription className="text-amber-700">
              Інформація на цій сторінці може бути неточною або неповною. Для отримання актуальної інформації, будь ласка, зверніться до адміністрації ліцею.
            </AlertDescription>
          </Alert>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Наша місія"
                  description="Ми прагнемо забезпечити кожного учня якісною освітою та створити середовище, 
                  де всі мають можливість розкрити свій потенціал."
                  align="left"
                />
                
                <ul className="space-y-4 mt-8">
                  {[
                    'Забезпечувати якісну освіту, що відповідає сучасним вимогам',
                    'Розвивати критичне мислення та творчі здібності учнів',
                    'Виховувати відповідальних громадян з активною життєвою позицією',
                    'Формувати навички успішної соціалізації та адаптації в суспільстві',
                    'Створювати безпечне та підтримуюче навчальне середовище'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Наша місія"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-blue-500 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* History Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Історія ліцею"
              description="Шлях становлення та розвитку нашого навчального закладу"
            />
            
            <div className="mt-12 space-y-12">
              {[
                {
                  year: '1980',
                  title: 'Заснування',
                  description: 'Таїровський ліцей був заснований як загальноосвітня школа для забезпечення якісною освітою дітей місцевої громади.'
                },
                {
                  year: '1995',
                  title: 'Реорганізація',
                  description: 'Школа була реорганізована у навчально-виховний комплекс з поглибленим вивченням іноземних мов та природничо-математичних дисциплін.'
                },
                {
                  year: '2005',
                  title: 'Оновлення',
                  description: 'Проведено масштабну модернізацію матеріально-технічної бази, оновлено комп\'ютерні класи та обладнано сучасні кабінети природничих наук.'
                },
                {
                  year: '2015',
                  title: 'Статус ліцею',
                  description: 'Заклад освіти отримав статус ліцею та розширив освітню програму, додавши профільне навчання та поглиблене вивчення предметів.'
                },
                {
                  year: '2020',
                  title: 'Сучасність',
                  description: 'Сьогодні Таїровський ліцей - це сучасний освітній заклад, який поєднує традиції та інновації, забезпечуючи всебічний розвиток учнів.'
                }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 flex flex-col items-center mr-6">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {item.year.slice(-2)}
                    </div>
                    {index < 4 && <div className="w-0.5 h-full bg-blue-200 mt-4"></div>}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {item.title} <span className="text-blue-600">({item.year})</span>
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Наші цінності"
              description="Основні принципи, якими ми керуємося у своїй роботі"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: 'Якість освіти',
                  description: 'Ми прагнемо забезпечити високий рівень викладання та використовуємо сучасні методи навчання.',
                  icon: BookOpen
                },
                {
                  title: 'Повага',
                  description: 'Ми створюємо середовище, де кожна особистість цінується та поважається.',
                  icon: Users
                },
                {
                  title: 'Відповідальність',
                  description: 'Ми виховуємо в учнях почуття відповідальності за власні дії та розвиток.',
                  icon: CheckCircle
                },
                {
                  title: 'Досконалість',
                  description: 'Ми постійно вдосконалюємося та заохочуємо наших учнів прагнути до найвищих результатів.',
                  icon: Award
                },
                {
                  title: 'Інноваційність',
                  description: 'Ми відкриті до нових ідей та впроваджуємо інноваційні підходи в освітньому процесі.',
                  icon: PenTool
                },
                {
                  title: 'Цілісний розвиток',
                  description: 'Ми сприяємо всебічному розвитку учнів: інтелектуальному, творчому, фізичному та соціальному.',
                  icon: School
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 
                    flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Statistics Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '1980', label: 'Рік заснування' },
                { number: '650+', label: 'Учнів' },
                { number: '45', label: 'Вчителів' },
                { number: '98%', label: 'Успішність' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Information;
