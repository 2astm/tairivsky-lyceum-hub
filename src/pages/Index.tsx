import React from 'react';
import {Link} from 'react-router-dom';
import {CalendarIcon, MapPinIcon, Clock} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import QuickLinks from '@/components/home/QuickLinks';
import NewsCard from '@/components/ui/NewsCard';
import SectionHeading from '@/components/ui/SectionHeading';

// Mock data for news
const latestNews = [
    {
        id: '1',
        title: 'Призові місця на Всеукраїнському колоквіумі',
        excerpt: 'Наші учні здобули призові місця в обласному(заочному) етапі Всеукраїнського колоквіуму "Космос. Людина. Духовність". Вітаємо переможців та їхніх наставників!',
        date: '06 березня 2025',
        image: 'https://kucprppkmr.od.gov.ua/wp-content/uploads/2024/03/Ukrayinets-v-kosmosi_-SHavlovskyj-Vladyslav-Ruslanovych-Odeska-obl-1024x576.png',
        category: 'Досягнення'
    }
];

// Mock data for upcoming events
const upcomingEvents = [
    {
        id: '1',
        title: 'Міжнародний жіночий день',
        date: '8 вересня 2025',
        time: '18:00',
        location: 'Актова зала'
    }
];

const Index = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>

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
                                Переглянути розклад
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
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default Index;
