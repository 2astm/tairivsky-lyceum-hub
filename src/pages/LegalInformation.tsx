import React, {useState} from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {Card} from '@/components/ui/card';
import {
    FileText
} from 'lucide-react';
import {categories, legalSections} from '@/data/legal-information';


const LegalInformation = () => {
    const [activeCategory, setActiveCategory] = useState('all');

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
                        description='Відповідно до вимог <a href="https://zakon.rada.gov.ua/laws/show/2145-19#n442">статті 30 Закону України «Про освіту»</a> та принципів прозорості в діяльності закладів загальної середньої освіти'
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
                                            <div
                                                className="text-gray-700 [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800"
                                                dangerouslySetInnerHTML={{__html: section.content}}
                                            />
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
                                                                    <span
                                                                        className="text-blue-900 font-medium">{document.label}</span>
                                                                </div>
                                                                <span
                                                                    className="text-xs text-blue-600 uppercase bg-blue-200 px-2 py-1 rounded">
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
