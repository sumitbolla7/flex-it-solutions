# FLEX IT SOLUTIONS — Premium Web Design Agency Website

A fully responsive, production-ready Next.js 14 agency website built with Tailwind CSS and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth animations
- **Lucide React** — icons
- **TypeScript**

## Features

- 18 fully built sections
- Dark luxury futuristic design
- Purple/orange/pink glow effects
- Glassmorphism cards
- Animated stats counter
- Portfolio with live site links
- Fully functional FAQ accordion
- Contact form with validation
- Newsletter subscription form
- Mobile-responsive navigation with hamburger menu
- Smooth scroll navigation
- CSS marquee for logo strip
- Floating hero orb with animated rings
- Case study bar charts animated on scroll
- Process timeline
- Pricing cards (highlighted middle card)
- Video testimonials carousel

## Sections

1. Navbar (sticky, mobile-responsive)
2. Hero Section
3. Trusted By / Logo Marquee
4. Services Section
5. About Us
6. Why Choose Us
7. Stats Counter (animated count-up)
8. Industries We Work With
9. Technologies We Use
10. Portfolio Showcase (with live links)
11. Case Studies
12. Video Testimonials Carousel
13. Process / Workflow Timeline
14. Pricing Section
15. FAQ Accordion
16. Contact Section (form + map + details)
17. Newsletter Section
18. Premium Footer

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment (Netlify)

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Install the Netlify Next.js plugin (auto-detected)

Or use Vercel for zero-config Next.js deployment:
```bash
npx vercel
```

## Company Details

- **Company:** FLEX IT SOLUTIONS
- **Location:** India
- **Phone:** +91 9527352323
- **Email:** sumitdigitalpartner@gmail.com

## Portfolio Sites

- [ChoiceTime](https://www.choicetime.in)
- [Nalvik](https://nalvik.com)
- [The Top Percentile](https://thetoppercentile.co.in)

## Customization

All content is hardcoded in each component for simplicity. To update:
- Company info: `ContactSection.tsx`, `Footer.tsx`
- Services: `ServicesSection.tsx`
- Portfolio: `PortfolioSection.tsx`
- Testimonials: `TestimonialsSection.tsx`
- FAQ: `FAQSection.tsx`
- Pricing: `PricingSection.tsx`
- Colors: `tailwind.config.js` + `globals.css`
