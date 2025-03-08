
import { GraduationCap, BookOpen, Globe, Beaker, Calculator, Palette, Dumbbell } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// Department type definition
export type Department = 
  | 'elementary'
  | 'philology'
  | 'history'
  | 'foreign-languages'
  | 'natural-sciences'
  | 'math-informatics'
  | 'arts-technologies'
  | 'physical-defense';

// Department interface
export interface DepartmentData {
  id: Department;
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

// Department data
export const departments: DepartmentData[] = [
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
    icon: Beaker,
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

// Dictionary mapping for department names
export const departmentNames: Record<Department, string> = {
  'elementary': 'Початкова школа',
  'philology': 'Філологія',
  'history': 'Історія',
  'foreign-languages': 'Іноземні мови',
  'natural-sciences': 'Природничі науки',
  'math-informatics': 'Математика та інформатика',
  'arts-technologies': 'Мистецтво та технології',
  'physical-defense': 'Фізична культура та Захист України',
};
