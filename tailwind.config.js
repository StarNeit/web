/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        primary: {
          DEFAULT: '#67ADB9',
          200: '#E4F7F9',
          500: '#67ADB9',
          600: '#5F97A0'
        },
        warning: {
          DEFAULT: '#FF966B'
        },
        success: {
          DEFAULT: '#54D62C'
        },
        blue: {
          DEFAULT: '#1890FF'
        },
        error: {
          DEFAULT: '#FF4842'
        },
        grey: {
          DEFAULT: '#9D9D9D',
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#E5E8EB',
          400: '#BCBCBC',
          500: '#9D9D9D',
          600: '#747474',
          700: '#414141'
        }
      },
      boxShadow: {
        paper:
          '0px 12px 24px -4px rgba(145, 158, 171, 0.12),0px 0px 2px 0px rgba(145, 158, 171, 0.2)'
      },
      dropShadow: {
        popover: [
          '-20px 20px 40px rgba(145, 158, 171, 0.24)',
          '0px 0px 2px rgba(145, 158, 171, 0.24)'
        ]
      }
    }
  },
  important: '#tailwindcss',
  plugins: []
};
