const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const tailwindPreset = require('./tailwind-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindPreset],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["light", "dark"],
  }
};
