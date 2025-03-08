
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Users, Shield, Newspaper, Laptop, Building } from 'lucide-react';

const features = [
  {
    name: 'Інформація',
    description: 'Дізнайтеся більше про наш ліцей, його історію та цінності.',
    icon: BookOpen,
    to: '/information'
  },
  {
    name: 'Новини',
    description: 'Останні події, оголошення та новини шкільного життя.',
    icon: Newspaper,
    to: '/news'
  },
  {
    name: 'Дистанційне навчання',
    description: 'Ресурси та матеріали для ефективного онлайн-навчання.',
    icon: Laptop,
    to: '/distance-learning'
  },
  {
    name: 'Допомога і безпека',
    description: 'Інформація про безпечне навчальне середовище та психологічну підтримку.',
    icon: Shield,
    to: '/help-and-safety'
  },
  {
    name: 'Заклад',
    description: 'Інформація про адміністрацію, педагогічний колектив та контакти.',
    icon: Building,
    to: '/institution/administration'
  },
  {
    name: 'Розклад',
    description: 'Розклад занять для всіх класів та додаткових занять.',
    icon: Calendar,
    to: '/schedule'
  }
];

const QuickLinks = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Швидка навігація
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Знайдіть необхідну інформацію та ресурси для успішного навчання
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.to}
              className="group p-6 bg-gray-50 rounded-xl border border-gray-100 
                hover:bg-white hover:shadow-md hover:border-blue-100 
                transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 
                flex items-center justify-center mb-4
                group-hover:bg-blue-600 group-hover:text-white 
                transition-all duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {feature.name}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
