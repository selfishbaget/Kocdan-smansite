import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { supabase, type ContactSubmission } from '@/lib/supabase';

const gradeOptions = [
  '8. Sınıf (LGS)',
  '9. Sınıf',
  '10. Sınıf',
  '11. Sınıf (TYT Hazırlık)',
  '12. Sınıf (YKS)',
  'Üniversite Öğrencisi',
  'Mezun / Tekrar Hazırlık',
  'Veliyim',
];

const goalOptions = [
  'Akademik koçluk ve çalışma planı',
  'Sınav kaygısı yönetimi',
  'YKS / AYT strateji',
  'LGS hazırlık',
  'Zaman yönetimi ve motivasyon',
  'Veli danışmanlığı',
  'Genel bilgi almak istiyorum',
];

const initialForm: ContactSubmission = {
  name: '',
  email: '',
  phone: '',
  grade_level: '',
  primary_goal: '',
  preferred_date: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<ContactSubmission>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const set = (field: keyof ContactSubmission, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { error: dbError } = await supabase.from('contact_submissions').insert([form]);
      if (dbError) throw dbError;
      setSuccess(true);
      setForm(initialForm);
    } catch {
      setError('Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan iletişime geçin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="iletisim" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold tracking-wide mb-4">
            İletişim & Randevu
          </span>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-5">
            Ücretsiz Ön Görüşme Al
          </h2>
          <p className="text-slate-500 text-lg">
            Formu doldur, 24 saat içinde seni arayalım. İlk görüşme tamamen ücretsiz ve bağlayıcı değil.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-slate-800 font-extrabold text-xl mb-6">İletişim Bilgileri</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'Telefon', value: '+90 (553) 777 04 17', href: 'tel:+905537770417' },
                  { icon: Mail, label: 'E-Posta', value: 'berkay_bulut_17@hotmail.com', href: 'mailto:berkay_bulut_17@hotmail.com' },
                  { icon: MapPin, label: 'Konum', value: 'Balıkesir & Online Görüşme', href: '#' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:bg-teal-50 transition-all duration-200 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 transition-colors">
                      <Icon size={20} className="text-teal-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{label}</div>
                      <div className="text-slate-700 font-semibold text-sm">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Profile card */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-md">
              <div className="h-28 bg-gradient-to-br from-teal-600 to-teal-700" />
              <div className="px-6 pb-6 -mt-12">
                <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-lg mb-4">
                  <img
                    src="/WhatsApp_Image_2026-07-29_at_15.03.40.png"
                    alt="Berkay Bulut"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-slate-800 font-extrabold text-lg">Psk.Dan. Berkay Bulut</h4>
                <p className="text-teal-600 text-sm font-medium">Öğrenci Koçu & Psikolojik Danışman</p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  5+ yıl deneyimle öğrencilerin hedeflerine ulaşmaları için yanlarındayım.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-teal-50 rounded-2xl border-2 border-teal-200">
                <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-teal-500" />
                </div>
                <h3 className="text-slate-800 font-extrabold text-2xl mb-3">Mesajın Alındı!</h3>
                <p className="text-slate-500 text-lg mb-6 max-w-sm">
                  En kısa sürede, genellikle 24 saat içinde seninle iletişime geçeceğim.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition-colors"
                >
                  Yeni Form Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2">Ad Soyad *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => set('name', e.target.value)}
                      placeholder="Adınız ve soyadınız"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2">E-Posta *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      placeholder="ornek@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2">Telefon</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                      placeholder="+90 5xx xxx xx xx"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2">Tercih Edilen Tarih</label>
                    <input
                      type="date"
                      value={form.preferred_date}
                      onChange={(e) => set('preferred_date', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-2">Sınıf / Düzey</label>
                  <select
                    value={form.grade_level}
                    onChange={(e) => set('grade_level', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all bg-white"
                  >
                    <option value="">Seçiniz...</option>
                    {gradeOptions.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-2">Öncelikli Hedef</label>
                  <select
                    value={form.primary_goal}
                    onChange={(e) => set('primary_goal', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all bg-white"
                  >
                    <option value="">Seçiniz...</option>
                    {goalOptions.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-2">Mesajınız</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => set('message', e.target.value)}
                    placeholder="Mevcut durumunuz, beklentileriniz veya sormak istedikleriniz..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all resize-none"
                  />
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 py-4 bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white font-bold rounded-xl transition-all duration-200 active:scale-95 shadow-md hover:shadow-teal-200 text-sm"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                  {loading ? 'Gönderiliyor...' : 'Ücretsiz Görüşme Talep Et'}
                </button>

                <p className="text-slate-400 text-xs text-center">
                  Bilgileriniz yalnızca iletişim amacıyla kullanılır ve üçüncü taraflarla paylaşılmaz.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
