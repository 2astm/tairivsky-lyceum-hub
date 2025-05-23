
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import BackgroundGradient from '@/components/ui/BackgroundGradient';
import {Laptop, BookOpen, Video, FileText, Link as LinkIcon, Play, AlertTriangle} from 'lucide-react';
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";

const DistanceLearning = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <BackgroundGradient className="pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Дистанційне навчання
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ресурси та матеріали для ефективного онлайн-навчання
              </p>
            </div>
          </div>
        </BackgroundGradient>
        
        {/* Info Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Alert className="my-6 border-amber-300 bg-amber-50">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <AlertTitle className="text-amber-800">Увага! Ця сторінка все ще має тестову інформацію та не є коректною!</AlertTitle>
              <AlertDescription className="text-amber-700">
                Інформація на цій сторінці може бути неточною або неповною. Для отримання актуальної інформації, будь ласка, зверніться до адміністрації ліцею.
              </AlertDescription>
            </Alert>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Організація дистанційного навчання"
                  description="Інформація про особливості проведення онлайн-занять, платформи та ресурси"
                  align="left"
                />
                
                <p className="text-gray-600 mt-6">
                  Для забезпечення якісного дистанційного навчання наш ліцей використовує сучасні 
                  освітні технології та платформи. Учні мають доступ до всіх необхідних навчальних матеріалів, 
                  можуть ефективно взаємодіяти з вчителями та однокласниками.
                </p>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { label: 'Онлайн-уроки', value: 'Google Meet' },
                    { label: 'Навчальна платформа', value: 'Google Classroom' },
                    { label: 'Перевірка знань', value: 'Classtime, Google Forms' },
                    { label: 'Електронний журнал', value: 'E-School' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-medium text-gray-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Дистанційне навчання"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-500 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Навчальні ресурси"
              description="Онлайн-матеріали для ефективного навчання за предметами"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: 'Математика',
                  description: 'Відеоуроки, презентації, інтерактивні вправи та тести для вивчення алгебри та геометрії',
                  icon: BookOpen,
                  link: '#math'
                },
                {
                  title: 'Українська мова',
                  description: 'Матеріали з граматики, стилістики, літератури та практичні завдання з мови',
                  icon: FileText,
                  link: '#ukrainian'
                },
                {
                  title: 'Англійська мова',
                  description: 'Інтерактивні вправи з граматики, аудіоматеріали, тексти та завдання для розвитку мовних навичок',
                  icon: Play,
                  link: '#english'
                },
                {
                  title: 'Історія',
                  description: 'Відеолекції, презентації та першоджерела для вивчення вітчизняної та світової історії',
                  icon: Video,
                  link: '#history'
                },
                {
                  title: 'Фізика',
                  description: 'Віртуальні лабораторні роботи, відеодемонстрації та інтерактивні моделі фізичних явищ',
                  icon: Laptop,
                  link: '#physics'
                },
                {
                  title: 'Біологія',
                  description: '3D-моделі, віртуальні екскурсії та відеоматеріали з вивчення живої природи',
                  icon: LinkIcon,
                  link: '#biology'
                }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm 
                    hover:shadow-md hover:border-blue-100 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 
                    flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Перейти до матеріалів</span>
                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Instructions Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Інструкції та рекомендації"
              description="Корисна інформація для ефективного дистанційного навчання"
            />
            
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Для учнів</h3>
                <ul className="space-y-3">
                  {[
                    'Як приєднатися до онлайн-уроку в Google Meet',
                    'Як користуватися Google Classroom',
                    'Як здавати домашнє завдання онлайн',
                    'Правила поведінки під час відеоуроків',
                    'Як ефективно організувати своє навчання вдома'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <a href="#" className="text-gray-700 hover:text-blue-600">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Для батьків</h3>
                <ul className="space-y-3">
                  {[
                    'Як допомогти дитині організувати дистанційне навчання',
                    'Як контролювати успішність в електронному журналі',
                    'Комунікація з вчителями під час дистанційного навчання',
                    'Технічне забезпечення для онлайн-уроків',
                    'Режим дня та фізична активність під час дистанційного навчання'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <a href="#" className="text-gray-700 hover:text-blue-600">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DistanceLearning;
