import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, MessageCircle } from 'lucide-react';
import {SchoolInfo} from "@/data/school-info.ts";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 text-xl font-semibold mb-4">
              <span className="bg-blue-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                ТЛ
              </span>
              <span>Таїровський ліцей</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Заклад освіти, який забезпечує якісну освіту та всебічний розвиток учнів.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/groups/301186951608235"
                className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/*<a */}
              {/*  href="#" */}
              {/*  className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"*/}
              {/*  aria-label="Instagram"*/}
              {/*>*/}
              {/*  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">*/}
              {/*    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />*/}
              {/*  </svg>*/}
              {/*</a>*/}
              {/*<a */}
              {/*  href="#" */}
              {/*  className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"*/}
              {/*  aria-label="YouTube"*/}
              {/*>*/}
              {/*  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">*/}
              {/*    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />*/}
              {/*  </svg>*/}
              {/*</a>*/}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Корисні посилання</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/information" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Про нас
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Новини та події
                </Link>
              </li>
              <li>
                <Link to="/distance-learning" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Дистанційне навчання
                </Link>
              </li>
              <li>
                <Link to="/help-and-safety" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Допомога і безпека
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Наші викладачі
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Розклад занять
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:YevhenMolchaniuk@tairivsky-lyceum.od.ua?subject=Побажання стосовно нового сайту"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Надіслати відгук</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контактна інформація</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  {SchoolInfo.address}
                </span>
              </li>
              {SchoolInfo.phones.map((phone) =>
                  <li key={phone} className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{phone}</span>
                  </li>
               )}
              {SchoolInfo.emails.map((email) =>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{email}</span>
                  </li>)}
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">{SchoolInfo.workTime}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-center text-sm">
            © {new Date().getFullYear()} Таїровський ліцей. Усі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
