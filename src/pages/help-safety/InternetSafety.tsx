
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Globe, Lock, ShieldAlert, MessageSquareWarning } from 'lucide-react';

const InternetSafety = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Безпека в Інтернеті"
            description="Рекомендації щодо безпечного користування інтернетом для дітей"
          />
          
          <div className="prose prose-lg max-w-none mt-12">
            <p className="lead">Інтернет надає безліч можливостей для навчання, розвитку та спілкування, але також може містити потенційні ризики, особливо для дітей та підлітків.</p>
            
            <h2>Основні правила безпеки в інтернеті:</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Lock className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-medium">Захист особистої інформації</h3>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Не розголошуй своє справжнє ім'я, адресу, номер телефону, школу</li>
                  <li>Використовуй надійні паролі</li>
                  <li>Не публікуй особисті фото без дозволу батьків</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <ShieldAlert className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-medium">Обережність у спілкуванні</h3>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Не спілкуйся з незнайомцями</li>
                  <li>Ніколи не погоджуйся на зустріч з людиною, яку знаєш тільки онлайн</li>
                  <li>Будь ввічливим в інтернеті, як і в реальному житті</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-medium">Безпечний контент</h3>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Перевіряй достовірність інформації</li>
                  <li>Не переходь за підозрілими посиланнями</li>
                  <li>Повідомляй батьків про неприйнятний контент</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <MessageSquareWarning className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-medium">Протидія кібербулінгу</h3>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Не відповідай на образливі повідомлення</li>
                  <li>Блокуй користувачів, які ображають тебе</li>
                  <li>Повідомляй дорослих про випадки кібербулінгу</li>
                </ul>
              </Card>
            </div>
            
            <h2>Поради для батьків:</h2>
            <ol>
              <li>Розмістіть комп'ютер у загальній кімнаті, а не в дитячій спальні</li>
              <li>Встановіть програми батьківського контролю</li>
              <li>Обговоріть з дітьми правила безпечного користування інтернетом</li>
              <li>Визначте час, який дитина може проводити в інтернеті</li>
              <li>Поясніть дитині, що не вся інформація в інтернеті є правдивою</li>
              <li>Заохочуйте дітей ділитися з вами своїми онлайн-враженнями</li>
            </ol>
            
            <h2>Корисні ресурси:</h2>
            <ul>
              <li><a href="https://stop-sexting.in.ua/" target="_blank" rel="noopener noreferrer">Stop-sexting.in.ua</a> - кампанія проти сексуального насильства над дітьми в інтернеті</li>
              <li><a href="https://thedigital.gov.ua/news/kiberbezpeka-dlya-ditey" target="_blank" rel="noopener noreferrer">Кібербезпека для дітей</a> - ресурс Міністерства цифрової трансформації</li>
              <li><a href="https://cyberpolice.gov.ua/" target="_blank" rel="noopener noreferrer">Кіберполіція України</a></li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
              <p className="font-medium text-blue-700">
                Пам'ятайте: безпека в інтернеті — це спільна відповідальність дітей, батьків та вчителів!
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InternetSafety;
