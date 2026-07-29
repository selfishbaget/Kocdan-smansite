import { CheckCircle2, X } from 'lucide-react';

const packages = [
  {
    name: 'Temel Koçluk',
    tagline: 'Başlangıç için ideal',
    price: '₺1.200',
    period: '/ ay',
    color: 'border-slate-200',
    headerColor: 'bg-slate-50',
    btnClass: 'bg-slate-800 hover:bg-slate-700 text-white',
    badgeClass: '',
    features: [
      { text: 'Haftada 1 birebir koçluk seansı', inc: true },
      { text: 'Kişisel haftalık çalışma planı', inc: true },
      { text: 'Mesaj üzerinden anlık destek', inc: true },
      { text: 'Aylık gelişim raporu', inc: true },
      { text: 'Veli bilgilendirme görüşmesi (2 ayda 1)', inc: true },
      { text: 'Sınav kaygısı seansı', inc: false },
      { text: 'Deneme sınavı analizi', inc: false },
      { text: 'Acil destek hattı', inc: false },
    ],
  },
  {
    name: 'Yoğun Sınav Koçluğu',
    tagline: 'En çok tercih edilen',
    price: '₺2.400',
    period: '/ ay',
    color: 'border-teal-500',
    headerColor: 'bg-gradient-to-br from-teal-600 to-teal-700',
    btnClass: 'bg-teal-500 hover:bg-teal-400 text-white shadow-lg hover:shadow-teal-200',
    badgeClass: 'popular',
    features: [
      { text: 'Haftada 2 birebir koçluk seansı', inc: true },
      { text: 'Kişisel haftalık çalışma planı', inc: true },
      { text: 'WhatsApp anlık destek (7/24)', inc: true },
      { text: 'Haftalık gelişim raporu', inc: true },
      { text: 'Aylık veli bilgilendirme görüşmesi', inc: true },
      { text: 'Ayda 1 sınav kaygısı seansı', inc: true },
      { text: 'Deneme sınavı analizi (haftada 1)', inc: true },
      { text: 'Acil destek hattı', inc: false },
    ],
  },
  {
    name: 'Derece / Hedef Odaklı',
    tagline: 'En yüksek performans',
    price: '₺3.800',
    period: '/ ay',
    color: 'border-amber-400',
    headerColor: 'bg-gradient-to-br from-amber-500 to-orange-500',
    btnClass: 'bg-amber-500 hover:bg-amber-400 text-white shadow-lg hover:shadow-amber-200',
    badgeClass: '',
    features: [
      { text: 'Haftada 3 birebir koçluk seansı', inc: true },
      { text: 'Tam kişiselleştirilmiş program', inc: true },
      { text: 'WhatsApp anlık destek (7/24)', inc: true },
      { text: 'Günlük check-in & motivasyon', inc: true },
      { text: 'Haftalık veli görüşmesi', inc: true },
      { text: 'Haftada 1 sınav kaygısı seansı', inc: true },
      { text: 'Tüm deneme sınavı analizleri', inc: true },
      { text: 'Acil destek hattı (öncelikli)', inc: true },
    ],
  },
];

export default function Packages() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="paketler" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold tracking-wide mb-4">
            Paketler & Fiyatlar
          </span>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-5">
            Hedefine Uygun Paketi Seç
          </h2>
          <p className="text-slate-500 text-lg">
            Tüm paketler ilk görüşme sonrası kişiselleştirilir. Ücretsiz tanışma seansıyla başlamak için aşağıdan iletişime geç.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {packages.map(({ name, tagline, price, period, color, headerColor, btnClass, badgeClass, features }) => (
            <div
              key={name}
              className={`relative rounded-2xl border-2 ${color} overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white`}
            >
              {badgeClass === 'popular' && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-white text-teal-700 text-xs font-extrabold rounded-full shadow-md">
                  EN POPÜLER
                </div>
              )}

              <div className={`${headerColor} p-7`}>
                <h3 className={`font-extrabold text-xl mb-1 ${badgeClass === 'popular' || headerColor.includes('gradient') ? 'text-white' : 'text-slate-800'}`}>
                  {name}
                </h3>
                <p className={`text-sm mb-5 ${badgeClass === 'popular' || headerColor.includes('gradient') ? 'text-white/70' : 'text-slate-500'}`}>
                  {tagline}
                </p>
                <div className={`flex items-end gap-1 ${badgeClass === 'popular' || headerColor.includes('gradient') ? 'text-white' : 'text-slate-800'}`}>
                  <span className="text-4xl font-extrabold">{price}</span>
                  <span className={`text-sm mb-1 ${badgeClass === 'popular' || headerColor.includes('gradient') ? 'text-white/60' : 'text-slate-400'}`}>
                    {period}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <ul className="space-y-3 mb-8">
                  {features.map(({ text, inc }) => (
                    <li key={text} className="flex items-start gap-3">
                      {inc ? (
                        <CheckCircle2 size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X size={18} className="text-slate-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${inc ? 'text-slate-700' : 'text-slate-400'}`}>{text}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo('#iletisim')}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95 ${btnClass}`}
                >
                  Bu Paketi Seç
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          Fiyatlar öğrencinin ihtiyacına göre özelleştirilebilir. Ücretsiz ilk görüşmede netleştirilir.
        </p>
      </div>
    </section>
  );
}
