import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Koçluk Sistemi', href: '#surec' },
  { label: 'Danışmanlık', href: '#paketler' },
  { label: 'Hakkımda', href: '#hakkimda' },
  { label: 'İletişim', href: '#iletisim' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-teal-500 shadow-md group-hover:border-teal-600 transition-colors">
              <img
                src="/WhatsApp_Image_2026-07-29_at_15.03.40.png"
                alt="Psk.Dan. Berkay Bulut"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`text-xs font-medium tracking-widest uppercase ${scrolled ? 'text-teal-600' : 'text-teal-400'}`}>
                Psk.Dan.
              </span>
              <span className={`text-lg font-bold tracking-tight ${scrolled ? 'text-slate-800' : 'text-white'}`}>
                Berkay Bulut
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium transition-colors hover:text-teal-500 ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#iletisim')}
              className="ml-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-teal-200 hover:shadow-lg active:scale-95"
            >
              Ücretsiz Ön Görüşme Al
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-slate-700' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-white shadow-xl`}
      >
        <div className="px-4 pt-2 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left px-4 py-3 text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg text-sm font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#iletisim')}
            className="mt-3 px-5 py-3 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-full transition-colors text-center"
          >
            Ücretsiz Ön Görüşme Al
          </button>
        </div>
      </div>
    </header>
  );
}
