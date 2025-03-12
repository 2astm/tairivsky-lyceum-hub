
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  Puzzle, 
  Utensils, 
  ListChecks, 
  Compass, 
  Flag, 
  UserCheck, 
  Users, 
  Computer, 
  Building,
  FileText
} from 'lucide-react';

// Information sections
const informationSections = [
  {
    id: 'admission',
    title: 'Умови прийому',
    icon: UserPlus,
    content: 'Прийом до Таїровського ліцею здійснюється відповідно до чинного законодавства України та правил прийому, затверджених директором закладу. Зарахування учнів до 1-го класу відбувається на підставі заяви батьків та медичної довідки. Прийом до 10-го класу здійснюється на конкурсній основі за результатами навчальних досягнень з профільних предметів.',
    hasPdf: true,
    pdfLabel: 'Завантажити правила прийому (PDF)'
  },
  {
    id: 'extracurricular',
    title: 'Гуртки',
    icon: Puzzle,
    content: 'Таїровський ліцей пропонує широкий вибір гуртків для розвитку творчих здібностей та особистісного зростання учнів. Серед них: спортивні гуртки (футбол, волейбол, баскетбол), творчі гуртки (хоровий спів, образотворче мистецтво, театральна студія), предметні гуртки (математичний, програмування, англійська мова), гуртки технічної творчості (робототехніка, моделювання).',
    hasPdf: true,
    pdfLabel: 'Завантажити розклад гуртків (PDF)'
  },
  {
    id: 'nutrition',
    title: 'Харчування',
    icon: Utensils,
    content: 'Харчування учнів здійснюється в шкільній їдальні, яка забезпечує якісне та збалансоване харчування згідно з нормами та санітарно-гігієнічними вимогами. Безкоштовне харчування надається учням пільгових категорій. Меню складається з урахуванням вікових потреб дітей та затверджується директором ліцею.',
    hasPdf: true,
    pdfLabel: 'Завантажити меню на тиждень (PDF)'
  },
  {
    id: 'evaluation',
    title: 'Критерії оцінювання',
    icon: ListChecks,
    content: 'Оцінювання навчальних досягнень учнів здійснюється відповідно до критеріїв, затверджених Міністерством освіти і науки України. Використовується 12-бальна система оцінювання. Оцінка відображає рівень знань, умінь та навичок учня з урахуванням його індивідуальних особливостей. Формувальне оцінювання застосовується для відстеження прогресу учнів та коригування навчального процесу.',
    hasPdf: true,
    pdfLabel: 'Завантажити критерії оцінювання (PDF)'
  },
  {
    id: 'career-guidance',
    title: 'Профорієнтація',
    icon: Compass,
    content: 'У ліцеї діє система профорієнтаційної роботи, спрямована на допомогу учням у виборі майбутньої професії. Проводяться зустрічі з представниками різних професій, екскурсії на підприємства, тестування професійних нахилів, консультації психолога. Для старшокласників організовуються дні відкритих дверей у закладах вищої освіти та профілактичні бесіди.',
    hasPdf: true,
    pdfLabel: 'Завантажити план профорієнтаційних заходів (PDF)'
  },
  {
    id: 'patriotic-education',
    title: 'Патріотичне виховання',
    icon: Flag,
    content: 'Патріотичне виховання є одним з пріоритетних напрямків виховної роботи ліцею. Воно передбачає формування національної свідомості, любові до України, шанобливого ставлення до її історії та культури. Проводяться тематичні уроки, виховні години, зустрічі з ветеранами, волонтерами та захисниками України, відзначення державних свят та пам\'ятних дат.',
    hasPdf: true,
    pdfLabel: 'Завантажити програму патріотичного виховання (PDF)'
  },
  {
    id: 'student-rights',
    title: 'Права та обов\'язки учнів',
    icon: UserCheck,
    content: 'Учні ліцею мають право на якісну освіту, повагу до своєї гідності, вільне вираження поглядів та переконань, участь в управлінні закладом через органи учнівського самоврядування. Обов\'язками учнів є сумлінне навчання, дотримання правил внутрішнього розпорядку, повага до педагогів та інших учнів, дбайливе ставлення до майна ліцею.',
    hasPdf: true,
    pdfLabel: 'Завантажити правила для учнів (PDF)'
  },
  {
    id: 'parent-rights',
    title: 'Права та обов\'язки батьків',
    icon: Users,
    content: 'Батьки мають право брати участь у освітньому процесі, отримувати інформацію про успішність та поведінку дитини, вносити пропозиції щодо покращення роботи закладу, брати участь у батьківських зборах та роботі батьківського комітету. Обов\'язками батьків є забезпечення умов для навчання дитини, співпраця з педагогами, контроль за відвідуванням занять.',
    hasPdf: true,
    pdfLabel: 'Завантажити інформацію для батьків (PDF)'
  },
  {
    id: 'electronic-journal',
    title: 'Електронний журнал',
    icon: Computer,
    content: 'У ліцеї впроваджено електронний журнал, який дозволяє батькам контролювати успішність дитини, відвідування занять, отримувати повідомлення від вчителів. Для доступу до електронного журналу необхідно отримати логін та пароль у класного керівника. Система доступна через веб-інтерфейс та мобільний додаток.',
    hasPdf: true,
    pdfLabel: 'Завантажити інструкцію користувача (PDF)'
  },
  {
    id: 'self-government',
    title: 'Самоврядування',
    icon: Building,
    content: 'Учнівське самоврядування є важливою складовою виховного процесу ліцею. Воно сприяє розвитку лідерських якостей, відповідальності та активної громадянської позиції учнів. До структури самоврядування входять президент, віце-президент, міністерства (освіти, культури, спорту, інформації тощо). Самоврядування організовує шкільні заходи, бере участь у вирішенні актуальних питань шкільного життя.',
    hasPdf: true,
    pdfLabel: 'Завантажити статут учнівського самоврядування (PDF)'
  }
];

const InformationPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Всі розділи' },
    { id: 'enrollment', name: 'Вступ і навчання' },
    { id: 'development', name: 'Розвиток учнів' },
    { id: 'rights', name: 'Права та обов\'язки' }
  ];
  
  // Map sections to categories
  const categoryMapping: Record<string, string[]> = {
    enrollment: ['admission', 'evaluation', 'electronic-journal'],
    development: ['extracurricular', 'nutrition', 'career-guidance', 'patriotic-education', 'self-government'],
    rights: ['student-rights', 'parent-rights']
  };
  
  const getFilteredSections = () => {
    if (activeCategory === 'all') return informationSections;
    
    return informationSections.filter(section => 
      categoryMapping[activeCategory]?.includes(section.id)
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Інформація"
            description="Корисна інформація для учнів та батьків Таїровського ліцею"
          />
          
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <Card className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {getFilteredSections().map((section) => (
                <AccordionItem key={section.id} value={section.id}>
                  <AccordionTrigger className="hover:bg-gray-50 px-4 rounded-md">
                    <div className="flex items-center text-left">
                      <section.icon className="mr-3 h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>{section.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-1">
                    <div className="pl-8 border-l-2 border-blue-100 ml-1">
                      <p className="text-gray-700">{section.content}</p>
                      {section.hasPdf && (
                        <Button
                          variant="ghost" 
                          className="mt-4 text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0"
                          asChild
                        >
                          <a href="#" className="inline-flex items-center">
                            <FileText className="mr-2 h-4 w-4" />
                            {section.pdfLabel}
                          </a>
                        </Button>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InformationPage;
