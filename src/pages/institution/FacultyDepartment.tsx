
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { teachers } from '@/data/teachers';
import { departmentNames } from '@/data/departments';
import TeacherItem from '@/components/faculty/TeacherItem';

const FacultyDepartment = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  const navigate = useNavigate();
  
  const departmentName = departmentId && departmentId in departmentNames 
    ? departmentNames[departmentId as keyof typeof departmentNames] 
    : 'Відділ';
    
  const departmentTeachers = teachers.filter(teacher => teacher.department === departmentId);

  const handleBackClick = () => {
    navigate('/institution/faculty');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="mb-4 group"
              onClick={handleBackClick}
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Назад до відділів
            </Button>
          </div>
          
          <SectionHeading
            title={departmentName}
            description={`Викладацький склад відділу "${departmentName}"`}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 animate-fade-in">
            {departmentTeachers.map(teacher => (
              <TeacherItem key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FacultyDepartment;
