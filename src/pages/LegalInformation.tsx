
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { 
  FileText, 
  Book, 
  Certificate, 
  Building, 
  Users, 
  GraduationCap, 
  Map, 
  UserCheck, 
  Languages, 
  Briefcase, 
  Warehouse, 
  ScrollText, 
  Home, 
  BarChart3, 
  FileBarChart, 
  UserPlus, 
  Accessibility, 
  DollarSign, 
  ListChecks, 
  ShieldAlert, 
  FileQuestion 
} from 'lucide-react';

// Legal information sections based on Ukrainian law
const legalSections = [
  {
    id: 'statute',
    title: 'Статут закладу освіти',
    icon: FileText,
    content: 'Статут Таїровського ліцею є основним документом, що регулює діяльність нашого навчального закладу. Документ затверджено органом місцевого самоврядування та зареєстровано відповідно до чинного законодавства України.'
  },
  {
    id: 'license',
    title: 'Ліцензії на провадження освітньої діяльності',
    icon: Certificate,
    content: 'Таїровський ліцей має ліцензію на провадження освітньої діяльності у сфері повної загальної середньої освіти відповідно до законодавства України.'
  },
  {
    id: 'accreditation',
    title: 'Сертифікати про акредитацію освітніх програм',
    icon: Certificate,
    content: 'Освітні програми нашого ліцею акредитовані відповідно до вимог Міністерства освіти і науки України.'
  },
  {
    id: 'structure',
    title: 'Структура та органи управління закладу освіти',
    icon: Building,
    content: 'Структура нашого закладу включає адміністрацію, педагогічну раду, методичні об'єднання вчителів, батьківський комітет та учнівське самоврядування. Кожен орган управління має чітко визначені повноваження та відповідальність.'
  },
  {
    id: 'staff',
    title: 'Кадровий склад закладу освіти згідно з ліцензійними умовами',
    icon: Users,
    content: 'У нашому ліцеї працюють висококваліфіковані педагоги з відповідною освітою та досвідом роботи. Всі педагогічні працівники відповідають ліцензійним умовам та регулярно підвищують свою кваліфікацію.'
  },
  {
    id: 'programs',
    title: 'Освітні програми',
    icon: Book,
    content: 'Таїровський ліцей реалізує освітні програми згідно з державними стандартами початкової, базової середньої та профільної середньої освіти. Кожна програма містить чіткий перелік освітніх компонентів та компетентностей, які здобувають учні.'
  },
  {
    id: 'territory',
    title: 'Територія обслуговування',
    icon: Map,
    content: 'За нашим ліцеєм закріплена територія обслуговування відповідно до рішення органу місцевого самоврядування. Діти, які проживають на цій території, мають першочергове право на зарахування до нашого закладу.'
  },
  {
    id: 'capacity',
    title: 'Ліцензований обсяг та фактична кількість учнів',
    icon: UserCheck,
    content: 'Ліцензований обсяг нашого закладу складає 1200 учнів. Фактична кількість учнів на поточний навчальний рік - 980 осіб.'
  },
  {
    id: 'language',
    title: 'Мова освітнього процесу',
    icon: Languages,
    content: 'Мовою освітнього процесу в Таїровському ліцеї є українська мова, що відповідає вимогам статті 7 Закону України «Про освіту».'
  },
  {
    id: 'vacancies',
    title: 'Наявність вакантних посад',
    icon: Briefcase,
    content: 'Інформація про наявні вакантні посади в нашому закладі, а також порядок і умови проведення конкурсу на їх заміщення публікується на офіційному сайті закладу та оновлюється відповідно до потреб.'
  },
  {
    id: 'facilities',
    title: 'Матеріально-технічне забезпечення закладу',
    icon: Warehouse,
    content: 'Наш ліцей має сучасне матеріально-технічне забезпечення згідно з ліцензійними умовами, включаючи навчальні кабінети, комп'ютерні класи, спортивні зали, їдальню, медичний кабінет та інші необхідні приміщення.'
  },
  {
    id: 'dormitory',
    title: 'Наявність гуртожитків',
    icon: Home,
    content: 'Таїровський ліцей не має гуртожитків для проживання учнів.'
  },
  {
    id: 'monitoring',
    title: 'Результати моніторингу якості освіти',
    icon: BarChart3,
    content: 'Результати внутрішнього та зовнішнього моніторингу якості освіти в нашому закладі публікуються щороку та доступні для ознайомлення всім зацікавленим особам.'
  },
  {
    id: 'annual-report',
    title: 'Річний звіт про діяльність закладу освіти',
    icon: FileBarChart,
    content: 'Річний звіт про діяльність Таїровського ліцею публікується на офіційному сайті до початку нового навчального року та містить інформацію про всі аспекти діяльності закладу.'
  },
  {
    id: 'admission-rules',
    title: 'Правила прийому до закладу освіти',
    icon: UserPlus,
    content: 'Правила прийому до нашого ліцею розробляються відповідно до чинного законодавства та порядку зарахування дітей до закладів загальної середньої освіти, затвердженого МОН України.'
  },
  {
    id: 'accessibility',
    title: 'Умови доступності для навчання осіб з особливими освітніми потребами',
    icon: Accessibility,
    content: 'Наш ліцей забезпечує умови доступності для навчання осіб з особливими освітніми потребами відповідно до інклюзивної освітньої політики. Заклад обладнаний пандусами, має спеціальні навчальні матеріали та кваліфікованих фахівців.'
  },
  {
    id: 'tuition',
    title: 'Розмір плати за навчання',
    icon: DollarSign,
    content: 'Таїровський ліцей є комунальним закладом освіти, навчання в якому здійснюється на безоплатній основі за рахунок державного та місцевого бюджетів.'
  },
  {
    id: 'additional-services',
    title: 'Перелік додаткових освітніх та інших послуг',
    icon: ListChecks,
    content: 'Додаткові освітні та інші послуги (гуртки, факультативи, консультації) надаються відповідно до затвердженого переліку. Інформація про вартість, порядок надання та оплати цих послуг публікується на офіційному сайті ліцею.'
  },
  {
    id: 'behavior-rules',
    title: 'Правила поведінки здобувача освіти в закладі освіти',
    icon: ScrollText,
    content: 'Правила поведінки учнів у нашому ліцеї розроблені та затверджені відповідно до принципів поваги до прав і свобод людини, толерантності, відповідальності та академічної доброчесності.'
  },
  {
    id: 'anti-violence',
    title: 'Положення про запобігання і протидію насильству',
    icon: ShieldAlert,
    content: 'У Таїровському ліцеї розроблено та впроваджено положення про запобігання і протидію насильству та жорстокому поводженню з дітьми, яке регулює порядок виявлення та реагування на випадки насильства.'
  },
  {
    id: 'faq',
    title: 'Часті запитання',
    icon: FileQuestion,
    content: 'Розділ часто задаваних запитань містить відповіді на поширені питання щодо функціонування ліцею, навчального процесу, позакласної діяльності та інших аспектів життя нашого закладу.'
  }
];

const LegalInformation = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Всі' },
    { id: 'general', name: 'Загальна інформація' },
    { id: 'education', name: 'Освітній процес' },
    { id: 'administrative', name: 'Адміністративні питання' }
  ];
  
  // Map sections to categories
  const getFilteredSections = () => {
    if (activeCategory === 'all') return legalSections;
    
    const categoryMapping: Record<string, string[]> = {
      general: ['statute', 'license', 'accreditation', 'structure', 'annual-report'],
      education: ['programs', 'language', 'monitoring', 'behavior-rules', 'anti-violence', 'accessibility'],
      administrative: ['staff', 'territory', 'capacity', 'vacancies', 'facilities', 'dormitory', 'admission-rules', 'tuition', 'additional-services', 'faq']
    };
    
    return legalSections.filter(section => 
      categoryMapping[activeCategory].includes(section.id)
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Інформаційна відкритість та доступність"
            description="Згідно статті 30 Закону України «Про освіту» та принципів прозорості у діяльності закладів освіти"
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
              {getFilteredSections().map((section, index) => (
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
                      {section.id === 'statute' && (
                        <a 
                          href="#" 
                          className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Завантажити статут (PDF)
                        </a>
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

export default LegalInformation;
