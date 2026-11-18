
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import {
  ShieldX, Phone, Hand, MessageSquareX, UserX, Smartphone,
  Clock, EyeOff, Share2, StopCircle, Camera, Ban, Megaphone, Download, FileText, ExternalLink
} from 'lucide-react';

const StopBullying = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Стоп булінг"
            description="Запобігання та протидія булінгу і кібербулінгу в шкільному середовищі"
          />

          {/* Definition */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-8 rounded-r-lg">
            <p className="font-medium text-blue-800 text-base leading-relaxed">
              <strong>Булінг</strong> — це систематичне цькування в освітньому середовищі. Три ключові ознаки:
              повторюваність (регулярні образи, а не одноразовий конфлікт), нерівність сил (тиск групи або
              старших на одного) та умисна шкода (приниження гідності й психологічний біль).
              <br /><br />
              <strong>Ти ніколи не винен у тому, що тебе цькують.</strong>
            </p>
          </div>

          {/* 4 Forms */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Чотири форми булінгу</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-5">
              <Hand className="h-7 w-7 text-red-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Фізичний</h3>
              <p className="text-gray-600 text-sm">Штовхання, удари, псування особистих речей.</p>
            </Card>
            <Card className="p-5">
              <MessageSquareX className="h-7 w-7 text-blue-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Вербальний</h3>
              <p className="text-gray-600 text-sm">Образливі прізвиська, глузування, постійні погрози.</p>
            </Card>
            <Card className="p-5">
              <UserX className="h-7 w-7 text-blue-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Соціальний</h3>
              <p className="text-gray-600 text-sm">Бойкот, ізоляція, поширення брехливих чуток.</p>
            </Card>
            <Card className="p-5 border-amber-200 bg-amber-50">
              <Smartphone className="h-7 w-7 text-amber-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Кібербулінг</h3>
              <p className="text-gray-600 text-sm">Цькування в чатах, соцмережах та онлайн-іграх.</p>
            </Card>
          </div>

          {/* Cyberbullying */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Кібербулінг: цькування без пауз</h2>
          <p className="text-gray-600 mb-4">Чому онлайн-цькування особливо небезпечне:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
              <Clock className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 text-sm">Доступ 24/7</p>
                <p className="text-gray-600 text-sm">Агресія переслідує навіть вдома, без перерв.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
              <EyeOff className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 text-sm">Анонімність</p>
                <p className="text-gray-600 text-sm">Фейкові акаунти створюють ілюзію безкарності.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
              <Share2 className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 text-sm">Цифровий слід</p>
                <p className="text-gray-600 text-sm">Фото та відео поширюються миттєво і назавжди.</p>
              </div>
            </div>
          </div>

          {/* Algorithm */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Алгоритм дій при кібербулінгу</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { step: 1, icon: <StopCircle className="h-6 w-6" />, title: 'Зупинись', desc: 'Не відповідай агресорам у чаті — будь-яка реакція підживлює цькування.' },
              { step: 2, icon: <Camera className="h-6 w-6" />, title: 'Збережи', desc: 'Зроби скріншоти погроз, образливих коментарів та профілю кривдника.' },
              { step: 3, icon: <Ban className="h-6 w-6" />, title: 'Заблокуй', desc: 'Додай порушника в чорний список та подай скаргу модераторам соцмережі.' },
              { step: 4, icon: <Megaphone className="h-6 w-6" />, title: 'Повідом', desc: 'Звернись до батьків, класного керівника, шкільного психолога або поліції.' },
            ].map(({ step, icon, title, desc }) => (
              <Card key={step} className="p-5">
                <div className={`inline-flex items-center justify-center h-9 w-9 rounded-full text-white font-bold mb-3 ${step === 4 ? 'bg-amber-500' : 'bg-blue-600'}`}>
                  {step}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-600">{icon}</span>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{desc}</p>
              </Card>
            ))}
          </div>

          {/* Age advice */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Поради за віком</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card className="p-6 border-blue-200">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">1–4 КЛАСИ</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Початкова школа</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>Не мовчи — одразу розкажи батькам чи вчителю</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>Не відповідай образою на образу</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>Не додавай незнайомців в іграх та чатах</li>
              </ul>
            </Card>
            <Card className="p-6 border-blue-200 bg-blue-50">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">5–11 КЛАСИ</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Середня та старша школа</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>Фіксуй докази: скріншоти та посилання на профілі</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>Налаштуй приватність усіх акаунтів</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">•</span>Підтримай однокласника та не поширюй плітки</li>
              </ul>
            </Card>
          </div>

          {/* Emergency contacts */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Куди звернутися по допомогу</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { number: '102', title: 'Національна поліція', desc: 'Погрози життю, фізичне насильство, злочини', href: 'tel:102' },
              { number: '116 111', title: 'Гаряча лінія для дітей', desc: 'Анонімна підтримка дітей і підлітків 24/7', href: 'tel:116111' },
              { number: '1547', title: 'Лінія протидії насильству', desc: 'Консультації щодо булінгу та захисту прав 24/7', href: 'tel:1547' },
              { number: 'stopfraud.gov.ua', title: 'Портал «Кібер Брама»', desc: 'Правила кібербезпеки, перевірка схем шахраїв і повідомлення про загрози', href: 'https://stopfraud.gov.ua' },
            ].map(({ number, title, desc, href }) => (
              <Card key={number} className="p-6 text-center">
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-2xl font-extrabold text-blue-700 mb-1 break-all underline hover:text-blue-900 block">{number}</a>
                ) : (
                  <div className="text-2xl font-extrabold text-blue-700 mb-1 break-all">{number}</div>
                )}
                <div className="font-semibold text-gray-900 mb-1">{title}</div>
                <p className="text-gray-500 text-sm">{desc}</p>
              </Card>
            ))}
          </div>

          <div className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <Phone className="h-5 w-5 text-blue-600 shrink-0" />
            <p className="text-gray-700 text-sm">
              Також можна звернутися до <strong>класного керівника</strong>, <strong>шкільного психолога</strong> або
              адміністрації ліцею — вони зобов'язані реагувати на кожен випадок булінгу.
            </p>
          </div>

          {/* Downloads */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Матеріали для завантаження</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <a
              href="/files/documents/pamyatka-bezpeky-dlya-ditey.pdf"
              download
              className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors shrink-0">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">Пам'ятка безпеки для дітей</p>
                <p className="text-gray-500 text-xs mt-0.5">Твоя безпека у ліцеї та онлайн · PDF</p>
              </div>
              <Download className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
            </a>
            <a
              href="/files/documents/bezpeka-u-litseyi-ta-onlayn.pdf"
              download
              className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors shrink-0">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">Безпека у ліцеї та онлайн середовищі</p>
                <p className="text-gray-500 text-xs mt-0.5">Презентаційні матеріали · PDF</p>
              </div>
              <Download className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
            </a>
          </div>

          {/* Useful links */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Корисні посилання</h2>
          <div className="flex flex-col gap-3 mb-8">
            {[
              { href: 'https://stopfraud.gov.ua/about-the-project', label: 'Про проєкт «Кібер Брама»', desc: 'stopfraud.gov.ua' },
            ].map(({ href, label, desc }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-colors group"
              >
                <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors shrink-0">
                  <ExternalLink className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">{label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-300 group-hover:text-blue-500 transition-colors shrink-0" />
              </a>
            ))}
          </div>

          {/* Legal basis */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Нормативно-правова база</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
            <li>Закон України «Про освіту»</li>
            <li>Закон України «Про внесення змін до деяких законодавчих актів України щодо протидії булінгу (цькуванню)»</li>
            <li>Наказ МОН від 28.12.2019 №1646 «Деякі питання реагування на випадки булінгу (цькування) та застосування заходів виховного впливу в закладах освіти»</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StopBullying;