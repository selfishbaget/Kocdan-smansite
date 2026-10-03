import { Instagram, Twitter, Youtube, Linkedin, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Koçluk Süreci', href: '#surec' },
  { label: 'Paketler', href: '#paketler' },
  { label: 'Hakkımda', href: '#hakkimda' },
  { label: 'İletişim', href: '#iletisim' },
];

const services = [
  'Öğrenci Koçluğu',
  'YKS / AYT Hazırlık',
  'LGS Hazırlık',
  'Sınav Kaygısı Yönetimi',
  'Veli Danışmanlığı',
  'Online Seans',
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA */}
        <div className="py-12 border-b border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-extrabold text-2xl mb-1">Hadi Konuşalım</h3>
              <p className="text-slate-400">İlk adımı atmak için hiç geç değil. Ücretsiz görüşme talep et.</p>
            </div>
            <button
              onClick={() => scrollTo('#iletisim')}
              className="flex items-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-full transition-all duration-200 active:scale-95 whitespace-nowrap group"
            >
              Ücretsiz Ön Görüşme Al
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-500">
                <img
                  src="/WhatsApp_Image_2026-07-29_at_15.03.40.png"
                  alt="Psk.Dan. Berkay Bulut"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-teal-400 text-xs font-medium tracking-widest uppercase">Psk.Dan.</div>
                <div className="text-white font-bold text-base">Berkay Bulut</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Akademik koçluk ve psikolojik danışmanlık alanında bütüncül yaklaşımıyla öğrencilerin hedeflerine ulaşmasını destekliyorum.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Hizmetler</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#hizmetler')}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">İletişim</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p>+90 (530) 460 04 17</p>
              <p>berkay_bulut_17@gotmail.com</p>
              <p>Balıkesir, Türkiye</p>
              <p className="pt-2">Online görüşme imkanı mevcuttur.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Psk.Dan. Berkay Bulut — Tüm hakları saklıdır.</p>
          <p>Öğrenci Koçluğu & Psikolojik Danışmanlık</p>
        </div>
      </div>
    </footer>
  );
}
