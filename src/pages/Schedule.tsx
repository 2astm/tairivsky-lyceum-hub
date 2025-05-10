
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import BackgroundGradient from '@/components/ui/BackgroundGradient';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {Calendar as CalendarIcon, Clock, Filter, Download, Printer, Search, AlertTriangle} from 'lucide-react';
import { add, format, startOfWeek, endOfWeek } from 'date-fns';
import { uk } from 'date-fns/locale';
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'day' | 'week'>('day');

  // Example class options
  const classOptions = [
    '5-А', '5-Б', '6-А', '6-Б', '7-А', '7-Б', 
    '8-А', '8-Б', '9-А', '9-Б', '10-А', '11-А'
  ];

  // Example schedule data - in a real app, this would come from an API
  const scheduleData = [
    { time: '8:30 - 9:15', subject: 'Математика', teacher: 'Іванова О.П.', room: '301' },
    { time: '9:25 - 10:10', subject: 'Українська мова', teacher: 'Петренко С.В.', room: '205' },
    { time: '10:30 - 11:15', subject: 'Історія України', teacher: 'Кравченко І.М.', room: '104' },
    { time: '11:35 - 12:20', subject: 'Фізика', teacher: 'Бондаренко В.О.', room: '302' },
    { time: '12:30 - 13:15', subject: 'Англійська мова', teacher: 'Сидоренко Т.І.', room: '207' },
    { time: '13:25 - 14:10', subject: 'Фізична культура', teacher: 'Мельник О.В.', room: 'Спортзал' },
  ];

  // Weekly schedule data - example
  const weeklyScheduleData = {
    'Понеділок': [
      { time: '8:30 - 9:15', subject: 'Математика', teacher: 'Іванова О.П.', room: '301' },
      { time: '9:25 - 10:10', subject: 'Українська мова', teacher: 'Петренко С.В.', room: '205' },
      { time: '10:30 - 11:15', subject: 'Історія України', teacher: 'Кравченко І.М.', room: '104' },
    ],
    'Вівторок': [
      { time: '8:30 - 9:15', subject: 'Фізика', teacher: 'Бондаренко В.О.', room: '302' },
      { time: '9:25 - 10:10', subject: 'Англійська мова', teacher: 'Сидоренко Т.І.', room: '207' },
      { time: '10:30 - 11:15', subject: 'Хімія', teacher: 'Коваленко Н.А.', room: '305' },
    ],
    'Середа': [
      { time: '8:30 - 9:15', subject: 'Біологія', teacher: 'Шевченко К.Л.', room: '204' },
      { time: '9:25 - 10:10', subject: 'Географія', teacher: 'Павленко Р.С.', room: '306' },
      { time: '10:30 - 11:15', subject: 'Українська література', teacher: 'Петренко С.В.', room: '205' },
    ],
    'Четвер': [
      { time: '8:30 - 9:15', subject: 'Математика', teacher: 'Іванова О.П.', room: '301' },
      { time: '9:25 - 10:10', subject: 'Фізична культура', teacher: 'Мельник О.В.', room: 'Спортзал' },
      { time: '10:30 - 11:15', subject: 'Інформатика', teacher: 'Ткаченко В.І.', room: '210' },
    ],
    'П\'ятниця': [
      { time: '8:30 - 9:15', subject: 'Зарубіжна література', teacher: 'Кузьменко Л.В.', room: '208' },
      { time: '9:25 - 10:10', subject: 'Історія України', teacher: 'Кравченко І.М.', room: '104' },
      { time: '10:30 - 11:15', subject: 'Мистецтво', teacher: 'Лисенко О.В.', room: '106' },
    ]
  };

  // Format the date range for week view
  const getWeekRangeText = (date: Date) => {
    const start = startOfWeek(date, { locale: uk });
    const end = endOfWeek(date, { locale: uk });
    return `${format(start, 'd', { locale: uk })} - ${format(end, 'd MMMM yyyy', { locale: uk })}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <BackgroundGradient className="pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Розклад занять
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Актуальний розклад уроків для учнів Таїровського ліцею
              </p>
            </div>
          </div>
        </BackgroundGradient>
        
        {/* Schedule Filter Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Alert className="my-6 border-amber-300 bg-amber-50">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <AlertTitle className="text-amber-800">Увага! Ця сторінка все ще має тестову інформацію та не є коректною!</AlertTitle>
              <AlertDescription className="text-amber-700">
                Інформація на цій сторінці може бути неточною або неповною. Для отримання актуальної інформації, будь ласка, зверніться до адміністрації ліцею.
              </AlertDescription>
            </Alert>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Date Selector */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" />
                    Виберіть дату
                  </h3>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="border rounded-md"
                  />
                </div>
                
                {/* Class Selector */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Filter className="w-5 h-5 mr-2 text-blue-500" />
                    Виберіть клас
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {classOptions.map((cls) => (
                      <Button
                        key={cls}
                        variant={selectedClass === cls ? "default" : "outline"}
                        onClick={() => setSelectedClass(cls)}
                        className="text-sm"
                      >
                        {cls}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-blue-500" />
                      Вид розкладу
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        variant={viewMode === 'day' ? "default" : "outline"}
                        onClick={() => setViewMode('day')}
                      >
                        На день
                      </Button>
                      <Button
                        variant={viewMode === 'week' ? "default" : "outline"}
                        onClick={() => setViewMode('week')}
                      >
                        На тиждень
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="mt-6 flex items-center justify-between border-t pt-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Відображення розкладу для{' '}
                    <span className="font-semibold text-blue-600">
                      {selectedClass || 'не вибрано'}
                    </span>{' '}
                    на{' '}
                    <span className="font-semibold text-blue-600">
                      {date && viewMode === 'day' ? 
                        format(date, 'd MMMM yyyy', { locale: uk }) : 
                        date && viewMode === 'week' ? 
                        getWeekRangeText(date) : 'сьогодні'}
                    </span>
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Printer className="w-4 h-4 mr-1" /> Друк
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" /> Завантажити
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Schedule Display */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedClass ? (
              <Card>
                <CardContent className="p-0">
                  <div className="p-4 bg-blue-50 border-b">
                    <h2 className="text-xl font-semibold">
                      Розклад для {selectedClass} класу
                    </h2>
                    <p className="text-sm text-gray-500">
                      {viewMode === 'day' 
                        ? date?.toLocaleDateString('uk-UA', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })
                        : date && getWeekRangeText(date)
                      }
                    </p>
                  </div>
                  
                  {viewMode === 'day' ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Час</TableHead>
                          <TableHead>Предмет</TableHead>
                          <TableHead>Викладач</TableHead>
                          <TableHead className="w-[80px]">Кабінет</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {scheduleData.map((lesson, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{lesson.time}</TableCell>
                            <TableCell>{lesson.subject}</TableCell>
                            <TableCell>{lesson.teacher}</TableCell>
                            <TableCell>{lesson.room}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    // Weekly schedule view
                    <div className="divide-y">
                      {Object.entries(weeklyScheduleData).map(([day, lessons]) => (
                        <div key={day} className="p-4">
                          <h3 className="text-lg font-medium mb-3">{day}</h3>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="w-[100px]">Час</TableHead>
                                <TableHead>Предмет</TableHead>
                                <TableHead>Викладач</TableHead>
                                <TableHead className="w-[80px]">Кабінет</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {lessons.map((lesson, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">{lesson.time}</TableCell>
                                  <TableCell>{lesson.subject}</TableCell>
                                  <TableCell>{lesson.teacher}</TableCell>
                                  <TableCell>{lesson.room}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                <Search className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Виберіть клас</h3>
                <p className="mt-1 text-gray-500">Оберіть клас зі списку вище для перегляду розкладу.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Schedule Notes */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Важлива інформація"
              description="Актуальні оголошення щодо змін у розкладі"
              align="left"
            />
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">Зміни у розкладі</h3>
                  <p className="text-gray-700">
                    18 жовтня (п'ятниця) заняття для учнів 9-х класів з фізики переносяться з 3-го уроку на 5-й урок.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">Консультації</h3>
                  <p className="text-gray-700">
                    Щосереди о 15:00 у кабінеті 301 проводяться додаткові консультації з математики для 11-х класів.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">Методичні дні</h3>
                  <p className="text-gray-700">
                    Кожний останній понеділок місяця є методичним днем. У цей день уроки проводяться за спеціальним розкладом, 
                    який публікується на сайті за тиждень до методичного дня.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold mb-4">Завантажити розклад</h3>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Розклад дзвінків
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Розклад на I семестр
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Розклад на II семестр
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Schedule;
