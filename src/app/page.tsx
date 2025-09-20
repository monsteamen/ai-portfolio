import HeroSection from '@/components/HeroSection'
import ProcessSection from '@/components/ProcessSection'
import PortfolioSection from '@/components/PortfolioSection'
import PricingSection from '@/components/PricingSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <ContactSection />
    </main>
  )
}
