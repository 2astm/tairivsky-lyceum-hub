
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import BackgroundGradient from '@/components/ui/BackgroundGradient';
import NewsCard, { NewsItem } from '@/components/ui/NewsCard';

// Mock data for news
const news: NewsItem[] = [
  {
    id: '1',
    title: 'Перемога на олімпіаді з математики',
    excerpt: 'Наші учні здобули перше місце на обласній олімпіаді з математики. Вітаємо переможців та їхніх наставників!',
    date: '15 квітня 2023',
    image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    category: 'Досягнення'
  },
  {
    id: '2',
    title: 'Новий навчальний рік: важлива інформація',
    excerpt: 'Шановні учні та батьки! Повідомляємо важливу інформацію щодо початку нового навчального року та організації навчального процесу.',
    date: '28 серпня 2023',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1622&q=80',
    category: 'Оголошення'
  },
  {
    id: '3',
    title: 'Екскурсія до музею науки',
    excerpt: 'Учні 7-х класів відвідали музей науки, де ознайомилися з інтерактивними експонатами та новими технологіями.',
    date: '5 березня 2023',
    image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Події'
  },
  {
    id: '4',
    title: 'Творчий конкурс "Моя Україна"',
    excerpt: 'Запрошуємо учнів взяти участь у творчому конкурсі "Моя Україна". Приймаються роботи в категоріях: малюнок, вірш, есе, фотографія.',
    date: '10 вересня 2023',
    image: 'https://images.unsplash.com/photo-1568470466200-23ad81072278?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Конкурси'
  },
  {
    id: '5',
    title: 'Зустріч з випускниками',
    excerpt: 'У нашому ліцеї відбулась традиційна зустріч з випускниками. Колишні учні поділилися своїм досвідом та історіями успіху.',
    date: '20 лютого 2023',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Події'
  },
  {
    id: '6',
    title: 'Нові гуртки та секції',
    excerpt: 'З нового навчального року в нашому ліцеї починають роботу нові гуртки: робототехніка, програмування, шахи та художня студія.',
    date: '5 вересня 2023',
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    category: 'Оголошення'
  }
];

// Categories for filtering
const categories = ['Всі', 'Оголошення', 'Події', 'Досягнення', 'Конкурси'];

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
