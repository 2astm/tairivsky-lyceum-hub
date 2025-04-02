
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import BackgroundGradient from '@/components/ui/BackgroundGradient';
import NewsCard, { NewsItem } from '@/components/ui/NewsCard';
import {news} from "@/data/news.ts";

// Mock data for news


// Categories for filtering
const categories = ['Всі', ...new Set(news.map((item) => item.category))];

const News = () => {
  const [activeCategory, setActiveCategory] = React.useState('Всі');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredNews = news.filter(item => {
    // Filter by category
    const categoryMatch = activeCategory === 'Всі' || item.category === activeCategory;
    
    // Filter by search query
    const searchMatch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <BackgroundGradient className="pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Новини та події
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Актуальна інформація про життя ліцею, досягнення учнів та важливі оголошення
              </p>
            </div>
          </div>
        </BackgroundGradient>
        
        {/* News Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search and Filter */}
            <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Пошук новин..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <svg 
                  className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {filteredNews.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((item) => (
                  <NewsCard key={item.id} news={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Немає результатів</h3>
                <p className="text-gray-500 mb-6">За вашим запитом не знайдено новин</p>
                <button
                  onClick={() => {
                    setActiveCategory('Всі');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all"
                >
                  Скинути фільтри
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
