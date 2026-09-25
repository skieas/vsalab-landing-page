import React, { useState, useEffect } from 'react';
import { Leaf, Search, User, Menu, X, ShoppingBag } from 'lucide-react';
import { EditableText } from './EditableText';

interface HeaderProps {
  isAdmin: boolean;
  brandName: string;
  brandTagline: string;
  navLinks: { label: string; href: string }[];
  cartCount: number;
  onUpdateBrandName: (val: string) => void;
  onUpdateBrandTagline: (val: string) => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isAdmin,
  brandName,
  brandTagline,
  navLinks,
  cartCount,
  onUpdateBrandName,
  onUpdateBrandTagline,
  onOpenSearch,
  onOpenCart,
  onOpenLogin,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1C1713]/95 text-stone-100 shadow-xl backdrop-blur-md py-3 border-b border-stone-800/80'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Lockup */}
        <a href="#trang-chu" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-full bg-stone-900/90 border border-stone-600/60 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shadow-md">
            <Leaf className="w-5 h-5 fill-emerald-400/20" />
          </div>
          <div className="flex flex-col">
            <EditableText
              isAdmin={isAdmin}
              value={brandName}
              onChange={onUpdateBrandName}
              as="span"
              className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-100 group-hover:text-amber-200 transition-colors"
            />
            <EditableText
              isAdmin={isAdmin}
              value={brandTagline}
              onChange={onUpdateBrandTagline}
              as="span"
              className="text-[10px] tracking-wider uppercase text-stone-300 font-sans font-light"
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wide uppercase font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-200 hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-amber-400 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={onOpenSearch}
            className="p-2 text-stone-200 hover:text-amber-300 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Tìm kiếm sản phẩm hoặc bài viết"
            title="Tìm kiếm"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            className="p-2 text-stone-200 hover:text-amber-300 rounded-full hover:bg-white/10 transition-colors relative"
            aria-label="Giỏ hàng & Đơn hàng"
            title="Giỏ hàng"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={onOpenLogin}
            className="p-2 text-stone-200 hover:text-amber-300 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Tài khoản / Quản trị"
            title="Tài khoản Quản trị"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-200 hover:text-white rounded-lg focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181310]/98 border-t border-stone-800 text-stone-200 px-6 py-6 space-y-4 animate-fade-in shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col space-y-3 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-stone-800/80 hover:text-amber-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex items-center justify-between text-xs text-stone-400">
            <span>Hotline: 0833-15-3388</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="text-amber-400 hover:underline"
            >
              Đăng nhập Quản trị
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
