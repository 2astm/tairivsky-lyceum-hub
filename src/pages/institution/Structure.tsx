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
          <svg viewBox="0 0 1200 900" className="min-w-[900px] w-full max-w-5xl mx-auto" style={{ height: 'auto' }}>
            {/* Defs for arrow markers */}
            <defs>
              <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
              </marker>
              <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#22c55e" />
              </marker>
              <marker id="arrowPurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#a855f7" />
              </marker>
              <marker id="arrowAmber" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
              </marker>
              <marker id="arrowAmberReverse" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                <path d="M9,0 L9,6 L0,3 z" fill="#f59e0b" />
              </marker>
              <marker id="arrowTeal" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#14b8a6" />
              </marker>
              <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#f97316" />
              </marker>
              <marker id="arrowCyan" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#06b6d4" />
              </marker>
              <marker id="arrowIndigo" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#6366f1" />
              </marker>
            </defs>
            
            {/* ========== BOXES ========== */}
            
            {/* Таїровська селищна рада */}
            <rect x="450" y="20" width="200" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="550" y="45" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1e40af">Таїровська селищна рада</text>
            
            {/* Управління гуманітарної політики */}
            <rect x="420" y="100" width="260" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="550" y="125" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1e40af">Управління гуманітарної політики</text>
            
            {/* Загальні збори */}
            <rect x="180" y="170" width="160" height="50" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
            <text x="260" y="192" textAnchor="middle" fontSize="11" fontWeight="500" fill="#166534">Загальні збори</text>
            <text x="260" y="207" textAnchor="middle" fontSize="11" fontWeight="500" fill="#166534">(конференція) колективу</text>
            
            {/* Педагогічна рада */}
            <rect x="760" y="170" width="160" height="50" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
            <text x="840" y="200" textAnchor="middle" fontSize="11" fontWeight="500" fill="#166534">Педагогічна рада</text>
            
            {/* Директор */}
            <rect x="480" y="270" width="140" height="50" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
            <text x="550" y="300" textAnchor="middle" fontSize="14" fontWeight="700" fill="#991b1b">Директор</text>
            
            {/* Орган батьківського самоврядування */}
            <rect x="100" y="270" width="160" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="180" y="290" textAnchor="middle" fontSize="10" fontWeight="500" fill="#92400e">Орган батьківського</text>
            <text x="180" y="305" textAnchor="middle" fontSize="10" fontWeight="500" fill="#92400e">самоврядування</text>
            
            {/* Заступник з господарської */}
            <rect x="100" y="400" width="170" height="50" rx="8" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" />
            <text x="185" y="420" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b21a8">Заступник директора</text>
            <text x="185" y="435" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b21a8">з господарської роботи</text>
            
            {/* Заступник з виховної */}
            <rect x="465" y="400" width="170" height="50" rx="8" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" />
            <text x="550" y="420" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b21a8">Заступник директора</text>
            <text x="550" y="435" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b21a8">з виховної роботи</text>
            
            {/* Заступник з навчально-виховної */}
            <rect x="830" y="400" width="170" height="50" rx="8" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" />
            <text x="915" y="420" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b21a8">Заступник директора</text>
            <text x="915" y="435" textAnchor="middle" fontSize="10" fontWeight="500" fill="#6b21a8">з навчально-виховної роботи</text>
            
            {/* Психологічна служба */}
            <rect x="320" y="520" width="130" height="50" rx="8" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" />
            <text x="385" y="540" textAnchor="middle" fontSize="10" fontWeight="500" fill="#115e59">Психологічна</text>
            <text x="385" y="555" textAnchor="middle" fontSize="10" fontWeight="500" fill="#115e59">служба</text>
            
            {/* Педагог-організатор */}
            <rect x="485" y="520" width="130" height="50" rx="8" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" />
            <text x="550" y="540" textAnchor="middle" fontSize="10" fontWeight="500" fill="#115e59">Педагог-</text>
            <text x="550" y="555" textAnchor="middle" fontSize="10" fontWeight="500" fill="#115e59">організатор</text>
            
            {/* Класні керівники */}
            <rect x="650" y="520" width="130" height="50" rx="8" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" />
            <text x="715" y="540" textAnchor="middle" fontSize="10" fontWeight="500" fill="#115e59">Класні</text>
            <text x="715" y="555" textAnchor="middle" fontSize="10" fontWeight="500" fill="#115e59">керівники</text>
            
            {/* Учителі-предметники */}
            <rect x="870" y="520" width="130" height="50" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="935" y="540" textAnchor="middle" fontSize="10" fontWeight="500" fill="#3730a3">Учителі-</text>
            <text x="935" y="555" textAnchor="middle" fontSize="10" fontWeight="500" fill="#3730a3">предметники</text>
            
            {/* Орган учнівського самоврядування */}
            <rect x="450" y="650" width="200" height="50" rx="8" fill="#ffedd5" stroke="#f97316" strokeWidth="2" />
            <text x="550" y="670" textAnchor="middle" fontSize="10" fontWeight="500" fill="#9a3412">Орган учнівського</text>
            <text x="550" y="685" textAnchor="middle" fontSize="10" fontWeight="500" fill="#9a3412">самоврядування</text>
            
            {/* Здобувач освіти */}
            <rect x="450" y="770" width="200" height="50" rx="8" fill="#cffafe" stroke="#06b6d4" strokeWidth="2" />
            <text x="550" y="800" textAnchor="middle" fontSize="14" fontWeight="700" fill="#155e75">Здобувач освіти</text>
            
            {/* ========== CONNECTIONS ========== */}
            
            {/* Таїровська селищна рада -> Управління гуманітарної політики */}
            <line x1="550" y1="60" x2="550" y2="98" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
            
            {/* Управління гуманітарної політики -> Директор */}
            <line x1="550" y1="140" x2="550" y2="268" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
            
            {/* Загальні збори -> Директор */}
            <path d="M 260 220 L 260 250 Q 260 260 270 260 L 478 285" stroke="#22c55e" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" />
            
            {/* Педагогічна рада -> Директор */}
            <path d="M 840 220 L 840 250 Q 840 260 830 260 L 622 285" stroke="#22c55e" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" />
            
            {/* Директор <-> Орган батьківського самоврядування (bidirectional) */}
            <line x1="262" y1="295" x2="478" y2="295" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowAmber)" markerStart="url(#arrowAmberReverse)" />
            
            {/* Директор -> Заступник з господарської */}
            <path d="M 500 320 L 500 355 Q 500 365 490 365 L 185 365 Q 175 365 175 375 L 185 398" stroke="#a855f7" strokeWidth="2" fill="none" markerEnd="url(#arrowPurple)" />
            
            {/* Директор -> Заступник з виховної */}
            <line x1="550" y1="320" x2="550" y2="398" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowPurple)" />
            
            {/* Директор -> Заступник з навчально-виховної */}
            <path d="M 600 320 L 600 355 Q 600 365 610 365 L 915 365 Q 925 365 925 375 L 915 398" stroke="#a855f7" strokeWidth="2" fill="none" markerEnd="url(#arrowPurple)" />
            
            {/* Директор -> Психологічна служба */}
            <path d="M 480 310 L 410 310 Q 400 310 400 320 L 400 480 Q 400 490 395 490 L 385 518" stroke="#14b8a6" strokeWidth="2" fill="none" markerEnd="url(#arrowTeal)" />
            
            {/* Директор -> Учителі-предметники */}
            <path d="M 620 300 L 1020 300 Q 1030 300 1030 310 L 1030 540 Q 1030 550 1020 550 L 1002 545" stroke="#6366f1" strokeWidth="2" fill="none" markerEnd="url(#arrowIndigo)" />
            
            {/* Заступник з виховної -> Психологічна служба */}
            <path d="M 490 450 L 490 485 Q 490 495 480 495 L 390 495 Q 380 495 385 505 L 385 518" stroke="#14b8a6" strokeWidth="2" fill="none" markerEnd="url(#arrowTeal)" />
            
            {/* Заступник з виховної -> Педагог-організатор */}
            <line x1="550" y1="450" x2="550" y2="518" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowTeal)" />
            
            {/* Заступник з виховної -> Класні керівники */}
            <path d="M 610 450 L 610 485 Q 610 495 620 495 L 710 495 Q 720 495 715 505 L 715 518" stroke="#14b8a6" strokeWidth="2" fill="none" markerEnd="url(#arrowTeal)" />
            
            {/* Заступник з навчально-виховної -> Учителі-предметники */}
            <line x1="915" y1="450" x2="935" y2="518" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowIndigo)" />
            
            {/* Психологічна служба -> Класні керівники */}
            <path d="M 450 545" stroke="#14b8a6" strokeWidth="2" fill="none" />
            <line x1="450" y1="545" x2="648" y2="545" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowTeal)" />
            
            {/* Педагог-організатор -> Орган учнівського самоврядування */}
            <path d="M 550 570 L 550 600 Q 550 610 545 610 L 545 648" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arrowOrange)" />
            
            {/* Класні керівники -> Орган учнівського самоврядування */}
            <path d="M 715 570 L 715 610 Q 715 620 705 620 L 600 648" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arrowOrange)" />
            
            {/* Орган учнівського самоврядування -> Здобувач освіти */}
            <line x1="550" y1="700" x2="550" y2="768" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowCyan)" />
            
            {/* Учителі-предметники -> Здобувач освіти */}
            <path d="M 935 570 L 935 730 Q 935 740 925 740 L 652 785" stroke="#06b6d4" strokeWidth="2" fill="none" markerEnd="url(#arrowCyan)" />
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
