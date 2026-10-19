import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SectionHeading from '@/components/ui/SectionHeading';
import { GraduationCap, ClipboardList, ExternalLink, FileText, BookOpen, Users, TrendingUp, Briefcase, MapPin } from 'lucide-react';

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
                                <CardTitle className="flex items-center gap-2 text-blue-700">
                                    <TrendingUp className="h-6 w-6" />
                                    Аналіз ринку праці: Одеса та Таїрівська громада
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-600 text-sm">
                                    Дані ґрунтуються на аналітиці robota.ua, OLX Робота, DOU та 048.ua за 2025 рік. Допоможуть зробити свідомий вибір профілю навчання, орієнтуючись на реальний попит на ринку праці регіону.
                                </p>

                                <Accordion type="multiple">
                                    <AccordionItem value="odesa-market">
                                        <AccordionTrigger className="hover:bg-gray-50 px-4 rounded-md">
                                            <div className="flex items-center gap-2 text-blue-700">
                                                <MapPin className="h-5 w-5 flex-shrink-0" />
                                                <span className="font-semibold text-left">Місто Одеса</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-4 pb-4 space-y-4">
                                            <p className="text-xs text-gray-500">
                                                Одеса — портове місто з диверсифікованою економікою. За даними robota.ua та OLX Робота (2025), найбільший локальний попит — у торгівлі, транспорті та HoReCa. Одеса посідає 5-те місце в Україні за кількістю IT-фахівців; більшість з них працює дистанційно на іноземних замовників.
                                            </p>

                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {([
                                                    {
                                                        sector: 'Торгівля та продажі',
                                                        card: 'bg-purple-50 border border-purple-100',
                                                        title: 'font-semibold text-purple-800 text-sm',
                                                        badge: 'text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2',
                                                        dot: 'text-purple-400 mt-0.5',
                                                        demand: '#1 за кількістю вакансій',
                                                        professions: ['Продавець/-чиня-консультант/-ка', 'Менеджер/-ка з продажів', 'Адміністратор/-ка', 'Маркетолог/-иня'],
                                                        profile: 'Суспільно-гуманітарний',
                                                    },
                                                    {
                                                        sector: 'Туризм та готельно-ресторанна справа',
                                                        card: 'bg-yellow-50 border border-yellow-100',
                                                        title: 'font-semibold text-yellow-800 text-sm',
                                                        badge: 'text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2',
                                                        dot: 'text-yellow-500 mt-0.5',
                                                        demand: 'Високий (влітку +80%)',
                                                        professions: ['Офіціант/-ка (до 37 500 грн)', 'Кухар/-ка / шеф-кухар/-ка', 'Адміністратор/-ка готелю', 'Перекладач/-ка'],
                                                        profile: 'Суспільно-гуманітарний, Філологічний',
                                                    },
                                                    {
                                                        sector: 'Логістика та транспорт',
                                                        card: 'bg-cyan-50 border border-cyan-100',
                                                        title: 'font-semibold text-cyan-800 text-sm',
                                                        badge: 'text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2',
                                                        dot: 'text-cyan-400 mt-0.5',
                                                        demand: 'Високий',
                                                        professions: ['Водій/-ка (до 35 000 грн)', 'Логіст/-ка', 'Митний брокер / митна брокерка', 'Менеджер/-ка із ЗЕД'],
                                                        profile: 'Технологічний, Суспільно-гуманітарний',
                                                    },
                                                    {
                                                        sector: 'Будівництво та архітектура',
                                                        card: 'bg-orange-50 border border-orange-100',
                                                        title: 'font-semibold text-orange-800 text-sm',
                                                        badge: 'text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2',
                                                        dot: 'text-orange-400 mt-0.5',
                                                        demand: 'Високий',
                                                        professions: ['Інженер/-ка-будівельник/-ця', 'Архітектор/-ка', 'Інженер/-ка-проєктувальник/-ця', 'Технік/-иня з ЖКГ'],
                                                        profile: 'Технологічний, Природничо-математичний',
                                                    },
                                                    {
                                                        sector: "Медицина та охорона здоров'я",
                                                        card: 'bg-green-50 border border-green-100',
                                                        title: 'font-semibold text-green-800 text-sm',
                                                        badge: 'text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2',
                                                        dot: 'text-green-400 mt-0.5',
                                                        demand: 'Стабільний',
                                                        professions: ['Лікар/-ка', 'Медична сестра / медичний брат', 'Фармацевт/-ка', 'Психолог/-иня'],
                                                        profile: 'Природничо-математичний',
                                                    },
                                                    {
                                                        sector: 'IT та цифрові технології',
                                                        card: 'bg-blue-50 border border-blue-100',
                                                        title: 'font-semibold text-blue-800 text-sm',
                                                        badge: 'text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2',
                                                        dot: 'text-blue-400 mt-0.5',
                                                        demand: 'Помірний (переважно remote)',
                                                        professions: ['QA-інженер/-ка', 'Frontend-розробник/-ця', 'Business Analyst', 'DevOps-інженер/-ка'],
                                                        profile: 'Технологічний, Природничо-математичний',
                                                    },
                                                ] as const).map(({ sector, card, title, badge, dot, demand, professions, profile }) => (
                                                    <div key={sector} className={`${card} rounded-lg p-4`}>
                                                        <div className="flex items-start justify-between mb-2">
                                                            <h4 className={title}>{sector}</h4>
                                                            <span className={badge}>{demand}</span>
                                                        </div>
                                                        <ul className="space-y-0.5 mb-3">
                                                            {professions.map((p) => (
                                                                <li key={p} className="text-gray-700 text-xs flex gap-1.5">
                                                                    <span className={dot}>•</span>
                                                                    <span>{p}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <p className="text-xs text-gray-500"><span className="font-medium">Профіль:</span> {profile}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="tairiv-market" className="mt-2">
                                        <AccordionTrigger className="hover:bg-gray-50 px-4 rounded-md">
                                            <div className="flex items-center gap-2 text-green-700">
                                                <MapPin className="h-5 w-5 flex-shrink-0" />
                                                <span className="font-semibold text-left">Таїрівська громада</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-4 pb-4 space-y-4">
                                            <p className="text-xs text-gray-500">
                                                Таїрівська громада — приміська територія з активним розвитком агросектору, будівництва та сфери послуг. Близькість до Одеси відкриває додаткові можливості.
                                            </p>

                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {([
                                                    {
                                                        sector: 'Сільське господарство та агробізнес',
                                                        card: 'bg-green-50 border border-green-100',
                                                        title: 'font-semibold text-green-800 text-sm',
                                                        badge: 'text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2',
                                                        dot: 'text-green-400 mt-0.5',
                                                        demand: 'Високий',
                                                        professions: ['Агроном/-ка', 'Технолог/-иня харчової промисловості', 'Агроінженер/-ка', 'Еколог/-иня'],
                                                        profile: 'Природничо-математичний, Технологічний',
                                                    },
                                                    {
                                                        sector: 'Будівництво та ЖКГ',
                                                        card: 'bg-orange-50 border border-orange-100',
                                                        title: 'font-semibold text-orange-800 text-sm',
                                                        badge: 'text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2',
                                                        dot: 'text-orange-400 mt-0.5',
                                                        demand: 'Високий',
                                                        professions: ['Будівельник/-ця', 'Електрик / електрикиня', 'Сантехнік / сантехнікиня', 'Технік/-иня з енергозбереження'],
                                                        profile: 'Технологічний',
                                                    },
                                                    {
                                                        sector: 'Освіта та соціальна сфера',
                                                        card: 'bg-blue-50 border border-blue-100',
                                                        title: 'font-semibold text-blue-800 text-sm',
                                                        badge: 'text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2',
                                                        dot: 'text-blue-400 mt-0.5',
                                                        demand: 'Стабільний',
                                                        professions: ['Учитель/-ка', 'Соціальний/-а педагог/-иня', 'Вихователь/-ка', 'Логопед/-иня'],
                                                        profile: 'Суспільно-гуманітарний, Філологічний',
                                                    },
                                                    {
                                                        sector: 'Торгівля та сервіс',
                                                        card: 'bg-purple-50 border border-purple-100',
                                                        title: 'font-semibold text-purple-800 text-sm',
                                                        badge: 'text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2',
                                                        dot: 'text-purple-400 mt-0.5',
                                                        demand: 'Стабільний',
                                                        professions: ['Підприємець/-иця малого бізнесу', 'Адміністратор/-ка', 'Менеджер/-ка з обслуговування', 'Бухгалтер/-ка'],
                                                        profile: 'Суспільно-гуманітарний',
                                                    },
                                                    {
                                                        sector: 'Медицина та фармація',
                                                        card: 'bg-red-50 border border-red-100',
                                                        title: 'font-semibold text-red-800 text-sm',
                                                        badge: 'text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2',
                                                        dot: 'text-red-400 mt-0.5',
                                                        demand: 'Стабільний',
                                                        professions: ['Сімейний/-а лікар/-ка', 'Фельдшер/-ка', 'Медична сестра / медичний брат', 'Стоматолог/-иня'],
                                                        profile: 'Природничо-математичний',
                                                    },
                                                    {
                                                        sector: 'Цифрові технології (дистанційно)',
                                                        card: 'bg-cyan-50 border border-cyan-100',
                                                        title: 'font-semibold text-cyan-800 text-sm',
                                                        badge: 'text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2',
                                                        dot: 'text-cyan-400 mt-0.5',
                                                        demand: 'Зростаючий',
                                                        professions: ['Фрілансер/-ка (IT, дизайн)', 'SMM-спеціаліст/-ка', 'Контент-мейкер/-ка', 'Онлайн-репетитор/-ка'],
                                                        profile: 'Технологічний, Суспільно-гуманітарний',
                                                    },
                                                ] as const).map(({ sector, card, title, badge, dot, demand, professions, profile }) => (
                                                    <div key={sector} className={`${card} rounded-lg p-4`}>
                                                        <div className="flex items-start justify-between mb-2">
                                                            <h4 className={title}>{sector}</h4>
                                                            <span className={badge}>{demand}</span>
                                                        </div>
                                                        <ul className="space-y-0.5 mb-3">
                                                            {professions.map((p) => (
                                                                <li key={p} className="text-gray-700 text-xs flex gap-1.5">
                                                                    <span className={dot}>•</span>
                                                                    <span>{p}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <p className="text-xs text-gray-500"><span className="font-medium">Профіль:</span> {profile}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="profile-map" className="mt-2">
                                        <AccordionTrigger className="hover:bg-gray-50 px-4 rounded-md">
                                            <div className="flex items-center gap-2 text-blue-700">
                                                <Briefcase className="h-5 w-5 flex-shrink-0" />
                                                <span className="font-semibold text-left">Зв'язок профілів із майбутніми професіями</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-4 pb-4">
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm border-collapse">
                                                    <thead>
                                                        <tr className="bg-blue-50">
                                                            <th className="text-left px-3 py-2 text-blue-800 font-semibold border border-blue-100 rounded-tl">Профіль</th>
                                                            <th className="text-left px-3 py-2 text-blue-800 font-semibold border border-blue-100">Ключові предмети</th>
                                                            <th className="text-left px-3 py-2 text-blue-800 font-semibold border border-blue-100 rounded-tr">Приклади професій у регіоні</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {[
                                                            {
                                                                profile: 'Суспільно-гуманітарний',
                                                                subjects: 'Історія, Право, Економіка',
                                                                jobs: 'Менеджер з продажів, адміністратор, юрист, економіст',
                                                            },
                                                            {
                                                                profile: 'Філологічний',
                                                                subjects: 'Українська мова, Іноземні мови',
                                                                jobs: 'Перекладач, адміністратор готелю, менеджер з туризму',
                                                            },
                                                            {
                                                                profile: 'Технологічний',
                                                                subjects: 'Математика, Інформатика, Фізика',
                                                                jobs: 'Інженер, логіст, IT-фахівець (remote), DevOps',
                                                            },
                                                            {
                                                                profile: 'Природничо-математичний',
                                                                subjects: 'Біологія, Хімія, Математика',
                                                                jobs: 'Лікар, фармацевт, агроном, еколог',
                                                            },
                                                        ].map(({ profile, subjects, jobs }, i) => (
                                                            <tr key={profile} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                                <td className="px-3 py-2 border border-gray-100 font-medium text-gray-800">{profile}</td>
                                                                <td className="px-3 py-2 border border-gray-100 text-gray-600">{subjects}</td>
                                                                <td className="px-3 py-2 border border-gray-100 text-gray-600">{jobs}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
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
                                    Протокол засідання батьківських зборів 9 класів
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button asChild variant="outline">
                                    <a href="/files/documents/protocol-zasidannja-batkivskih-zboriv-9-klasiv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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