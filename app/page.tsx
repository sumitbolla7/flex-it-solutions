import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import TrustedBy from '@/components/sections/TrustedBy'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import StatsCounter from '@/components/sections/StatsCounter'
import IndustriesSection from '@/components/sections/IndustriesSection'
import TechnologiesSection from '@/components/sections/TechnologiesSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import PricingSection from '@/components/sections/PricingSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="relative bg-[#08060e] min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <StatsCounter />
      <IndustriesSection />
      <TechnologiesSection />
      <PortfolioSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
