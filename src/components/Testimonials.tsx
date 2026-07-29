import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ayşe K.',
    role: 'YKS 2024 — Tıp Fakültesi',
    quote: "Berkay Hoca sayesinde hem TYT hem AYT'de hedef puanımı aştım. En önemlisi sınav kaygımı yönetmeyi öğrendim; sınava girmeden önce artık paniğe kapılmıyordum.",
    score: '+87 net artış',
    rating: 5,
    type: 'student',
    initials: 'AK',
    color: 'bg-teal-500',
  },
  {
    name: 'Murat T.',
    role: 'LGS 2023 — %99.4 Başarı Yüzdesi',
    quote: 'Çalışma düzenim yoktu, her şeyi son dakikaya bırakıyordum. Haftalık planım hazırlandıktan sonra o kadar verimli oldum ki kendime bile inanamadım.',
    score: '486/500 puan',
    rating: 5,
    type: 'student',
    initials: 'MT',
    color: 'bg-cyan-500',
  },
  {
    name: 'Selma A.',
    role: 'Veli — Çocuğu 2024 YKS mezunu',
    quote: "Oğlum çok kaygılıydı, okula gitmek istemez hale gelmişti. Berkay Bey sadece akademik değil duygusal olarak da destekledi. Şu an İTÜ'de okuyor.",
    score: 'Hedef okul: İTÜ',
    rating: 5,
    type: 'parent',
    initials: 'SA',
    color: 'bg-amber-500',
  },
  {
    name: 'Emre D.',
    role: 'YKS 2023 — Boğaziçi Üniversitesi',
    quote: '2 yıl boyunca çalıştım ama doğru strateji yoktu. Berkay Hoca ile 6 ayda konu analizimi bitirdim ve zayıf noktalarımı kapattım. Tek pişmanlığım daha erken başlamamak.',
    score: 'Boğaziçi - İktisat',
    rating: 5,
    type: 'student',
    initials: 'ED',
    color: 'bg-emerald-500',
  },
  {
    name: 'Fatma N.',
    role: 'Veli — Kızı Ankara Üniversitesi',
    quote: 'Aylık raporlar ve düzenli görüşmeler sayesinde kızımın sürecini anlık takip edebildim. Şeffaflık ve iletişim konusunda gerçekten üst düzey bir hizmet.',
    score: 'Hukuk Fakültesi',
    rating: 5,
    type: 'parent',
    initials: 'FN',
    color: 'bg-blue-500',
  },
  {
    name: 'Kerem B.',
    role: 'LGS 2024 — Fen Lisesi Kazandı',
    quote: 'Sınav öncesi gece uyuyamıyordum. Öğrendiğim nefes teknikleri ve zihin egzersizleri inanılmaz yardımcı oldu. Hem kaygım azaldı hem de notlarım yükseldi.',
    score: 'Hedef Fen Lisesi',
    rating: 5,
    type: 'student',
    initials: 'KB',
    color: 'bg-rose-500',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold tracking-wide mb-4">
            Başarı Hikayeleri
          </span>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-5">
            Gerçek Sonuçlar, Gerçek Öğrenciler
          </h2>
          <p className="text-slate-500 text-lg">
            Her hikaye farklı, ama ortak nokta: doğru destek, doğru zamanda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, quote, score, rating, initials, color }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={28} className="text-slate-200 mb-3" />

              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5 italic">
                "{quote}"
              </p>

              {/* Score badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-bold mb-5 w-fit">
                {score}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {initials}
                </div>
                <div>
                  <div className="text-slate-800 font-bold text-sm">{name}</div>
                  <div className="text-slate-400 text-xs">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
