const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: {
		// Set enabled:true to purge tailwind always.
		// Otherwise tailwind will choose based on dev/prod build env
		// enabled: true,
		// Paths to our template files; tailwind will purge on these
		content: [
			"./src/**/*.svelte",
		],
	},	variants: {
		backgroundColor: ['responsive', 'even', 'hover', 'focus'],
	},
	plugins: [
    require('@tailwindcss/aspect-ratio'),
	],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      'huge': '10rem',
    },
    extend: {
      height: {
        "18": "4.5rem",
      },
      keyframes: {
        vibe: {
          '0%, 100%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      animation: {
        'vibe': 'vibe 8s cubic-bezier(0.49, 0.28, 0.48, 0.73) infinite',
      },
      colors: {
        sky: {
          DEFAULT: `#BBD5ED`,
        },
        sky: {
          DEFAULT: `#BBD5ED`,
        },
        cocoa: {
          DEFAULT: `#3D0814`,
        },
        stone: {
          dark: '#343E46',
          DEFAULT: '#5D707F',
        }
      },
    }
  }
}
