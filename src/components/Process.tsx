import { MessageCircle, Map, BookOpenCheck, BarChart } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'Ücretsiz Tanışma Seansı',
    desc: 'Öğrencinin hedefleri, mevcut durumu, güçlü ve zayıf yönleri, stres düzeyi ve beklentileri hakkında derin bir keşif görüşmesi yapılır. Bu seans tamamen ücretsiz ve bağlayıcı değildir.',
    color: 'teal',
    detail: '45–60 dakika · Online veya yüz yüze',
  },
  {
    num: '02',
    icon: Map,
    title: 'Kişiselleştirilmiş Yol Haritası',
    desc: 'Görüşmeden elde edilen bilgilerle haftalık çalışma programı, konu öncelik sırası, kaygı yönetim planı ve hedef başarı takvimi hazırlanır.',
    color: 'amber',
    detail: '1–2 gün içinde teslim',
  },
  {
    num: '03',
    icon: BookOpenCheck,
    title: 'Birebir Koçluk & Zihinsel Destek',
    desc: 'Haftalık düzenli seanslarla akademik strateji uygulanır, motivasyon canlı tutulur, kaygı teknikleri pratik edilir. Her seans takip formuyla kayıt altına alınır.',
    color: 'cyan',
    detail: 'Haftada 1–3 seans · 60–90 dakika',
  },
  {
    num: '04',
    icon: BarChart,
    title: 'Sürekli Takip & Veli Bilgilendirme',
    desc: 'Aylık ilerleme raporları, deneme analiz sonuçları ve veli bilgilendirme görüşmeleriyle tüm süreç şeffaf biçimde takip edilir.',
    color: 'emerald',
    detail: 'Aylık rapor · Anlık mesaj desteği',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; num: string }> = {
  teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', num: 'bg-teal-500' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', num: 'bg-amber-500' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200', num: 'bg-cyan-500' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', num: 'bg-emerald-500' },
};

export default function Process() {
  return (
    <section id="surec" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold tracking-wide mb-4">
            Süreç Nasıl İşliyor?
          </span>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-5">
            4 Adımda Dönüşüm
          </h2>
          <p className="text-slate-500 text-lg">
            Her öğrencinin yolculuğu tanışmayla başlar, ölçülebilir başarıyla devam eder.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="relative hidden lg:block">
          {/* connector line */}
          <div className="absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal-300 via-amber-300 to-emerald-300" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map(({ num, icon: Icon, title, desc, detail, color }) => {
              const c = colorMap[color];
              return (
                <div key={num} className="flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${c.num} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-0`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-black text-slate-700">{parseInt(num)}</span>
                    </div>
                  </div>
                  <h3 className="text-slate-800 font-extrabold text-base mb-3 leading-tight">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{desc}</p>
                  <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>
                    {detail}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map(({ num, icon: Icon, title, desc, detail, color }) => {
            const c = colorMap[color];
            return (
              <div key={num} className={`flex gap-4 p-5 rounded-2xl border ${c.border} ${c.bg}`}>
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${c.num} rounded-xl flex items-center justify-center shadow-md`}>
                    <Icon size={22} className="text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-black ${c.text}`}>{num}</span>
                    <h3 className="text-slate-800 font-bold text-sm">{title}</h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mb-2">{desc}</p>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text} border ${c.border}`}>
                    {detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
