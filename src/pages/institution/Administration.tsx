
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Mock data for administration
const administrationMembers = [
  {
    id: '1',
    name: 'Іванова Олена Петрівна',
    position: 'Директор',
    photo: '/lovable-uploads/fb6e1f18-6165-43c6-85bd-a633ac4c990a.png',
    email: 'director@tairovskyj-liceum.od.ua',
    phone: '+380 48 123 4567',
  },
  {
    id: '2',
    name: 'Петренко Ірина Василівна',
    position: 'Заступник директора з навчально-виховної роботи',
    photo: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    email: 'deputy1@tairovskyj-liceum.od.ua',
    phone: '+380 48 123 4568',
  },
  {
    id: '3',
    name: 'Сидоренко Олександр Михайлович',
    position: 'Заступник директора з виховної роботи',
    photo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    email: 'deputy2@tairovskyj-liceum.od.ua',
    phone: '+380 48 123 4569',
  },
  {
    id: '4',
    name: 'Ковальчук Василь Ігорович',
    position: 'Заступник директора з адміністративно-господарської роботи',
    photo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    email: 'deputy3@tairovskyj-liceum.od.ua',
    phone: '+380 48 123 4570',
  },
];

const Administration = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Адміністрація школи"
            description="Керівний склад Таїровського ліцею"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {administrationMembers.map(member => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-64 relative overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{member.phone}</span>
                    </div>
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

export default Administration;
