
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Teacher } from '@/data/teachers';

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
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
  );
};

export default TeacherItem;
