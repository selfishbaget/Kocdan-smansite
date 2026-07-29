import { Target, Brain, Users, Zap, BarChart2, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Hedef Odaklı Strateji',
    desc: 'Her öğrenciye özgü YKS/LGS/Üniversite hedefleri doğrultusunda kişiselleştirilmiş yol haritası hazırlanır.',
    color: 'from-teal-500 to-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: Brain,
    title: 'Zihinsel Güç & Kaygı Kontrolü',
    desc: 'Sınav kaygısını yönetemeyen öğrenci, bildiği soruları bile çözemez. Zihinsel denge, akademik başarının temelidir.',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: BarChart2,
    title: 'Veri Destekli Takip',
    desc: 'Haftalık deneme analizleri, konu bazlı başarı takibi ve gelişim raporlarıyla hiçbir eksik gözden kaçmaz.',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: Zap,
    title: 'Alışkanlık & Motivasyon Sistemi',
    desc: 'Düzenli çalışma alışkanlıkları oluşturmak, uzun soluklu başarının tek yoludur. Motivasyon sistematik olarak inşa edilir.',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: Users,
    title: 'Veli Dahil Süreç',
    desc: 'Aile ile düzenli iletişim; ilerlemeler, hedefler ve desteklenme noktaları şeffaf biçimde paylaşılır.',
    color: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Heart,
    title: 'Empati Temelli Yaklaşım',
    desc: 'Her öğrenci farklı bir bireydir. Yargılamadan, sabırla ve gerçek bir anlayışla destek verilir.',
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold tracking-wide mb-4">
            Neden Bu Yaklaşım?
          </span>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-5">
            Sadece Ders Çalışmak Yetmiyor
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Araştırmalar gösteriyor ki akademik başarı için yalnızca çalışma saati değil,{' '}
            <strong className="text-slate-700">doğru strateji + zihinsel denge</strong> birlikte gereklidir.
          </p>
        </div>

        {/* 80/20 Balance visual */}
        <div className="flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-lg mb-16 max-w-3xl mx-auto">
          <div className="flex-[4] bg-gradient-to-br from-teal-600 to-teal-700 p-8 text-white">
            <div className="text-5xl font-extrabold mb-2">%80</div>
            <div className="text-xl font-bold mb-3">Akademik Koçluk</div>
            <ul className="space-y-1.5 text-teal-100 text-sm">
              <li>Çalışma planı & rutin</li>
              <li>Sınav stratejisi (YKS / LGS)</li>
              <li>Zaman yönetimi</li>
              <li>Haftalık hedef takibi</li>
            </ul>
          </div>
          <div className="flex-[1] bg-gradient-to-br from-amber-500 to-orange-500 p-8 text-white">
            <div className="text-5xl font-extrabold mb-2">%20</div>
            <div className="text-xl font-bold mb-3">Psikolojik Destek</div>
            <ul className="space-y-1.5 text-amber-100 text-sm">
              <li>Kaygı yönetimi</li>
              <li>Stres teknikleri</li>
              <li>Motivasyon</li>
              <li>Duygusal denge</li>
            </ul>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, desc, color, bg, border }) => (
            <div
              key={title}
              className={`group ${bg} border ${border} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-slate-800 font-bold text-lg mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
