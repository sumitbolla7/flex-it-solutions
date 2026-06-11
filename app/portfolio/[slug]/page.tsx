import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import PremiumButton from '@/components/ui/PremiumButton'
import { getPortfolioBySlug } from '@/lib/actions/portfolio'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = await getPortfolioBySlug(params.slug)
  if (!project || !project.published) return { title: 'Not Found' }
  return { title: `${project.name} | Portfolio | FLEX IT SOLUTIONS`, description: project.shortDescription }
}

export default async function PortfolioCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = await getPortfolioBySlug(params.slug)
  if (!project || !project.published) notFound()

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <div className="relative h-[40vh] min-h-[320px] mt-16">
        {project.bannerImage || project.thumbnail ? (
          <Image
            src={project.bannerImage || project.thumbnail!}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-blue-50" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-5xl mx-auto">
          <span className="text-white/80 text-sm font-medium">{project.category}</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">{project.name}</h1>
          {project.clientName && <p className="text-white/70 mt-2">Client: {project.clientName}</p>}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm text-accent-violet mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </Link>

        <p className="text-xl text-text-secondary leading-relaxed mb-8">{project.shortDescription}</p>

        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-violet-50 text-accent-violet text-sm font-medium border border-violet-100">
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.caseStudy && (
          <div
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: project.caseStudy }}
          />
        )}

        {project.gallery.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {project.gallery.map((img, i) => (
              <div key={i} className="relative aspect-video rounded-2xl overflow-hidden">
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        )}

        <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 p-8 sm:p-12 text-center border border-violet-100">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-4">Ready for a project like this?</h2>
          <p className="text-text-secondary mb-6 max-w-md mx-auto">Let&apos;s build something amazing for your business.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <PremiumButton href="/#contact">Book a Free Call</PremiumButton>
            {project.liveUrl && (
              <PremiumButton variant="secondary" href={project.liveUrl}>
                View Live Site <ExternalLink className="w-4 h-4" />
              </PremiumButton>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
