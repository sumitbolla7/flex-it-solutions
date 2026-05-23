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
        bg: '#08060e',
        'bg-card': '#0f0c1a',
        'bg-card2': '#130e20',
        primary: '#8b5cf6',
        'primary-light': '#a78bfa',
        accent: '#f97316',
        'accent-pink': '#ec4899',
        border: 'rgba(139,92,246,0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-purple': 'radial-gradient(ellipse at center, rgba(139,92,246,0.3) 0%, transparent 70%)',
        'glow-orange': 'radial-gradient(ellipse at center, rgba(249,115,22,0.3) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
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
      boxShadow: {
        'glow-purple': '0 0 40px rgba(139,92,246,0.3)',
        'glow-orange': '0 0 40px rgba(249,115,22,0.3)',
        'glow-sm': '0 0 20px rgba(139,92,246,0.2)',
      },
    },
  },
  plugins: [],
}
