import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SectionHeading from '@/components/ui/SectionHeading';
import { GraduationCap, ClipboardList, ExternalLink, FileText, BookOpen, Users } from 'lucide-react';

const ProfileEducation = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-28 pb-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        title="Профільне навчання"
                        description="Опитування дев'ятикласників щодо освітніх потреб і запитів"
                    />

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-blue-700">
                                    <GraduationCap className="h-6 w-6" />
                                    Реформа старшої профільної школи
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 leading-relaxed">
                                    З метою впровадження реформи старшої профільної школи в Таїрівській
                                    селищній громаді Одеського району Одеської області адміністрація
                                    Таїрівського ліцею просить дев'ятикласників громади пройти опитування
                                    щодо освітніх потреб і запитів.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <ClipboardList className="h-6 w-6" />
                                    Анкета для дев'ятикласників
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-600">
                                    Заповнення анкети займе кілька хвилин. Ваші відповіді допоможуть
                                    нам сформувати оптимальний профіль навчання для старшої школи.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                                        <a
                                            href="https://forms.gle/MxDgTa8GuBZ9PZBZ9"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                            Пройти опитування
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-2 pb-0">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="students-memo" className="border-none">
                                        <AccordionTrigger className="hover:bg-gray-50 px-4 rounded-md py-4">
                                            <div className="flex items-center gap-2 text-blue-700">
                                                <BookOpen className="h-5 w-5 flex-shrink-0" />
                                                <span className="font-semibold text-left">Пам'ятка для учнів: «Як обрати профіль навчання»</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-4 pb-4">
                                            <p className="text-xs text-gray-500 mb-4">Надано: Ліцеї-амбасадори (робочі групи за розділом VIII «Комунікація», підрозділ 8.2 «Інформаційні матеріали»).</p>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {[
                                                    {
                                                        step: 'КРОК 1: САМОАНАЛІЗ',
                                                        items: [
                                                            'Які предмети і курси найкраще вдаються?',
                                                            'Що подобається робити у вільний час?',
                                                            'Якими бачите себе через 10 років?',
                                                        ],
                                                    },
                                                    {
                                                        step: 'КРОК 2: ДОСЛІДЖЕННЯ',
                                                        items: [
                                                            'Вивчіть описи всіх профілів',
                                                            'Поспілкуйтеся з учителями / учительками',
                                                            'Відвідайте день відкритих дверей',
                                                        ],
                                                    },
                                                    {
                                                        step: 'КРОК 3: КОНСУЛЬТАЦІЇ',
                                                        items: [
                                                            'Пройдіть тестування у шкільного психолога / психологині',
                                                            'Обговоріть вибір з батьками',
                                                            'Отримайте консультацію кар\'єрного радника / кар\'єрної радниці',
                                                        ],
                                                    },
                                                    {
                                                        step: 'КРОК 4: ПРИЙНЯТТЯ РІШЕННЯ',
                                                        items: [
                                                            'Оберіть профіль (пам\'ятайте про можливість зміни профілю впродовж 10-го класу)',
                                                            'Визначтеся з курсами за вибором',
                                                            'Підготуйте необхідні документи',
                                                        ],
                                                    },
                                                ].map(({ step, items }) => (
                                                    <div key={step} className="bg-blue-50 rounded-lg p-4">
                                                        <h4 className="font-semibold text-blue-800 mb-2 text-sm">{step}</h4>
                                                        <ul className="space-y-1">
                                                            {items.map((item) => (
                                                                <li key={item} className="text-gray-700 text-sm flex gap-2">
                                                                    <span className="text-blue-400 mt-0.5">•</span>
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-2 pb-0">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="parents-memo" className="border-none">
                                        <AccordionTrigger className="hover:bg-gray-50 px-4 rounded-md py-4">
                                            <div className="flex items-center gap-2 text-blue-700">
                                                <Users className="h-5 w-5 flex-shrink-0" />
                                                <span className="font-semibold text-left">Пам'ятка для батьків: «Як підтримати дитину у виборі»</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-4 pb-4">
                                            <p className="text-xs text-gray-500 mb-4">Надано: Ліцеї-амбасадори (робочі групи за розділом VIII «Комунікація», підрозділ 8.2 «Інформаційні матеріали»).</p>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div className="bg-blue-50 rounded-lg p-4">
                                                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">ВАША РОЛЬ</h4>
                                                    <ul className="space-y-1">
                                                        {[
                                                            'Слухайте та намагайтеся зрозуміти інтереси дитини',
                                                            'Діліться своїм досвідом, але не нав\'язуйте рішень',
                                                            'Підтримуйте у дослідженні різних можливостей',
                                                        ].map((item) => (
                                                            <li key={item} className="text-gray-700 text-sm flex gap-2">
                                                                <span className="text-blue-400 mt-0.5">•</span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="bg-blue-50 rounded-lg p-4">
                                                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">ЩО ВАРТО ОБГОВОРИТИ</h4>
                                                    <ul className="space-y-1">
                                                        {[
                                                            'Сильні сторони та інтереси дитини',
                                                            'Реалістичність планів щодо майбутньої освіти',
                                                            'Можливості для розвитку поза школою',
                                                            'Можливість зміни профілю впродовж 10 класу',
                                                        ].map((item) => (
                                                            <li key={item} className="text-gray-700 text-sm flex gap-2">
                                                                <span className="text-blue-400 mt-0.5">•</span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="bg-red-50 rounded-lg p-4">
                                                    <h4 className="font-semibold text-red-800 mb-2 text-sm">ЧЕРВОНІ ПРАПОРЦІ</h4>
                                                    <ul className="space-y-1">
                                                        {[
                                                            'Дитина обирає «як усі» або «як легше»',
                                                            'Вибір суперечить здібностям та інтересам',
                                                            'Рішення приймається під тиском однолітків або батьків (інших дорослих)',
                                                        ].map((item) => (
                                                            <li key={item} className="text-gray-700 text-sm flex gap-2">
                                                                <span className="text-red-400 mt-0.5">•</span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="bg-blue-50 rounded-lg p-4">
                                                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">КОРИСНІ ПИТАННЯ ДЛЯ РОЗМОВИ З ДИТИНОЮ</h4>
                                                    <ul className="space-y-1">
                                                        {[
                                                            '«Що тобі найбільше подобається у школі?»',
                                                            '«Якою ти бачиш свою майбутню професію?»',
                                                            '«Що тебе надихає?»',
                                                            '«Чи є щось, чого ти боїшся у новому навчанні?»',
                                                        ].map((item) => (
                                                            <li key={item} className="text-gray-700 text-sm flex gap-2">
                                                                <span className="text-blue-400 mt-0.5">•</span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4 mt-4">
                                                <h4 className="font-semibold text-gray-800 mb-2 text-sm">ДЕ ОТРИМАТИ ДОПОМОГУ</h4>
                                                <ul className="space-y-1">
                                                    {[
                                                        'Шкільний психолог / психологиня — тестування та консультації',
                                                        'Класний керівник / класна керівниця (куратор/-ка паралелі) — інформація про профілі',
                                                        'Кар\'єрний радник / кар\'єрна радниця — професійна орієнтація',
                                                        'Сайт закладу — актуальна інформація та матеріали',
                                                    ].map((item) => (
                                                        <li key={item} className="text-gray-700 text-sm flex gap-2">
                                                            <span className="text-gray-400 mt-0.5">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="h-6 w-6" />
                                    Комунікаційна стратегія
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button asChild variant="outline">
                                    <a href="/files/documents/komunikatsijna-stratehia.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <FileText className="h-4 w-4" />
                                        Переглянути документ (PDF)
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="h-6 w-6" />
                                    Річний комунікаційний план
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button asChild variant="outline">
                                    <a href="/files/documents/richnij-komunikatsijnij-plan.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <FileText className="h-4 w-4" />
                                        Переглянути документ (PDF)
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProfileEducation;