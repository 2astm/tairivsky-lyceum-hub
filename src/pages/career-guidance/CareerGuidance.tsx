import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {Alert, AlertTitle, AlertDescription} from '@/components/ui/alert';
import {AlertTriangle, FileText, GraduationCap} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import SectionHeading from '@/components/ui/SectionHeading';
import {universities} from "@/data/universities.ts";


const CareerGuidance = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>

            <main className="flex-grow pt-28 pb-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        title="Профорієнтація"
                        description="Інформація для випускників про заклади вищої освіти та можливості подальшої освіти"
                    />

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-blue-700">
                                    <GraduationCap className="h-6 w-6"/>
                                    Про профорієнтацію
                                </CardTitle>
                                <CardDescription>
                                    Важлива інформація для випускників та їх батьків
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <p>
                                        Профорієнтаційна робота в Таїровському ліцеї спрямована на допомогу учням у
                                        виборі майбутньої професії та закладу вищої освіти.
                                        Ми регулярно проводимо зустрічі з представниками університетів, екскурсії до
                                        навчальних закладів, тестування професійних схильностей
                                        та консультації з психологами.
                                    </p>
                                    <p>
                                        На цій сторінці ви знайдете інформацію про провідні заклади вищої освіти Одеси,
                                        напрямки навчання та вступні вимоги.
                                        Представлені матеріали допоможуть вам ознайомитися з можливостями вищої освіти
                                        та зробити усвідомлений вибір майбутньої професії.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {universities.map((city) =>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        Заклади вищої освіти міста {city.city}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Назва ВНЗ</TableHead>
                                                    <TableHead>Факультети</TableHead>
                                                    <TableHead className="text-right">Матеріали</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {city.universities.map((uni) => (
                                                    <TableRow key={uni.id}>
                                                        <TableCell className="font-medium">
                                                            {uni.name} <span
                                                            className="text-sm text-gray-500">({uni.abbreviation})</span>
                                                        </TableCell>
                                                        <TableCell>{uni.faculties}</TableCell>
                                                        <TableCell className="text-right">
                                                            <a
                                                                href={uni.pdfFile}
                                                                className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline font-medium"
                                                            >
                                                                <FileText className="mr-1 h-4 w-4"/>
                                                                Завантажити PDF
                                                            </a>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    Корисні посилання
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><a href="https://mon.gov.ua/ua/tag/vstupna-kampaniya"
                                           className="text-blue-600 hover:underline" target="_blank"
                                           rel="noopener noreferrer">Міністерство освіти і науки України - інформація
                                        про вступну кампанію</a></li>
                                    <li><a href="https://osvita.ua/" className="text-blue-600 hover:underline"
                                           target="_blank" rel="noopener noreferrer">Освіта.ua - інформаційний портал
                                        про освіту в Україні</a></li>
                                    <li><a href="https://edbo.gov.ua/" className="text-blue-600 hover:underline"
                                           target="_blank" rel="noopener noreferrer">ЄДЕБО - Єдина державна електронна
                                        база з питань освіти</a></li>
                                    <li><a href="https://testportal.gov.ua/" className="text-blue-600 hover:underline"
                                           target="_blank" rel="noopener noreferrer">Український центр оцінювання якості
                                        освіти</a></li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default CareerGuidance;
