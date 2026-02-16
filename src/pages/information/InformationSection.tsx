
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Download, ExternalLink, AlertTriangle, MessageCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { getSectionById } from '@/data/information-sections.ts';

const InformationSection = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  
  const section = getSectionById(sectionId || '');
  
  if (!section) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Розділ не знайдено</h1>
            <Button onClick={() => navigate('/information')}>
              Повернутися до інформації
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <Button 
              variant="outline"
              onClick={() => navigate('/information')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад до інформації
            </Button>
            
            <a 
              href="mailto:YevhenMolchaniuk@tairivsky-lyceum.od.ua?subject=Побажання стосовно нового сайту"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Надіслати відгук
            </a>
          </div>
          
          {!section.poster && (
            <Alert className="mb-6 border-amber-300 bg-amber-50">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <AlertTitle className="text-amber-800">Увага! Ця сторінка все ще має тестову інформацію та не є коректною!</AlertTitle>
              <AlertDescription className="text-amber-700">
                Ця сторінка містить тестову інформацію. Для отримання актуальної інформації, 
                будь ласка, відвідайте{' '}
                <a 
                  href="https://sites.google.com/view/tairovskyi-zaklad/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-amber-900 inline-flex items-center"
                >
                  офіційний сайт
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </AlertDescription>
            </Alert>
          )}
          
          <SectionHeading
            title={section.title}
            description=""
            align="left"
          />
          
          {section.poster ? (
            <div className="my-8">
              <img 
                src={section.poster} 
                alt={section.title}
                className="w-full rounded-lg shadow-md"
              />
            </div>
          ) : (
            <Card className="p-8 my-8 prose prose-blue max-w-none">
              {section.content.split('\n\n').map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph.startsWith('# ') ? (
                    <h2 className="text-xl font-bold mt-6 mb-3">{paragraph.substring(2)}</h2>
                  ) : paragraph.startsWith('## ') ? (
                    <h3 className="text-lg font-semibold mt-5 mb-2">{paragraph.substring(3)}</h3>
                  ) : paragraph.startsWith('### ') ? (
                    <h4 className="text-md font-medium mt-4 mb-1">{paragraph.substring(4)}</h4>
                  ) : paragraph.startsWith('- ') ? (
                    <ul className="list-disc pl-5 my-3">
                      {paragraph.split('\n- ').map((item, i) => (
                        <li key={i} className="mb-1">{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  ) : paragraph.startsWith('1. ') ? (
                    <ol className="list-decimal pl-5 my-3">
                      {paragraph.split('\n').map((item, i) => {
                        const match = item.match(/^(\d+)\.\s(.*)$/);
                        return match ? (
                          <li key={i} className="mb-2">{match[2]}</li>
                        ) : null;
                      })}
                    </ol>
                  ) : (
                    <p className="mb-4">{paragraph}</p>
                  )}
                </React.Fragment>
              ))}
            </Card>
          )}
          
          {section.documents && section.documents.length > 0 && (
            <Card className="p-6 mt-6 bg-blue-50">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-medium text-blue-900">Завантажити документи</h3>
                  <p className="text-sm text-blue-700">Ви можете завантажити необхідні документи нижче</p>
                </div>
              </div>
              <div className="grid gap-3">
                {section.documents.map((document, index) => (
                  <a
                    key={index}
                    href={document.url}
                    download
                    className="inline-flex items-center justify-between p-3 bg-white rounded-md border border-blue-200 hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex items-center">
                      <Download className="mr-3 h-4 w-4 text-blue-600" />
                      <span className="text-blue-900 font-medium">{document.label}</span>
                    </div>
                    <span className="text-xs text-blue-600 uppercase bg-blue-100 px-2 py-1 rounded">
                      {document.type || 'PDF'}
                    </span>
                  </a>
                ))}
              </div>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InformationSection;
