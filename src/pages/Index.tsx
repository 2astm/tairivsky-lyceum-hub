import React from 'react';
import {Link} from 'react-router-dom';
import {CalendarIcon, MapPinIcon, Clock, MessageCircle, ExternalLink} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import QuickLinks from '@/components/home/QuickLinks';
import NewsCard from '@/components/ui/NewsCard';
import SectionHeading from '@/components/ui/SectionHeading';
import {Button} from '@/components/ui/button';
import {news as latestNews} from "@/data/news.ts";
import {upcomingEvents} from "@/data/upcoming-events.ts";

const Index = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>

            {/* Mental Health Banner - positioned between Header and Hero */}
            <div className="bg-purple-100 py-4 shadow-md border-y border-purple-200 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <a 
                        href="https://howareu.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 group"
                    >
                        <div className="flex items-center">
                            <img 
                                src="/lovable-uploads/76851caa-aa48-4801-9c98-32eeac30581c.png" 
                                alt="Піклуватися про ментальне здоров'я" 
                                className="w-16 h-16 md:w-24 md:h-24 object-contain"
                            />
                            <div className="ml-4">
                                <p className="text-gray-800 font-medium text-sm md:text-base">
                                    Піклуватися про ментальне здоров'я із <span className="font-bold text-purple-700">ТИ ЯК?</span> на howareu.com
                                </p>
                                <div className="flex items-center text-purple-600 font-semibold text-xs md:text-sm mt-1">
                                    <span>Дізнатися більше</span>
                                    <ExternalLink className="w-3 h-3 ml-1" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <main className="flex-grow">
                <Hero/>
                <QuickLinks/>

                {/* Latest News Section */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeading
                            title="Останні новини"
                            description="Будьте в курсі останніх подій та оголошень"
                        />

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {latestNews.map((news) => (
                                <NewsCard key={news.id} news={news}/>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                to="/news"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg
                  bg-blue-600 text-white font-medium shadow-sm 
                  hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 
                  transition-all duration-300"
                            >
                                Всі новини
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Upcoming Events Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeading
                            title="Найближчі події"
                            description="Календар важливих шкільних заходів"
                        />

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {upcomingEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                                            <CalendarIcon className="w-6 h-6"/>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                                            <p className="text-blue-600">{event.date}</p>
                                        </div>
                                    </div>

                                    <div className="pl-16">
                                        {event.time && (
                                            <div className="flex items-center mb-2 text-gray-600">
                                                <Clock className="w-4 h-4 mr-2"/>
                                                <span>{event.time}</span>
                                            </div>
                                        )}
                                        {event.location && (
                                            <div className="flex items-center text-gray-600">
                                                <MapPinIcon className="w-4 h-4 mr-2"/>
                                                <span>{event.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                to="/schedule"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg
                  bg-gray-50 text-gray-800 font-medium border border-gray-200
                  hover:bg-gray-100 transition-all duration-300"
                            >
                                Переглянути ��озклад
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 md:py-24 bg-blue-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Приєднуйтесь до нашої шкільної спільноти
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                                Таїровський ліцей - це місце, де кожен учень може розкрити свій потенціал
                                та отримати якісну освіту в дружньому та підтримуючому середовищі.
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                                <Link
                                    to="/information"
                                    className="px-6 py-3 rounded-lg bg-white text-blue-600 font-medium shadow-sm
                    hover:bg-gray-100 transition-all duration-300"
                                >
                                    Дізнатися більше
                                </Link>
                                <a
                                    href="tel:+380481234567"
                                    className="px-6 py-3 rounded-lg bg-blue-700 text-white font-medium border border-blue-500
                    hover:bg-blue-800 transition-all duration-300"
                                >
                                    Зв'язатися з нами
                                </a>
                            </div>

                            <div className="mt-8">
                                <a
                                    href="mailto:YevhenMolchaniuk@tairivsky-lyceum.od.ua?subject=Побажання стосовно нового сайту"
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-400 transition-colors"
                                >
                                    <MessageCircle className="h-4 w-4"/>
                                    Залишити відгук про новий сайт
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default Index;
