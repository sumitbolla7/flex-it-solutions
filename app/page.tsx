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
import BlogSection from '@/components/sections/BlogSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import Footer from '@/components/sections/Footer'
import SectionDivider from '@/components/ui/SectionDivider'
import { getPublishedBlogs, getPublishedPortfolio, getPublishedTestimonials } from '@/lib/data'

export default async function Home() {
  const [blogs, portfolio, testimonialData] = await Promise.all([
    getPublishedBlogs(),
    getPublishedPortfolio(),
    getPublishedTestimonials(),
  ])

  return (
    <main className="relative bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <AboutSection />
      <WhyChooseUs />
      <StatsCounter />
      <SectionDivider />
      <IndustriesSection />
      <TechnologiesSection />
      <SectionDivider />
      <PortfolioSection projects={portfolio} />
      <CaseStudiesSection />
      <SectionDivider />
      <TestimonialsSection
        testimonials={testimonialData.testimonials}
        title={testimonialData.title}
        subtitle={testimonialData.subtitle}
      />
      <ProcessSection />
      <SectionDivider />
      <PricingSection />
      <BlogSection blogs={blogs} />
      <SectionDivider />
      <FAQSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
