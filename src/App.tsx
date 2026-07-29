import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CoreValues from '@/components/CoreValues';
import Services from '@/components/Services';
import InteractiveTool from '@/components/InteractiveTool';
import Process from '@/components/Process';
import Packages from '@/components/Packages';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <CoreValues />
        <Services />
        <InteractiveTool />
        <Process />
        <About />
        <Packages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
