
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Globe, Lock, ShieldAlert, Link2Off, UserCheck, Gift, AlertTriangle, Shield, Download, FileText, ExternalLink } from 'lucide-react';

const InternetSafety = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Безпека в Інтернеті"
            description="Цифрова гігієна, захист від шахраїв та небезпечних пропозицій у мережі"
          />

          {/* Digital hygiene */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Цифрова гігієна та захист від шахраїв</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <Card className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Бережи паролі та коди з SMS</h3>
              </div>
              <p className="text-gray-600 text-sm">Нікому не передавай дані банківських карток батьків, коди підтвердження чи паролі від акаунтів — навіть друзям.</p>
            </Card>
            <Card className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <Link2Off className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Не переходь за підозрілими посиланнями</h3>
              </div>
              <p className="text-gray-600 text-sm">Навіть якщо прохання «проголосувати» чи «позичити гроші» надійшло зі сторінки друга — її могли зламати.</p>
            </Card>
            <Card className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <ShieldAlert className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Налаштуй приватність акаунтів</h3>
              </div>
              <p className="text-gray-600 text-sm">Зроби профілі в соцмережах закритими. Не розголошуй ім'я, адресу, номер телефону та назву школи.</p>
            </Card>
            <Card className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Перевіряй інформацію</h3>
              </div>
              <p className="text-gray-600 text-sm">Не поширюй новини, не перевіривши їх з кількох джерел. Долучайся до боротьби з фейками разом із «BRAMA» (@brama_channel).</p>
            </Card>
          </div>

          {/* Fraud schemes */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Поширені схеми онлайн-шахрайства</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            <Card className="p-5">
              <Link2Off className="h-7 w-7 text-blue-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Фішингові посилання</h3>
              <p className="text-gray-600 text-sm">Підроблені сайти виманюють паролі та дані банківських карток.</p>
            </Card>
            <Card className="p-5">
              <UserCheck className="h-7 w-7 text-blue-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Злам акаунтів друзів</h3>
              <p className="text-gray-600 text-sm">Прохання позичити гроші або проголосувати за посиланням від «знайомого» — шахраї зламали його акаунт.</p>
            </Card>
            <Card className="p-5">
              <Gift className="h-7 w-7 text-amber-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Фейкові розіграші</h3>
              <p className="text-gray-600 text-sm">Обіцянки ігрової валюти або призів в обмін на код з SMS або особисті дані.</p>
            </Card>
          </div>

          {/* Recruitment warning */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-red-800 mb-2">Обережно: вороже вербування для диверсій!</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Якщо невідомі у Telegram чи онлайн-іграх пропонують <strong>«легкі гроші»</strong> за підпал авто,
                  релейних шаф або фотографування об'єктів — це <strong>пастка спецслужб ворога</strong>.
                </p>
                <ul className="space-y-1 text-sm text-gray-700 mb-3">
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">!</span><span><strong>Відповідальність:</strong> кримінальне покарання за ст. 113 ККУ вже з 14 років.</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">!</span><span><strong>Захист:</strong> одразу покажи листування батькам і повідом поліцію за номером <a href="tel:102" className="font-bold underline hover:text-gray-900">102</a>.</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* BRAMA project */}
          <div className="bg-blue-900 text-white rounded-xl p-6 mb-10">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Проєкт «BRAMA»: онлайн-варта України</h3>
                <p className="text-blue-200 text-sm mb-3">Синергія громадян, кіберполіції та волонтерів для захисту цифрового простору.</p>
                <ul className="space-y-1 text-sm text-blue-100">
                  <li>• <strong>Блокування контенту:</strong> знищення ворожих ботів та фейкових каналів</li>
                  <li>• <strong>Медіаграмотність:</strong> захист від інформаційних маніпуляцій</li>
                  <li>• <strong>Портал «Кібер Брама»:</strong> навчальні матеріали на <a href="https://stopfraud.gov.ua" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-semibold underline hover:text-amber-300">stopfraud.gov.ua</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Basic internet safety */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Основні правила безпеки в інтернеті</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <Card className="p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Захист особистої інформації</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                <li>Не розголошуй ім'я, адресу, номер телефону та школу</li>
                <li>Використовуй надійні унікальні паролі</li>
                <li>Не публікуй особисті фото без дозволу батьків</li>
              </ul>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Обережність у спілкуванні</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                <li>Не додавай незнайомців у іграх та чатах</li>
                <li>Ніколи не погоджуйся на зустріч з онлайн-знайомим</li>
                <li>Якщо щось лякає в мережі — одразу розкажи дорослим</li>
              </ul>
            </Card>
          </div>

          {/* Emergency contacts */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Куди звернутися по допомогу</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold">Служба підтримки</th>
                  <th className="px-5 py-3 text-left font-semibold">Контакт</th>
                  <th className="px-5 py-3 text-left font-semibold">Коли звертатися</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr>
                  <td className="px-5 py-3 font-medium text-gray-900">Національна поліція України</td>
                  <td className="px-5 py-3"><a href="tel:102" className="font-bold text-blue-700 underline hover:text-blue-900">102</a></td>
                  <td className="px-5 py-3 text-gray-600">Погрози життю, фізичне насильство, спроби вербування чи шахрайство</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-900">Національна дитяча гаряча лінія</td>
                  <td className="px-5 py-3"><a href="tel:116111" className="font-bold text-blue-700 underline hover:text-blue-900">116 111</a></td>
                  <td className="px-5 py-3 text-gray-600">Анонімна психологічна та правова підтримка дітей і підлітків (24/7)</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium text-gray-900">Лінія протидії насильству</td>
                  <td className="px-5 py-3"><a href="tel:1547" className="font-bold text-blue-700 underline hover:text-blue-900">1547</a></td>
                  <td className="px-5 py-3 text-gray-600">Консультації щодо булінгу в школі та захисту прав дитини (24/7)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-900">Освітній портал «Кібер Брама»</td>
                  <td className="px-5 py-3"><a href="https://stopfraud.gov.ua" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 underline hover:text-blue-900">stopfraud.gov.ua</a></td>
                  <td className="px-5 py-3 text-gray-600">Правила кібербезпеки, перевірка схем шахраїв і повідомлення про загрози</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Downloads */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Матеріали для завантаження</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="font-medium text-blue-800 text-sm">
              Пам'ятай: <strong>твоя безпека — у твоїх руках!</strong> Не мовчи про цькування, перевіряй інформацію
              та не соромся просити допомоги у дорослих.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InternetSafety;