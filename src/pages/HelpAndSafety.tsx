
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { 
  BrainCircuit, 
  ShieldX, 
  ShieldBan, 
  Globe, 
  Users 
} from 'lucide-react';

const sections = [
  {
    id: 'psychological-service',
    title: 'Психологічна служба',
    description: 'Інформація про психологічну підтримку та допомогу учням і батькам',
    icon: BrainCircuit,
    path: '/help-and-safety/psychological-service'
  },
  {
    id: 'stop-bullying',
    title: 'Стоп булінг',
    description: 'Запобігання та протидія булінгу в шкільному середовищі',
    icon: ShieldX,
    path: '/help-and-safety/stop-bullying'
  },
  {
    id: 'stop-violence',
    title: 'Стоп насильству',
    description: 'Інформація про запобігання та протидію всім формам насильства',
    icon: ShieldBan,
    path: '/help-and-safety/stop-violence'
  },
  {
    id: 'internet-safety',
    title: 'Безпека в Інтернеті',
    description: 'Рекомендації щодо безпечного користування інтернетом для дітей',
    icon: Globe,
    path: '/help-and-safety/internet-safety'
  },
  {
    id: 'psychologist',
    title: 'Психолог та соціальний педагог',
    description: 'Інформація про роботу шкільного психолога та соціального педагога',
    icon: Users,
    path: '/help-and-safety/psychologist'
  }
];

const HelpAndSafety = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Допомога та безпека"
            description="Ресурси та інформація для забезпечення безпечного та підтримуючого середовища навчання"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {sections.map((section) => (
              <Link to={section.path} key={section.id}>
                <Card 
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-full"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <section.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                  </div>
                  <p className="text-gray-600">{section.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpAndSafety;
