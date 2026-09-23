import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import { GraduationCap, ClipboardList, ExternalLink } from 'lucide-react';

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
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProfileEducation;