/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        // Height-based breakpoints
        'h-sm': { 'raw': '(max-height: 600px)' },
        'h-md': { 'raw': '(max-height: 800px)' },
        'h-lg': { 'raw': '(min-height: 801px)' },
      },
      colors: {
        // Palette principale inspirée de la musique et de l'émotion
        primary: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // Indigo profond - couleur signature
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308', // Or chaleureux - émotion et passion
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        // Couleurs émotionnelles
        soul: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef', // Violet vibrant - soul et émotion
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        // Couleurs camerounaises
        cameroon: {
          green: '#009639',
          red: '#ce1126',
          yellow: '#fcdd09',
        },
        // Couleurs acadiennes
        acadian: {
          blue: '#003f7f',
          white: '#ffffff',
          red: '#cf142b',
          yellow: '#fcdd09',
          star: '#fcdd09',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        // Responsive spacing
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 1s ease-out',
        'slide-down': 'slideDown 1s ease-out',
        'slide-left': 'slideLeft 1s ease-out',
        'slide-right': 'slideRight 1s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' },
          '100%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.8)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #6366f1 0%, #d946ef 50%, #eab308 100%)',
        'gradient-hero': 'linear-gradient(135deg, #312e81 0%, #4338ca 25%, #6366f1 50%, #d946ef 75%, #eab308 100%)',
        'gradient-hero-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)',
        'gradient-music': 'linear-gradient(45deg, #6366f1 0%, #d946ef 100%)',
        'gradient-soul': 'linear-gradient(135deg, #d946ef 0%, #6366f1 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'brand': '0 20px 60px rgba(99, 102, 241, 0.25)',
        'brand-lg': '0 30px 80px rgba(99, 102, 241, 0.35)',
        'soul': '0 20px 60px rgba(217, 70, 239, 0.25)',
        'accent': '0 20px 60px rgba(234, 179, 8, 0.25)',
        'glow': '0 0 30px rgba(99, 102, 241, 0.5)',
        'glow-lg': '0 0 50px rgba(99, 102, 241, 0.7)',
        'dark': '0 20px 60px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 30px 80px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      letterSpacing: {
        'tightest': '-0.075em',
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      // Container queries
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      // Aspect ratios
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [
    // Add responsive utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Safe area utilities
        '.pt-safe': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.pb-safe': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.pl-safe': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.pr-safe': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        // Responsive text utilities
        '.text-responsive-xs': {
          fontSize: '0.75rem',
          '@media (min-width: 640px)': {
            fontSize: '0.875rem',
          },
        },
        '.text-responsive-sm': {
          fontSize: '0.875rem',
          '@media (min-width: 640px)': {
            fontSize: '1rem',
          },
        },
        '.text-responsive-base': {
          fontSize: '1rem',
          '@media (min-width: 640px)': {
            fontSize: '1.125rem',
          },
        },
        '.text-responsive-lg': {
          fontSize: '1.125rem',
          '@media (min-width: 640px)': {
            fontSize: '1.25rem',
          },
        },
        '.text-responsive-xl': {
          fontSize: '1.25rem',
          '@media (min-width: 640px)': {
            fontSize: '1.5rem',
          },
        },
        // Responsive spacing utilities
        '.space-responsive': {
          '& > * + *': {
            marginTop: '1rem',
            '@media (min-width: 640px)': {
              marginTop: '1.5rem',
            },
            '@media (min-width: 1024px)': {
              marginTop: '2rem',
            },
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}