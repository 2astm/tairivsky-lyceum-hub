
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, ArrowLeft } from 'lucide-react';
import { getSectionById } from '@/data/informationSections';

const InformationSection = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  
  const section = sectionId ? getSectionById(sectionId) : undefined;
  
  const handleBackClick = () => {
    navigate('/information');
  };

  if (!section) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-28 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              variant="ghost" 
              className="mb-4 group"
              onClick={handleBackClick}
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Назад до інформації
            </Button>
            
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Розділ не знайдено</h2>
              <p className="text-gray-600">Інформація, яку ви шукаєте, не доступна.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            className="mb-4 group"
            onClick={handleBackClick}
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Назад до інформації
          </Button>
          
          <Card className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <section.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">{section.title}</h1>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">{section.content}</p>
              
              {section.hasPdf && (
                <Button
                  variant="outline" 
                  className="mt-8 text-blue-600 border-blue-200 hover:bg-blue-50"
                  asChild
                >
                  <a href="#" className="inline-flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    {section.pdfLabel}
                  </a>
                </Button>
              )}
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InformationSection;
