
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  category?: string;
}

interface NewsCardProps {
  news: NewsItem;
  className?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, className }) => {
  return (
    <div 
      className={cn(
        'group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100',
        className
      )}
    >
      {news.image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy" 
          />
          {news.category && (
            <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {news.category}
            </span>
          )}
        </div>
      )}
      
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <CalendarIcon className="w-4 h-4 mr-1" />
          <span>{news.date}</span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          {news.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {news.excerpt}
        </p>
        
        <Link 
          to={`/news/${news.id}`} 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          Читати більше
          <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
