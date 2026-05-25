/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#ffffff',
        'bg-secondary': '#f8fafc',
        'bg-card': '#ffffff',
        'text-primary': '#111827',
        'text-secondary': '#6b7280',
        'accent-violet': '#7c3aed',
        'accent-blue': '#2563eb',
        border: 'rgba(124,58,237,0.12)',
        footer: '#0f172a',
      },
      borderRadius: {
        premium: '24px',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-purple': 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
        'glow-blue': 'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(17, 24, 39, 0.06)',
        card: '0 8px 32px rgba(17, 24, 39, 0.08)',
        glow: '0 12px 40px rgba(124, 58, 237, 0.18)',
        'glow-lg': '0 20px 60px rgba(124, 58, 237, 0.15)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 35s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
