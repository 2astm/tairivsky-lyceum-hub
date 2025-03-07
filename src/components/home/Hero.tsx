
import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundGradient from '../ui/BackgroundGradient';

const Hero = () => {
  return (
    <BackgroundGradient className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fade-up">
            <div className="inline-flex items-center mb-3">
              <div className="h-1 w-6 rounded bg-blue-500 mr-2" />
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Навчання · Розвиток · Майбутнє
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
              Таїровський ліцей
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Місце, де знання зустрічається з інноваціями, 
              а традиції - з майбутнім.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/information"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-sm 
                  hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 
                  transition-all duration-300"
              >
                Дізнатися більше
              </Link>
              <Link
                to="/schedule"
                className="px-6 py-3 rounded-lg bg-gray-50 text-gray-800 font-medium border border-gray-200
                  hover:bg-gray-100 transition-all duration-300"
              >
                Розклад занять
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in order-first md:order-last">
            <div className="relative mx-auto max-w-md">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80"
                  alt="Таїровський ліцей"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 md:w-40 md:h-40 bg-blue-500 rounded-xl -z-10"></div>
              <div className="absolute -left-4 -top-4 w-24 h-24 md:w-32 md:h-32 bg-teal-500 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default Hero;
