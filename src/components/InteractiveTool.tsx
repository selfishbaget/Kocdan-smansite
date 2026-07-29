import { useState } from 'react';
import { X, ClipboardList, ChevronRight, Sparkles } from 'lucide-react';

const examLevels = [
  { value: 'lgs', label: 'LGS (8. Sınıf)' },
  { value: 'tyt', label: 'TYT Hazırlık (9-11. Sınıf)' },
  { value: 'ayt', label: 'AYT / YKS (12. Sınıf)' },
  { value: 'uni', label: 'Üniversite Öğrencisi' },
];

const stressLevels = [
  { value: 1, label: 'Düşük — Genellikle sakinim' },
  { value: 2, label: 'Orta — Zaman zaman gerginlik yaşıyorum' },
  { value: 3, label: 'Yüksek — Sınavlarda panikleyebiliyorum' },
  { value: 4, label: 'Çok Yüksek — Sürekli kaygı hissediyorum' },
];

const studyHoursOptions = [
  { value: 'low', label: '0–2 saat/gün' },
  { value: 'medium', label: '3–5 saat/gün' },
  { value: 'high', label: '6–8 saat/gün' },
  { value: 'vhigh', label: '8+ saat/gün' },
];

interface Recommendation {
  package: string;
  desc: string;
  sessions: string;
  color: string;
  tip: string;
}

function getRecommendation(exam: string, stress: number, study: string): Recommendation {
  if (stress >= 3) {
    return {
      package: 'Yoğun Sınav Koçluğu + Psikolojik Destek',
      desc: 'Kaygı düzeyiniz yüksek olduğu için akademik koçluk ile birlikte sınav kaygısı yönetimi seansları kritik öneme sahip.',
      sessions: 'Haftada 2 seans (1 koçluk + 1 destek)',
      color: 'from-amber-500 to-orange-500',
      tip: 'Nefes teknikleri ve bilişsel yeniden yapılandırma egzersizleri başlangıç noktanız olacak.',
    };
  }
  if (study === 'low' || study === 'medium') {
    return {
      package: 'Temel Koçluk Paketi',
      desc: 'Çalışma saatlerini artırmak ve rutini oturtmak için yapılandırılmış haftalık plan ile başlamak idealdir.',
      sessions: 'Haftada 1 seans koçluk',
      color: 'from-teal-500 to-teal-600',
      tip: 'Küçük, ölçülebilir hedeflerle başlayıp momentum oluşturacağız.',
    };
  }
  if (exam === 'ayt') {
    return {
      package: 'Derece / Hedef Odaklı Paket',
      desc: "YKS'ye yakın dönemde yoğun sınav stratejisi, konu analizi ve motivasyon desteğiyle kapsamlı bir program.",
      sessions: 'Haftada 2–3 seans yoğun koçluk',
      color: 'from-cyan-500 to-blue-500',
      tip: 'Deneme sınavı analizleri ve konu bazlı eksik tespiti programınızın çekirdeğini oluşturacak.',
    };
  }
  return {
    package: 'Temel Koçluk Paketi',
    desc: 'Düzenli çalışma alışkanlığı ve hedef netliğiyle başarıya ulaşmak için sağlam bir temel.',
    sessions: 'Haftada 1 seans koçluk',
    color: 'from-teal-500 to-emerald-500',
    tip: 'Mevcut çalışma düzeninizi optimize ederek verimliliğinizi önemli ölçüde artırabiliriz.',
  };
}

export default function InteractiveTool() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [exam, setExam] = useState('');
  const [stress, setStress] = useState(0);
  const [study, setStudy] = useState('');
  const [result, setResult] = useState<Recommendation | null>(null);

  const reset = () => {
    setStep(1);
    setExam('');
    setStress(0);
    setStudy('');
    setResult(null);
  };

  const handleSubmit = () => {
    setResult(getRecommendation(exam, stress, study));
    setStep(4);
  };

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }), 300);
  };

  return (
    <>
      {/* Trigger section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-8">
            <Sparkles size={14} />
            Ücretsiz Analiz Aracı
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Sana Uygun Koçluk Paketini Bul
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            3 kısa soruyu yanıtla, sınav düzeyine ve stres profiline göre en uygun koçluk yaklaşımını öner.
          </p>
          <button
            onClick={() => { reset(); setOpen(true); }}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-full text-lg transition-all duration-200 shadow-xl hover:shadow-teal-500/30 active:scale-95 group"
          >
            <ClipboardList size={22} />
            Ücretsiz Analizi Başlat
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-xl">Koçluk Profil Analizi</h3>
                <p className="text-teal-200 text-sm mt-0.5">
                  {step < 4 ? `Adım ${step}/3` : 'Sonucun hazır!'}
                </p>
              </div>
              <button onClick={() => setOpen(false)} className="text-teal-200 hover:text-white transition-colors">
                <X size={22} />
              </button>
            </div>

            {/* Progress bar */}
            {step < 4 && (
              <div className="h-1.5 bg-teal-100">
                <div
                  className="h-full bg-teal-500 transition-all duration-500"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            )}

            <div className="p-6">
              {step === 1 && (
                <div>
                  <h4 className="text-slate-800 font-bold text-lg mb-1">Hangi sınavı hedefliyorsun?</h4>
                  <p className="text-slate-400 text-sm mb-5">Mevcut sınıf / hazırlık düzeyini seç.</p>
                  <div className="grid grid-cols-1 gap-3">
                    {examLevels.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setExam(opt.value); setStep(2); }}
                        className={`text-left px-5 py-3.5 rounded-xl border-2 font-medium text-sm transition-all duration-200 ${
                          exam === opt.value
                            ? 'border-teal-500 bg-teal-50 text-teal-700'
                            : 'border-slate-200 hover:border-teal-300 hover:bg-teal-50 text-slate-700'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h4 className="text-slate-800 font-bold text-lg mb-1">Sınav kaygın nasıl?</h4>
                  <p className="text-slate-400 text-sm mb-5">Sınavlar öncesi ve sırasındaki hislerini değerlendir.</p>
                  <div className="grid grid-cols-1 gap-3">
                    {stressLevels.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setStress(opt.value); setStep(3); }}
                        className={`text-left px-5 py-3.5 rounded-xl border-2 font-medium text-sm transition-all duration-200 ${
                          stress === opt.value
                            ? 'border-amber-500 bg-amber-50 text-amber-700'
                            : 'border-slate-200 hover:border-amber-300 hover:bg-amber-50 text-slate-700'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h4 className="text-slate-800 font-bold text-lg mb-1">Günlük ortalama çalışma süren?</h4>
                  <p className="text-slate-400 text-sm mb-5">Son 2 haftanın ortalamasını düşün.</p>
                  <div className="grid grid-cols-1 gap-3">
                    {studyHoursOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setStudy(opt.value); }}
                        className={`text-left px-5 py-3.5 rounded-xl border-2 font-medium text-sm transition-all duration-200 ${
                          study === opt.value
                            ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                            : 'border-slate-200 hover:border-cyan-300 hover:bg-cyan-50 text-slate-700'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  <button
                    disabled={!study}
                    onClick={handleSubmit}
                    className="mt-6 w-full py-3.5 bg-teal-500 hover:bg-teal-600 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold rounded-xl transition-all duration-200 active:scale-95"
                  >
                    Sonucu Gör
                  </button>
                </div>
              )}

              {step === 4 && result && (
                <div>
                  <div className={`bg-gradient-to-br ${result.color} rounded-xl p-5 text-white mb-5`}>
                    <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">Önerilen Paket</p>
                    <h4 className="text-xl font-extrabold mb-2">{result.package}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{result.desc}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 mb-5">
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Önerilen Seans Sıklığı</p>
                    <p className="text-slate-800 font-bold">{result.sessions}</p>
                  </div>
                  <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 mb-6">
                    <p className="text-teal-700 text-sm font-medium"><span className="font-bold">Tavsiye:</span> {result.tip}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => scrollTo('#iletisim')}
                      className="flex-1 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-all duration-200 active:scale-95 text-sm"
                    >
                      Ücretsiz Görüşme Al
                    </button>
                    <button
                      onClick={reset}
                      className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold rounded-xl transition-colors text-sm"
                    >
                      Tekrar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
