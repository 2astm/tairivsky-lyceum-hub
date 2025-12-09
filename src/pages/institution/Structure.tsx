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
        
        <div className="overflow-x-auto pb-4">
          <svg viewBox="0 0 1100 850" className="min-w-[900px] w-full max-w-5xl mx-auto" style={{ height: 'auto' }}>
            {/* Defs for arrow markers */}
            <defs>
              <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L0,8 L8,4 z" fill="#3b82f6" />
              </marker>
              <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L0,8 L8,4 z" fill="#22c55e" />
              </marker>
              <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L0,8 L8,4 z" fill="#a855f7" />
              </marker>
              <marker id="arrowAmber" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L0,8 L8,4 z" fill="#f59e0b" />
              </marker>
              <marker id="arrowAmberLeft" markerWidth="8" markerHeight="8" refX="1" refY="4" orient="auto">
                <path d="M8,0 L8,8 L0,4 z" fill="#f59e0b" />
              </marker>
              <marker id="arrowTeal" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L0,8 L8,4 z" fill="#14b8a6" />
              </marker>
              <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L0,8 L8,4 z" fill="#f97316" />
              </marker>
              <marker id="arrowCyan" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L0,8 L8,4 z" fill="#06b6d4" />
              </marker>
              <marker id="arrowIndigo" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L0,8 L8,4 z" fill="#6366f1" />
              </marker>
            </defs>
            
            {/* ========== ROW 1: Таїровська селищна рада ========== */}
            <rect x="450" y="20" width="200" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="550" y="45" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1e40af">Таїровська селищна рада</text>
            
            {/* ========== ROW 2: Управління гуманітарної політики ========== */}
            <rect x="420" y="100" width="260" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="550" y="125" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1e40af">Управління гуманітарної політики</text>
            
            {/* ========== ROW 3: Колегіальні органи + Директор + Батьківське самоврядування ========== */}
            {/* Загальні збори */}
            <rect x="80" y="180" width="150" height="50" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
            <text x="155" y="200" textAnchor="middle" fontSize="10" fontWeight="500" fill="#166534">Загальні збори</text>
            <text x="155" y="215" textAnchor="middle" fontSize="10" fontWeight="500" fill="#166534">(конференція) колективу</text>
            
            {/* Педагогічна рада */}
            <rect x="870" y="180" width="150" height="50" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
            <text x="945" y="210" textAnchor="middle" fontSize="10" fontWeight="500" fill="#166534">Педагогічна рада</text>
            
            {/* Директор */}
            <rect x="480" y="200" width="140" height="50" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
            <text x="550" y="230" textAnchor="middle" fontSize="14" fontWeight="700" fill="#991b1b">Директор</text>
            
            {/* Орган батьківського самоврядування */}
            <rect x="80" y="290" width="150" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="155" y="310" textAnchor="middle" fontSize="10" fontWeight="500" fill="#92400e">Орган батьківського</text>
            <text x="155" y="325" textAnchor="middle" fontSize="10" fontWeight="500" fill="#92400e">самоврядування</text>
            
            {/* ========== ROW 4: Заступники директора ========== */}
            <rect x="80" y="400" width="170" height="50" rx="8" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" />
            <text x="165" y="420" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b21a8">Заступник директора</text>
            <text x="165" y="435" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b21a8">з господарської роботи</text>
            
            <rect x="465" y="400" width="170" height="50" rx="8" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" />
            <text x="550" y="420" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b21a8">Заступник директора</text>
            <text x="550" y="435" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b21a8">з виховної роботи</text>
            
            <rect x="850" y="400" width="170" height="50" rx="8" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" />
            <text x="935" y="420" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b21a8">Заступник директора</text>
            <text x="935" y="435" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b21a8">з навчально-виховної роботи</text>
            
            {/* ========== ROW 5: Педагогічний персонал ========== */}
            <rect x="280" y="520" width="130" height="50" rx="8" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" />
            <text x="345" y="540" textAnchor="middle" fontSize="10" fontWeight="500" fill="#115e59">Психологічна</text>
            <text x="345" y="555" textAnchor="middle" fontSize="10" fontWeight="500" fill="#115e59">служба</text>
            
            <rect x="485" y="520" width="130" height="50" rx="8" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" />
            <text x="550" y="540" textAnchor="middle" fontSize="10" fontWeight="500" fill="#115e59">Педагог-</text>
            <text x="550" y="555" textAnchor="middle" fontSize="10" fontWeight="500" fill="#115e59">організатор</text>
            
            <rect x="690" y="520" width="130" height="50" rx="8" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" />
            <text x="755" y="540" textAnchor="middle" fontSize="10" fontWeight="500" fill="#115e59">Класні</text>
            <text x="755" y="555" textAnchor="middle" fontSize="10" fontWeight="500" fill="#115e59">керівники</text>
            
            {/* Учителі-предметники */}
            <rect x="890" y="520" width="130" height="50" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="955" y="540" textAnchor="middle" fontSize="10" fontWeight="500" fill="#3730a3">Учителі-</text>
            <text x="955" y="555" textAnchor="middle" fontSize="10" fontWeight="500" fill="#3730a3">предметники</text>
            
            {/* ========== ROW 6: Орган учнівського самоврядування ========== */}
            <rect x="450" y="640" width="200" height="50" rx="8" fill="#ffedd5" stroke="#f97316" strokeWidth="2" />
            <text x="550" y="660" textAnchor="middle" fontSize="10" fontWeight="500" fill="#9a3412">Орган учнівського</text>
            <text x="550" y="675" textAnchor="middle" fontSize="10" fontWeight="500" fill="#9a3412">самоврядування</text>
            
            {/* ========== ROW 7: Здобувач освіти ========== */}
            <rect x="450" y="750" width="200" height="50" rx="8" fill="#cffafe" stroke="#06b6d4" strokeWidth="2" />
            <text x="550" y="780" textAnchor="middle" fontSize="14" fontWeight="700" fill="#155e75">Здобувач освіти</text>
            
            {/* ========== CONNECTIONS ========== */}
            
            {/* 1. Таїровська селищна рада -> Управління гуманітарної політики */}
            <line x1="550" y1="60" x2="550" y2="98" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
            
            {/* 2. Управління гуманітарної політики -> Директор */}
            <line x1="550" y1="140" x2="550" y2="198" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
            
            {/* 3. Загальні збори -> Директор */}
            <line x1="230" y1="205" x2="478" y2="220" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowGreen)" />
            
            {/* 4. Педагогічна рада -> Директор */}
            <line x1="870" y1="205" x2="622" y2="220" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowGreen)" />
            
            {/* 5. Директор <-> Орган батьківського самоврядування */}
            <line x1="232" y1="315" x2="478" y2="235" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowAmber)" markerStart="url(#arrowAmberLeft)" />
            
            {/* 6. Директор -> Заступник з господарської */}
            <line x1="500" y1="250" x2="165" y2="398" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowPurple)" />
            
            {/* 7. Директор -> Заступник з виховної */}
            <line x1="550" y1="250" x2="550" y2="398" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowPurple)" />
            
            {/* 8. Директор -> Заступник з навчально-виховної */}
            <line x1="600" y1="250" x2="935" y2="398" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowPurple)" />
            
            {/* 9. Директор -> Психологічна служба */}
            <line x1="480" y1="240" x2="345" y2="518" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowTeal)" />
            
            {/* 10. Директор -> Учителі-предметники */}
            <line x1="620" y1="230" x2="955" y2="518" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowIndigo)" />
            
            {/* 11. Заступник з виховної -> Психологічна служба */}
            <line x1="490" y1="450" x2="380" y2="518" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowTeal)" />
            
            {/* 12. Заступник з виховної -> Педагог-організатор */}
            <line x1="550" y1="450" x2="550" y2="518" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowTeal)" />
            
            {/* 13. Заступник з виховної -> Класні керівники */}
            <line x1="610" y1="450" x2="720" y2="518" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowTeal)" />
            
            {/* 14. Заступник з навчально-виховної -> Учителі-предметники */}
            <line x1="935" y1="450" x2="955" y2="518" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowIndigo)" />
            
            {/* 15. Психологічна служба -> Класні керівники */}
            <line x1="410" y1="545" x2="688" y2="545" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowTeal)" />
            
            {/* 16. Педагог-організатор -> Орган учнівського самоврядування */}
            <line x1="550" y1="570" x2="550" y2="638" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrowOrange)" />
            
            {/* 17. Класні керівники -> Орган учнівського самоврядування */}
            <line x1="720" y1="570" x2="600" y2="638" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrowOrange)" />
            
            {/* 18. Орган учнівського самоврядування -> Здобувач освіти */}
            <line x1="550" y1="690" x2="550" y2="748" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowCyan)" />
            
            {/* 19. Учителі-предметники -> Здобувач освіти */}
            <line x1="920" y1="570" x2="652" y2="765" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowCyan)" />
          </svg>
        </div>
        
        {/* Legend */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg max-w-4xl mx-auto">
          <h3 className="font-semibold mb-3 text-foreground">Умовні позначення:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
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
              <div className="w-4 h-4 bg-teal-500 rounded"></div>
              <span>Педагогічний персонал</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-indigo-500 rounded"></div>
              <span>Учителі-предметники</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-amber-500 rounded"></div>
              <span>Батьківське самоврядування</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span>Учнівське самоврядування</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-cyan-500 rounded"></div>
              <span>Здобувачі освіти</span>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Structure;
