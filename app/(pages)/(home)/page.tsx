import { HeroSection } from "./_components/hero-section"
import { CareerSection } from "./_components/career-section"
import { OnTrackSection } from "./_components/on-track"
import { CalendarSection } from "./_components/calendar-section"
import { HelmetsSection } from "./_components/helmets-section"

const HomePage = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <div className="relative -mt-1 z-10">
        <CareerSection />
        <OnTrackSection />
        <CalendarSection />
        <HelmetsSection />
      </div>
    </main>
  )
}

export default HomePage