import { Award, BookOpen, GraduationCap, Users } from 'lucide-react';

const credentials = [
  { icon: GraduationCap, text: 'Psikolojik Danışmanlık & Rehberlik Lisansı' },
  { icon: BookOpen, text: 'Bilişsel Davranışçı Terapi Eğitimi' },
  { icon: Users, text: '150+ öğrenciye birebir koçluk deneyimi' },
  { icon: Award, text: 'YKS / LGS başarı odaklı sertifikalı koçluk' },
];

export default function About() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hakkimda" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl" />
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/WhatsApp_Image_2026-07-29_at_15.03.40.png"
                  alt="Psk.Dan. Berkay Bulut"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                <div className="text-3xl font-extrabold text-teal-600">5+</div>
                <div className="text-xs text-slate-500 font-semibold">Yıl Deneyim</div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold tracking-wide mb-6">
              Hakkımda
            </span>

            <h2 className="text-4xl font-extrabold text-slate-800 mb-2">
              Psk.Dan. Berkay Bulut
            </h2>
            <p className="text-teal-600 font-semibold text-lg mb-6">
              Öğrenci Koçu & Psikolojik Danışman
            </p>

            <div className="space-y-4 text-slate-500 leading-relaxed mb-8">
              <p>
                Öğrencilerin sadece notlarını değil, kendilerini de keşfetmelerine yardımcı oluyorum. 
                Akademik koçluk ve psikolojik danışmanlık alanındaki 5 yıllık deneyimimle, 
                yüzlerce öğrencinin hedef üniversitelerine ve hayallerine ulaşmasına destek oldum.
              </p>
              <p>
                <strong className="text-slate-700">Bütüncül yaklaşımım</strong> şuna dayanır: başarılı bir öğrenci 
                sadece çok çalışan öğrenci değil, doğru stratejiye sahip, kaygısını yöneten ve motivasyonunu 
                koruyan öğrencidir. Bu yüzden koçluk seanslarımın %80'i akademik strateji, %20'si zihinsel 
                destek üzerine kurulu.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {credentials.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-teal-600" />
                  </div>
                  <span className="text-slate-600 text-sm leading-tight">{text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo('#iletisim')}
              className="px-7 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full transition-all duration-200 shadow-md hover:shadow-teal-200 active:scale-95"
            >
              Ücretsiz Tanışma Randevusu Al
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
