import React, { useState } from 'react';
import { useApp, AppView } from '../context/AppContext';
import { Menu, X, User, ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentView, navigateTo, openBookingModal, bookings } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pendingBookingsCount = bookings.filter(b => b.status === 'pending').length;

  const navLinks = [
    { label: 'TRANG CHỦ', view: 'home' as const },
    { label: 'HÀNH TRÌNH RETREAT', view: 'experiences' as const },
    { label: 'CUSTOMIZED ESCAPE', view: 'customized' as const },
    { label: 'CORPORATE WELLNESS', view: 'corporate' as const },
    { label: 'VỀ GREEN ESCAPE', view: 'about' as const },
    { label: 'JOURNAL', view: 'journal' as const },
    { label: 'LIÊN HỆ', view: 'contact' as const }
  ];

  const handleNavClick = (view: AppView) => {
    navigateTo(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE4D7] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element strictly following Top Bar Contract) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus-visible:outline-none"
        >
          <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#1B3C2A] group-hover:text-[#2A5C3D] transition-colors">
            GREEN ESCAPE
          </span>
        </button>

        {/* Zone 2: Navigation Links (Clean text links with subtle hover effect) */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold tracking-widest text-[#4A5D4E]">
          {navLinks.map(link => {
            const isActive = currentView === link.view;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.view)}
                className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#1B3C2A] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1B3C2A]'
                    : 'hover:text-[#1B3C2A]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center space-x-3">
          {/* Quick Switcher for Customer & Admin */}
          <div className="hidden sm:flex items-center space-x-1 border border-[#DDD5C5] rounded-full p-1 bg-[#F5EFE4]/60">
            <button
              onClick={() => handleNavClick('account')}
              title="Tài khoản khách hàng"
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all flex items-center space-x-1 cursor-pointer ${
                currentView === 'account'
                  ? 'bg-white text-[#1B3C2A] shadow-xs font-semibold'
                  : 'text-[#635547] hover:text-[#1B3C2A]'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Tài khoản</span>
            </button>
            <button
              onClick={() => handleNavClick('admin')}
              title="Trang quản trị Green Escape"
              className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all flex items-center space-x-1 cursor-pointer ${
                currentView === 'admin'
                  ? 'bg-[#1B3C2A] text-white shadow-xs font-semibold'
                  : 'text-[#635547] hover:text-[#1B3C2A]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Admin</span>
              {pendingBookingsCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block ml-0.5" />
              )}
            </button>
          </div>

          {/* Primary CTA Button */}
          <button
            onClick={() => openBookingModal()}
            className="px-5 py-2.5 text-xs font-semibold tracking-wider text-white bg-[#1B3C2A] hover:bg-[#255238] active:scale-95 transition-all shadow-sm rounded-full whitespace-nowrap cursor-pointer"
          >
            ĐẶT NGAY
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Mở danh mục điều hướng"
            className="lg:hidden p-2 text-[#2B3F31] hover:text-[#1B3C2A] rounded-lg focus-visible:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE4D7] bg-[#FAF8F5] px-6 py-5 shadow-lg space-y-3">
          <div className="space-y-1">
            {navLinks.map(link => {
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.view)}
                  className={`block w-full text-left py-2.5 text-sm tracking-wider cursor-pointer ${
                    isActive ? 'text-[#1B3C2A] font-bold' : 'text-[#506354]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#EAE4D7] flex items-center justify-between">
            <button
              onClick={() => handleNavClick('account')}
              className="flex items-center space-x-2 text-sm text-[#384A3B] py-2 cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span>Tài khoản của tôi</span>
            </button>
            <button
              onClick={() => handleNavClick('admin')}
              className="flex items-center space-x-2 text-sm font-semibold text-[#1B3C2A] py-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Bảng điều khiển Admin</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
