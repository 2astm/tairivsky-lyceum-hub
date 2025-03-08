
import React from 'react';
import { Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DepartmentData } from '@/data/departments';

interface DepartmentCardProps {
  department: DepartmentData;
  onClick: (departmentId: string) => void;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ department, onClick }) => {
  return (
    <Card 
      key={department.id}
      className={`${department.color} border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden`}
      onClick={() => onClick(department.id)}
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
  );
};

export default DepartmentCard;
