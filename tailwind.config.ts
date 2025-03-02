import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			black100: 'var(--black100)',
  			black200: 'var(--black200)',
  			black300: 'var(--black300)',
  			black400: 'var(--black400)',
  			black500: 'var(--black500)',
  			black600: 'var(--black600)',
  			black700: 'var(--black700)',
  			black800: 'var(--black800)',
  			black900: 'var(--black900)',
  			white100: 'var(--white100)',
  			white200: 'var(--white200)',
  			white300: 'var(--white300)',
  			white400: 'var(--white400)',
  			white500: 'var(--white500)',
  			white600: 'var(--white600)',
  			white700: 'var(--white700)',
  			white800: 'var(--white800)',
  			white900: 'var(--white900)',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			nanum: [
  				'var(--fontN)',
  				'sans-serif'
  			],
  			nexon: [
  				'var(--fontX)',
  				'sans-serif'
  			],
  			gmarket: [
  				'var(--fontG)',
  				'sans-serif'
  			],
  			poppins: [
  				'var(--fontP)',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			colorChange: {
  				'0%': {
  					color: 'black'
  				},
  				'50%': {
  					color: 'red'
  				},
  				'100%': {
  					color: 'black'
  				}
  			},
  			colorChangeDark: {
  				'0%': {
  					color: 'white'
  				},
  				'50%': {
  					color: '#FBEB57'
  				},
  				'100%': {
  					color: 'white'
  				}
  			}
  		},
  		animation: {
  			color: 'colorChange 40s linear infinite',
  			colorDark: 'colorChangeDark 40s linear infinite'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
