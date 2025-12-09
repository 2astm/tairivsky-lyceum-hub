import React, {useState} from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {Card} from '@/components/ui/card';
import {
    FileText,
    Book,
    Award,
    FileCheck,
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
    FileQuestion, AlertTriangle
} from 'lucide-react';
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";

// Legal information sections based on Ukrainian law
const legalSections = [
    {
        id: 'konkurs-na-zamishhennya-vakantnoyi-posadi-direktora',
        categories: ['administrative'],
        title: 'Проведення конкурсу на заміщення вакантної посади директора',
        icon: FileText,
        content: "Оголошення про проведення конкурсу на заміщення вакантної посади директора Таїровського ліцею Таїровської селищної ради Одеського району Одеської області",
        documents: [
            {
                label: 'Оголошення (PDF)',
                url: "/files/ogoloshennya-pro-konkurs-na-zamishhennya-vakantnoyi-posadi-direktora.pdf",
                type: 'pdf'
            }
        ]
    },
    {
        id: 'stratehiya-rozvytku',
        categories: ['administrative'],
        title: 'Стратегія розвитку Таїровського ліцею',
        icon: BarChart3,
        content: "Стратегія розвитку Таїровського ліцею на 2025 - 2030 роки. Документ визначає основні напрямки розвитку закладу, цілі та завдання на найближчі роки.",
        documents: [
            {
                label: 'Стратегія розвитку (PDF)',
                url: "/files/stratehiia-rozvytku-taiirovskoho-litseiu.pdf",
                type: 'pdf'
            },
            {
                label: 'Затвердження стратегії (PDF)',
                url: "/files/zatverdgennia-stratehiii-rozvytku-taiirovskoho-litseiu.pdf",
                type: 'pdf'
            }
        ]
    }
];

const LegalInformation = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        {id: 'all', name: 'Всі'},
        // {id: 'general', name: 'Загальна інформація'},
        // {id: 'education', name: 'Освітній процес'},
        {id: 'administrative', name: 'Адміністративні питання'}
    ];

    // Map sections to categories
    const getFilteredSections = () => {
        if (activeCategory === 'all') return legalSections;


        return legalSections.filter(section =>
            section.categories.includes(activeCategory)
        );
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header/>

            <main className="flex-grow pt-28 pb-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        title="Прозорість та інформаційна відкритість закладу освіти"
                        description="Відповідно до вимог статті 30 Закону України «Про освіту» та принципів прозорості в діяльності закладів загальної середньої освіти"
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
                                            <section.icon className="mr-3 h-5 w-5 text-blue-600 flex-shrink-0"/>
                                            <span>{section.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-4 pb-4 pt-1">
                                        <div className="pl-8 border-l-2 border-blue-100 ml-1">
                                            <p className="text-gray-700">{section.content}</p>
                                            {section.documents && section.documents.length > 0 && (
                                                <div className="mt-6">
                                                    <h4 className="text-sm font-medium text-gray-900 mb-3">Документи:</h4>
                                                    <div className="flex flex-col space-y-3">
                                                        {section.documents.map((document, docIndex) => (
                                                            <a
                                                                key={docIndex}
                                                                href={document.url}
                                                                className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors group"
                                                            >
                                                                <div className="flex items-center">
                                                                    <FileText className="mr-3 h-5 w-5 text-blue-600"/>
                                                                    <span className="text-blue-900 font-medium">{document.label}</span>
                                                                </div>
                                                                <span className="text-xs text-blue-600 uppercase bg-blue-200 px-2 py-1 rounded">
                                                                    {document.type}
                                                                </span>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Card>
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default LegalInformation;
