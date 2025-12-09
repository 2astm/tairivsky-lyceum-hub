import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Structure = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Структура управління | Таїровський ліцей</title>
        <meta name="description" content="Схема структури управління Таїровським ліцеєм" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          Структура управління ліцеєм
        </h1>
        
        <div className="overflow-x-auto">
          <div className="min-w-[900px] p-8">
            {/* Top level - External bodies */}
            <div className="flex justify-center gap-8 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500 rounded-lg px-4 py-3 text-center min-w-[200px]">
                <span className="font-semibold text-blue-800 dark:text-blue-200">Таїровська селищна рада</span>
              </div>
            </div>
            
            {/* Arrow down */}
            <div className="flex justify-center mb-2">
              <div className="w-0.5 h-8 bg-blue-500"></div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-500"></div>
            </div>
            
            {/* Управління гуманітарної політики */}
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500 rounded-lg px-4 py-3 text-center min-w-[250px]">
                <span className="font-semibold text-blue-800 dark:text-blue-200">Управління гуманітарної політики</span>
              </div>
            </div>
            
            {/* Arrows to Director from multiple sources */}
            <div className="flex justify-center items-end gap-8 mb-2">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-lg px-3 py-2 text-center text-sm mb-2">
                  <span className="font-medium text-green-800 dark:text-green-200">Загальні збори<br/>(конференція) колективу</span>
                </div>
                <div className="w-0.5 h-6 bg-green-500"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-8 bg-blue-500"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-lg px-3 py-2 text-center text-sm mb-2">
                  <span className="font-medium text-green-800 dark:text-green-200">Педагогічна рада</span>
                </div>
                <div className="w-0.5 h-6 bg-green-500"></div>
              </div>
            </div>
            
            {/* Arrows pointing down */}
            <div className="flex justify-center mb-4">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-500"></div>
            </div>
            
            {/* Director with parent body */}
            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="bg-amber-100 dark:bg-amber-900/30 border-2 border-amber-500 rounded-lg px-3 py-2 text-center text-sm">
                <span className="font-medium text-amber-800 dark:text-amber-200">Орган батьківського<br/>самоврядування</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-amber-500"></div>
                <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-amber-500"></div>
              </div>
              <div className="bg-red-100 dark:bg-red-900/30 border-2 border-red-500 rounded-lg px-6 py-4 text-center">
                <span className="font-bold text-lg text-red-800 dark:text-red-200">Директор</span>
              </div>
              <div className="flex items-center">
                <div className="w-0 h-0 border-t-4 border-b-4 border-r-6 border-t-transparent border-b-transparent border-r-amber-500"></div>
                <div className="w-8 h-0.5 bg-amber-500"></div>
              </div>
              <div className="invisible bg-amber-100 rounded-lg px-3 py-2 text-center text-sm min-w-[120px]">
                placeholder
              </div>
            </div>
            
            {/* Arrows from Director */}
            <div className="flex justify-center gap-16 mb-2">
              <div className="w-0.5 h-8 bg-purple-500"></div>
              <div className="w-0.5 h-8 bg-purple-500"></div>
              <div className="w-0.5 h-8 bg-purple-500"></div>
            </div>
            <div className="flex justify-center gap-16 mb-4">
              <div className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-purple-500"></div>
              <div className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-purple-500"></div>
              <div className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-purple-500"></div>
            </div>
            
            {/* Deputy directors level */}
            <div className="flex justify-center gap-6 mb-6">
              <div className="bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-500 rounded-lg px-3 py-2 text-center text-sm min-w-[180px]">
                <span className="font-medium text-purple-800 dark:text-purple-200">Заступник директора<br/>з господарської роботи</span>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-500 rounded-lg px-3 py-2 text-center text-sm min-w-[180px]">
                <span className="font-medium text-purple-800 dark:text-purple-200">Заступник директора<br/>з виховної роботи</span>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-500 rounded-lg px-3 py-2 text-center text-sm min-w-[180px]">
                <span className="font-medium text-purple-800 dark:text-purple-200">Заступник директора<br/>з навчально-виховної роботи</span>
              </div>
            </div>
            
            {/* Arrows from deputies */}
            <div className="flex justify-center mb-6">
              <div className="grid grid-cols-3 gap-6 w-full max-w-3xl">
                {/* From виховної роботи */}
                <div></div>
                <div className="flex flex-col items-center">
                  <div className="flex gap-16">
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-6 bg-teal-500"></div>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-teal-500"></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-6 bg-teal-500"></div>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-teal-500"></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-6 bg-teal-500"></div>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-teal-500"></div>
                    </div>
                  </div>
                </div>
                {/* From навчально-виховної */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-indigo-500"></div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-indigo-500"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Middle management level */}
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
              <div className="bg-teal-100 dark:bg-teal-900/30 border-2 border-teal-500 rounded-lg px-3 py-2 text-center text-sm">
                <span className="font-medium text-teal-800 dark:text-teal-200">Психологічна<br/>служба</span>
              </div>
              <div className="bg-teal-100 dark:bg-teal-900/30 border-2 border-teal-500 rounded-lg px-3 py-2 text-center text-sm">
                <span className="font-medium text-teal-800 dark:text-teal-200">Педагог-<br/>організатор</span>
              </div>
              <div className="bg-teal-100 dark:bg-teal-900/30 border-2 border-teal-500 rounded-lg px-3 py-2 text-center text-sm">
                <span className="font-medium text-teal-800 dark:text-teal-200">Класні<br/>керівники</span>
              </div>
              <div className="bg-indigo-100 dark:bg-indigo-900/30 border-2 border-indigo-500 rounded-lg px-3 py-2 text-center text-sm">
                <span className="font-medium text-indigo-800 dark:text-indigo-200">Учителі-<br/>предметники</span>
              </div>
            </div>
            
            {/* Arrows to student self-governance */}
            <div className="flex justify-center gap-8 mb-2">
              <div className="w-0.5 h-6 bg-orange-500"></div>
              <div className="w-0.5 h-6 bg-orange-500"></div>
            </div>
            <div className="flex justify-center gap-8 mb-4">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-orange-500"></div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-orange-500"></div>
            </div>
            
            {/* Student self-governance */}
            <div className="flex justify-center mb-6">
              <div className="bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-500 rounded-lg px-4 py-3 text-center">
                <span className="font-semibold text-orange-800 dark:text-orange-200">Орган учнівського самоврядування</span>
              </div>
            </div>
            
            {/* Arrow to student */}
            <div className="flex justify-center mb-2">
              <div className="w-0.5 h-8 bg-cyan-500"></div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-500"></div>
            </div>
            
            {/* Student */}
            <div className="flex justify-center">
              <div className="bg-cyan-100 dark:bg-cyan-900/30 border-2 border-cyan-500 rounded-lg px-6 py-4 text-center">
                <span className="font-bold text-lg text-cyan-800 dark:text-cyan-200">Здобувач освіти</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <h3 className="font-semibold mb-3 text-foreground">Умовні позначення:</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span>Органи місцевого самоврядування</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span>Колегіальні органи</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span>Керівництво</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span>Заступники директора</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-amber-500 rounded"></div>
              <span>Самоврядування</span>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Structure;
