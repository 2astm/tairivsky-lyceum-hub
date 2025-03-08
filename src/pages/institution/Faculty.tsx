
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

// Define teacher type
interface Teacher {
  id: string;
  name: string;
  position: string;
  department: Department;
  photo: string;
  subjects?: string[];
  experience?: string;
}

// Mock data for teachers by department
const teachers: Teacher[] = [
  // Elementary School
  {
    id: 'elem1',
    name: 'Степаненко Наталія Василівна',
    position: 'Вчитель початкових класів, вища категорія',
    department: 'elementary',
    photo: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    experience: '25 років',
  },
  {
    id: 'elem2',
    name: 'Ковальчук Ірина Петрівна',
    position: 'Вчитель початкових класів, перша категорія',
    department: 'elementary',
    photo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    experience: '12 років',
  },
  
  // Philology
  {
    id: 'phil1',
    name: 'Литвиненко Олена Ігорівна',
    position: 'Вчитель української мови та літератури, вища категорія',
    department: 'philology',
    photo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    subjects: ['Українська мова', 'Українська література'],
  },
  
  // History
  {
    id: 'hist1',
    name: 'Тарасенко Михайло Андрійович',
    position: 'Вчитель історії, вища категорія',
    department: 'history',
    photo: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    subjects: ['Історія України', 'Всесвітня історія'],
  },
  
  // Foreign Languages
  {
    id: 'lang1',
    name: 'Іваненко Світлана Володимирівна',
    position: 'Вчитель англійської мови, перша категорія',
    department: 'foreign-languages',
    photo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    subjects: ['Англійська мова'],
  },
  {
    id: 'lang2',
    name: 'Кузьменко Олег Петрович',
    position: 'Вчитель німецької мови, друга категорія',
    department: 'foreign-languages',
    photo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    subjects: ['Німецька мова'],
  },
  
  // Natural Sciences
  {
    id: 'nat1',
    name: 'Віталенко Вікторія Анатоліївна',
    position: 'Вчитель біології, вища категорія',
    department: 'natural-sciences',
    photo: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    subjects: ['Біологія', 'Екологія'],
  },
  {
    id: 'nat2',
    name: 'Климчук Олександр Сергійович',
    position: 'Вчитель хімії та фізики, перша категорія',
    department: 'natural-sciences',
    photo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    subjects: ['Хімія', 'Фізика'],
  },
  
  // Math and Informatics
  {
    id: 'math1',
    name: 'Зінченко Марія Вікторівна',
    position: 'Вчитель математики, вища категорія',
    department: 'math-informatics',
    photo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    subjects: ['Алгебра', 'Геометрія'],
  },
  {
    id: 'math2',
    name: 'Данилюк Сергій Олегович',
    position: 'Вчитель інформатики, перша категорія',
    department: 'math-informatics',
    photo: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    subjects: ['Інформатика', 'Технології'],
  },
  
  // Arts and Technologies
  {
    id: 'arts1',
    name: 'Романенко Дарія Романівна',
    position: 'Вчитель образотворчого мистецтва, вища категорія',
    department: 'arts-technologies',
    photo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    subjects: ['Образотворче мистецтво'],
  },
  {
    id: 'arts2',
    name: 'Павленко Ігор Миколайович',
    position: 'Вчитель трудового навчання, перша категорія',
    department: 'arts-technologies',
    photo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    subjects: ['Трудове навчання', 'Технології'],
  },
  
  // Physical Culture and Defense of Ukraine
  {
    id: 'phys1',
    name: 'Григоренко Артем Валентинович',
    position: 'Вчитель фізичної культури, вища категорія',
    department: 'physical-defense',
    photo: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    subjects: ['Фізична культура'],
  },
  {
    id: 'phys2',
    name: 'Марченко Валентин Ігорович',
    position: 'Вчитель захисту України, перша категорія',
    department: 'physical-defense',
    photo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    subjects: ['Захист України'],
  },
];

// Department name mapping for display
const departmentNames: Record<Department, string> = {
  'elementary': 'Початкова школа',
  'philology': 'Філологія',
  'history': 'Історія',
  'foreign-languages': 'Іноземні мови',
  'natural-sciences': 'Природничі науки',
  'math-informatics': 'Математика та інформатика',
  'arts-technologies': 'Мистецтво та технології',
  'physical-defense': 'Фізична культура та Захист України',
};

// Department value mapping for tabs
const departmentValues: Department[] = [
  'elementary',
  'philology',
  'history',
  'foreign-languages',
  'natural-sciences',
  'math-informatics',
  'arts-technologies',
  'physical-defense',
];

const Faculty = () => {
  const [activeTab, setActiveTab] = useState<Department>('elementary');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Педагогічний колектив"
            description="Професійна команда Таїровського ліцею"
          />
          
          <Tabs 
            defaultValue="elementary" 
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as Department)}
            className="mt-12"
          >
            <div className="overflow-x-auto pb-4">
              <TabsList className="flex flex-nowrap w-max">
                {departmentValues.map(dept => (
                  <TabsTrigger 
                    key={dept} 
                    value={dept}
                    className="whitespace-nowrap"
                  >
                    {departmentNames[dept]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {departmentValues.map(dept => (
              <TabsContent key={dept} value={dept} className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {teachers
                    .filter(teacher => teacher.department === dept)
                    .map(teacher => (
                      <Card key={teacher.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="w-full h-64 relative overflow-hidden">
                          <img 
                            src={teacher.photo} 
                            alt={teacher.name}
                            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl">{teacher.name}</CardTitle>
                          <CardDescription className="text-blue-600 font-medium">
                            {teacher.position}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          {teacher.subjects && (
                            <div className="mb-2">
                              <p className="text-sm text-gray-500 font-medium">Предмети:</p>
                              <p className="text-sm">{teacher.subjects.join(', ')}</p>
                            </div>
                          )}
                          {teacher.experience && (
                            <div>
                              <p className="text-sm text-gray-500 font-medium">Досвід роботи:</p>
                              <p className="text-sm">{teacher.experience}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faculty;
