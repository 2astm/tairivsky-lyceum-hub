
import React from 'react';
import { cn } from '@/lib/utils';

export interface Teacher {
  id: string;
  name: string;
  position: string;
  image: string;
  subjects?: string[];
  email?: string;
}

interface TeacherCardProps {
  teacher: Teacher;
  className?: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, className }) => {
  return (
    <div 
      className={cn(
        'group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100',
        className
      )}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={teacher.image} 
          alt={teacher.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy" 
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">
          {teacher.name}
        </h3>
        
        <p className="text-blue-600 font-medium mb-3">
          {teacher.position}
        </p>
        
        {teacher.subjects && teacher.subjects.length > 0 && (
          <div className="mb-3">
            <p className="text-sm text-gray-600 mb-2">Викладає:</p>
            <div className="flex flex-wrap gap-1">
              {teacher.subjects.map((subject, index) => (
                <span 
                  key={index}
                  className="inline-block bg-blue-50 text-blue-700 rounded-full text-xs px-2 py-1"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {teacher.email && (
          <a 
            href={`mailto:${teacher.email}`}
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm mt-2"
          >
            <svg className="mr-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {teacher.email}
          </a>
        )}
      </div>
    </div>
  );
};

export default TeacherCard;
