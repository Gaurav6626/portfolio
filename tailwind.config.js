/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        primary: {
          50:  '#eef4ff',
          100: '#dae6ff',
          200: '#bcd1ff',
          300: '#8eb1ff',
          400: '#5b87ff',
          500: '#3a63ff',
          600: '#2645f5',
          700: '#1f33d8',
          800: '#1f2eae',
          900: '#202d89',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        dark: {
          900: '#05060d',
          800: '#0a0c1a',
          700: '#11142a',
          600: '#1a1f3d',
        },
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        'gradient-radial':
          'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2.5s ease-in-out infinite alternate',
        'tilt': 'tilt 10s infinite linear',
        'blob': 'blob 9s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 12px rgba(99, 102, 241, 0.45)' },
          '100%': { 'box-shadow': '0 0 30px rgba(34, 211, 238, 0.85)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.7deg)' },
          '75%': { transform: 'rotate(-0.7deg)' },
        },
        blob: {
          '0%':   { transform: 'translate(0, 0) scale(1)' },
          '33%':  { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%':  { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
