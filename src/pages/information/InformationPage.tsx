
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { informationSections } from '@/data/informationSections';
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";
import {AlertTriangle} from "lucide-react";

const InformationPage = () => {
  const navigate = useNavigate();
  
  const handleSectionClick = (sectionId: string) => {
    navigate(`/information/${sectionId}`);
  };

  // Group sections by category for better organization
  const categorizedSections = {
    enrollment: informationSections.filter(s => 
      ['admission', 'evaluation', 'electronic-journal'].includes(s.id)),
    development: informationSections.filter(s => 
      ['extracurricular', 'nutrition', 'career-guidance', 'patriotic-education', 'self-government'].includes(s.id)),
    rights: informationSections.filter(s => 
      ['student-rights', 'parent-rights'].includes(s.id))
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Інформація"
            description="Корисна інформація для учнів та батьків Таїровського ліцею"
          />

          <Alert className="my-6 border-amber-300 bg-amber-50">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800">Увага! Ця сторінка все ще має тестову інформацію та не є коректною!</AlertTitle>
            <AlertDescription className="text-amber-700">
              Інформація на цій сторінці може бути неточною або неповною. Для отримання актуальної інформації, будь ласка, зверніться до адміністрації ліцею.
            </AlertDescription>
          </Alert>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {informationSections.map((section) => (
              <Card 
                key={section.id}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
                onClick={() => handleSectionClick(section.id)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <section.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                </div>
                <p className="text-gray-600 line-clamp-3">{section.content.substring(0, 120)}...</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InformationPage;
