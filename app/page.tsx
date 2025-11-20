import HeroSection from '@/components/sections/HeroSection';
import DataSection from '@/components/sections/DataSection';
import ActivitySection from '@/components/sections/ActivitySection';
import SkiSection from '@/components/sections/SkiSection';
import EmailSection from '@/components/sections/EmailSection';

export default function Home() {
  return (
    <main className="bg-black relative">
      {/* Fixed header with app name */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 md:py-8">
        <div className="max-w-7xl mx-auto pl-16 md:pl-20 lg:pl-24 pr-8">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
            Beebsi
          </h1>
        </div>
      </header>

      {/* Each section handles its own z-index and positioning */}
      <HeroSection />
      <DataSection />
      <ActivitySection />
      <SkiSection />
      <EmailSection />
    </main>
  );
}