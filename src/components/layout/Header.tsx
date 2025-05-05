
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { 
    name: 'Інформація', 
    dropdown: true,
    items: [
      { name: 'Умови прийому', path: '/information/admission' },
      { name: 'Гуртки', path: '/information/extracurricular' },
      { name: 'Харчування', path: '/information/nutrition' },
      { name: 'Критерії оцінювання', path: '/information/evaluation' },
      { name: 'Патріотичне виховання', path: '/information/patriotic-education' },
      { name: 'Права учнів', path: '/information/student-rights' },
      { name: 'Права батьків', path: '/information/parent-rights' },
      { name: 'Електронний журнал', path: '/information/electronic-journal' },
      { name: 'Самоврядування', path: '/information/self-government' },
    ]
  },
  { name: 'Новини', path: '/news' },
  { name: 'Дистанційне навчання', path: '/distance-learning' },
  { name: 'Допомога і безпека', path: '/help-and-safety' },
  { 
    name: 'Заклад', 
    dropdown: true,
    items: [
      { name: 'Адміністрація', path: '/institution/administration' },
      { name: 'Педагогічний колектив', path: '/institution/faculty' },
      { name: 'Контакти', path: '/institution/contacts' },
    ]
  },
  { name: 'Профорієнтація', path: '/career-guidance' },
  { name: 'Розклад', path: '/schedule' },
  { name: 'Документи', path: '/legal-information' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<typeof navItems>([]);
  const [overflowItems, setOverflowItems] = useState<typeof navItems>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const calculateVisibleItems = () => {
      if (isMobile || !navRef.current) {
        setVisibleItems(navItems);
        setOverflowItems([]);
        return;
      }

      const navWidth = navRef.current.offsetWidth;
      const logoWidth = 250; // Estimated width of the logo
      const menuButtonWidth = 50; // Estimated width of the menu button
      const itemPadding = 28; // Estimated padding for each item
      const overflowButtonWidth = 50; // Width of the "more" button

      let availableWidth = navWidth - logoWidth - menuButtonWidth - overflowButtonWidth;
      const visible: typeof navItems = [];
      const overflow: typeof navItems = [];
      
      // Estimate width for each nav item
      for (const item of navItems) {
        const itemWidth = item.name.length * 10 + itemPadding; // Rough estimate of item width
        
        if (availableWidth >= itemWidth) {
          visible.push(item);
          availableWidth -= itemWidth;
        } else {
          overflow.push(item);
        }
      }

      setVisibleItems(visible);
      setOverflowItems(overflow);
    };

    calculateVisibleItems();
    window.addEventListener('resize', calculateVisibleItems);
    
    return () => {
      window.removeEventListener('resize', calculateVisibleItems);
    };
  }, [isMobile]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => prev === name ? null : name);
  };

  const renderNavItem = (item: typeof navItems[0], inOverflow = false) => {
    if (item.dropdown) {
      return (
        <div key={item.name} className={inOverflow ? "" : "relative"} ref={!inOverflow ? dropdownRef : undefined}>
          <button
            onClick={() => toggleDropdown(item.name)}
            className={cn(
              'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all',
              openDropdown === item.name
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50',
              inOverflow && "w-full text-left"
            )}
          >
            {item.name}
            {openDropdown === item.name ? (
              <ChevronUp className="ml-1 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-1 h-4 w-4" />
            )}
          </button>
          
          {openDropdown === item.name && !inOverflow && (
            <div className="absolute mt-1 py-1 w-56 bg-white rounded-md shadow-lg border border-gray-100 z-50">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.path}
                  to={subItem.path}
                  className={cn(
                    'block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600',
                    location.pathname === subItem.path && 'bg-blue-50 text-blue-600'
                  )}
                  onClick={() => setOpenDropdown(null)}
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          )}
          
          {openDropdown === item.name && inOverflow && (
            <div className="pl-4 border-l-2 border-blue-100 ml-3 mt-1">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.path}
                  to={subItem.path}
                  className={cn(
                    'block px-3 py-2 text-sm rounded-md my-1 transition-all',
                    location.pathname === subItem.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  )}
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    return (
      <Link
        key={item.path}
        to={item.path}
        className={cn(
          'px-3 py-2 text-sm font-medium rounded-md transition-all',
          location.pathname === item.path
            ? 'text-blue-600 bg-blue-50'
            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50',
          inOverflow && "block w-full text-left"
        )}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg border-gray-200/20 shadow-sm'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <Link 
            to="/home" 
            className="flex items-center space-x-2 text-2xl font-semibold"
            aria-label="Таїровський ліцей"
          >
            <span className="bg-blue-500 text-white w-10 h-10 rounded-lg flex items-center justify-center">
              ТЛ
            </span>
            <span>Таїровський ліцей</span>
          </Link>

          <div ref={navRef} className="hidden md:flex space-x-1 items-center">
            {visibleItems.map((item) => renderNavItem(item))}

            {overflowItems.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium rounded-md transition-all text-gray-700 hover:text-blue-600 hover:bg-blue-50">
                  <MoreHorizontal className="h-5 w-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white">
                  {overflowItems.map((item) => (
                    <DropdownMenuItem key={item.name || item.path} className="p-0">
                      {renderNavItem(item, true)}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden animate-scale-in">
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={cn(
                        'flex items-center justify-between w-full px-3 py-3 text-base font-medium rounded-md my-1 transition-all',
                        openDropdown === item.name
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      )}
                    >
                      {item.name}
                      {openDropdown === item.name ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                    
                    {openDropdown === item.name && (
                      <div className="pl-4 border-l-2 border-blue-100 ml-3 mt-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={cn(
                              'block px-3 py-2 text-sm rounded-md my-1 transition-all',
                              location.pathname === subItem.path
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'block px-3 py-3 text-base font-medium rounded-md my-1 transition-all',
                      location.pathname === item.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    )}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
