
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, GraduationCap, BookOpen, Globe, Flask, Calculator, Palette, Dumbbell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define department types
type Department = 
  | 'elementary'
  | 'philology'
  | 'history'
  | 'foreign-languages'
  | 'natural-sciences'
  | 'math-informatics'
  | 'arts-technologies'
  | 'physical-defense';

// Department data structure
const departments = [
  {
    id: 'elementary',
    name: 'Початкова школа',
    icon: GraduationCap,
    description: 'Вчителі початкової школи (1-4 класи)',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 'philology',
    name: 'Філологія',
    icon: BookOpen,
    description: 'Вчителі української мови та літератури',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    id: 'history',
    name: 'Історія',
    icon: BookOpen,
    description: 'Вчителі історії та суспільних наук',
    color: 'bg-amber-100 text-amber-700'
  },
  {
    id: 'foreign-languages',
    name: 'Іноземні мови',
    icon: Globe,
    description: 'Вчителі англійської, німецької та інших мов',
    color: 'bg-green-100 text-green-700'
  },
  {
    id: 'natural-sciences',
    name: 'Природничі науки',
    icon: Flask,
    description: 'Вчителі біології, хімії, фізики, географії',
    color: 'bg-teal-100 text-teal-700'
  },
  {
    id: 'math-informatics',
    name: 'Математика та інформатика',
    icon: Calculator,
    description: 'Вчителі математики та інформатики',
    color: 'bg-indigo-100 text-indigo-700'
  },
  {
    id: 'arts-technologies',
    name: 'Мистецтво та технології',
    icon: Palette,
    description: 'Вчителі мистецтва, трудового навчання, технологій',
    color: 'bg-pink-100 text-pink-700'
  },
  {
    id: 'physical-defense',
    name: 'Фізична культура та Захист України',
    icon: Dumbbell,
    description: 'Вчителі фізичної культури та Захисту України',
    color: 'bg-orange-100 text-orange-700'
  },
];

const Faculty = () => {
  const navigate = useNavigate();
  
  const handleDepartmentClick = (departmentId: string) => {
    navigate(`/institution/faculty/${departmentId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Педагогічний колектив"
            description="Професійна команда Таїровського ліцею"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {departments.map(department => (
              <Card 
                key={department.id}
                className={`${department.color} border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden`}
                onClick={() => handleDepartmentClick(department.id)}
              >
                <CardHeader className="pb-2 relative">
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                    <department.icon size={64} className="text-current transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl z-10">{department.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-80">{department.description}</p>
                  <div className="flex items-center mt-4 text-sm font-medium">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Переглянути викладачів</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faculty;
