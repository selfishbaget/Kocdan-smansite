import { GraduationCap, HeartHandshake, Users, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    badge: '%80 Odak',
    badgeColor: 'bg-teal-100 text-teal-700',
    title: 'Öğrenci Koçluğu & Akademik Takip',
    subtitle: 'Strateji · Plan · Takip',
    desc: 'YKS, LGS ve üniversite hazırlığında öğrenciye özel çalışma programları ve deneme analizleriyle hedeflere ulaşmak.',
    features: [
      'Kişiselleştirilmiş haftalık çalışma planı',
      'YKS / LGS / üniversite sınav stratejisi',
      'Konu bazlı güçlü/zayıf analizi',
      'Zaman yönetimi & verimlilik sistemi',
      'Hedef belirleme ve ölçümleme',
      'Haftalık deneme değerlendirmesi',
    ],
    gradient: 'from-teal-600 to-teal-700',
    hover: 'hover:border-teal-300 hover:shadow-teal-100',
    featured: true,
  },
  {
    icon: HeartHandshake,
    badge: '%20 Odak',
    badgeColor: 'bg-amber-100 text-amber-700',
    title: 'Sınav Kaygısı & Psikolojik Destek',
    subtitle: 'Kaygı · Stres · Motivasyon',
    desc: 'Sınav kaygısı, stres yönetimi ve duygusal dayanıklılık üzerine birebir destek seanslarıyla öğrencinin zihinsel gücü inşa edilir.',
    features: [
      'Sınav kaygısı değerlendirmesi',
      'Nefes & gevşeme teknikleri',
      'Motivasyon ve öz-güven çalışmaları',
      'Kaygı günlüğü & farkındalık egzersizleri',
      'Olumsuz düşünce döngüsünü kırma',
      'Duygusal dayanıklılık geliştirme',
    ],
    gradient: 'from-amber-500 to-orange-500',
    hover: 'hover:border-amber-300 hover:shadow-amber-100',
    featured: false,
  },
  {
    icon: Users,
    badge: 'Veli & Aile',
    badgeColor: 'bg-blue-100 text-blue-700',
    title: 'Veli Danışmanlığı & İletişim',
    subtitle: 'Destek · Rehberlik · Takip',
    desc: 'Öğrencinin sürecine ailenin de dahil edilmesiyle, ev ortamında destek ve okul-evde tutarlı bir atmosfer oluşturulur.',
    features: [
      'Aylık veli ilerleme raporları',
      'Öğrenciyle iletişim rehberliği',
      'Ev çalışma ortamı düzenleme',
      'Motivasyon baskısı yönetimi',
      'Aile için stres yönetimi tavsiyeleri',
      'Acil durum danışma hattı',
    ],
    gradient: 'from-blue-500 to-cyan-500',
    hover: 'hover:border-blue-300 hover:shadow-blue-100',
    featured: false,
  },
];

export default function Services() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hizmetler" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold tracking-wide mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-5">
            Bütüncül Destek Paketi
          </h2>
          <p className="text-slate-500 text-lg">
            Akademik başarı ve duygusal sağlık birbirini tamamlar. Her öğrenciye her iki alanda da destek veriyoruz.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, badge, badgeColor, title, subtitle, desc, features, gradient, hover, featured }) => (
            <div
              key={title}
              className={`relative flex flex-col rounded-2xl border-2 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${hover} ${
                featured ? 'border-teal-200 shadow-xl' : 'border-slate-100 shadow-md'
              }`}
            >
              {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-500 text-white text-xs font-bold rounded-full shadow-md tracking-wide">
                  EN POPÜLER
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg`}>
                <Icon size={26} className="text-white" />
              </div>

              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${badgeColor}`}>
                {badge}
              </span>

              <h3 className="text-slate-800 font-extrabold text-xl mb-1">{title}</h3>
              <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase mb-4">{subtitle}</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>

              <ul className="space-y-2.5 flex-1 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo('#iletisim')}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95 ${
                  featured
                    ? 'bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-teal-200'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                Bilgi Al
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
