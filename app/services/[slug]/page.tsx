import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import PremiumButton from '@/components/ui/PremiumButton'
import TechBadge from '@/components/ui/TechBadge'
import { servicesData } from '@/lib/servicesData'
import { getPublishedPortfolio } from '@/lib/data'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { ArrowLeft, ExternalLink, CheckCircle2, Star, Sparkles, LayoutGrid, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = servicesData[params.slug]
  if (!service) return { title: 'Service Not Found' }
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  }
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]
  if (!service) notFound()

  // Fetch all portfolios to show related case studies dynamically
  const portfolios = await getPublishedPortfolio()

  // Match case studies to services
  let relatedPortfolios: typeof portfolios = []
  if (params.slug === 'ecommerce-development') {
    relatedPortfolios = portfolios.filter(p =>
      ['choicetime', 'stylishbubbles', 'styletrending'].includes(p.slug)
    )
  } else if (params.slug === 'educational-platforms') {
    relatedPortfolios = portfolios.filter(p => ['the-toppercentile'].includes(p.slug))
  } else if (params.slug === 'custom-business-websites' || params.slug === 'website-redesign' || params.slug === 'mobile-first-development') {
    relatedPortfolios = portfolios.filter(p => ['nalvik'].includes(p.slug))
  } else if (params.slug === 'ui-ux-design') {
    relatedPortfolios = portfolios.filter(p => p.slug.includes('portfolio'))
  }

  // Visual highlights and colors mapping
  const themes: Record<string, { gradient: string; accent: string; iconBg: string; border: string }> = {
    'ecommerce-development': {
      gradient: 'from-violet-600 via-indigo-700 to-blue-800',
      accent: 'text-violet-600',
      iconBg: 'bg-violet-50 text-violet-600 border-violet-100',
      border: 'border-violet-100',
    },
    'educational-platforms': {
      gradient: 'from-blue-600 via-indigo-700 to-violet-800',
      accent: 'text-blue-600',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
      border: 'border-blue-100',
    },
    'custom-business-websites': {
      gradient: 'from-indigo-600 via-purple-700 to-pink-800',
      accent: 'text-indigo-600',
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      border: 'border-indigo-100',
    },
    'ui-ux-design': {
      gradient: 'from-purple-600 via-pink-700 to-rose-800',
      accent: 'text-purple-600',
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
      border: 'border-purple-100',
    },
    'website-redesign': {
      gradient: 'from-emerald-600 via-teal-700 to-cyan-800',
      accent: 'text-emerald-600',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      border: 'border-emerald-100',
    },
    'mobile-first-development': {
      gradient: 'from-cyan-600 via-blue-700 to-indigo-800',
      accent: 'text-cyan-600',
      iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-100',
      border: 'border-cyan-100',
    },
  }

  const theme = themes[params.slug] || themes['ecommerce-development']

  return (
    <main className="bg-white min-h-screen text-text-primary overflow-x-hidden">
      <Navbar />

      {/* Hero Banner Section */}
      <section className={`relative pt-32 pb-24 text-white overflow-hidden bg-gradient-to-r ${theme.gradient}`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-medium transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 backdrop-blur-sm mb-4">
            <Sparkles className="w-3 h-3 text-amber-300" /> Professional Solutions
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-white/95 max-w-3xl leading-relaxed font-light">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Overview & Detail Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-3xl font-bold text-text-primary tracking-tight">
              {service.whyTitle}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {service.whyDescription}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {service.whyBullets ? (
                service.whyBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${theme.accent} shrink-0 mt-0.5`} />
                    <span className="text-text-primary font-medium text-sm">{bullet}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${theme.accent} shrink-0 mt-0.5`} />
                    <span className="text-text-primary font-medium text-sm">Conversion-focused layouts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${theme.accent} shrink-0 mt-0.5`} />
                    <span className="text-text-primary font-medium text-sm">Responsive and speed optimized</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${theme.accent} shrink-0 mt-0.5`} />
                    <span className="text-text-primary font-medium text-sm">SEO Friendly architecture</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${theme.accent} shrink-0 mt-0.5`} />
                    <span className="text-text-primary font-medium text-sm">Secure admin dashboards</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={`lg:col-span-5 p-8 rounded-premium bg-gradient-to-b from-gray-50/50 to-white border border-gray-100 shadow-soft space-y-6 relative`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-60 -z-10" />
            <h3 className="font-display text-xl font-bold text-text-primary">
              Core Benefits
            </h3>
            <div className="space-y-4">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 text-sm font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm">{b.title}</h4>
                    <p className="text-text-secondary text-xs leading-relaxed mt-1">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100`}>
              Workflow
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mt-4 mb-4 tracking-tight">
              {service.processTitle}
            </h2>
            <p className="text-text-secondary text-sm">
              We follow a strict, client-focused development roadmap to guarantee premium quality products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-premium border border-gray-100 shadow-soft hover:shadow-medium transition relative group"
              >
                <div className={`w-10 h-10 rounded-xl ${theme.iconBg} border flex items-center justify-center font-display font-bold text-lg mb-5 group-hover:scale-110 transition duration-300`}>
                  {idx + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100`}>
            Capability
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mt-4 tracking-tight">
            {service.featuresTitle}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-premium border border-gray-100 bg-white shadow-soft relative overflow-hidden group hover:border-indigo-100 transition duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-bl-full pointer-events-none" />
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-xs leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Related Projects Section */}
      {relatedPortfolios.length > 0 && (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                  Case Studies
                </span>
                <h2 className="font-display text-3xl font-bold text-text-primary mt-4 tracking-tight">
                  Featured Projects
                </h2>
              </div>
              <Link
                href="/#portfolio"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent-violet hover:text-accent-blue transition mt-4 sm:mt-0"
              >
                View full portfolio <LayoutGrid className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPortfolios.map((proj) => (
                <article
                  key={proj.slug}
                  className="group relative rounded-premium overflow-hidden bg-white border border-gray-100 shadow-soft hover:shadow-medium transition duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-gradient-to-br from-violet-50 to-blue-50 shrink-0">
                    {proj.thumbnail ? (
                      <Image
                        src={proj.thumbnail}
                        alt={proj.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="font-display text-3xl font-bold text-indigo-600">
                          {proj.name}
                        </p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
                      {proj.liveUrl && <span className="text-white text-xs font-medium">{proj.liveUrl}</span>}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100/30 px-2.5 py-0.5 rounded-full mb-3 self-start">
                      {proj.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-text-primary mb-2">
                      {proj.name}
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed mb-5 flex-grow">
                      {proj.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    {proj.technologies && proj.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {proj.technologies.slice(0, 3).map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>
                    )}

                    <div className="flex gap-4 mt-auto pt-2 border-t border-gray-50">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-violet hover:text-accent-blue transition"
                        >
                          Live Link <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <Link
                        href={`/portfolio/${proj.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-text-secondary hover:text-text-primary transition"
                      >
                        Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries We Serve Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-indigo-50/60 via-purple-50/20 to-blue-50/40 p-8 sm:p-12 rounded-premium border border-indigo-100/40 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl opacity-80 pointer-events-none" />
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-indigo-100 text-indigo-600">
                Target Market
              </span>
              <h2 className="font-display text-3xl font-bold text-text-primary tracking-tight">
                {service.industriesTitle}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                We craft custom digital strategies tailored to the specific regulatory, operational, and customer requirements of your industry.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-wrap gap-2.5">
              {service.industries.map((ind) => (
                <div
                  key={ind}
                  className="px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-soft text-sm font-semibold text-text-primary flex items-center gap-2 hover:scale-105 transition cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
              FAQs
            </span>
            <h2 className="font-display text-3xl font-bold text-text-primary mt-4 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 text-center bg-gradient-to-br from-violet-50 via-indigo-50/50 to-blue-50 border-t border-violet-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            {service.getStartedTitle}
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto leading-relaxed text-sm">
            {service.getStartedDesc}
          </p>
          <div className="pt-4">
            <PremiumButton href="/#contact" size="lg">
              Book a Free Call
            </PremiumButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
