import { ArrowRight, BookOpen, Brain, TrendingUp, Star, Clock, CheckCircle } from 'lucide-react';

const stats = [
  { value: '150+', label: 'Başarılı Öğrenci' },
  { value: '%94', label: 'Hedef Üniversite Oranı' },
  { value: '5 Yıl', label: 'Deneyim' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f2942 0%, #0d4a5a 40%, #0a6e6e 100%)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-600/5 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-8">
              <Star size={14} className="fill-teal-400 text-teal-400" />
              Akademik Koçluk + Psikolojik Destek
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Sadece Sınava Değil,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400">
                Geleceğe
              </span>{' '}
              Hazırlanın
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
              Akademik strateji, kişiselleştirilmiş çalışma planı ve sınav kaygısı yönetimiyle öğrencilerin hem notlarını hem de özgüvenlerini artırıyorum.{' '}
              <span className="text-teal-300 font-semibold">%80 koçluk, %20 psikolojik destek</span> ile
              bütüncül bir gelişim yolculuğu.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <button
                onClick={() => scrollTo('#iletisim')}
                className="flex items-center gap-2 px-7 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-teal-500/30 hover:shadow-xl active:scale-95 group"
              >
                Randevu Al
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#surec')}
                className="flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all duration-200 backdrop-blur-sm active:scale-95"
              >
                Sistemi İncele
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-extrabold text-white">{s.value}</div>
                  <div className="text-sm text-slate-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — dashboard card */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-slate-300 text-xs uppercase tracking-wider">Haftalık Koçluk Paneli</p>
                    <h3 className="text-white font-bold text-lg">Ahmet K. — 12. Sınıf YKS</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-teal-500/30 border border-teal-400/40 flex items-center justify-center">
                    <TrendingUp size={18} className="text-teal-300" />
                  </div>
                </div>

                {/* Progress bars */}
                {[
                  { label: 'Matematik', pct: 82, color: 'bg-teal-400' },
                  { label: 'Türkçe', pct: 91, color: 'bg-cyan-400' },
                  { label: 'Fen Bilimleri', pct: 74, color: 'bg-amber-400' },
                ].map((item) => (
                  <div key={item.label} className="mb-4">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="text-white font-semibold">%{item.pct}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}

                {/* Tasks */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">Bu Haftanın Görevleri</p>
                  {[
                    { text: 'Türev konusu tekrarı tamamlandı', done: true },
                    { text: 'Deneme sınavı analizi', done: true },
                    { text: 'Kaygı günlüğü tutma egzersizi', done: false },
                  ].map((task) => (
                    <div key={task.text} className="flex items-center gap-2.5 mb-2.5">
                      <CheckCircle
                        size={16}
                        className={task.done ? 'text-teal-400' : 'text-slate-600'}
                      />
                      <span className={`text-sm ${task.done ? 'text-slate-300' : 'text-slate-500'}`}>
                        {task.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom chips */}
                <div className="flex gap-2 mt-5 flex-wrap">
                  {[
                    { icon: BookOpen, label: 'YKS Hazırlık', color: 'text-teal-300 bg-teal-500/20' },
                    { icon: Brain, label: 'Kaygı Takibi', color: 'text-amber-300 bg-amber-500/20' },
                    { icon: Clock, label: '12 Seans', color: 'text-cyan-300 bg-cyan-500/20' },
                  ].map(({ icon: Icon, label, color }) => (
                    <span key={label} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${color}`}>
                      <Icon size={12} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 900 0 720 20C540 40 240 80 0 40L0 80Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
