
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Users } from 'lucide-react';
import { departments } from '@/data/departments';
import DepartmentCard from '@/components/faculty/DepartmentCard';

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
              <DepartmentCard 
                key={department.id}
                department={department}
                onClick={handleDepartmentClick}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faculty;
