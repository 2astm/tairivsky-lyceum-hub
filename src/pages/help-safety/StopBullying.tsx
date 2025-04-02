
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { ShieldX, AlertTriangle, Phone } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const StopBullying = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Стоп булінг"
            description="Запобігання та протидія булінгу в шкільному середовищі"
          />
          
          <Alert className="my-6 border-amber-300 bg-amber-50">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800">Увага! Ця сторінка все ще має тестову інформацію та не є коректною!</AlertTitle>
            <AlertDescription className="text-amber-700">
              Інформація на цій сторінці може бути неточною або неповною. Для отримання актуальної інформації, будь ласка, зверніться до адміністрації ліцею.
            </AlertDescription>
          </Alert>
          
          <div className="prose prose-lg max-w-none mt-12">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="font-medium text-blue-700">
                Булінг (цькування) – це діяння (дії або бездіяльність) учасників освітнього процесу, які полягають у психологічному, фізичному, економічному, сексуальному насильстві, у тому числі із застосуванням засобів електронних комунікацій.
              </p>
            </div>
            
            <h2>Як розпізнати булінг?</h2>
            <ul>
              <li>Систематичність (повторюваність) діяння</li>
              <li>Наявність сторін – кривдник, потерпілий, спостерігачі</li>
              <li>Наслідки у вигляді психічної та/або фізичної шкоди</li>
            </ul>
            
            <h2>Види булінгу:</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-2">Фізичний булінг</h3>
                <p className="text-gray-700">Штовхання, підніжки, зачіпання, бійки, стусани, ляпаси, нанесення тілесних пошкоджень.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-2">Психологічний булінг</h3>
                <p className="text-gray-700">Словесні образи, погрози, приниження, переслідування, залякування, ізоляція, маніпуляції, ігнорування.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-2">Економічний булінг</h3>
                <p className="text-gray-700">Крадіжки, пошкодження чи знищення одягу та інших особистих речей, вимагання грошей.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-2">Кібербулінг</h3>
                <p className="text-gray-700">Приниження через соціальні мережі, поширення чуток онлайн, розміщення фото та відео без дозволу.</p>
              </Card>
            </div>
            
            <h2>Куди звертатись у випадку булінгу?</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex items-center">
                <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3" />
                <p className="font-medium text-yellow-700">
                  Якщо ви стали жертвою або свідком булінгу, негайно повідомте про це дорослим!
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
                  <span>Національна дитяча "гаряча лінія": 116 111 (безкоштовно)</span>
                </div>
              </li>
              <li>Поліція: 102</li>
            </ul>
            
            <h2>Нормативно-правова база:</h2>
            <ul>
              <li>Закон України "Про освіту"</li>
              <li>Закон України "Про внесення змін до деяких законодавчих актів України щодо протидії булінгу (цькуванню)"</li>
              <li>Наказ МОН від 28.12.2019 №1646 "Деякі питання реагування на випадки булінгу (цькування) та застосування заходів виховного впливу в закладах освіти"</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StopBullying;
