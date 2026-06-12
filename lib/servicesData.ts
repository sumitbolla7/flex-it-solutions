export interface ServiceDetail {
  slug: string
  title: string
  subtitle: string
  heroDescription: string
  whyTitle: string
  whyDescription: string
  whyBullets?: string[]
  processTitle: string
  processSteps: { title: string; desc: string }[]
  featuresTitle: string
  features: { title: string; desc: string }[]
  benefitsTitle: string
  benefits: { title: string; desc: string }[]
  industriesTitle: string
  industries: string[]
  whyChooseUsTitle: string
  whyChooseUsDesc: string
  whyChooseUsPoints: string[]
  futureProofTitle: string
  futureProofDesc: string
  faqs: { question: string; answer: string }[]
  getStartedTitle: string
  getStartedDesc: string
  seoTitle: string
  seoDescription: string
}

export const servicesData: Record<string, ServiceDetail> = {
  'ecommerce-development': {
    slug: 'ecommerce-development',
    title: 'E-commerce Development Services',
    subtitle: 'Professional E-commerce Website Development Services for Growing Businesses',
    heroDescription: 'Transform Your Business with a High-Converting Online Store. We specialize in building custom e-commerce websites that combine attractive design, seamless functionality, and powerful business tools to help companies succeed online.',
    whyTitle: 'Why E-commerce Development Matters',
    whyDescription: 'Consumers expect a fast, secure, and user-friendly shopping experience. A poorly designed website can lead to lost sales, abandoned carts, and reduced customer trust. Investing in professional e-commerce development ensures your business provides an exceptional shopping experience that encourages customers to browse products, complete purchases, and return for future orders. A modern e-commerce platform helps businesses streamline operations, improve customer engagement, and increase profitability while reducing manual work.',
    processTitle: 'Our E-commerce Development Approach',
    processSteps: [
      {
        title: 'Business Discovery and Planning',
        desc: 'Every successful online store begins with a solid strategy. We analyze your business goals, products, competitors, and target audience to create a customized development roadmap. This stage helps us identify the features, integrations, and user experience elements required to achieve your objectives and maximize return on investment.',
      },
      {
        title: 'Custom Design and User Experience',
        desc: 'The design of an e-commerce website directly impacts customer behavior. Our design team creates visually appealing layouts that are easy to navigate and optimized for conversions. We focus on intuitive navigation, clean product presentation, mobile responsiveness, fast loading pages, trust-building elements, and simplified checkout flows.',
      },
      {
        title: 'Scalable Development',
        desc: 'Our developers build powerful e-commerce platforms using modern technologies and industry best practices. Every website is developed with scalability in mind, allowing businesses to expand product catalogs, integrate new tools, and accommodate growing traffic.',
      },
      {
        title: 'Quality Assurance and Testing',
        desc: 'Before launch, we perform extensive testing to ensure every feature functions flawlessly across different devices, browsers, and operating systems. We test product pages, checkout systems, payment gateways, mobile responsiveness, security protocols, and website speed.',
      },
    ],
    featuresTitle: 'Features Included in Our E-commerce Solutions',
    features: [
      {
        title: 'Product Management System',
        desc: 'Manage thousands of products efficiently through an easy-to-use dashboard. Update prices, descriptions, categories, inventory levels, and images without technical expertise.',
      },
      {
        title: 'Secure Payment Gateway Integration',
        desc: 'Security is critical for online businesses. We integrate trusted payment gateways that support multiple payment methods, including Credit Cards, Debit Cards, UPI Payments, Net Banking, Digital Wallets, and International Payments.',
      },
      {
        title: 'Inventory Management',
        desc: 'Real-time inventory tracking helps businesses maintain accurate stock levels and avoid overselling products.',
      },
      {
        title: 'Order Management System',
        desc: 'Track customer orders from placement to delivery through a centralized management platform.',
      },
      {
        title: 'Customer Account Dashboard',
        desc: 'Allow customers to create accounts, view order history, track shipments, manage addresses, and save payment preferences.',
      },
      {
        title: 'Mobile Optimization',
        desc: 'More than half of online purchases are made through mobile devices. Our mobile-first development approach ensures your store performs flawlessly on smartphones and tablets.',
      },
      {
        title: 'Search Engine Optimization',
        desc: 'SEO is integrated into every stage of development, helping your website rank higher in search results and attract organic traffic.',
      },
    ],
    benefitsTitle: 'Benefits of Professional E-commerce Development',
    benefits: [
      {
        title: 'Increased Revenue Opportunities',
        desc: 'An optimized online store can significantly increase sales by improving user experience and reducing friction during the purchasing process.',
      },
      {
        title: 'Global Reach',
        desc: 'Sell products beyond your local market and reach customers worldwide through a professionally developed e-commerce platform.',
      },
      {
        title: 'Better Customer Experience',
        desc: 'Fast loading speeds, intuitive navigation, and secure checkout processes improve customer satisfaction and encourage repeat purchases.',
      },
      {
        title: 'Operational Efficiency',
        desc: 'Automated inventory management, order processing, and reporting tools reduce manual workload and improve business efficiency.',
      },
      {
        title: 'Enhanced Security',
        desc: 'We implement advanced security measures to protect customer data and prevent unauthorized access.',
      },
    ],
    industriesTitle: 'Industries We Serve',
    industries: [
      'Fashion and Apparel Stores',
      'Electronics Retailers',
      'Beauty and Cosmetic Brands',
      'Furniture Businesses',
      'Healthcare Product Companies',
      'Educational Product Sellers',
      'Grocery and Food Stores',
      'Automotive Businesses',
      'Sports Equipment Retailers',
      'Wholesale Distributors',
    ],
    whyChooseUsTitle: 'Why Choose FLEX IT Solutions',
    whyChooseUsDesc: 'FLEX IT Solutions combines creativity, technical expertise, and business strategy to create online stores that generate measurable results. We understand that every business has unique requirements, which is why we develop customized solutions tailored to your goals.',
    whyChooseUsPoints: [
      'Fast and reliable websites',
      'SEO optimized structure',
      'Mobile responsive layouts',
      'Secure and scalable code',
      'Conversion-focused user journeys',
      'Easy to manage dashboard systems',
    ],
    futureProofTitle: 'Future-Proof Your Online Business',
    futureProofDesc: 'Technology and customer expectations continue to evolve. Our e-commerce solutions are built to adapt to future growth and changing market demands. Whether you plan to expand your product catalog, integrate new payment systems, or launch marketing campaigns, your website will be ready to support your growth.',
    faqs: [
      {
        question: 'How long does it take to develop an e-commerce website?',
        answer: 'Most projects take between 4 to 12 weeks depending on complexity, features, and customization requirements.',
      },
      {
        question: 'Can you integrate payment gateways?',
        answer: 'Yes. We support multiple payment gateway providers and custom integrations.',
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely. Every e-commerce website we develop is fully responsive and optimized for mobile users.',
      },
      {
        question: 'Can I manage products myself?',
        answer: 'Yes. We provide an easy-to-use admin panel that allows you to manage products, orders, customers, and content.',
      },
      {
        question: 'Do you provide ongoing support?',
        answer: 'Yes. We offer maintenance, updates, security monitoring, and technical support after launch.',
      },
    ],
    getStartedTitle: 'Get Started Today',
    getStartedDesc: 'A professionally developed e-commerce website can become one of your business\'s most valuable assets. If you are ready to increase sales, improve customer experience, and build a scalable online business, FLEX IT Solutions is here to help. Contact our team today to discuss your e-commerce project and discover how we can transform your vision into a successful online store.',
    seoTitle: 'E-commerce Website Development Services | Custom Online Store Development | FLEX IT Solutions',
    seoDescription: 'Professional e-commerce website development services by FLEX IT Solutions. Build secure, scalable, SEO-friendly online stores with payment gateway integration, inventory management, and mobile optimization.',
  },
  'educational-platforms': {
    slug: 'educational-platforms',
    title: 'Educational Platform Development Services',
    subtitle: 'Professional Educational Platform Development Solutions for Schools, Colleges, Coaching Institutes, and Online Learning Businesses',
    heroDescription: 'Build a Scalable Digital Learning Ecosystem That Drives Student Success. We specialize in developing custom educational platforms that simplify learning management, streamline administrative processes, and create engaging learning experiences.',
    whyTitle: 'Why Educational Platforms Are Essential in Modern Education',
    whyDescription: 'Traditional classroom learning is no longer the only method of education. Students demand flexibility, accessibility, and personalized learning experiences. Educational institutions that embrace digital platforms gain a significant advantage by expanding their reach, improving communication, and creating new revenue opportunities. A professionally developed educational platform enables institutions to deliver courses online, manage students efficiently, conduct assessments digitally, track learning progress, automate administrative tasks, and generate insights.',
    processTitle: 'Our Educational Platform Development Process',
    processSteps: [
      {
        title: 'Understanding Your Educational Requirements',
        desc: 'Every educational organization operates differently. We begin by understanding your goals, teaching methodology, target audience, administrative requirements, and growth plans. We analyze enrollment processes, course delivery, assessments, instructor requirements, and payment models.',
      },
      {
        title: 'Strategic Planning and Architecture',
        desc: 'Once requirements are gathered, we design a scalable platform architecture capable of supporting future growth. Whether you\'re serving hundreds or thousands of students, the platform remains fast, secure, and reliable.',
      },
      {
        title: 'User Experience Design',
        desc: 'Educational technology should be easy to use for students, instructors, administrators, and parents. We create intuitive interfaces that make it simple to access courses, submit assignments, track progress, manage enrollments, conduct assessments, and communicate.',
      },
      {
        title: 'Development and Integration',
        desc: 'Using modern technologies, we build secure and scalable educational platforms equipped with advanced functionality and seamless integrations.',
      },
      {
        title: 'Testing and Deployment',
        desc: 'Before launch, we perform extensive testing to ensure flawless performance across desktops, tablets, and mobile devices. After deployment, we provide continuous support and maintenance.',
      },
    ],
    featuresTitle: 'Complete E-Learning & Administration Features',
    features: [
      {
        title: 'Learning Management System (LMS)',
        desc: 'Create, manage, and deliver educational content efficiently. Key features include course creation, video lesson delivery, assignments, quiz systems, progress tracking, and certificate generation.',
      },
      {
        title: 'Online Course eCommerce',
        desc: 'Launch and scale your course-selling academy. Features include course catalogs, subscription memberships, subscription plans, payment gateways, community forums, and marketing integrations.',
      },
      {
        title: 'Student Management & Records',
        desc: 'Centralize admission management, fee collection, attendance records, academic report cards, parent portals, and automated notification alerts.',
      },
      {
        title: 'Online Examination & Assessments',
        desc: 'Conduct secure digital exams with support for MCQs, subjective answers, automated grading, timers, randomized question banks, and proctoring controls.',
      },
      {
        title: 'Educational Portal Dashboards',
        desc: 'Centralized hubs with dedicated roles for students, teachers, administrators, and parents to interact seamlessly with schedules, grades, and calendar announcements.',
      },
    ],
    benefitsTitle: 'Benefits of Educational Platform Development',
    benefits: [
      {
        title: 'Improved Learning Outcomes',
        desc: 'Interactive and accessible learning experiences help students retain information more effectively and achieve better results.',
      },
      {
        title: 'Reduced Administrative Workload',
        desc: 'Automation streamlines repetitive tasks such as attendance, fees, grading, and reporting, allowing staff to focus on education.',
      },
      {
        title: 'Greater Accessibility',
        desc: 'Students can access educational content from any location and on any device, increasing enrollment opportunities.',
      },
      {
        title: 'Scalable Growth',
        desc: 'Educational platforms allow organizations to serve more students without proportionally increasing operational costs.',
      },
      {
        title: 'Better Data Management',
        desc: 'Centralized systems improve record keeping, reporting accuracy, data security, and long-term decision-making.',
      },
    ],
    industriesTitle: 'Industries We Serve',
    industries: [
      'Schools & Academies',
      'Colleges & Universities',
      'Coaching & Test Prep Institutes',
      'Corporate Training Departments',
      'Professional Certification Providers',
      'EdTech Startups',
      'Skill Development Centers',
      'Language Training Institutes',
      'Government Education Programs',
    ],
    whyChooseUsTitle: 'Why Choose FLEX IT Solutions',
    whyChooseUsDesc: 'At FLEX IT Solutions, we understand both technology and education. We build platforms that not only function efficiently but also enhance the overall learning experience for students and teachers alike.',
    whyChooseUsPoints: [
      'User-friendly design for all ages',
      'Scalable & secure cloud architecture',
      'Mobile-responsive layouts',
      'Compliance & data protection',
      'Performance-optimized streaming',
      'Ongoing technical support & updates',
    ],
    futureProofTitle: 'Future-Proof Your Educational Institution',
    futureProofDesc: 'Education technology continues to evolve rapidly. Institutions that invest in digital transformation today position themselves for long-term success tomorrow. Our educational platforms are designed to adapt to changing educational requirements, emerging technologies, and growing student populations.',
    faqs: [
      {
        question: 'How long does it take to develop an educational platform?',
        answer: 'Most educational platforms require between 6 and 16 weeks depending on complexity, integrations, and custom features.',
      },
      {
        question: 'Can students access courses on mobile devices?',
        answer: 'Yes. Every platform we develop is fully responsive and optimized for mobile learning.',
      },
      {
        question: 'Can you integrate live classes?',
        answer: 'Yes. We can integrate live classroom functionality and video conferencing solutions like Zoom or Google Meet.',
      },
      {
        question: 'Is the platform scalable?',
        answer: 'Absolutely. Our systems are designed to support future growth and handle thousands of concurrent students.',
      },
      {
        question: 'Can instructors manage their own courses?',
        answer: 'Yes. We provide instructor dashboards that allow educators to create, manage, and update course content independently.',
      },
    ],
    getStartedTitle: 'Get Started with Educational Platform Development',
    getStartedDesc: 'The future of education is digital. Whether you\'re a school, college, coaching institute, or online educator, a professionally developed platform can help you reach more learners, improve outcomes, and streamline operations. Contact our team today to discuss your project.',
    seoTitle: 'Educational Platform Development Services | LMS Development Company | FLEX IT Solutions',
    seoDescription: 'Professional educational platform development services including LMS development, online course platforms, student management systems, examination portals, and e-learning solutions by FLEX IT Solutions.',
  },
  'custom-business-websites': {
    slug: 'custom-business-websites',
    title: 'Custom Business Websites',
    subtitle: 'Professional Custom Website Development Services to Establish Your Brand and Generate High-Quality Leads',
    heroDescription: 'Transform Your Online Identity with a High-Performance Business Website. We design and build bespoke business websites that communicate your unique brand story, establish market authority, and drive qualified leads.',
    whyTitle: 'Why Custom Business Websites Matter',
    whyDescription: 'Your website is the digital face of your business. A generic page fails to capture what makes your brand unique and can turn away prospective high-value clients. A custom business website is designed from scratch around your business goals, target demographics, and brand values. It combines unique visual aesthetics with seamless, fast, and secure code. This builds immediate credibility, delivers an exceptional user experience, and optimizes conversion paths to turn web traffic into business inquiries.',
    processTitle: 'Our Custom Web Development Process',
    processSteps: [
      {
        title: 'Brand Discovery & Strategic Planning',
        desc: 'We deep dive into your business model, value proposition, competitors, and target audience. We map out the key communication goals, content structure, and call-to-actions needed to drive results.',
      },
      {
        title: 'Bespoke UI/UX Design Mockups',
        desc: 'Our design team creates unique page mockups from scratch. We build layouts, specify typography, and construct visual hierarchies that fit your brand perfectly without relying on cookie-cutter templates.',
      },
      {
        title: 'Full-Stack Development',
        desc: 'We code the frontend using modern frameworks like Next.js and React for blazing-fast speed. We build clean, lightweight backend APIs and manage integrations with CRM and database systems.',
      },
      {
        title: 'Optimization & SEO Integration',
        desc: 'We optimize the site for speed, accessibility, and search engine visibility. We set up structural schema, metadata, and clean URL redirects so your business is easily discoverable on Google.',
      },
    ],
    featuresTitle: 'Premium Features Included in Our Solutions',
    features: [
      {
        title: 'Custom Content Management System',
        desc: 'Easily update text, team profiles, service details, and media assets via a secure, user-friendly admin dashboard with no coding required.',
      },
      {
        title: 'Lead Generation & CRM Setup',
        desc: 'Integrate dynamic contact forms, booking calendars, and live chat widgets that feed leads directly into your CRM database.',
      },
      {
        title: 'Interactive Brand Showcases',
        desc: 'Feature engaging portfolios, case study grids, client testimonials, and product mockups to build instant customer trust.',
      },
      {
        title: 'Speed & Core Web Vitals Optimization',
        desc: 'Optimized server-side rendering, compressed assets, and efficient scripts to ensure your website loads in under 1.5 seconds.',
      },
    ],
    benefitsTitle: 'Benefits of a Custom Business Website',
    benefits: [
      {
        title: 'Unique Brand Authority',
        desc: 'Stand out from competitors who use generic templates. A custom design highlights your unique values and builds prestige.',
      },
      {
        title: 'Higher Conversion Rates',
        desc: 'A user journey specifically mapped around your business funnel guides users smoothly from awareness to action.',
      },
      {
        title: 'Uncapped Flexibility & Scalability',
        desc: 'Add custom features, interactive calculators, portals, or database features as your business scales over time.',
      },
      {
        title: 'Superior Google Rankings',
        desc: 'Fast page loads, mobile responsiveness, and clean code are highly rewarded by search algorithms.',
      },
    ],
    industriesTitle: 'Industries We Serve',
    industries: [
      'Professional Services (Consulting, Law, Finance)',
      'Real Estate & Construction Agencies',
      'Healthcare, Clinics & Wellness Centers',
      'Technology & SaaS Providers',
      'Logistics & Corporate Manufacturing',
      'Travel & Premium Hospitality Brands',
      'Creative Agencies & Consultants',
    ],
    whyChooseUsTitle: 'Why Choose FLEX IT Solutions',
    whyChooseUsDesc: 'FLEX IT Solutions doesn\'t just write code; we design strategic digital assets. Our custom business websites combine beautiful design aesthetics with high-performance engineering to deliver measurable business returns.',
    whyChooseUsPoints: [
      'Tailor-made, unique designs',
      'Blazing-fast load speeds',
      'SEO & Google-ready structure',
      'Seamless CRM & API integrations',
      'Secure & clean code standards',
      'Reliable ongoing support',
    ],
    futureProofTitle: 'Future-Proof Your Online Presence',
    futureProofDesc: 'A custom business website is a long-term asset. We build using modular codebase architecture, allowing us to easily introduce new features, change design layouts, or integrate new business software without having to rebuild your site from scratch.',
    faqs: [
      {
        question: 'What is the difference between a template site and a custom site?',
        answer: 'Template sites use pre-made files that look generic and have bloated code that slows them down. Custom sites are designed and coded specifically for your business, resulting in unique design and faster performance.',
      },
      {
        question: 'Will I be able to edit my own content?',
        answer: 'Yes. We build a simple, secure administration dashboard that allows you to easily edit text, images, blog posts, and team pages.',
      },
      {
        question: 'How long does it take to build a custom website?',
        answer: 'Most business website projects take between 4 to 8 weeks to complete from discovery to launch.',
      },
      {
        question: 'Do you design the logos and content?',
        answer: 'Yes, we offer complete graphic branding, logo creation, and professional copy-writing services alongside website development.',
      },
    ],
    getStartedTitle: 'Launch Your Premium Business Website',
    getStartedDesc: 'Establish your market authority and grow your inbound sales funnel. If you are ready to invest in a custom business website that represents your brand values, FLEX IT Solutions is here to build it. Contact us today to receive a free consultation.',
    seoTitle: 'Custom Business Website Development | Corporate Web Design | FLEX IT Solutions',
    seoDescription: 'Design and build high-performance custom business websites with FLEX IT Solutions. Establish your brand authority with clean UI, CRM integrations, and optimized lead generation structures.',
  },
  'ui-ux-design': {
    slug: 'ui-ux-design',
    title: 'UI/UX Design Services',
    subtitle: 'Professional UI/UX Design Solutions That Improve User Experience, Increase Engagement, and Drive Business Growth',
    heroDescription: 'Create Digital Experiences That Users Love and Businesses Benefit From. We specialize in creating user-centered digital experiences that improve usability, strengthen brand perception, increase customer satisfaction, and maximize conversions.',
    whyTitle: 'Why UI/UX Design Matters for Business Success',
    whyDescription: 'In today\'s highly competitive digital landscape, users have endless options available at their fingertips. A visually attractive interface alone is not enough. Successful digital products combine beautiful design with intuitive functionality to create meaningful user experiences. Poor design results in high bounce rates, low conversions, and reduced trust. Professional UI/UX design helps businesses create experiences that guide users toward desired actions while building confidence and trust.',
    processTitle: 'Our UI/UX Design Process',
    processSteps: [
      {
        title: 'Discovery and Research',
        desc: 'Every successful design begins with understanding users. We conduct detailed research to identify user needs, customer pain points, business goals, industry standards, competitor strategies, and user expectations.',
      },
      {
        title: 'User Persona Development',
        desc: 'Different users have different goals, behaviors, and expectations. We create detailed user personas that help us understand demographics, motivations, buying behaviors, and usage patterns.',
      },
      {
        title: 'Information Architecture & Layouts',
        desc: 'We organize content and features logically. A clear structure helps users find information quickly, navigate effortlessly, and complete tasks with minimal friction.',
      },
      {
        title: 'Wireframing & Structural Blueprints',
        desc: 'Before visual design begins, we create wireframes that define the layout structure, content placement, navigation flow, and functional priorities of the application.',
      },
      {
        title: 'Interactive Prototyping & UI Design',
        desc: 'We create high-fidelity visual mockups and build interactive prototypes that simulate real user interactions, allowing us to validate workflows and gather feedback before coding.',
      },
    ],
    featuresTitle: 'Visual & Experience Design Capabilities',
    features: [
      {
        title: 'User Interface (UI) Design',
        desc: 'Focuses on visual aspects: consistent layout structures, typography, color palettes, custom buttons and controls, icons, and visual hierarchy.',
      },
      {
        title: 'User Experience (UX) Design',
        desc: 'Focuses on user interaction, usability testing, journey maps, and behavior analysis to ensure the digital product is intuitive and efficient.',
      },
      {
        title: 'Mobile App Experience Design',
        desc: 'Design touch-friendly, lightweight, and accessible mobile experiences that prioritize speed and ease of navigation on smartphones.',
      },
      {
        title: 'SaaS & Dashboard Workflow Design',
        desc: 'Simplify complex data visualization, dashboard controls, and operational workflows to optimize user productivity and interface consistency.',
      },
      {
        title: 'E-commerce Conversion Design',
        desc: 'Optimize product listing pages, shopping cart interactions, search features, and checkout flows to reduce cart abandonment.',
      },
    ],
    benefitsTitle: 'Benefits of Professional UI/UX Design',
    benefits: [
      {
        title: 'Higher Conversion Rates',
        desc: 'Better user experiences reduce friction and guide visitors smoothly toward making a purchase or submitting an inquiry.',
      },
      {
        title: 'Increased Customer Retention',
        desc: 'Users naturally stick with and return to digital products that are enjoyable, fast, and easy to interact with.',
      },
      {
        title: 'Reduced Development Costs',
        desc: 'Identifying usability flaws and refining flows during the mockup and prototype stage saves costly coding revisions later.',
      },
      {
        title: 'Inclusive Accessibility',
        desc: 'We follow WCAG standards, designing with proper color contrasts, readable font sizes, keyboard accessibility, and screen reader compatibility.',
      },
    ],
    industriesTitle: 'Industries We Serve',
    industries: [
      'SaaS & Software Platforms',
      'Tech Startups & Mobile Apps',
      'E-commerce & Retail Brands',
      'Healthcare Platforms & Portals',
      'EdTech & Learning Platforms',
      'Finance & Wealth Management Apps',
      'Real Estate & Property Portals',
      'Enterprise Software Solutions',
    ],
    whyChooseUsTitle: 'Why Choose FLEX IT Solutions',
    whyChooseUsDesc: 'At FLEX IT Solutions, we combine creativity, user psychology, and business strategy to create design systems that not only look stunning but also achieve core business metrics.',
    whyChooseUsPoints: [
      'User-centered design philosophy',
      'Data & research-driven decisions',
      'Modern, clean design systems',
      'Mobile-first design architecture',
      'Accessibility & WCAG compliance',
      'High-fidelity interactive prototypes',
    ],
    futureProofTitle: 'Scalable Design Systems',
    futureProofDesc: 'We build comprehensive Figma design systems with components, style guides, and nested variables. This allows your developers to quickly build new pages and components while maintaining complete UI consistency as your platform grows.',
    faqs: [
      {
        question: 'What is the difference between UI and UX design?',
        answer: 'UI focuses on visual elements like layout, colors, typography, and controls. UX focuses on usability, user behavior, and structural logic of how a user completes tasks.',
      },
      {
        question: 'Can you redesign an existing website or application?',
        answer: 'Yes. We offer complete UI/UX audits and redesign services to improve the usability, look, and performance of existing software.',
      },
      {
        question: 'Do you provide interactive prototypes?',
        answer: 'Yes. We create clickable, interactive Figma prototypes that simulate the real user flow before development.',
      },
      {
        question: 'Do you write code or just design?',
        answer: 'We offer UI/UX design as a standalone service, but we also have full-stack developers to translate our designs into working code.',
      },
    ],
    getStartedTitle: 'Elevate Your Digital Experience',
    getStartedDesc: 'Exceptional design increases engagement, builds trust, and drives conversions. Partner with FLEX IT Solutions to transform your concepts into elegant, user-friendly digital products. Contact us today.',
    seoTitle: 'UI/UX Design Services | Professional User Experience & Interface Design | FLEX IT Solutions',
    seoDescription: 'Professional UI/UX design services by FLEX IT Solutions. Improve user experience, increase conversions, and create visually stunning websites, mobile apps, and SaaS platforms.',
  },
  'website-redesign': {
    slug: 'website-redesign',
    title: 'Website Redesign Services',
    subtitle: 'Professional Website Redesign Solutions That Improve User Experience, Increase Conversions, and Modernize Your Online Presence',
    heroDescription: 'Transform Your Outdated Website Into a Powerful Business Growth Tool. We specialize in transforming underperforming websites into modern, high-converting digital platforms that look stunning and perform flawlessly.',
    whyTitle: 'Why Website Redesign Matters',
    whyDescription: 'Your website is often the first impression customers have of your business. If it looks outdated, loads slowly, performs poorly on mobile, or fails to generate leads, it is costing you business. An outdated website results in poor user experiences, slow loading, low Google rankings, security weaknesses, and reduced trust. A strategic redesign revamp helps you stay competitive, align with modern web design standards, and maximize return on investment.',
    processTitle: 'Our Website Redesign Process',
    processSteps: [
      {
        title: 'Website Audit and Analysis',
        desc: 'We evaluate your current site performance, user behavior data, search rankings, technical flaws, design inconsistencies, and competitor positioning to map out a clear redesign strategy.',
      },
      {
        title: 'Audience & Brand Alignment',
        desc: 'We research your target demographics, brand updates, and service changes. This ensures the new design aligns with real user expectations and your current business direction.',
      },
      {
        title: 'UX Re-planning & Content Flow',
        desc: 'We optimize the navigation menus, page layouts, content structure, and call-to-actions. We build shorter, simpler conversion paths so it is easier for users to inquire or purchase.',
      },
      {
        title: 'Development, Migration & Launch',
        desc: 'Our developers rebuild the approved design using modern, clean code. We safely migrate your valuable content and SEO redirects to preserve your Google search history, and then launch.',
      },
    ],
    featuresTitle: 'Redesign Revamp Enhancements',
    features: [
      {
        title: 'Complete Visual Transformation',
        desc: 'Modernize layouts, color palettes, and typography while preserving or upgrading your core brand identity for a premium first impression.',
      },
      {
        title: 'Mobile-First Responsiveness',
        desc: 'Ensure your site works flawlessly across smartphones, tablets, and laptops, making it easy to navigate on smaller screens.',
      },
      {
        title: 'Search Engine Optimization (SEO)',
        desc: 'Improve page hierarchies, clean URL structures, optimize metatags, write alt descriptions, and preserve historical indexing authority.',
      },
      {
        title: 'Performance & Speed Tuning',
        desc: 'Minimize scripts, compress images, use lazy loading, and implement page caching so your redesigned pages load in seconds.',
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        desc: 'Redesign contact forms, newsletter subscription blocks, call-to-actions, and landing pages to turn web traffic into business leads.',
      },
    ],
    benefitsTitle: 'Benefits of Website Redesign',
    benefits: [
      {
        title: 'Stunning First Impression',
        desc: 'A modern, professional website builds immediate credibility and trust with prospective clients.',
      },
      {
        title: 'Increased Sales & Leads',
        desc: 'Optimized user journeys and clear visual call-to-actions encourage more signups, inquiries, and orders.',
      },
      {
        title: 'Better Search Rankings',
        desc: 'SEO upgrades, page speed tuning, and mobile-responsiveness help your site rank higher in search results.',
      },
      {
        title: 'Modern Coding & Security',
        desc: 'Rebuilding with clean code reduces vulnerabilities, improves site security, and provides a stable foundation for future updates.',
      },
    ],
    industriesTitle: 'Industries We Serve',
    industries: [
      'Professional Service Providers',
      'Healthcare Organizations',
      'Educational Institutions',
      'Technology & IT Companies',
      'Real Estate Agencies',
      'Financial & Investment Firms',
      'Retail & eCommerce Stores',
      'Startups & Corporate Enterprises',
    ],
    whyChooseUsTitle: 'Why Choose FLEX IT Solutions',
    whyChooseUsDesc: 'FLEX IT Solutions doesn\'t just change how your website looks. We improve how it performs. We focus on business growth, user experience, search visibility, page speed, and long-term scalability.',
    whyChooseUsPoints: [
      'Visual modernization while keeping brand legacy',
      'SEO equity preservation',
      'Blazing-fast speed improvements',
      'Highly responsive mobile experience',
      'Lead-focused page redesign',
      'Post-launch support & updates',
    ],
    futureProofTitle: 'Scalable Digital Growth Asset',
    futureProofDesc: 'A redesign provides an opportunity to migrate to modern tech stacks. We build sites that are fast, secure, easy to maintain, and ready to support new functionalities like blogs, payment gateways, or booking systems.',
    faqs: [
      {
        question: 'Will I lose my existing Google search rankings after a redesign?',
        answer: 'No. We follow strict SEO migration best practices, including 301 redirects, content optimizations, and meta tag preservation to protect and improve your search rankings.',
      },
      {
        question: 'Will I lose my existing website content?',
        answer: 'No. We can migrate and refine your current articles, images, and text content while styling them beautifully in the new layouts.',
      },
      {
        question: 'Can you redesign a website without changing our logo?',
        answer: 'Absolutely. We can modernize the design layout, typography, and spacing while maintaining your current corporate logo and branding guidelines.',
      },
      {
        question: 'How long does a website redesign take?',
        answer: 'Most redesign projects take between 4 and 12 weeks depending on the size of the website and complexity of features.',
      },
    ],
    getStartedTitle: 'Revamp Your Website Today',
    getStartedDesc: 'Your website should be your most valuable sales representative. If it is outdated or underperforming, it is time for a redesign. Partner with FLEX IT Solutions to build a high-performance web asset. Contact us today.',
    seoTitle: 'Website Redesign Services | Professional Website Revamp Solutions | FLEX IT Solutions',
    seoDescription: 'Professional website redesign services by FLEX IT Solutions. Improve user experience, boost SEO rankings, increase conversions, optimize mobile performance, and transform your outdated website.',
  },
  'mobile-first-development': {
    slug: 'mobile-first-development',
    title: 'Mobile-First Development Services',
    subtitle: 'Professional Mobile-First Website Development Solutions That Deliver Exceptional Experiences Across Every Device',
    heroDescription: 'Build Digital Experiences Designed for the Modern Mobile User. We specialize in designing and developing websites primarily for smartphones before progressively scaling the layout to larger desktop displays.',
    whyTitle: 'Why Mobile-First Development Matters',
    whyDescription: 'The way people browse the internet has fundamentally changed. Today, the majority of website traffic comes from smartphones and tablets. Consumers research, shop, buy, and interact on the go. Furthermore, Google uses mobile-first indexing, meaning it primarily evaluates the mobile version of your site to determine search rankings. Failing to offer a fast, highly optimized mobile experience means losing customers to competitors and hurting your search visibility.',
    processTitle: 'Our Mobile-First Development Process',
    processSteps: [
      {
        title: 'User Behavior & Mobile Analysis',
        desc: 'We analyze your target audience\'s device statistics, connection speeds, and behavior patterns. This helps us plan lightweight visual assets and touch-friendly interactions.',
      },
      {
        title: 'Mobile-Focused Layout & Flows',
        desc: 'We map out the interface starting with screen sizes of 360px. We structure content, navigation bars, and inputs to be easily tap-friendly, placing key actions in easy-to-reach zones.',
      },
      {
        title: 'Progressive Enhancement Cording',
        desc: 'We write the core codebase optimized for mobile browsers. Once the mobile experience is optimized, we progressively introduce layouts and assets for tablets, laptops, and large screens.',
      },
      {
        title: 'Extensive Cross-Device Testing',
        desc: 'We test performance, rendering, loading speeds, and form usability across real physical devices, operating systems (iOS and Android), and mobile browsers to ensure zero errors.',
      },
    ],
    featuresTitle: 'Mobile Performance & Layout Features',
    features: [
      {
        title: 'Fully Responsive Layouts',
        desc: 'Fluid grids and media queries ensure your web layout automatically reflows to look stunning on all device viewports, from tiny screens to massive monitors.',
      },
      {
        title: 'Mobile-Optimized Fast Speeds',
        desc: 'Asset optimization, lazy loading, lightweight code bases, and server caching to ensure your pages load instantly even on slower 4G/5G cellular networks.',
      },
      {
        title: 'Touch-Friendly Navigation & Menus',
        desc: 'Optimize navigation with hamburger menus, bottom navigation tabs, large tappable buttons, and simplified swipe controls designed for thumb reach.',
      },
      {
        title: 'Optimized Mobile Forms & Checkout',
        desc: 'Simplify inputs, enable autofill fields, and integrate mobile-wallet express checkout options to reduce drop-offs in signup and purchasing flows.',
      },
    ],
    benefitsTitle: 'Benefits of Mobile-First Development',
    benefits: [
      {
        title: 'Rank Higher on Google',
        desc: 'Mobile-first indexing rewards websites that offer responsive layouts and fast load speeds on mobile networks.',
      },
      {
        title: 'Higher Inbound Conversions',
        desc: 'Frictionless navigation and touch-friendly call-to-actions make it simple for users to call, sign up, or purchase on the go.',
      },
      {
        title: 'Faster Loading Speeds',
        desc: 'Eliminating desktop bloat from your mobile code makes your website run fast across all screens, including desktop.',
      },
      {
        title: 'Better Accessibility',
        desc: 'Your site will render beautifully and operate smoothly even for users on low-bandwidth networks or older devices.',
      },
    ],
    industriesTitle: 'Industries We Serve',
    industries: [
      'Retail & eCommerce Stores',
      'Local Services (Plumbing, Repairs, Salons)',
      'Healthcare Clinics & Medical Centers',
      'Real Estate & Property Listings',
      'Restaurants & Online Food Delivery',
      'EdTech & Learning Platforms',
      'Financial & SaaS Startups',
    ],
    whyChooseUsTitle: 'Why Choose FLEX IT Solutions',
    whyChooseUsDesc: 'FLEX IT Solutions doesn\'t just resize your desktop site to fit a screen. We build custom-engineered, mobile-first solutions designed specifically around how mobile users browse, click, and convert.',
    whyChooseUsPoints: [
      'Designed primarily for thumb reach and touch',
      'Instant load times on mobile connections',
      'Google mobile-first SEO ready',
      'Clean, lightweight, modern frameworks',
      'Extensive testing across iOS and Android',
      'User-friendly form setups',
    ],
    futureProofTitle: 'Future-Proof Your Mobile Strategy',
    futureProofDesc: 'Mobile traffic will only continue to rise. Our mobile-first code architectures are prepared for Progressive Web App (PWA) conversions, allowing your site to operate offline, send push notifications, and install directly on a home screen like a native app.',
    faqs: [
      {
        question: 'What is the difference between responsive and mobile-first design?',
        answer: 'Responsive design shrinks desktop layouts to fit mobile screens. Mobile-first design builds the core layout for mobile first, then progressively adds columns, assets, and details for desktop screens, leading to cleaner code.',
      },
      {
        question: 'Will my site still look good on desktop screens?',
        answer: 'Absolutely. We use progressive enhancement media queries to ensure your website expands and styles beautifully on large desktop monitors and laptops.',
      },
      {
        question: 'How does mobile-first development affect SEO?',
        answer: 'Google evaluates mobile performance as the primary indicator for ranking. Mobile-first development guarantees your site complies with Google\'s guidelines and index logic.',
      },
      {
        question: 'Can you convert my existing website into mobile-first?',
        answer: 'Yes, we can perform a audit of your current site structure and rebuild the frontend layout to be responsive and mobile-first.',
      },
    ],
    getStartedTitle: 'Optimize for the Mobile User Today',
    getStartedDesc: 'Don\'t lose prospective clients to a slow or clunky mobile layout. Partner with FLEX IT Solutions to build a high-performance, mobile-first website that loads in seconds and converts visitors on the go. Contact us today.',
    seoTitle: 'Mobile-First Web Development Services | Responsive Web Design | FLEX IT Solutions',
    seoDescription: 'Professional mobile-first web development services by FLEX IT Solutions. Optimize your online presence with highly responsive, fast, and mobile-friendly websites that rank on Google.',
  },
}
