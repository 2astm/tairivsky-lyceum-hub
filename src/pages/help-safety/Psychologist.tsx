
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Users, Phone, Mail, Building, Calendar } from 'lucide-react';

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
          
          <div className="prose prose-lg max-w-none mt-12">
            <p className="lead">В Таїровському ліцеї працюють кваліфіковані психологи та соціальні педагоги, які надають допомогу учням, батькам та вчителям.</p>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  Шкільний психолог
                </h2>
                <p className="mb-4">Наш шкільний психолог проводить діагностичну, консультативну та корекційну роботу з учнями, надає рекомендації вчителям та батькам.</p>
                
                <h3 className="text-lg font-medium mt-6 mb-2">Контактна інформація:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-2" />
                    Телефон: (048) 123-45-67
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-2" />
                    Email: psychologist@tairivsky-lyceum.od.ua
                  </li>
                  <li className="flex items-center">
                    <Building className="h-5 w-5 text-blue-600 mr-2" />
                    Кабінет: 215
                  </li>
                  <li className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    Години прийому: Пн-Пт, 9:00-15:00
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  Соціальний педагог
                </h2>
                <p className="mb-4">Соціальний педагог допомагає учням у вирішенні соціальних проблем, працює з дітьми, які опинилися в складних життєвих обставинах.</p>
                
                <h3 className="text-lg font-medium mt-6 mb-2">Контактна інформація:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-2" />
                    Телефон: (048) 123-45-68
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-2" />
                    Email: social@tairivsky-lyceum.od.ua
                  </li>
                  <li className="flex items-center">
                    <Building className="h-5 w-5 text-blue-600 mr-2" />
                    Кабінет: 216
                  </li>
                  <li className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    Години прийому: Пн-Пт, 9:00-15:00
                  </li>
                </ul>
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
            
            <h2 className="mt-8">Корисні матеріали:</h2>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <a href="#" className="text-blue-600 hover:underline">Поради для батьків</a>
              <a href="#" className="text-blue-600 hover:underline">Поради для учнів</a>
              <a href="#" className="text-blue-600 hover:underline">Вправи для зняття стресу</a>
              <a href="#" className="text-blue-600 hover:underline">Методики самодопомоги</a>
              <a href="#" className="text-blue-600 hover:underline">Як впоратися з тривогою</a>
              <a href="#" className="text-blue-600 hover:underline">Техніки релаксації</a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Psychologist;
