
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NewsItem {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  image?: string;
  images?: string[];  // Added support for multiple images
  category?: string;
  content?: string;
}

interface NewsCardProps {
  news: NewsItem;
  className?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, className }) => {
  // Get the main image to display (either the first from images array or the image field)
  const mainImage = news.images && news.images.length > 0 ? news.images[0] : news.image;

  return (
    <div 
      className={cn(
        'group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100',
        className
      )}
    >
      {mainImage && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={mainImage} 
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy" 
          />
          {news.category && (
            <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {news.category}
            </span>
          )}
          
          {/* Image counter badge if there are multiple images */}
          {news.images && news.images.length > 1 && (
            <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"></path>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                <circle cx="11.5" cy="11.5" r="1.5"></circle>
              </svg>
              {news.images.length}
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
