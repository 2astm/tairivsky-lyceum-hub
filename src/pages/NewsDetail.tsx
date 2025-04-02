
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { NewsItem } from '@/components/ui/NewsCard';
import { useToast } from '@/components/ui/use-toast';

import { news } from '@/data/news';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Find the specific news item
  const newsItem = news.find(item => item.id === id);
  
  useEffect(() => {
    if (!newsItem) {
      toast({
        title: "Новину не знайдено",
        description: "Запитана новина не існує або була видалена",
        variant: "destructive"
      });
      navigate('/news');
    }
    // Scroll to top when news detail page loads
    window.scrollTo(0, 0);
  }, [id, newsItem, toast, navigate]);
  
  if (!newsItem) return null;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate('/news')}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад до новин
            </Button>
            
            {newsItem.image && (
              <div className="w-full h-[400px] rounded-xl overflow-hidden mb-8">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <div className="flex items-center text-gray-500">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{newsItem.date}</span>
              </div>
              
              {newsItem.category && (
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-blue-600" />
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {newsItem.category}
                  </span>
                </div>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {newsItem.title}
            </h1>
            
            <Separator className="my-6" />
            
            <div 
              className="prose prose-blue max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600"
              dangerouslySetInnerHTML={{ __html: newsItem.content || '' }}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsDetail;
