
import { Department } from './departments';

// Teacher interface
export interface Teacher {
  id: string;
  name: string;
  position: string;
  department: Department;
  photo: string;
  subjects?: string[];
  experience?: string;
}

// Mock data for teachers
export const teachers: Teacher[] = [
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
