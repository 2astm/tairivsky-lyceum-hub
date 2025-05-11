
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { NewsItem } from '@/components/ui/NewsCard';
import { useToast } from '@/components/ui/use-toast';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

import { news } from '@/data/news';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedImageIndex, setExpandedImageIndex] = useState<number | null>(null);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const carouselRef = useRef<any>(null);
  const expandedCarouselRef = useRef<any>(null);
  
  // Find the specific news item
  const newsItem = news.find(item => item.id === id);
  
  // Determine which images to show (either from images array or single image)
  const images = newsItem?.images?.length ? newsItem.images : (newsItem?.image ? [newsItem.image] : []);

  // Auto-rotate images
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplayEnabled && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
        // If we have access to the carousel API, scroll to the next item
        if (carouselRef.current?.scrollNext) {
          carouselRef.current.scrollNext();
        }
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplayEnabled, images.length]);
  
  useEffect(() => {
    if (!newsItem) {
      toast({
        title: "Новину не знайдено",
        description: "Запитана новина не існує або була видалена",
        variant: "destructive"
      });
      navigate('/news');
    }
    // Reset current image index when news changes
    setCurrentImageIndex(0);
    // Scroll to top when news detail page loads
    window.scrollTo(0, 0);
  }, [id, newsItem, toast, navigate]);

  // Handle carousel API events
  const handleCarouselApi = (api: any) => {
    carouselRef.current = api;
    
    if (api) {
      api.on('select', () => {
        // Update currentImageIndex when slide changes
        const selectedIndex = api.selectedScrollSnap();
        setCurrentImageIndex(selectedIndex);
      });
    }
  };

  // Handle expanded carousel API events
  const handleExpandedCarouselApi = (api: any) => {
    expandedCarouselRef.current = api;
    
    if (api) {
      api.on('select', () => {
        // Update expandedImageIndex when slide changes in expanded view
        const selectedIndex = api.selectedScrollSnap();
        setExpandedImageIndex(selectedIndex);
      });
    }
  };

  // Handle next/prev clicks on normal carousel
  const handlePrevClick = () => {
    setAutoplayEnabled(false);
    if (carouselRef.current?.scrollPrev) {
      carouselRef.current.scrollPrev();
    }
  };

  const handleNextClick = () => {
    setAutoplayEnabled(false);
    if (carouselRef.current?.scrollNext) {
      carouselRef.current.scrollNext();
    }
  };
  
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
            
            {images.length > 0 && (
              <div className="mb-8">
                <div className="relative">
                  {images.length === 1 ? (
                    <div 
                      className="w-full h-[400px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => setExpandedImageIndex(0)}
                    >
                      <img
                        src={images[0]}
                        alt={newsItem.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <Carousel 
                        className="w-full"
                        setApi={handleCarouselApi}
                      >
                        <CarouselContent>
                          {images.map((image, index) => (
                            <CarouselItem key={index}>
                              <div 
                                className="w-full h-[400px] rounded-xl overflow-hidden cursor-pointer"
                                onClick={() => setExpandedImageIndex(index)}
                              >
                                <img
                                  src={image}
                                  alt={`${newsItem.title} - зображення ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious 
                          className="-left-6 bg-white/80 hover:bg-white h-12 w-12" 
                          onClick={handlePrevClick}
                        />
                        <CarouselNext 
                          className="-right-6 bg-white/80 hover:bg-white h-12 w-12"
                          onClick={handleNextClick}
                        />
                      </Carousel>

                      {/* Multi-image indicator */}
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded flex items-center">
                        <Images className="h-4 w-4 mr-1" />
                        <span>{currentImageIndex + 1} / {images.length}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Modal for expanded image */}
            {expandedImageIndex !== null && (
              <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                <div className="relative max-w-5xl w-full">
                  <Button 
                    className="absolute right-0 top-0 z-10 m-2 rounded-full bg-black/50 text-white hover:bg-black/70" 
                    size="icon"
                    onClick={() => setExpandedImageIndex(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                  
                  <Carousel 
                    className="w-full"
                    opts={{ startIndex: expandedImageIndex }}
                    setApi={handleExpandedCarouselApi}
                  >
                    <CarouselContent>
                      {images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="flex items-center justify-center">
                            <img
                              src={image}
                              alt={`${newsItem.title} - зображення ${index + 1}`}
                              className="max-h-[80vh] object-contain"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-white/80 hover:bg-white h-12 w-12" />
                    <CarouselNext className="bg-white/80 hover:bg-white h-12 w-12" />
                  </Carousel>
                  
                  <div className="text-white text-center mt-4">
                    {(expandedImageIndex !== null ? expandedImageIndex : 0) + 1} / {images.length}
                  </div>
                </div>
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
